// FILE: index.ts
// Purpose: Public i18n surface for the web app.
// Layer: Web i18n
// Exports: locale definitions, translation runtime, and React hooks

export {
  AppLocale,
  DEFAULT_APP_LOCALE,
  APP_LOCALE_OPTIONS,
  isAppLocale,
  normalizeAppLocale,
} from "./locale";
export {
  getLocale,
  setLocale,
  subscribeLocale,
  t,
  translate,
  type TranslationParams,
} from "./runtime";
export { useAppLocale, useT } from "./useT";
