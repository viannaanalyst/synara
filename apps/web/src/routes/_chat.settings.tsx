// FILE: _chat.settings.tsx
// Purpose: Render the dedicated settings experience with its own section sidebar and grouped panels.
// Layer: Route screen
// Exports: Settings route component for `/settings`

import { PROVIDER_DISPLAY_NAMES, type ProviderKind } from "@synara/contracts";
import { PROVIDER_DESCRIPTORS } from "@synara/shared/providerMetadata";
import { sameAppSnapShortcut } from "@synara/shared/appSnapShortcut";
import { SafariAccessSetupButton } from "../components/SafariAccessOnboarding";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import {
  type AppSettings,
  type FollowUpBehavior,
  DEFAULT_UI_DENSITY,
  DEFAULT_CHAT_WIDTH,
  type UiDensity,
  MAX_CHAT_FONT_SIZE_PX,
  MAX_TERMINAL_FONT_SIZE_PX,
  MIN_CHAT_FONT_SIZE_PX,
  MIN_TERMINAL_FONT_SIZE_PX,
  normalizeChatFontSizePx,
  normalizeTerminalFontFamily,
  normalizeTerminalFontSizePx,
  isGitTextGenerationSettingsDirty,
  TERMINAL_FONT_FAMILY_SUGGESTIONS,
  useAppSettings,
} from "../appSettings";
import { APP_VERSION } from "../branding";
import { APP_LOCALE_OPTIONS, isAppLocale, useT } from "../i18n";
import { AdvancedSettingsPanel } from "~/components/settings/AdvancedSettingsPanel";
import { AppIconPicker } from "~/components/settings/AppIconPicker";
import {
  ArchivedSettingsPanel,
  WorktreesSettingsPanel,
} from "~/components/settings/ConversationStorageSettingsPanels";
import {
  AppSnapSettingsPanel,
  NotificationsSettingsPanel,
} from "~/components/settings/DesktopSettingsPanels";
import { ComputerSettingsPanel } from "~/components/settings/ComputerSettingsPanel";
import { ModelsSettingsPanel } from "~/components/settings/ModelsSettingsPanel";
import {
  isProviderInstallSettingsDirty,
  ProvidersSettingsPanel,
} from "~/components/settings/ProvidersSettingsPanel";
import { ProviderOptionLabel } from "../components/ProviderIcon";
import ReleaseHistoryDialog from "../components/ReleaseHistoryDialog";
import { KeyboardShortcutsSettingsPanel } from "../components/settings/KeyboardShortcutsSettingsPanel";
import { ProfileSettingsPanel } from "../components/settings/ProfileSettingsPanel";
import { ProviderUsageSettingsPanel } from "../components/settings/ProviderUsageSettingsPanel";
import { ExternalMcpSettingsPanel } from "../components/settings/ExternalMcpSettingsPanel";
import {
  SettingResetButton,
  SettingsSegmentedControl,
  SettingsSelectControl,
} from "../components/settings/SettingControls";
import {
  SettingsRow,
  SettingsSection,
  SettingsSectionShell,
} from "../components/settings/SettingsPanelPrimitives";
import { SkillsSettingsPanel } from "../components/settings/SkillsSettingsPanel";
import { ThemeModePicker } from "../components/settings/ThemeModePicker";
import { ThemePackEditor } from "../components/ThemePackEditor";
import {
  CHAT_CONTENT_CARD_CLASS_NAME,
  CHAT_MAIN_VIEWPORT_SHELL_CLASS_NAME,
} from "../components/chat/composerPickerStyles";
import {
  CHAT_SURFACE_HEADER_HEIGHT_CLASS,
  CHAT_SURFACE_HEADER_PADDING_X_CLASS,
} from "../components/chat/chatHeaderControls";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from "../components/ui/autocomplete";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useOnboardingDialogStore } from "../onboarding/onboardingDialogStore";
import { Input } from "../components/ui/input";
import { SelectItem } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { toastManager } from "../components/ui/toast";
import { RouteInsetSurface } from "../components/RouteInsetSurface";
import { SidebarHeaderNavigationControls } from "../components/SidebarHeaderNavigationControls";
import { useDesktopCustomTitleBarState } from "../hooks/useDesktopCustomTitleBar";
import { useDesktopTopBarTrafficLightGutterClassName } from "../hooks/useDesktopTopBarGutter";
import { useTheme } from "../hooks/useTheme";
import { isUiDensity } from "../lib/appDensity";
import { isChatWidthMode, type ChatWidthMode } from "../lib/chatWidth";
import { isElectron } from "../env";
import { ResetIcon } from "../lib/icons";
import {
  cn,
  getNavigatorPlatform,
  isLinuxPlatform,
  isMacPlatform,
  isWindowsPlatform,
} from "../lib/utils";
import { ensureNativeApi, readNativeApi } from "../nativeApi";
import { sameProviderOrder } from "../providerOrdering";
import {
  normalizeSettingsSection,
  SETTINGS_NAV_ITEMS,
  SETTINGS_TARGETS,
  settingRowAnchorId,
} from "../settingsNavigation";
import { SETTINGS_PAGE_BACKGROUND_CLASS_NAME } from "../settingsPanelStyles";

// ── Settings taxonomy ──────────────────────────────────────────────────────

const UI_DENSITY_OPTIONS = [
  {
    value: "compact",
    label: "Compact",
    description: "Tighter spacing in the sidebar, composer, and settings rows.",
  },
  {
    value: "comfortable",
    label: "Comfortable",
    description: "Balanced spacing for everyday use.",
  },
  {
    value: "spacious",
    label: "Spacious",
    description: "More breathing room across the main workspace surfaces.",
  },
] as const satisfies ReadonlyArray<{
  value: UiDensity;
  label: string;
  description: string;
}>;

const CHAT_WIDTH_OPTIONS = [
  {
    value: "standard",
    label: "Standard",
    description: "Keeps the chat column at the default reading width (46rem).",
  },
  {
    value: "wide",
    label: "Wide",
    description: "Gives tables and wide content more room (72rem).",
  },
  {
    value: "full",
    label: "Full",
    description: "Lets the chat column use the full window width.",
  },
] as const satisfies ReadonlyArray<{
  value: ChatWidthMode;
  label: string;
  description: string;
}>;

const PROVIDER_SELECT_OPTIONS = PROVIDER_DESCRIPTORS.map((descriptor) => descriptor.kind);

const TIMESTAMP_FORMAT_LABELS = {
  locale: "System default",
  "12-hour": "12-hour",
  "24-hour": "24-hour",
} as const;

