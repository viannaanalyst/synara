// FILE: i18n-status.ts
// Purpose: Report translation coverage for the web and desktop catalogs: keys used in source
//          that are missing a translation, and catalog keys no longer referenced by any source.
//          Run after merging upstream so new strings show up in the report instead of silently
//          staying English.
// Usage: bun run i18n:status [--strict]   (--strict exits 1 when translations are missing)

import * as FS from "node:fs";
import * as Path from "node:path";

const REPO_ROOT = Path.resolve(import.meta.dirname, "..");

interface Surface {
  readonly name: string;
  readonly sourceRoots: readonly string[];
  readonly catalogFiles: readonly string[];
  /** Directories whose `.ts` files are catalog fragments (every file except index.ts). */
  readonly catalogDirectories: readonly string[];
  /**
   * Files that pass their string literals to `t()` indirectly (nav labels, option arrays).
   * Every literal in them counts as a used key, so the report does not list them as orphans.
   * Over-collecting here only hides orphan entries, never missing translations.
   */
  readonly dynamicKeyFiles: readonly string[];
}

const SURFACES: readonly Surface[] = [
  {
    name: "web (pt-BR)",
    sourceRoots: ["apps/web/src"],
    catalogFiles: [],
    catalogDirectories: ["apps/web/src/i18n/catalog"],
    dynamicKeyFiles: [
      "apps/web/src/settingsNavigation.ts",
      "apps/web/src/settingsSearchIndex.ts",
      "apps/web/src/routes/_chat.settings.tsx",
      "apps/web/src/onboarding/tourContent.ts",
      "apps/web/src/onboarding/steps/WelcomeStep.tsx",
      "apps/web/src/onboarding/OnboardingDialog.tsx",
      "apps/web/src/onboarding/steps/ProvidersStep.tsx",
      "apps/web/src/components/settings/ProvidersSettingsPanel.tsx",
      "apps/web/src/components/settings/SkillsSettingsPanel.tsx",
      "apps/web/src/components/settings/skillsSettingsModel.ts",
      "apps/web/src/components/settings/AppIconPicker.tsx",
      "apps/web/src/components/settings/ConversationStorageSettingsPanels.tsx",
      "apps/web/src/components/settings/ProviderUsageSettingsPanel.tsx",
      "apps/web/src/components/settings/ExternalMcpSettingsPanel.tsx",
      "apps/web/src/components/settings/ComputerSettingsPanel.tsx",
      "apps/web/src/components/settings/ComputerGettingStarted.tsx",
      "apps/web/src/components/settings/ComputerAuditHistorySection.tsx",
      "apps/web/src/components/settings/AppSnapPermissionSection.tsx",
      "apps/web/src/components/settings/AppSnapPermissionGuide.tsx",
      "apps/web/src/components/settings/AppSnapShortcutControl.tsx",
      "apps/web/src/components/settings/KeyboardShortcutsSettingsPanel.tsx",
      "apps/web/src/shortcutsSheet.ts",
      "apps/web/src/components/ComputerPanel.logic.ts",
      "apps/web/src/components/computer/ComputerStatusBadge.tsx",
      "apps/web/src/components/chat/ComputerPreviewPopover.tsx",
      "apps/web/src/components/chat/ComputerPreviewPopover.logic.ts",
      "apps/web/src/components/chat/ComposerPendingApprovalPanel.tsx",
      "apps/web/src/components/ProviderUsageLineList.tsx",
      "apps/web/src/components/ProviderUsageResetCredits.tsx",
      "apps/web/src/components/ProviderUsagePanelContent.tsx",
      "apps/web/src/components/ProviderUsageMenuControl.tsx",
      "apps/web/src/lib/rateLimits.ts",
      "apps/web/src/lib/providerUsageDisplay.ts",
      "apps/web/src/lib/usagePace.ts",
      "apps/web/src/lib/computerToolPresentation.ts",
      "apps/web/src/components/settings/ProfileSettingsPanel.tsx",
      "apps/web/src/components/settings/ThemeModePicker.tsx",
      "apps/web/src/repoDiffScopeStore.ts",
      "apps/web/src/components/DiffPanel.logic.ts",
      "apps/web/src/components/DiffTruncationWarning.tsx",
      "apps/web/src/routes/_chat.pull-requests.index.tsx",
      "apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx",
      "apps/web/src/components/pullRequest/pullRequestList.logic.ts",
      "apps/web/src/components/pullRequest/pullRequestStack.logic.ts",
      "apps/web/src/components/pullRequest/pullRequestDetail.logic.ts",
      "apps/web/src/components/chat/environment/environmentPullRequest.logic.ts",
      "apps/web/src/components/pullRequest/PullRequestRow.tsx",
      "apps/web/src/components/pullRequest/PullRequestConfirmActionDialog.tsx",
      "apps/web/src/components/profile/ShareDialog.tsx",
      "apps/web/src/components/profile/ActivityHeatmap.tsx",
      "apps/web/src/components/BranchToolbar.tsx",
      "apps/web/src/components/SpaceSwitcher.tsx",
      "apps/web/src/lib/runtimeMode.ts",
      "apps/web/src/components/BranchToolbarBranchSelector.tsx",
      "apps/web/src/components/GitActionsControl.tsx",
      "apps/web/src/components/GitActionsControl.logic.ts",
      "apps/web/src/components/GitCommitDialog.tsx",
      "apps/web/src/components/GitCreatePrDialog.tsx",
      "apps/web/src/lib/threadEnvironment.ts",
      "apps/web/src/components/chat/ComposerEnvironmentPicker.tsx",
      "apps/web/src/components/chat/ChatHeader.tsx",
      "apps/web/src/components/chat/environment/EnvironmentPanel.tsx",
      "apps/web/src/components/chat/SelectionNewChatComposer.tsx",
      "apps/web/src/components/Sidebar.tsx",
      "apps/web/src/components/Sidebar.logic.ts",
      "apps/web/src/components/SidebarThreadRowContent.tsx",
      "apps/web/src/components/ThreadStatusPillChip.tsx",
      "apps/web/src/components/kanban/KanbanCardView.tsx",
      "apps/web/src/components/ChatView.tsx",
      "apps/web/src/lib/threadHandoff.ts",
      "apps/web/src/routes/-automations.shared.tsx",
      "apps/web/src/lib/automationForm.ts",
      "apps/web/src/lib/automationFailurePolicy.ts",
      "apps/web/src/lib/automationDraft.ts",
      "apps/web/src/routes/_chat.automations.index.tsx",
      "apps/web/src/routes/_chat.automations.$automationId.tsx",
    ],
  },
  {
    name: "desktop (pt-BR)",
    sourceRoots: ["apps/desktop/src"],
    catalogFiles: ["apps/desktop/src/desktopI18n.ts"],
    catalogDirectories: [],
    dynamicKeyFiles: [],
  },
];

