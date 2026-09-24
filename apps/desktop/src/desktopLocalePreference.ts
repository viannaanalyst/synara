// FILE: desktopLocalePreference.ts
// Purpose: Persist the UI language mirrored from the renderer, so native menus and dialogs shown
//          before the renderer connects (migration, recovery, startup) match the chosen language.
// Layer: Desktop main process
// Depends on: filesystem. Pure parse/normalize helpers so the store is testable without Electron;
//             the file path is supplied by the caller.

import * as FS from "node:fs";
import * as Path from "node:path";

import { DEFAULT_DESKTOP_LOCALE, normalizeDesktopLocale } from "./desktopI18n";
import type { DesktopLocale } from "@synara/contracts";

export interface PersistedDesktopLocalePreference {
  readonly version: 1;
  readonly locale: DesktopLocale;
}

export function parseDesktopLocalePreference(value: unknown): DesktopLocale | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  const candidate = value as Record<string, unknown>;
  if (candidate.version !== 1 || !("locale" in candidate)) {
    return null;
  }
  return normalizeDesktopLocale(candidate.locale);
}

/** The stored locale, or English when the file is missing or unreadable. */
export function readDesktopLocalePreference(filePath: string): DesktopLocale {
  try {
    const parsed = parseDesktopLocalePreference(JSON.parse(FS.readFileSync(filePath, "utf8")));
    return parsed ?? DEFAULT_DESKTOP_LOCALE;
  } catch {
    return DEFAULT_DESKTOP_LOCALE;
  }
}

/** Persist the locale. English removes the file so a default install leaves nothing behind. */
export function writeDesktopLocalePreference(filePath: string, locale: unknown): DesktopLocale {
  const normalized = normalizeDesktopLocale(locale);
  if (normalized === DEFAULT_DESKTOP_LOCALE) {
    FS.rmSync(filePath, { force: true });
    return normalized;
  }
  const payload: PersistedDesktopLocalePreference = { version: 1, locale: normalized };
  FS.mkdirSync(Path.dirname(filePath), { recursive: true });
  FS.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  return normalized;
}
