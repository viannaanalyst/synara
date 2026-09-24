// FILE: locale.ts
// Purpose: Define the app locales, their display names, and persisted-value normalization.
// Layer: Web i18n
// Exports: AppLocale, DEFAULT_APP_LOCALE, APP_LOCALE_OPTIONS, isAppLocale, normalizeAppLocale

import * as Schema from "effect/Schema";

export const AppLocale = Schema.Literals(["en", "pt-BR"]);
export type AppLocale = typeof AppLocale.Type;

export const DEFAULT_APP_LOCALE: AppLocale = "en";

/** Native names, so the language picker stays readable in either locale. */
export const APP_LOCALE_OPTIONS: ReadonlyArray<{ value: AppLocale; label: string }> = [
  { value: "en", label: "English" },
  { value: "pt-BR", label: "Português (Brasil)" },
];

export function isAppLocale(value: unknown): value is AppLocale {
  return value === "en" || value === "pt-BR";
}

export function normalizeAppLocale(value: unknown): AppLocale {
  return isAppLocale(value) ? value : DEFAULT_APP_LOCALE;
}