const EXCLUDED_PATH_PATTERNS: readonly RegExp[] = [
  /node_modules/,
  /\.test\.[cm]?tsx?$/,
  /\.browser\.tsx$/,
  /i18n[/\\]catalog[/\\]/,
];

const KEY_CALL_PATTERN = /\b(?:t|translate|tNative)\(\s*"((?:[^"\\]|\\.)*)"/g;
const CATALOG_KEY_PATTERN = /^\s*(?:"((?:[^"\\]|\\.)*)"|([A-Za-z_$][\w$]*))\s*:/gm;
const STRING_LITERAL_PATTERN = /"((?:[^"\\\n]|\\.)*)"/g;

function listFiles(root: string): string[] {
  const absolute = Path.join(REPO_ROOT, root);
  const files: string[] = [];
  const walk = (directory: string) => {
    for (const entry of FS.readdirSync(directory, { withFileTypes: true })) {
      const entryPath = Path.join(directory, entry.name);
      const relative = Path.relative(REPO_ROOT, entryPath);
      if (EXCLUDED_PATH_PATTERNS.some((pattern) => pattern.test(relative))) {
        continue;
      }
      if (entry.isDirectory()) {
        walk(entryPath);
        continue;
      }
      if (/\.tsx?$/.test(entry.name)) {
        files.push(entryPath);
      }
    }
  };
  walk(absolute);
  return files;
}

interface UsedKeys {
  /** Keys passed to `t()`/`translate()` with a literal, so they can be checked for translations. */
  readonly explicit: Map<string, string[]>;
  /** Literals from dynamic-key files; only used to avoid reporting them as orphaned. */
  readonly dynamic: Set<string>;
}

function addUsedKey(used: Map<string, string[]>, key: string, location: string) {
  const locations = used.get(key) ?? [];
  locations.push(location);
  used.set(key, locations);
}

