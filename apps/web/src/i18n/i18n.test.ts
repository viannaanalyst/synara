// FILE: i18n.test.ts
// Purpose: Verifies locale normalization, English fallback, interpolation, plurals, and catalogs.
// Layer: Web i18n tests
// Exports: Vitest suites for the i18n runtime

import { Schema } from "effect";
import { afterEach, describe, expect, it } from "vitest";

import { getCatalog } from "./catalog";
import {
  APP_LOCALE_OPTIONS,
  AppLocale,
  DEFAULT_APP_LOCALE,
  isAppLocale,
  normalizeAppLocale,
} from "./locale";
import {
  getLocale,
  setLocale,
  subscribeLocale,
  t,
  translate,
  translateWithCatalog,
} from "./runtime";

afterEach(() => {
  setLocale(DEFAULT_APP_LOCALE);
});

describe("app locale", () => {
  it("accepts only supported locales and defaults to English", () => {
    expect(isAppLocale("en")).toBe(true);
    expect(isAppLocale("pt-BR")).toBe(true);
    expect(isAppLocale("fr")).toBe(false);
    expect(isAppLocale(undefined)).toBe(false);
    expect(normalizeAppLocale("fr")).toBe("en");
    expect(normalizeAppLocale("pt-BR")).toBe("pt-BR");
    expect(DEFAULT_APP_LOCALE).toBe("en");
  });

  it("decodes persisted values through the schema", () => {
    expect(Schema.decodeUnknownSync(AppLocale)("pt-BR")).toBe("pt-BR");
    expect(() => Schema.decodeUnknownSync(AppLocale)("de")).toThrow();
  });

  it("offers a native label for each locale", () => {
    expect(APP_LOCALE_OPTIONS.map((option) => option.value)).toEqual(["en", "pt-BR"]);
    expect(APP_LOCALE_OPTIONS[1]?.label).toBe("Português (Brasil)");
  });
});

describe("translation runtime", () => {
  it("falls back to the English key when no catalog entry exists", () => {
    expect(translate("pt-BR", "A string no catalog has")).toBe("A string no catalog has");
    expect(translate("en", "Settings")).toBe("Settings");
  });

  it("translates known keys for pt-BR", () => {
    expect(translate("pt-BR", "Settings")).toBe("Configurações");
    expect(translate("pt-BR", "Appearance")).toBe("Aparência");
  });

  it("interpolates named parameters and keeps unknown placeholders", () => {
    expect(translate("pt-BR", "This will reset: {labels}.", { labels: "Tema" })).toBe(
      "Isto redefinirá: Tema.",
    );
    expect(translate("pt-BR", "Hello {name}")).toBe("Hello {name}");
  });

  it("selects plural forms with Intl.PluralRules", () => {
    const catalog = {
      thread_one: "{count} conversa",
      thread_other: "{count} conversas",
    };
    expect(translateWithCatalog(catalog, "pt-BR", "thread", { count: 1 })).toBe("1 conversa");
    expect(translateWithCatalog(catalog, "pt-BR", "thread", { count: 3 })).toBe("3 conversas");
    expect(translateWithCatalog(catalog, "pt-BR", "thread", { count: 0 })).toBe("0 conversas");
    // Without a plural entry the base key still wins over the raw plural key.
    expect(translateWithCatalog({ thread: "conversa" }, "pt-BR", "thread", { count: 2 })).toBe(
      "conversa",
    );
  });

  it("notifies subscribers only when the locale actually changes", () => {
    const seen: string[] = [];
    const unsubscribe = subscribeLocale(() => {
      seen.push(getLocale());
    });
    setLocale("pt-BR");
    setLocale("pt-BR");
    setLocale("en");
    unsubscribe();
    setLocale("pt-BR");
    expect(seen).toEqual(["pt-BR", "en"]);
  });

  it("reads the active locale from t()", () => {
    setLocale("pt-BR");
    expect(t("Settings")).toBe("Configurações");
    setLocale("en");
    expect(t("Settings")).toBe("Settings");
  });
});

describe("pt-BR catalog", () => {
  it("has no empty translations", () => {
    const catalog = getCatalog("pt-BR");
    for (const [key, value] of Object.entries(catalog)) {
      expect(value.trim(), `empty translation for "${key}"`).not.toBe("");
    }
  });

  it("does not translate brand and technical identifiers", () => {
    const catalog = getCatalog("pt-BR");
    expect(catalog.Kanban).toBe("Kanban");
    expect(catalog["Pull requests"]).toBe("Pull requests");
    expect(catalog.AppSnap).toBeUndefined();
  });
});
