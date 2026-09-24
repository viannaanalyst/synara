// FILE: desktopI18n.test.ts
// Purpose: Verifies the main-process catalog, fallback, interpolation, and locale normalization.
// Layer: Desktop tests

import { afterEach, describe, expect, it } from "vitest";

import {
  DEFAULT_DESKTOP_LOCALE,
  getDesktopLocale,
  isDesktopLocale,
  normalizeDesktopLocale,
  setDesktopLocale,
  t,
} from "./desktopI18n";

afterEach(() => {
  setDesktopLocale(DEFAULT_DESKTOP_LOCALE);
});

describe("desktop locale", () => {
  it("accepts only supported locales and defaults to English", () => {
    expect(isDesktopLocale("en")).toBe(true);
    expect(isDesktopLocale("pt-BR")).toBe(true);
    expect(isDesktopLocale("es")).toBe(false);
    expect(normalizeDesktopLocale("es")).toBe("en");
    expect(DEFAULT_DESKTOP_LOCALE).toBe("en");
  });

  it("tracks the active locale", () => {
    setDesktopLocale("pt-BR");
    expect(getDesktopLocale()).toBe("pt-BR");
    setDesktopLocale("unsupported");
    expect(getDesktopLocale()).toBe("en");
  });
});

describe("desktop translations", () => {
  it("falls back to the English key when no catalog entry exists", () => {
    expect(t("A string no catalog has")).toBe("A string no catalog has");
  });

  it("translates menu and dialog strings for pt-BR", () => {
    setDesktopLocale("pt-BR");
    expect(t("Settings...")).toBe("Configurações...");
    expect(t("Quit")).toBe("Sair");
    expect(t("No")).toBe("Não");
    expect(t("Yes")).toBe("Sim");
  });

  it("interpolates named parameters", () => {
    setDesktopLocale("pt-BR");
    expect(
      t("Synara {version} is currently the newest version available.", { version: "1.2.3" }),
    ).toBe("O Synara 1.2.3 é a versão mais recente disponível no momento.");
    expect(t("Log file:\n{path}", { path: "/tmp/log" })).toBe("Arquivo de log:\n/tmp/log");
  });
});
