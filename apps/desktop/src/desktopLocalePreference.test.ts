// FILE: desktopLocalePreference.test.ts
// Purpose: Verifies the persisted desktop language file (parse, round-trip, malformed input).
// Layer: Desktop tests

import * as FS from "node:fs";
import * as OS from "node:os";
import * as Path from "node:path";
import { afterAll, describe, expect, it } from "vitest";

import {
  parseDesktopLocalePreference,
  readDesktopLocalePreference,
  writeDesktopLocalePreference,
} from "./desktopLocalePreference";

const temporaryDirectories: string[] = [];

function temporaryFilePath(): string {
  const directory = FS.mkdtempSync(Path.join(OS.tmpdir(), "synara-desktop-locale-"));
  temporaryDirectories.push(directory);
  return Path.join(directory, "nested", "desktop-locale.json");
}

afterAll(() => {
  for (const directory of temporaryDirectories) {
    FS.rmSync(directory, { recursive: true, force: true });
  }
});

describe("parseDesktopLocalePreference", () => {
  it("accepts only version 1 with a supported locale", () => {
    expect(parseDesktopLocalePreference({ version: 1, locale: "pt-BR" })).toBe("pt-BR");
    expect(parseDesktopLocalePreference({ version: 1, locale: "en" })).toBe("en");
    expect(parseDesktopLocalePreference({ version: 1, locale: "es" })).toBe("en");
    expect(parseDesktopLocalePreference({ version: 2, locale: "pt-BR" })).toBeNull();
    expect(parseDesktopLocalePreference({ locale: "pt-BR" })).toBeNull();
    expect(parseDesktopLocalePreference(null)).toBeNull();
  });
});

describe("desktop locale preference filesystem", () => {
  it("round-trips pt-BR and removes the file for English", () => {
    const filePath = temporaryFilePath();

    expect(readDesktopLocalePreference(filePath)).toBe("en");

    writeDesktopLocalePreference(filePath, "pt-BR");
    expect(readDesktopLocalePreference(filePath)).toBe("pt-BR");
    expect(JSON.parse(FS.readFileSync(filePath, "utf8"))).toEqual({
      version: 1,
      locale: "pt-BR",
    });

    // English is the default, so it removes the file instead of storing it.
    writeDesktopLocalePreference(filePath, "en");
    expect(FS.existsSync(filePath)).toBe(false);
    expect(readDesktopLocalePreference(filePath)).toBe("en");
  });

  it("reads English from malformed or unsupported JSON", () => {
    const filePath = temporaryFilePath();

    FS.mkdirSync(Path.dirname(filePath), { recursive: true });
    FS.writeFileSync(filePath, "{ not json", "utf8");
    expect(readDesktopLocalePreference(filePath)).toBe("en");

    FS.writeFileSync(filePath, JSON.stringify({ version: 1, locale: "de" }), "utf8");
    expect(readDesktopLocalePreference(filePath)).toBe("en");
  });
});
