// FILE: bootstrap.ts
// Purpose: Apply the persisted language before the first render so the app never flashes English
//          on launch, and so non-React callers (toasts, notifications) translate immediately.
// Layer: Web i18n
// Exports: bootstrapAppLocale

import { APP_SETTINGS_STORAGE_KEY } from "../appSettingsStorage";
import { DEFAULT_APP_LOCALE, normalizeAppLocale, type AppLocale } from "./locale";
import { setLocale } from "./runtime";

function readPersistedLocale(): AppLocale {
  if (typeof window === "undefined") {
    return DEFAULT_APP_LOCALE;
  }
  try {
    const raw = window.localStorage.getItem(APP_SETTINGS_STORAGE_KEY);
    if (!raw) {
      return DEFAULT_APP_LOCALE;
    }
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) {
      return DEFAULT_APP_LOCALE;
    }
    return normalizeAppLocale((parsed as { locale?: unknown }).locale);
  } catch {
    return DEFAULT_APP_LOCALE;
  }
}

export function bootstrapAppLocale(): AppLocale {
  const locale = readPersistedLocale();
  setLocale(locale);
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
  }
  return locale;
}