function collectUsedKeys(surface: Surface): UsedKeys {
  const explicit = new Map<string, string[]>();
  const dynamic = new Set<string>();
  for (const root of surface.sourceRoots) {
    for (const file of listFiles(root)) {
      const content = FS.readFileSync(file, "utf8");
      for (const match of content.matchAll(KEY_CALL_PATTERN)) {
        const key = match[1];
        if (key === undefined) continue;
        addUsedKey(explicit, key, Path.relative(REPO_ROOT, file));
      }
    }
  }
  for (const dynamicKeyFile of surface.dynamicKeyFiles) {
    const content = FS.readFileSync(Path.join(REPO_ROOT, dynamicKeyFile), "utf8");
    for (const match of content.matchAll(STRING_LITERAL_PATTERN)) {
      const key = match[1];
      if (key !== undefined) {
        dynamic.add(key);
      }
    }
  }
  return { explicit, dynamic };
}

/** Locale ids registered in the catalog map are not translation keys. */
const LOCALE_KEY_PATTERN = /^(?:en|pt-BR)$/;

interface CatalogKeys {
  readonly keys: Set<string>;
  /** Keys declared by more than one catalog fragment, mapped to their files. */
  readonly duplicates: Map<string, string[]>;
}

function collectCatalogKeys(surface: Surface): CatalogKeys {
  const keys = new Set<string>();
  const seenIn = new Map<string, string[]>();
  const catalogFiles = [...surface.catalogFiles];
  for (const directory of surface.catalogDirectories) {
    const absolute = Path.join(REPO_ROOT, directory);
    for (const entry of FS.readdirSync(absolute, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith(".ts") && entry.name !== "index.ts") {
        catalogFiles.push(Path.join(directory, entry.name));
      }
    }
  }
  for (const catalogFile of catalogFiles) {
    const content = FS.readFileSync(Path.join(REPO_ROOT, catalogFile), "utf8");
    const relative = Path.relative(REPO_ROOT, catalogFile);
    for (const match of content.matchAll(CATALOG_KEY_PATTERN)) {
      const key = match[1] ?? match[2];
      if (key === undefined || LOCALE_KEY_PATTERN.test(key)) {
        continue;
      }
      keys.add(key);
      const files = seenIn.get(key) ?? [];
      files.push(relative);
      seenIn.set(key, files);
    }
  }
  const duplicates = new Map<string, string[]>();
  for (const [key, files] of seenIn) {
    if (files.length > 1) {
      duplicates.set(key, files);
    }
  }
  return { keys, duplicates };
}

const strict = process.argv.includes("--strict");
let missingTotal = 0;

for (const surface of SURFACES) {
  const used = collectUsedKeys(surface);
  const catalog = collectCatalogKeys(surface);
  // Plural catalogs declare `key_one` / `key_other` instead of the base key.
  const hasPluralEntry = (key: string) =>
    catalog.keys.has(`${key}_one`) || catalog.keys.has(`${key}_other`);
  const baseKeyForPlural = (key: string) => key.replace(/_(?:one|other|zero|two|few|many)$/, "");

  const missing = [...used.explicit.keys()]
    .filter((key) => !catalog.keys.has(key) && !hasPluralEntry(key))
    .sort();
  const orphaned = [...catalog.keys]
    .filter(
      (key) =>
        !used.explicit.has(key) &&
        !used.dynamic.has(key) &&
        !used.explicit.has(baseKeyForPlural(key)) &&
        !used.dynamic.has(baseKeyForPlural(key)),
    )
    .sort();
  missingTotal += missing.length;

  console.log(`\n${surface.name}`);
  console.log(`  used: ${used.explicit.size}  catalog: ${catalog.keys.size}`);

  if (catalog.duplicates.size > 0) {
    console.log(`  duplicate catalog keys (${catalog.duplicates.size}):`);
    for (const [key, files] of catalog.duplicates) {
      console.log(`    - ${JSON.stringify(key)}  (${files.join(", ")})`);
    }
  }

  if (missing.length > 0) {
    console.log(`  missing translations (${missing.length}):`);
    for (const key of missing) {
      const [firstLocation] = used.explicit.get(key) ?? [];
      console.log(`    - ${JSON.stringify(key)}  (${firstLocation ?? "unknown"})`);
    }
  } else {
    console.log("  missing translations: none");
  }

  if (orphaned.length > 0) {
    console.log(`  orphaned catalog entries (${orphaned.length}):`);
    for (const key of orphaned) {
      console.log(`    - ${JSON.stringify(key)}`);
    }
  } else {
    console.log("  orphaned catalog entries: none");
  }
}

if (missingTotal > 0 && strict) {
  console.error(`\ni18n:status: ${missingTotal} missing translation(s).`);
  process.exit(1);
}
