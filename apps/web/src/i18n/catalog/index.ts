// FILE: index.ts
// Purpose: Register the translation catalogs and resolve one by locale.
// Layer: Web i18n
// Exports: TranslationCatalog, getCatalog

import type { AppLocale } from "../locale";
import ptBR from "./pt-BR";
import ptBRAutomations from "./pt-BR.automations";
import ptBRChat from "./pt-BR.chat";
import ptBRBrowser from "./pt-BR.browser";
import ptBRComputer from "./pt-BR.computer";
import ptBRDialogs from "./pt-BR.dialogs";
import ptBREditor from "./pt-BR.editor";
import ptBRGit from "./pt-BR.git";
import ptBRPullRequests from "./pt-BR.pullRequests";
import ptBROnboarding from "./pt-BR.onboarding";
import ptBRProviders from "./pt-BR.providers";
import ptBRSettings from "./pt-BR.settings";
import ptBRWorkspace from "./pt-BR.workspace";

export type TranslationCatalog = Readonly<Record<string, string>>;

const EMPTY_CATALOG: TranslationCatalog = {};

/**
 * pt-BR is split into per-area fragments so two areas can be translated without
 * editing the same file. Duplicate keys across fragments are reported by
 * `bun run i18n:status`; the last spread wins at runtime.
 */
const PT_BR: TranslationCatalog = {
  ...ptBR,
  ...ptBRAutomations,
  ...ptBRSettings,
  ...ptBRProviders,
  ...ptBRComputer,
  ...ptBROnboarding,
  ...ptBRDialogs,
  ...ptBRChat,
  ...ptBRBrowser,
  ...ptBREditor,
  ...ptBRPullRequests,
  ...ptBRWorkspace,
  ...ptBRGit,
};

/** English is the source language: its catalog is empty and the runtime falls back to the key. */
const CATALOGS: Partial<Record<AppLocale, TranslationCatalog>> = {
  "pt-BR": PT_BR,
};

export function getCatalog(locale: AppLocale): TranslationCatalog {
  return CATALOGS[locale] ?? EMPTY_CATALOG;
}
