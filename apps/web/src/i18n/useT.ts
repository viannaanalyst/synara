// FILE: useT.ts
// Purpose: React bindings for the locale store. Components re-render when the language changes.
// Layer: Web i18n
// Exports: useT, useAppLocale

import { useCallback, useSyncExternalStore } from "react";

import { getLocale, subscribeLocale, translate, type TranslationParams } from "./runtime";

export function useAppLocale() {
  return useSyncExternalStore(subscribeLocale, getLocale, getLocale);
}

/**
 * Returns a `t(key, params?)` function bound to the active locale. The returned function changes
 * identity when the language changes, so include it in memo dependencies when a translated value
 * is cached.
 */
export function useT() {
  const locale = useAppLocale();
  return useCallback(
    (key: string, params?: TranslationParams) => translate(locale, key, params),
    [locale],
  );
}
