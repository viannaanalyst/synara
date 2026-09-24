// FILE: useAppLanguage.ts
// Purpose: Projects the persisted language setting into the i18n runtime, the document language,
//          and (on desktop) the Electron main process.
// Layer: Web appearance state hook
// Exports: useAppLanguage

import { useEffect } from "react";

import { useAppSettings } from "../appSettings";
import { isElectron } from "../env";
import { setLocale } from "../i18n/runtime";

export function useAppLanguage() {
  const { settings } = useAppSettings();
  const locale = settings.locale;

  useEffect(() => {
    setLocale(locale);
    document.documentElement.lang = locale;
    if (isElectron) {
      void window.desktopBridge?.setLocale?.(locale);
    }
  }, [locale]);
}
