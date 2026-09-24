// FILE: DebugFeatureFlagsMenu.tsx
// Purpose: Keeps local-only feature flag controls reusable without showing them in the product sidebar.
// Exports: DebugFeatureFlagsMenu

import { FlagIcon } from "~/lib/icons";
import {
  FEATURE_FLAGS,
  setFeatureFlagEnabled,
  useFeatureFlags,
  type FeatureFlag,
  type ToggleFeatureFlagId,
} from "../featureFlags";
import { useT } from "~/i18n";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "./ui/menu";
import { ComposerPickerMenuPopup } from "./chat/ComposerPickerMenuPopup";
import { SidebarMenuButton } from "./ui/sidebar";
import { toastManager } from "./ui/toast";

// Triggers local-only toast scenarios that are awkward to reproduce through real Git failures.
function triggerActionFailedToasts(values: Record<ToggleFeatureFlagId, boolean>): void {
  const copyText =
    "Error: Git command failed in /Users/ibrahime/Documents/Projects/synara\n\n" +
    "Command: git push upstream main\n" +
    "fatal: unable to access upstream remote for local debug toast preview";
  const toastData = {
    copyText,
    ...(values["persist-action-failed-debug-toasts"] ? {} : { dismissAfterVisibleMs: 30_000 }),
  };

  toastManager.add({
    type: "error",
    title: "Action failed",
    description: "Error: Git command failed in /Users/ibrahime/Documents/Projects/synara",
    data: toastData,
  });
  toastManager.add({
    type: "error",
    title: "Action failed",
    description: "Error: Git command failed in /Users/ibrahime/Documents/Projects/synara",
    data: toastData,
  });
}

export function DebugFeatureFlagsMenu() {
  const t = useT();
  const values = useFeatureFlags();

  return (
    <Menu>
      <MenuTrigger
        render={
          <SidebarMenuButton
            size="default"
            className="h-8 flex-1 gap-2.5 rounded-lg px-2 text-ui font-normal text-muted-foreground/72 hover:bg-[var(--sidebar-accent)]"
          />
        }
      >
        <FlagIcon className="size-[15px]" />
        <span>{t("Feature flags")}</span>
      </MenuTrigger>
      <ComposerPickerMenuPopup align="start" side="top" className="min-w-72">
        <MenuGroup>
          <MenuGroupLabel>{t("Local feature flags")}</MenuGroupLabel>
          {FEATURE_FLAGS.map((flag) => {
            const copy = localizedFeatureFlagCopy(flag, t);
            if (flag.kind === "action") {
              return (
                <MenuItem
                  key={flag.id}
                  onClick={() => triggerActionFailedToasts(values)}
                  className="py-2"
                >
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span>{copy.label}</span>
                    <span className="text-ui-xs leading-4 text-muted-foreground/70">
                      {copy.description}
                    </span>
                  </div>
                </MenuItem>
              );
            }

            return (
              <MenuCheckboxItem
                key={flag.id}
                checked={values[flag.id]}
                onCheckedChange={(checked) => {
                  setFeatureFlagEnabled(flag.id, Boolean(checked));
                }}
                variant="switch"
                className="py-2"
              >
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span>{copy.label}</span>
                  <span className="text-ui-xs leading-4 text-muted-foreground/70">
                    {copy.description}
                  </span>
                </div>
              </MenuCheckboxItem>
            );
          })}
        </MenuGroup>
        <MenuSeparator />
        <div className="px-2 py-1.5 text-ui-xs leading-4 text-muted-foreground/58">
          {t("Stored only in this browser profile.")}
        </div>
      </ComposerPickerMenuPopup>
    </Menu>
  );
}

function localizedFeatureFlagCopy(
  flag: FeatureFlag,
  t: ReturnType<typeof useT>,
): { label: string; description: string } {
  switch (flag.id) {
    case "trigger-action-failed-toasts":
      return {
        label: t("Trigger action failed toasts"),
        description: t("Show stacked Git action failure toasts for local UI testing."),
      };
    case "persist-action-failed-debug-toasts":
      return {
        label: t("Keep debug error toasts open"),
        description: t("Disable auto-dismiss for locally triggered error toasts."),
      };
    case "pin-git-progress-toast-preview":
      return {
        label: t("Pin git progress toast"),
        description: t("Keep a looping git progress toast visible for styling."),
      };
    case "show-debug-task-banner":
      return {
        label: t("Show debug task banner"),
        description: t("Render a local sample active task banner for UI testing."),
      };
  }

  const unreachable: never = flag;
  throw new Error(`Unhandled feature flag: ${String(unreachable)}`);
}