const SIDEBAR_PROJECT_SORT_ORDER_LABELS = {
  updated_at: "Recently active",
  created_at: "Recently added",
  manual: "Manual order",
} as const;

const SIDEBAR_THREAD_SORT_ORDER_LABELS = {
  updated_at: "Recently active",
  created_at: "Newest first",
} as const;

const FOLLOW_UP_BEHAVIOR_OPTIONS = [
  { value: "queue", label: "Queue" },
  { value: "steer", label: "Steer" },
] as const satisfies ReadonlyArray<{ value: FollowUpBehavior; label: string }>;

// ── Settings UI primitives ────────────────────────────────────────────────

// Shared settings controls live in ~/components/settings/SettingControls.

function isProviderSelectOption(value: string): value is ProviderKind {
  return PROVIDER_SELECT_OPTIONS.includes(value as ProviderKind);
}

// Keys of AppSettings whose value is a plain boolean — the only ones that can be
// driven by the shared on/off toggle row below.
type BooleanSettingKey = {
  [Key in keyof AppSettings]-?: AppSettings[Key] extends boolean ? Key : never;
}[keyof AppSettings];

// ── Route screen ───────────────────────────────────────────────────────────

function SettingsRouteView() {
  const routeSearch = useSearch({ strict: false }) as Record<string, unknown>;
  const activeSection = normalizeSettingsSection(routeSearch.section);
  const settingsTarget = typeof routeSearch.target === "string" ? routeSearch.target : null;
  const activeSectionItem = SETTINGS_NAV_ITEMS.find((item) => item.id === activeSection)!;

  const {
    isDefaultActiveTheme,
    resetAllThemes,
    resolvedTheme,
    theme,
    setTheme,
    systemUiFont,
    setSystemUiFont,
  } = useTheme();
  const { settings, defaults, updateSettings, updateSettingsAndWait, resetSettings } =
    useAppSettings();
  const t = useT();
  const desktopTopBarTrafficLightGutterClassName = useDesktopTopBarTrafficLightGutterClassName();
  const [releaseHistoryOpen, setReleaseHistoryOpen] = useState(false);
  const [resetEpoch, setResetEpoch] = useState(0);
  const platform = getNavigatorPlatform();
  const shouldShowFontSmoothing = isMacPlatform(platform);
  const supportsCustomTitleBarSetting =
    isElectron && (isWindowsPlatform(platform) || isLinuxPlatform(platform));
  const customTitleBarState = useDesktopCustomTitleBarState();
  const customTitleBarRestartRequired =
    customTitleBarState.supported && settings.useCustomTitleBar !== customTitleBarState.active;
  const customTitleBarPreferenceDirty =
    supportsCustomTitleBarSetting &&
    (settings.useCustomTitleBar !== defaults.useCustomTitleBar ||
      (customTitleBarState.supported &&
        customTitleBarState.preference !== defaults.useCustomTitleBar));

  function showCustomTitleBarRestartToast(): void {
    toastManager.add({
      type: "warning",
      title: t("Restart to apply title bar"),
      description: t("The window frame updates the next time Synara launches."),
      actionProps: {
        "aria-label": t("Restart Synara"),
        children: t("Restart"),
        onClick: () => {
          void window.desktopBridge?.customTitleBar?.relaunch();
        },
      },
    });
  }

  async function persistCustomTitleBarPreference(
    enabled: boolean,
  ): Promise<{ readonly restartRequired: boolean } | null> {
    try {
      const bridge = window.desktopBridge?.customTitleBar;
      if (!bridge) throw new Error(t("Desktop title bar bridge is unavailable."));
      const state = await bridge.setPreference(enabled);
      if (!state.supported || state.preference !== enabled) {
        throw new Error(t("Desktop title bar preference was not persisted."));
      }
      return state;
    } catch (error) {
      toastManager.add({
        type: "error",
        title: t("Could not update title bar"),
        description: error instanceof Error ? error.message : String(error),
      });
      return null;
    }
  }

  async function applyCustomTitleBarPreference(enabled: boolean): Promise<void> {
    const previous = settings.useCustomTitleBar;
    updateSettings({ useCustomTitleBar: enabled });
    const state = await persistCustomTitleBarPreference(enabled);
    if (state === null) {
      updateSettings({ useCustomTitleBar: previous });
      return;
    }
    if (state.restartRequired) showCustomTitleBarRestartToast();
  }

  const visibleTerminalFontFamilySuggestions = useMemo(() => {
    const query = settings.terminalFontFamily.trim().toLowerCase();
    if (!query) return TERMINAL_FONT_FAMILY_SUGGESTIONS;
    return TERMINAL_FONT_FAMILY_SUGGESTIONS.filter((suggestion) =>
      suggestion.toLowerCase().includes(query),
    );
  }, [settings.terminalFontFamily]);

  const isGitTextGenerationModelDirty = isGitTextGenerationSettingsDirty(settings, defaults);
  const isInstallSettingsDirty = isProviderInstallSettingsDirty(settings, defaults);
  const hiddenProviderCount = new Set(settings.hiddenProviders).size;
  const isProviderOrderDirty = !sameProviderOrder(settings.providerOrder, defaults.providerOrder);
  const isProviderActivityDirty =
    settings.disabledProviders.length !== defaults.disabledProviders.length ||
    settings.disabledProviders.some(
      (provider, index) => provider !== defaults.disabledProviders[index],
    );

  // Deep links and sidebar search targets all resolve to stable DOM ids in the active panel.
  useEffect(() => {
    if (!settingsTarget) return;
    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(settingsTarget)
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [activeSection, settingsTarget]);

  const changedSettingLabels = [
    ...(theme !== "system" ? [t("Theme")] : []),
    ...(!isDefaultActiveTheme
      ? [
          t("{variant} theme pack", {
            variant: resolvedTheme === "dark" ? t("Dark") : t("Light"),
          }),
        ]
      : []),
    ...(settings.defaultProvider !== defaults.defaultProvider ? [t("Default provider")] : []),
    ...(settings.defaultThreadEnvMode !== defaults.defaultThreadEnvMode
      ? [t("New thread mode")]
      : []),
    ...(settings.sidebarProjectSortOrder !== defaults.sidebarProjectSortOrder
      ? [t("Project sort order")]
      : []),
    ...(settings.sidebarThreadSortOrder !== defaults.sidebarThreadSortOrder
      ? [t("Thread sort order")]
      : []),
    ...(settings.showChatsSection !== defaults.showChatsSection ? [t("Chats section")] : []),
    ...(settings.showStudioSection !== defaults.showStudioSection ? [t("Studio section")] : []),
    ...(settings.showAutomationRunThreads !== defaults.showAutomationRunThreads
      ? [t("Automation runs")]
      : []),
    ...(settings.uiDensity !== defaults.uiDensity ? [t("UI density")] : []),
    ...(settings.chatWidth !== defaults.chatWidth ? [t("Chat width")] : []),
    ...(settings.desktopAppIcon !== defaults.desktopAppIcon ? [t("App icon")] : []),
    ...(customTitleBarPreferenceDirty ? [t("Custom title bar")] : []),
    ...(settings.chatFontSizePx !== defaults.chatFontSizePx ? [t("Base font size")] : []),
    ...(settings.terminalFontSizePx !== defaults.terminalFontSizePx
      ? [t("Terminal font size")]
      : []),
    ...(settings.terminalFontFamily !== defaults.terminalFontFamily ? [t("Terminal font")] : []),
    ...(shouldShowFontSmoothing &&
    settings.enableNativeFontSmoothing !== defaults.enableNativeFontSmoothing
      ? [t("Font smoothing")]
      : []),
    ...(settings.timestampFormat !== defaults.timestampFormat ? [t("Time format")] : []),
    ...(settings.locale !== defaults.locale ? [t("Language")] : []),
    ...(settings.enableTaskCompletionToasts !== defaults.enableTaskCompletionToasts
      ? [t("Activity toasts")]
      : []),
    ...(settings.enableSystemTaskCompletionNotifications !==
    defaults.enableSystemTaskCompletionNotifications
      ? [t("Desktop notifications")]
      : []),
    ...(settings.enableAssistantStreaming !== defaults.enableAssistantStreaming
      ? [t("Assistant output")]
      : []),
    ...(settings.composerEffortSlider !== defaults.composerEffortSlider
      ? [t("Effort slider")]
      : []),
    ...(settings.followUpBehavior !== defaults.followUpBehavior ? [t("Follow-up behavior")] : []),
    ...(settings.autoOpenDevicePane !== defaults.autoOpenDevicePane
      ? [t("Automatically open simulator")]
      : []),
    ...(settings.enableAppSnap !== defaults.enableAppSnap ? ["AppSnap"] : []),
    ...(!sameAppSnapShortcut(settings.appSnapShortcut, defaults.appSnapShortcut)
      ? [t("AppSnap shortcut")]
      : []),
    ...(settings.appSnapPlaySound !== defaults.appSnapPlaySound
      ? [t("AppSnap capture sound")]
      : []),
    ...(settings.computerControlEnabled !== defaults.computerControlEnabled
      ? [t("Computer control")]
      : []),
    ...(settings.autoOpenComputerPane !== defaults.autoOpenComputerPane
      ? [t("Computer preview auto-open")]
      : []),
    ...(settings.agentCursorColorMode !== defaults.agentCursorColorMode
      ? [t("Agent cursor colors")]
      : []),
    ...(settings.enableProviderUpdateChecks !== defaults.enableProviderUpdateChecks
      ? [t("Provider update checks")]
      : []),
    ...(settings.diffWordWrap !== defaults.diffWordWrap ? [t("Diff line wrapping")] : []),
    ...(settings.showPullRequestDiffColors !== defaults.showPullRequestDiffColors
      ? [t("Pull request diff colors")]
      : []),
    ...(settings.confirmThreadDelete !== defaults.confirmThreadDelete
      ? [t("Delete confirmation")]
      : []),
    ...(settings.confirmThreadArchive !== defaults.confirmThreadArchive
      ? [t("Archive confirmation")]
      : []),
    ...(settings.confirmTerminalTabClose !== defaults.confirmTerminalTabClose
      ? [t("Terminal close confirmation")]
      : []),
    ...(isGitTextGenerationModelDirty ? [t("Git writing model")] : []),
    ...(settings.customCodexModels.length > 0 ||
    settings.customClaudeModels.length > 0 ||
    settings.customCursorModels.length > 0 ||
    settings.customAntigravityModels.length > 0 ||
    settings.customGrokModels.length > 0 ||
    settings.customDroidModels.length > 0 ||
    settings.customOpenCodeModels.length > 0 ||
    settings.customPiModels.length > 0
      ? [t("Custom models")]
      : []),
    ...(isInstallSettingsDirty ? [t("Provider installs")] : []),
    ...(isProviderActivityDirty ? [t("Provider activity")] : []),
    ...(hiddenProviderCount > 0 ? [t("Provider visibility")] : []),
    ...(isProviderOrderDirty ? [t("Provider order")] : []),
  ];

  async function restoreDefaults() {
    if (changedSettingLabels.length === 0) return;

    const api = readNativeApi();
    const confirmed = await (api ?? ensureNativeApi()).dialogs.confirm(
      [
        t("Restore default settings?"),
        t("This will reset: {labels}.", { labels: changedSettingLabels.join(", ") }),
      ].join("\n"),
    );
    if (!confirmed) return;

    if (customTitleBarPreferenceDirty) {
      const state = await persistCustomTitleBarPreference(defaults.useCustomTitleBar);
      if (state === null) return;
      if (state.restartRequired) showCustomTitleBarRestartToast();
    }

    setTheme("system");
    resetAllThemes();
    await resetSettings();
    setResetEpoch((current) => current + 1);
  }

  // Shared on/off settings row: a labelled Switch bound to a boolean AppSettings
  // key, with the standard "reset to default" affordance shown only when changed.
  // Rows with bespoke controls (e.g. the desktop-notifications Test button) keep
  // their own markup instead of using this helper.
  const renderBooleanSettingRow = (config: {
    settingKey: BooleanSettingKey;
    title: string;
    /** English source title, so the deep-link anchor stays stable when `title` is translated. */
    anchorTitle?: string;
    description: string;
    resetLabel: string;
    ariaLabel: string;
  }) => {
    const { settingKey, title, anchorTitle, description, resetLabel, ariaLabel } = config;
    const isChanged = settings[settingKey] !== defaults[settingKey];
    return (
      <SettingsRow
        title={title}
        {...(anchorTitle === undefined ? {} : { anchorTitle })}
        description={description}
        resetAction={
          isChanged ? (
            <SettingResetButton
              label={resetLabel}
              onClick={() =>
                updateSettings({ [settingKey]: defaults[settingKey] } as Partial<AppSettings>)
              }
            />
          ) : null
        }
        control={
          <Switch
            checked={settings[settingKey]}
            onCheckedChange={(checked) =>
              updateSettings({ [settingKey]: Boolean(checked) } as Partial<AppSettings>)
            }
            aria-label={ariaLabel}
          />
        }
      />
    );
  };

  const renderGeneralPanel = () => (
    <div className="space-y-6">
      <SafariAccessSetupButton />
      <SettingsSection title={t("Core defaults")}>
        <SettingsRow
          title={t("Default provider")}
          anchorTitle="Default provider"
          description={t(
            "Provider used for new chats until you pick a model. New chats then reuse your most recent model and options.",
          )}
          resetAction={
            settings.defaultProvider !== defaults.defaultProvider ? (
              <SettingResetButton
                label={t("default provider")}
                onClick={() => updateSettings({ defaultProvider: defaults.defaultProvider })}
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.defaultProvider}
              onValueChange={(value) => {
                if (!isProviderSelectOption(value)) return;
                updateSettings({ defaultProvider: value });
              }}
              ariaLabel={t("Default provider")}
              valueContent={
                <ProviderOptionLabel
                  provider={settings.defaultProvider}
                  label={PROVIDER_DISPLAY_NAMES[settings.defaultProvider]}
                />
              }
            >
              {PROVIDER_SELECT_OPTIONS.map((provider) => (
                <SelectItem hideIndicator key={provider} value={provider}>
                  <ProviderOptionLabel
                    provider={provider}
                    label={PROVIDER_DISPLAY_NAMES[provider]}
                  />
                </SelectItem>
              ))}
            </SettingsSelectControl>
          }
        />

        <SettingsRow
          title={t("New threads")}
          anchorTitle="New threads"
          description={t("Pick the default workspace mode for newly created draft threads.")}
          resetAction={
            settings.defaultThreadEnvMode !== defaults.defaultThreadEnvMode ? (
              <SettingResetButton
                label={t("new threads")}
                onClick={() =>
                  updateSettings({
                    defaultThreadEnvMode: defaults.defaultThreadEnvMode,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.defaultThreadEnvMode}
              onValueChange={(value) => {
                if (value !== "local" && value !== "worktree") return;
                updateSettings({
                  defaultThreadEnvMode: value,
                });
              }}
              ariaLabel={t("Default thread mode")}
              valueContent={
                settings.defaultThreadEnvMode === "worktree" ? t("New worktree") : t("Local")
              }
            >
              <SelectItem hideIndicator value="local">
                {t("Local")}
              </SelectItem>
              <SelectItem hideIndicator value="worktree">
                {t("New worktree")}
              </SelectItem>
            </SettingsSelectControl>
          }
        />

        <SettingsRow
          title={t("Welcome tour")}
          anchorTitle="Welcome tour"
          description={t(
            "Replay the first-run setup: feature tour, provider selection, appearance, and first project.",
          )}
          control={
            <Button
              variant="outline"
              onClick={() => useOnboardingDialogStore.getState().openDialog()}
            >
              {t("Open welcome tour")}
            </Button>
          }
        />
      </SettingsSection>

      <SettingsSection title={t("Sidebar organization")}>
        <SettingsRow
          title={t("Project order")}
          anchorTitle="Project order"
          description={t("Controls how projects are arranged in the main sidebar.")}
          resetAction={
            settings.sidebarProjectSortOrder !== defaults.sidebarProjectSortOrder ? (
              <SettingResetButton
                label={t("project order")}
                onClick={() =>
                  updateSettings({
                    sidebarProjectSortOrder: defaults.sidebarProjectSortOrder,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.sidebarProjectSortOrder}
              onValueChange={(value) => {
                if (value !== "updated_at" && value !== "created_at" && value !== "manual") {
                  return;
                }
                updateSettings({ sidebarProjectSortOrder: value });
              }}
              ariaLabel={t("Project sort order")}
              valueContent={t(SIDEBAR_PROJECT_SORT_ORDER_LABELS[settings.sidebarProjectSortOrder])}
            >
              <SelectItem hideIndicator value="updated_at">
                {t(SIDEBAR_PROJECT_SORT_ORDER_LABELS.updated_at)}
              </SelectItem>
              <SelectItem hideIndicator value="created_at">
                {t(SIDEBAR_PROJECT_SORT_ORDER_LABELS.created_at)}
              </SelectItem>
              <SelectItem hideIndicator value="manual">
                {t(SIDEBAR_PROJECT_SORT_ORDER_LABELS.manual)}
              </SelectItem>
            </SettingsSelectControl>
          }
        />

        <SettingsRow
          title={t("Thread order")}
          anchorTitle="Thread order"
          description={t(
            "Controls how threads are arranged inside each project in the main sidebar.",
          )}
          resetAction={
            settings.sidebarThreadSortOrder !== defaults.sidebarThreadSortOrder ? (
              <SettingResetButton
                label={t("thread order")}
                onClick={() =>
                  updateSettings({
                    sidebarThreadSortOrder: defaults.sidebarThreadSortOrder,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.sidebarThreadSortOrder}
              onValueChange={(value) => {
                if (value !== "updated_at" && value !== "created_at") {
                  return;
                }
                updateSettings({ sidebarThreadSortOrder: value });
              }}
              ariaLabel={t("Thread sort order")}
              valueContent={t(SIDEBAR_THREAD_SORT_ORDER_LABELS[settings.sidebarThreadSortOrder])}
            >
              <SelectItem hideIndicator value="updated_at">
                {t(SIDEBAR_THREAD_SORT_ORDER_LABELS.updated_at)}
              </SelectItem>
              <SelectItem hideIndicator value="created_at">
                {t(SIDEBAR_THREAD_SORT_ORDER_LABELS.created_at)}
              </SelectItem>
            </SettingsSelectControl>
          }
        />
      </SettingsSection>

      <SettingsSection title={t("Sidebar sections")}>
        {renderBooleanSettingRow({
          settingKey: "showChatsSection",
          title: t("Chats"),
          anchorTitle: "Chats",
          description: t(
            "Show the standalone Chats list in the sidebar footer (chats not tied to a project).",
          ),
          resetLabel: t("chats section"),
          ariaLabel: t("Show the Chats section in the sidebar"),
        })}

        {renderBooleanSettingRow({
          settingKey: "showStudioSection",
          title: t("Studio"),
          anchorTitle: "Studio",
          description: t("Show the Studio tab in the sidebar switcher."),
          resetLabel: t("studio section"),
          ariaLabel: t("Show the Studio section in the sidebar"),
        })}

        {renderBooleanSettingRow({
          settingKey: "showAutomationRunThreads",
          title: t("Automation runs"),
          anchorTitle: "Automation runs",
          description: t(
            "Show the thread each standalone automation run creates. Runs stay listed on the automation's page either way; threads owned by dedicated or heartbeat automations always stay visible.",
          ),
          resetLabel: t("automation runs"),
          ariaLabel: t("Show automation run threads in the sidebar"),
        })}
      </SettingsSection>

      <div id={SETTINGS_TARGETS.environmentPanel} className="space-y-6">
        <SettingsSection title={t("Environment panel")}>
          {renderBooleanSettingRow({
            settingKey: "environmentPanelDefaultOpen",
            title: t("Open by default"),
            anchorTitle: "Open by default",
            description: t(
              "Open the chat Environment panel automatically on normal threads. When off, the panel stays closed until you open it. Your last open/close also updates this preference.",
            ),
            resetLabel: t("environment panel default open"),
            ariaLabel: t("Open the Environment panel by default on normal threads"),
          })}
        </SettingsSection>

        <SettingsSection title={t("Code and status")}>
          {renderBooleanSettingRow({
            settingKey: "showEnvironmentUsage",
            title: t("Usage"),
            anchorTitle: "Usage",
            description: t("Show the provider usage row in the chat Environment panel."),
            resetLabel: t("usage section"),
            ariaLabel: t("Show the Usage section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentRepository",
            title: t("Repository"),
            anchorTitle: "Repository",
            description: t(
              "Show the GitHub repository link in the chat Environment panel. The git block (Changes, Worktree, branch, Commit and Push) always stays visible.",
            ),
            resetLabel: t("repository section"),
            ariaLabel: t("Show the Repository section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentPullRequest",
            title: t("Pull request"),
            anchorTitle: "Pull request",
            description: t(
              "Show the open pull request (CI checks and review comments) for the current branch in the chat Environment panel.",
            ),
            resetLabel: t("pull request section"),
            ariaLabel: t("Show the Pull request section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentEditor",
            title: t("Editor"),
            anchorTitle: "Editor",
            description: t(
              "Show the Editor section (in-app editor view and Open in editor picker) in the chat Environment panel.",
            ),
            resetLabel: t("editor section"),
            ariaLabel: t("Show the Editor section in the Environment panel"),
          })}
        </SettingsSection>

        <SettingsSection title={t("Context and notes")}>
          {renderBooleanSettingRow({
            settingKey: "showEnvironmentRecap",
            title: t("Recap"),
            anchorTitle: "Recap",
            description: t("Show the auto-generated chat recap in the Environment panel."),
            resetLabel: t("recap section"),
            ariaLabel: t("Show the Recap section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentPinned",
            title: t("Pinned messages"),
            anchorTitle: "Pinned messages",
            description: t("Show the pinned-messages checklist in the Environment panel."),
            resetLabel: t("pinned messages section"),
            ariaLabel: t("Show the Pinned messages section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentInstructions",
            title: t("Project instructions"),
            anchorTitle: "Project instructions",
            description: t("Show project-level instructions in the Environment panel."),
            resetLabel: t("project instructions section"),
            ariaLabel: t("Show the Project instructions section in the Environment panel"),
          })}

          {renderBooleanSettingRow({
            settingKey: "showEnvironmentNotepad",
            title: t("Notepad"),
            anchorTitle: "Notepad",
            description: t("Show the per-thread notepad in the Environment panel."),
            resetLabel: t("notepad section"),
            ariaLabel: t("Show the Notepad section in the Environment panel"),
          })}
        </SettingsSection>
      </div>
    </div>
  );

  const renderAppearancePanel = () => (
    <div className="space-y-6">
      <SettingsSectionShell
        title={t("Theme")}
        action={
          theme !== "system" ? (
            <SettingResetButton label={t("theme")} onClick={() => setTheme("system")} />
          ) : null
        }
      >
        {/* The mode picker is the one settings control that sits directly on the page
            instead of inside a card — the mockups are the whole UI, so boxing them in
            a card reads as chrome around chrome. The anchor keeps search deep-links
            (`?target=setting-theme`) working without the SettingsRow. */}
        <div id={settingRowAnchorId("Theme")} className="scroll-mt-24 pb-1.5">
          <ThemeModePicker
            value={theme}
            onValueChange={setTheme}
            ariaLabel={t("Theme preference")}
          />
        </div>

        <div className="space-y-3">
          {(resolvedTheme === "dark"
            ? (["dark", "light"] as const)
            : (["light", "dark"] as const)
          ).map((variant) => (
            <ThemePackEditor
              key={variant}
              variant={variant}
              isActive={resolvedTheme === variant}
              mode={theme}
            />
          ))}
        </div>
      </SettingsSectionShell>

      {isElectron ? (
        <SettingsSection title={t("App")}>
          <SettingsRow
            title={t("App icon")}
            anchorTitle="App icon"
            description={t("Choose the icon Synara uses in the dock or taskbar.")}
            resetAction={
              settings.desktopAppIcon !== defaults.desktopAppIcon ? (
                <SettingResetButton
                  label={t("app icon")}
                  onClick={() => updateSettings({ desktopAppIcon: defaults.desktopAppIcon })}
                />
              ) : null
            }
            control={
              <AppIconPicker
                platform={platform}
                value={settings.desktopAppIcon}
                onValueChange={async (desktopAppIcon) => {
                  if (desktopAppIcon !== settings.desktopAppIcon) {
                    updateSettings({ desktopAppIcon });
                  }
                  await window.desktopBridge?.setAppIcon(desktopAppIcon);
                }}
              />
            }
          />
          {supportsCustomTitleBarSetting ? (
            <SettingsRow
              title={t("Use custom title bar")}
              anchorTitle="Use custom title bar"
              description={
                customTitleBarRestartRequired
                  ? t(
                      "Restart Synara to apply. Some Linux window managers work better with the system title bar.",
                    )
                  : t(
                      "Replace the system title bar with Synara's frameless chrome and window controls. Restart required to apply.",
                    )
              }
              status={customTitleBarRestartRequired ? t("Restart required") : undefined}
              resetAction={
                settings.useCustomTitleBar !== defaults.useCustomTitleBar ? (
                  <SettingResetButton
                    label={t("custom title bar")}
                    onClick={() => {
                      void applyCustomTitleBarPreference(defaults.useCustomTitleBar);
                    }}
                  />
                ) : null
              }
              control={
                <div className="flex items-center gap-2">
                  {customTitleBarRestartRequired ? (
                    <Button
                      type="button"
                      size="xs"
                      variant="outline"
                      onClick={() => {
                        void window.desktopBridge?.customTitleBar?.relaunch();
                      }}
                    >
                      {t("Restart")}
                    </Button>
                  ) : null}
                  <Switch
                    checked={settings.useCustomTitleBar}
                    onCheckedChange={(checked) => {
                      void applyCustomTitleBarPreference(Boolean(checked));
                    }}
                    aria-label={t("Use custom title bar")}
                  />
                </div>
              }
            />
          ) : null}
        </SettingsSection>
      ) : null}

      <SettingsSection title={t("Typography and spacing")}>
        <SettingsRow
          title={t("Use system UI font")}
          anchorTitle="Use system UI font"
          description={t(
            "Ignore the theme's custom UI font and render the interface with the native system font (SF Pro on macOS).",
          )}
          resetAction={
            !systemUiFont ? (
              <SettingResetButton
                label={t("system UI font")}
                onClick={() => setSystemUiFont(true)}
              />
            ) : null
          }
          control={
            <Switch
              checked={systemUiFont}
              onCheckedChange={(checked) => setSystemUiFont(Boolean(checked))}
              aria-label={t("Use system UI font")}
            />
          }
        />

        <SettingsRow
          title={t("UI density")}
          anchorTitle="UI density"
          description={t(
            "Control spacing in the sidebar, composer, chat gutters, and settings rows without changing font size.",
          )}
          resetAction={
            settings.uiDensity !== defaults.uiDensity ? (
              <SettingResetButton
                label={t("ui density")}
                onClick={() =>
                  updateSettings({
                    uiDensity: DEFAULT_UI_DENSITY,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSegmentedControl
              value={settings.uiDensity}
              onValueChange={(value) => {
                if (!isUiDensity(value)) {
                  return;
                }
                updateSettings({ uiDensity: value });
              }}
              ariaLabel={t("UI density")}
              options={UI_DENSITY_OPTIONS.map((option) => ({
                value: option.value,
                label: t(option.label),
              }))}
            />
          }
        />

        <SettingsRow
          title={t("Chat width")}
          anchorTitle="Chat width"
          description={t(
            "Control how wide the chat column grows. Wide and Full give tables and wide content more room.",
          )}
          resetAction={
            settings.chatWidth !== defaults.chatWidth ? (
              <SettingResetButton
                label={t("chat width")}
                onClick={() =>
                  updateSettings({
                    chatWidth: DEFAULT_CHAT_WIDTH,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSegmentedControl
              value={settings.chatWidth}
              onValueChange={(value) => {
                if (!isChatWidthMode(value)) {
                  return;
                }
                updateSettings({ chatWidth: value });
              }}
              ariaLabel={t("Chat width")}
              options={CHAT_WIDTH_OPTIONS.map((option) => ({
                value: option.value,
                label: t(option.label),
              }))}
            />
          }
        />

        <SettingsRow
          title={t("Base font size")}
          anchorTitle="Base font size"
          description={t(
            "Adjust the app text base in pixels. Chat and UI typography scale proportionally from this value.",
          )}
          resetAction={
            settings.chatFontSizePx !== defaults.chatFontSizePx ? (
              <SettingResetButton
                label={t("base font size")}
                onClick={() =>
                  updateSettings({
                    chatFontSizePx: defaults.chatFontSizePx,
                  })
                }
              />
            ) : null
          }
          control={
            <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
              <Input
                type="number"
                size="sm"
                min={MIN_CHAT_FONT_SIZE_PX}
                max={MAX_CHAT_FONT_SIZE_PX}
                step={1}
                inputMode="numeric"
                variant="soft"
                className="w-full text-right sm:w-20"
                value={String(settings.chatFontSizePx)}
                onChange={(event) => {
                  const nextValue = event.target.value.trim();
                  if (nextValue.length === 0) return;
                  updateSettings({
                    chatFontSizePx: normalizeChatFontSizePx(Number(nextValue)),
                  });
                }}
                aria-label={t("Base font size in pixels")}
              />
              <span className="text-ui leading-snug text-muted-foreground">px</span>
            </div>
          }
        />

        <SettingsRow
          title={t("Terminal font size")}
          anchorTitle="Terminal font size"
          description={t("Adjust terminal text independently from the app and chat font size.")}
          resetAction={
            settings.terminalFontSizePx !== defaults.terminalFontSizePx ? (
              <SettingResetButton
                label={t("terminal font size")}
                onClick={() =>
                  updateSettings({
                    terminalFontSizePx: defaults.terminalFontSizePx,
                  })
                }
              />
            ) : null
          }
          control={
            <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
              <Input
                type="number"
                size="sm"
                min={MIN_TERMINAL_FONT_SIZE_PX}
                max={MAX_TERMINAL_FONT_SIZE_PX}
                step={1}
                inputMode="numeric"
                variant="soft"
                className="w-full text-right sm:w-20"
                value={String(settings.terminalFontSizePx)}
                onChange={(event) => {
                  const nextValue = event.target.value.trim();
                  if (nextValue.length === 0) return;
                  updateSettings({
                    terminalFontSizePx: normalizeTerminalFontSizePx(Number(nextValue)),
                  });
                }}
                aria-label={t("Terminal font size in pixels")}
              />
              <span className="text-ui leading-snug text-muted-foreground">px</span>
            </div>
          }
        />

        <SettingsRow
          title={t("Terminal font")}
          anchorTitle="Terminal font"
          description={t(
            "Type any monospace font installed on this device (e.g. Fira Code). Leave empty for the default. Fonts that aren't installed fall back to the system monospace.",
          )}
          resetAction={
            settings.terminalFontFamily !== defaults.terminalFontFamily ? (
              <SettingResetButton
                label={t("terminal font")}
                onClick={() =>
                  updateSettings({
                    terminalFontFamily: defaults.terminalFontFamily,
                  })
                }
              />
            ) : null
          }
          control={
            <div className="flex w-full items-center justify-end sm:w-auto">
              <Autocomplete
                items={visibleTerminalFontFamilySuggestions}
                mode="none"
                openOnInputClick
                value={settings.terminalFontFamily}
                onValueChange={(value) => {
                  updateSettings({
                    terminalFontFamily: normalizeTerminalFontFamily(value),
                  });
                }}
              >
                <AutocompleteInput
                  size="sm"
                  variant="soft"
                  showTrigger
                  showClear={settings.terminalFontFamily.length > 0}
                  spellCheck={false}
                  autoComplete="off"
                  placeholder={t("Default (JetBrains Mono)")}
                  className="w-full sm:w-56"
                  aria-label={t("Terminal font family")}
                />
                <AutocompletePopup className="w-56 min-w-56 font-system-ui">
                  <AutocompleteList>
                    {visibleTerminalFontFamilySuggestions.map((suggestion, index) => (
                      <AutocompleteItem
                        key={suggestion}
                        index={index}
                        value={suggestion}
                        className="font-normal text-[var(--color-text-foreground)]"
                        onClick={() => {
                          updateSettings({
                            terminalFontFamily: normalizeTerminalFontFamily(suggestion),
                          });
                        }}
                      >
                        {suggestion}
                      </AutocompleteItem>
                    ))}
                    <AutocompleteEmpty>{t("No matching suggested fonts.")}</AutocompleteEmpty>
                  </AutocompleteList>
                </AutocompletePopup>
              </Autocomplete>
            </div>
          }
        />

        {shouldShowFontSmoothing
          ? renderBooleanSettingRow({
              settingKey: "enableNativeFontSmoothing",
              title: t("Font smoothing"),
              description: t("Use macOS-style antialiasing for lighter, crisper text rendering."),
              resetLabel: t("font smoothing"),
              ariaLabel: t("Enable font smoothing"),
            })
          : null}
      </SettingsSection>

      <SettingsSection title={t("Time and reading")}>
        <SettingsRow
          title={t("Time format")}
          anchorTitle="Time format"
          description={t("System default follows your browser or OS clock preference.")}
          resetAction={
            settings.timestampFormat !== defaults.timestampFormat ? (
              <SettingResetButton
                label={t("time format")}
                onClick={() =>
                  updateSettings({
                    timestampFormat: defaults.timestampFormat,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.timestampFormat}
              onValueChange={(value) => {
                if (value !== "locale" && value !== "12-hour" && value !== "24-hour") {
                  return;
                }
                updateSettings({
                  timestampFormat: value,
                });
              }}
              ariaLabel={t("Timestamp format")}
              triggerClassName="w-full sm:w-40"
              valueContent={t(TIMESTAMP_FORMAT_LABELS[settings.timestampFormat])}
            >
              <SelectItem hideIndicator value="locale">
                {t(TIMESTAMP_FORMAT_LABELS.locale)}
              </SelectItem>
              <SelectItem hideIndicator value="12-hour">
                {t(TIMESTAMP_FORMAT_LABELS["12-hour"])}
              </SelectItem>
              <SelectItem hideIndicator value="24-hour">
                {t(TIMESTAMP_FORMAT_LABELS["24-hour"])}
              </SelectItem>
            </SettingsSelectControl>
          }
        />
      </SettingsSection>

      <SettingsSection title={t("Language")}>
        <SettingsRow
          title={t("Language")}
          anchorTitle="Language"
          description={t("Choose the language used across the app.")}
          resetAction={
            settings.locale !== defaults.locale ? (
              <SettingResetButton
                label={t("language")}
                onClick={() => updateSettings({ locale: defaults.locale })}
              />
            ) : null
          }
          control={
            <SettingsSelectControl
              value={settings.locale}
              onValueChange={(value) => {
                if (!isAppLocale(value)) {
                  return;
                }
                updateSettings({ locale: value });
              }}
              ariaLabel={t("Language")}
              triggerClassName="w-full sm:w-44"
              valueContent={
                APP_LOCALE_OPTIONS.find((option) => option.value === settings.locale)?.label ??
                settings.locale
              }
            >
              {APP_LOCALE_OPTIONS.map((option) => (
                <SelectItem hideIndicator key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SettingsSelectControl>
          }
        />
      </SettingsSection>
    </div>
  );

  const renderBehaviorPanel = () => (
    <div className="space-y-6">
      <SettingsSection title={t("Conversation")}>
        <SettingsRow
          title={t("Follow-up behavior")}
          anchorTitle="Follow-up behavior"
          description={t(
            "Choose whether messages sent during an active turn wait in the queue or steer the current run. Ctrl/Cmd+Enter uses the opposite behavior for one message.",
          )}
          resetAction={
            settings.followUpBehavior !== defaults.followUpBehavior ? (
              <SettingResetButton
                label={t("follow-up behavior")}
                onClick={() =>
                  updateSettings({
                    followUpBehavior: defaults.followUpBehavior,
                  })
                }
              />
            ) : null
          }
          control={
            <SettingsSegmentedControl
              value={settings.followUpBehavior}
              onValueChange={(value) => updateSettings({ followUpBehavior: value })}
              ariaLabel={t("Follow-up behavior")}
              options={FOLLOW_UP_BEHAVIOR_OPTIONS.map((option) => ({
                value: option.value,
                label: t(option.label),
              }))}
            />
          }
        />

        {renderBooleanSettingRow({
          settingKey: "enableAssistantStreaming",
          title: t("Assistant output"),
          anchorTitle: "Assistant output",
          description: t("Show token-by-token output while a response is in progress."),
          resetLabel: t("assistant output"),
          ariaLabel: t("Stream assistant messages"),
        })}

        {renderBooleanSettingRow({
          settingKey: "composerEffortSlider",
          title: t("Effort slider"),
          anchorTitle: "Effort slider",
          description: t(
            "Show effort as a slider at the bottom of the composer's model picker, with fast mode and reset alongside it, instead of separate Effort and Speed rows.",
          ),
          resetLabel: t("effort slider"),
          ariaLabel: t("Show effort slider in the composer"),
        })}

        {renderBooleanSettingRow({
          settingKey: "autoOpenDevicePane",
          title: t("Automatically open simulator"),
          anchorTitle: "Automatically open simulator",
          description: t(
            "Open the iOS Simulator pane when an agent uses a device. Turn this off to use Simulator.app without the mirrored pane reopening. You can still open the pane manually.",
          ),
          resetLabel: t("automatically open simulator"),
          ariaLabel: t("Automatically open simulator"),
        })}
      </SettingsSection>

      <SettingsSection title={t("Review")}>
        {renderBooleanSettingRow({
          settingKey: "showPullRequestDiffColors",
          title: t("Pull request diff colors"),
          anchorTitle: "Pull request diff colors",
          description: t("Show additions in green and deletions in red in pull request summaries."),
          resetLabel: t("pull request diff colors"),
          ariaLabel: t("Show pull request diff colors"),
        })}

        {renderBooleanSettingRow({
          settingKey: "diffWordWrap",
          title: t("Diff line wrapping"),
          anchorTitle: "Diff line wrapping",
          description: t(
            "Set the default wrap state when the diff panel opens. The in-panel wrap toggle only affects the current diff session.",
          ),
          resetLabel: t("diff line wrapping"),
          ariaLabel: t("Wrap diff lines by default"),
        })}
      </SettingsSection>

      <SettingsSection title={t("Safety confirmations")}>
        {renderBooleanSettingRow({
          settingKey: "confirmThreadDelete",
          title: t("Delete confirmation"),
          anchorTitle: "Delete confirmation",
          description: t("Ask before deleting a thread and its chat history."),
          resetLabel: t("delete confirmation"),
          ariaLabel: t("Confirm thread deletion"),
        })}

        {renderBooleanSettingRow({
          settingKey: "confirmThreadArchive",
          title: t("Archive confirmation"),
          anchorTitle: "Archive confirmation",
          description: t("Ask before archiving a thread."),
          resetLabel: t("archive confirmation"),
          ariaLabel: t("Confirm thread archive"),
        })}

        {renderBooleanSettingRow({
          settingKey: "confirmTerminalTabClose",
          title: t("Terminal close confirmation"),
          anchorTitle: "Terminal close confirmation",
          description: t("Ask before closing a terminal tab and clearing its history."),
          resetLabel: t("terminal close confirmation"),
          ariaLabel: t("Confirm terminal tab close"),
        })}
      </SettingsSection>
    </div>
  );

  const renderRouteOwnedPanel = () => {
    switch (activeSection) {
      case "general":
        return renderGeneralPanel();
      case "appearance":
        return renderAppearancePanel();
      case "behavior":
        return renderBehaviorPanel();
      case "shortcuts":
        return <KeyboardShortcutsSettingsPanel />;
      case "profile":
        return <ProfileSettingsPanel />;
      case "skills":
        return <SkillsSettingsPanel />;
      case "usage":
        return <ProviderUsageSettingsPanel />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        CHAT_MAIN_VIEWPORT_SHELL_CLASS_NAME,
        SETTINGS_PAGE_BACKGROUND_CLASS_NAME,
        CHAT_CONTENT_CARD_CLASS_NAME,
      )}
    >
      <RouteInsetSurface surfaceClassName={SETTINGS_PAGE_BACKGROUND_CLASS_NAME}>
        {/* Companion sidebar trigger so settings is reachable-and-exitable even when the
          sidebar is collapsed (web/mobile have no global Back arrow). Pinned to the
          card's top-left — at the same header height + traffic-light gutter as the
          chat and route headers — so the collapsed-state toggle sits by the traffic
          lights instead of floating in the centered settings body. It renders nothing
          while the sidebar is open (SidebarHeaderNavigationControls returns null), so it
          adds no navigation chrome in the common (open) state and never shifts the centered
          content (hence absolute, not a layout-occupying header row). The strip stays a
          drag-region so the Windows frameless window can be moved by its top edge; the
          caption buttons themselves are a separate fixed cluster (see root route). */}
        <div
          className={cn(
            "drag-region absolute inset-x-0 top-0 z-10 flex items-center",
            CHAT_SURFACE_HEADER_PADDING_X_CLASS,
            CHAT_SURFACE_HEADER_HEIGHT_CLASS,
            desktopTopBarTrafficLightGutterClassName,
          )}
        >
          <div className="pointer-events-auto">
            <SidebarHeaderNavigationControls />
          </div>
        </div>
        <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto">
            <div
              className={cn(
                "mx-auto w-full px-6 py-8",
                activeSection === "profile" ? "max-w-3xl" : "max-w-2xl",
              )}
            >
              {activeSection !== "profile" ? (
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h1 className="flex items-center gap-2 text-xl font-medium tracking-tight text-foreground">
                      {t(activeSectionItem.label)}
                      {activeSectionItem.badge ? (
                        <Badge
                          variant="outline"
                          className="rounded-full px-2 font-normal tracking-normal text-muted-foreground"
                        >
                          {t(activeSectionItem.badge)}
                        </Badge>
                      ) : null}
                    </h1>
                    <p className="mt-1.5 text-ui leading-relaxed text-muted-foreground">
                      {t(activeSectionItem.description)}
                    </p>
                  </div>
                  <Button
                    size="xs"
                    variant="outline"
                    className="shrink-0"
                    disabled={changedSettingLabels.length === 0}
                    onClick={() => void restoreDefaults()}
                  >
                    <ResetIcon className="size-3.5" />
                    {t("Restore defaults")}
                  </Button>
                </div>
              ) : null}

              {renderRouteOwnedPanel()}
              {/* These workflow owners stay mounted so drafts, request guards, and pending
                  mutations retain route lifetime while inactive panels render no DOM. */}
              <div className="contents">
                <NotificationsSettingsPanel
                  active={activeSection === "notifications"}
                  settings={settings}
                  defaults={defaults}
                  updateSettings={updateSettings}
                />
                <AppSnapSettingsPanel
                  active={activeSection === "appsnap"}
                  settings={settings}
                  defaults={defaults}
                  updateSettings={updateSettings}
                />
                <ComputerSettingsPanel
                  active={activeSection === "computer"}
                  settings={settings}
                  defaults={defaults}
                  updateSettings={updateSettings}
                />
                <WorktreesSettingsPanel active={activeSection === "worktrees"} />
                <ArchivedSettingsPanel active={activeSection === "archived"} />
                <ModelsSettingsPanel
                  active={activeSection === "models"}
                  settings={settings}
                  defaults={defaults}
                  updateSettings={updateSettings}
                  resetEpoch={resetEpoch}
                />
                <ProvidersSettingsPanel
                  active={activeSection === "providers"}
                  settings={settings}
                  defaults={defaults}
                  updateSettings={updateSettings}
                  updateSettingsAndWait={updateSettingsAndWait}
                  resetEpoch={resetEpoch}
                />
                <ExternalMcpSettingsPanel active={activeSection === "integrations"} />
                <AdvancedSettingsPanel
                  active={activeSection === "advanced"}
                  onOpenReleaseHistory={() => setReleaseHistoryOpen(true)}
                  resetEpoch={resetEpoch}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mounted at the route level (outside the scrollable panel) so the
          dialog portal can overlay the entire settings view without being
          clipped by the content wrapper's overflow. */}
        <ReleaseHistoryDialog
          open={releaseHistoryOpen}
          onOpenChange={setReleaseHistoryOpen}
          defaultExpandedVersion={APP_VERSION}
        />
      </RouteInsetSurface>
    </div>
  );
}

export const Route = createFileRoute("/_chat/settings")({
  component: SettingsRouteView,
});
