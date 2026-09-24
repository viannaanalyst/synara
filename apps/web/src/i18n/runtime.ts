// FILE: runtime.ts
// Purpose: Locale store plus the translation function. English source strings are the keys, so an
//          untranslated string falls back to the English text instead of an empty placeholder.
// Layer: Web i18n
// Exports: getLocale, setLocale, subscribeLocale, t, translate, TranslationParams

import { DEFAULT_APP_LOCALE, normalizeAppLocale, type AppLocale } from "./locale";
import { getCatalog } from "./catalog";

export type TranslationParams = Record<string, string | number>;

let currentLocale: AppLocale = DEFAULT_APP_LOCALE;
const listeners = new Set<() => void>();

export function getLocale(): AppLocale {
  return currentLocale;
}

export function setLocale(locale: AppLocale): void {
  const next = normalizeAppLocale(locale);
  if (next === currentLocale) {
    return;
  }
  currentLocale = next;
  for (const listener of listeners) {
    listener();
  }
}

export function subscribeLocale(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function interpolate(template: string, params?: TranslationParams): string {
  if (!params) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match,
  );
}

function selectPluralKey(
  locale: AppLocale,
  key: string,
  count: number,
  catalog: Readonly<Record<string, string>>,
): string | undefined {
  const category = new Intl.PluralRules(locale).select(count);
  return catalog[`${key}_${category}`];
}

/**
 * Translate `key` against an explicit catalog. `key` is the English source string; a missing
 * catalog entry returns the key unchanged. When `params.count` is a number, plural forms are
 * looked up under `key_one` / `key_other` (Intl.PluralRules categories) before the base key.
 */
export function translateWithCatalog(
  catalog: Readonly<Record<string, string>>,
  locale: AppLocale,
  key: string,
  params?: TranslationParams,
): string {
  const pluralTemplate =
    typeof params?.count === "number"
      ? ((params.count === 0 ? (catalog[`${key}_zero`] ?? catalog[`${key}_other`]) : undefined) ??
        selectPluralKey(locale, key, params.count, catalog))
      : null;
  const template = pluralTemplate ?? catalog[key] ?? key;
  return interpolate(template, params);
}

/** Translate `key` for an explicit locale against the registered catalogs. */
export function translate(locale: AppLocale, key: string, params?: TranslationParams): string {
  return translateWithCatalog(getCatalog(locale), locale, key, params);
}

/** Translate `key` for the active locale. Call during render (or inside an event) so locale
 *  changes are picked up; never at module scope, where it would freeze the initial locale. */
export function t(key: string, params?: TranslationParams): string {
  return translate(currentLocale, key, params);
}
