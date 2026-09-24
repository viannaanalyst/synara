// FILE: DesktopSettingsPanels.tsx
// Purpose: Own settings panels whose behavior depends on browser or desktop-native lifecycles.
// Layer: Settings UI components
// Exports: NotificationsSettingsPanel, AppSnapSettingsPanel

import {
  type DesktopAppSnapSettingsPane,
  type DesktopAppSnapState,
  type ResolvedKeybindingsConfig,
} from "@synara/contracts";
import { appSnapShortcutLabels } from "@synara/shared/appSnapShortcut";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import type { AppSettingsBinding } from "~/appSettings";
import { createLatestAppSnapRequestGuard } from "~/appSnap.logic";
import { t, useT } from "~/i18n";
import { useRefreshOnWindowReturn } from "~/hooks/useRefreshOnWindowReturn";
import { playAppSnapCaptureSound } from "~/lib/appSnapSound";
import { CentralIcon } from "~/lib/central-icons";
import { cn } from "~/lib/utils";
import { isElectron } from "~/env";
import {
  buildNotificationSettingsSupportText,
  readBrowserNotificationPermissionState,
  requestBrowserNotificationPermission,
} from "~/notifications/taskCompletion";
import {
  SETTINGS_CARD_ROW_DESCRIPTION_CLASS_NAME,
  SETTINGS_CARD_ROW_TITLE_CLASS_NAME,
} from "~/settingsPanelStyles";
import {
  APP_SNAP_PERMISSION_PANES,
  AppSnapPermissionSection,
  useAppSnapPermissionGuideBridge,
} from "./AppSnapPermissionSection";
import { AppSnapShortcutControl } from "./AppSnapShortcutControl";
import { SettingResetButton } from "./SettingControls";
import { SettingsCard, SettingsRow, SettingsSection } from "./SettingsPanelPrimitives";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { toastManager } from "~/components/ui/toast";
import { serverConfigQueryOptions } from "~/lib/serverReactQuery";

function appSnapStatusText(state: DesktopAppSnapState | null): string {
  if (!state) return t("Available in the Synara desktop app");
  if (!state.supported) return state.message ?? t("Available on macOS only");
  if (state.status === "ready") {
    const shortcut = state.shortcut;
    const label = shortcut ? appSnapShortcutLabels(shortcut).join(" + ") : t("the shortcut");
    return t("Listening — press {shortcut} to snap", { shortcut: label });
  }
  if (state.status === "disabled") return t("Off");
  if (state.status === "starting") return t("Starting the capture listener…");
  return state.message ?? t("Permission setup required");
}

const EMPTY_KEYBINDINGS: ResolvedKeybindingsConfig = [];

export function NotificationsSettingsPanel({
  settings,
  defaults,
  updateSettings,
  active,
}: AppSettingsBinding & { readonly active: boolean }) {
  const t = useT();
  const [browserNotificationPermission, setBrowserNotificationPermission] = useState(
    readBrowserNotificationPermissionState(),
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setBrowserNotificationPermission(readBrowserNotificationPermissionState());
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  async function setSystemNotificationsEnabled(nextEnabled: boolean) {
    if (!nextEnabled) {
      updateSettings({ enableSystemTaskCompletionNotifications: false });
      return;
    }

    if (isElectron) {
      updateSettings({ enableSystemTaskCompletionNotifications: true });
      return;
    }

    const permission = await requestBrowserNotificationPermission();
    setBrowserNotificationPermission(permission);

    if (permission === "granted") {
      updateSettings({ enableSystemTaskCompletionNotifications: true });
      return;
    }

    updateSettings({ enableSystemTaskCompletionNotifications: false });
    toastManager.add({
      type: permission === "denied" ? "warning" : "error",
      title: t("Desktop notifications unavailable"),
      description: buildNotificationSettingsSupportText(permission),
    });
  }

  async function sendTestNotification() {
    const title = t("Activity notification");
    const body = t("Notification test for chats and terminal agents.");

    if (window.desktopBridge) {
      const shown = await window.desktopBridge.notifications.show({ title, body, silent: false });
      toastManager.add({
        type: shown ? "success" : "warning",
        title: shown ? t("Test notification sent") : t("Notifications unavailable"),
        description: shown
          ? t("Your operating system should show the notification.")
          : t("Desktop notifications are not supported on this device."),
      });
      return;
    }

    const permission = await requestBrowserNotificationPermission();
    setBrowserNotificationPermission(permission);
    if (permission !== "granted") {
      toastManager.add({
        type: permission === "denied" ? "warning" : "error",
        title: t("Desktop notifications unavailable"),
        description: buildNotificationSettingsSupportText(permission),
      });
      return;
    }

    const notification = new Notification(title, { body, tag: "synara:test-notification" });
    notification.addEventListener("click", () => {
      window.focus();
    });
    toastManager.add({
      type: "success",
      title: t("Test notification sent"),
      description: t("Your browser should show the notification."),
    });
  }

  if (!active) return null;

  return (
    <div className="space-y-6">
      <SettingsSection title={t("Activity alerts")}>
        <SettingsRow
          title={t("Activity toasts")}
          anchorTitle="Activity toasts"
          description={t(
            "Show an in-app toast when a chat or managed terminal agent finishes or needs input.",
          )}
          resetAction={
            settings.enableTaskCompletionToasts !== defaults.enableTaskCompletionToasts ? (
              <SettingResetButton
                label={t("activity toasts")}
                onClick={() =>
                  updateSettings({
                    enableTaskCompletionToasts: defaults.enableTaskCompletionToasts,
                  })
                }
              />
            ) : null
          }
          control={
            <Switch
              checked={settings.enableTaskCompletionToasts}
              onCheckedChange={(checked) =>
                updateSettings({ enableTaskCompletionToasts: Boolean(checked) })
              }
              aria-label={t("Activity toast notifications")}
            />
          }
        />

        <SettingsRow
          title={t("Desktop notifications")}
          anchorTitle="Desktop notifications"
          description={t(
            "Show an OS notification when a chat or managed terminal agent finishes or needs input while the app is in the background.",
          )}
          status={buildNotificationSettingsSupportText(browserNotificationPermission)}
          resetAction={
            settings.enableSystemTaskCompletionNotifications !==
            defaults.enableSystemTaskCompletionNotifications ? (
              <SettingResetButton
                label={t("desktop notifications")}
                onClick={() =>
                  updateSettings({
                    enableSystemTaskCompletionNotifications:
                      defaults.enableSystemTaskCompletionNotifications,
                  })
                }
              />
            ) : null
          }
          control={
            <div className="flex w-full items-center gap-2 sm:w-auto sm:justify-end">
              <Button size="xs" variant="outline" onClick={() => void sendTestNotification()}>
                {t("Test")}
              </Button>
              <Switch
                checked={settings.enableSystemTaskCompletionNotifications}
                onCheckedChange={(checked) => {
                  void setSystemNotificationsEnabled(Boolean(checked));
                }}
                aria-label={t("Desktop activity notifications")}
              />
            </div>
          }
        />
      </SettingsSection>
    </div>
  );
}

export function AppSnapSettingsPanel({
  settings,
  defaults,
  updateSettings,
  active,
}: AppSettingsBinding & { readonly active: boolean }) {
  const t = useT();
  const [appSnapState, setAppSnapState] = useState<DesktopAppSnapState | null>(null);
  const [openGuidePane, setOpenGuidePane] = useState<DesktopAppSnapSettingsPane | null>(null);
  const appSnapRequestGuardRef = useRef(createLatestAppSnapRequestGuard());
  const serverConfigQuery = useQuery({ ...serverConfigQueryOptions(), enabled: active });
  const keybindings = serverConfigQuery.data?.keybindings ?? EMPTY_KEYBINDINGS;

  // getState publishes through onState below. A passive refresh must not
  // invalidate an enable request that is waiting for the macOS permission dialog.
  useRefreshOnWindowReturn(() => window.desktopBridge?.appSnap?.getState(), active);

  // Panel-level on purpose: hooks above the `!active` return stay mounted while
  // the surface is hidden, so a dismissed coach still clears the remembered
  // pane instead of resurrecting the guide on return.
  useAppSnapPermissionGuideBridge({
    onStateChange: setAppSnapState,
    onGuidePaneChange: setOpenGuidePane,
  });

  useEffect(() => {
    const bridge = window.desktopBridge?.appSnap;
    if (!bridge) return;
    let disposed = false;
    const unsubscribe = bridge.onState((state) => {
      if (!disposed) setAppSnapState(state);
    });
    void bridge
      .getState()
      .then((state) => {
        if (!disposed) setAppSnapState(state);
      })
      .catch(() => undefined);
    return () => {
      disposed = true;
      unsubscribe();
    };
  }, []);

  async function setAppSnapEnabled(nextEnabled: boolean) {
    const requestGuard = appSnapRequestGuardRef.current;
    const requestId = requestGuard.begin();
    const bridge = window.desktopBridge?.appSnap;
    if (!bridge) {
      toastManager.add({
        type: "warning",
        title: t("AppSnap unavailable"),
        description: t("AppSnap requires the Synara desktop app on macOS."),
      });
      return;
    }

    try {
      if (nextEnabled) {
        const permissionState = await bridge.requestPermissions();
        if (!requestGuard.isCurrent(requestId)) return;
        setAppSnapState(permissionState);
      }
      if (!requestGuard.isCurrent(requestId)) return;
      updateSettings({ enableAppSnap: nextEnabled });
      const state = await bridge.setEnabled(nextEnabled);
      if (!requestGuard.isCurrent(requestId)) return;
      setAppSnapState(state);
      if (nextEnabled && state.status === "permission-required") {
        if (state.inputMonitoringPermission !== "granted") {
          setOpenGuidePane("input-monitoring");
        } else if (state.screenRecordingPermission !== "granted") {
          setOpenGuidePane("screen-recording");
        }
      } else if (nextEnabled && state.status === "error") {
        toastManager.add({
          type: "warning",
          title: t("Finish AppSnap setup"),
          description: state.message ?? t("Allow the required macOS permissions, then try again."),
        });
      }
    } catch (error) {
      if (!requestGuard.isCurrent(requestId)) return;
      updateSettings({ enableAppSnap: false });
      toastManager.add({
        type: "error",
        title: t("AppSnap setup failed"),
        description: error instanceof Error ? error.message : t("Could not configure AppSnap."),
      });
    }
  }

  const supported = appSnapState?.supported === true;
  const enabled = supported && settings.enableAppSnap;

  if (!active) return null;

  return (
    <div className="space-y-6">
      <SettingsCard divided={false} className="flex items-start gap-3 px-4 py-3.5">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-[color:var(--color-border)] text-muted-foreground">
          <CentralIcon name="screen-capture" className="size-4" />
        </span>
        <div className="min-w-0 space-y-1">
          <p className={SETTINGS_CARD_ROW_TITLE_CLASS_NAME}>
            {t("Take an AppSnap to show your agent another app's window")}
          </p>
          <p className={SETTINGS_CARD_ROW_DESCRIPTION_CLASS_NAME}>
            {t(
              "Press your two-key shortcut while any app is frontmost. Synara captures that window as an image, brings itself forward, and attaches the snap to a task composer — the capture stays on this device until you send the message.",
            )}
          </p>
          {!supported ? (
            <p className={cn(SETTINGS_CARD_ROW_DESCRIPTION_CLASS_NAME, "pt-0.5")}>
              {appSnapState
                ? (appSnapState.message ?? t("AppSnap is available only in the macOS desktop app."))
                : t("AppSnap requires the Synara desktop app on macOS.")}
            </p>
          ) : null}
        </div>
      </SettingsCard>

      <SettingsSection title={t("Capture")}>
        <SettingsRow
          title={t("Enable AppSnap")}
          anchorTitle="Enable AppSnap"
          description={t("Run the capture listener in the background while Synara is open.")}
          status={appSnapStatusText(appSnapState)}
          resetAction={
            settings.enableAppSnap !== defaults.enableAppSnap ? (
              <SettingResetButton
                label="AppSnap"
                onClick={() => void setAppSnapEnabled(defaults.enableAppSnap)}
              />
            ) : null
          }
          control={
            <Switch
              checked={enabled}
              disabled={!supported}
              onCheckedChange={(checked) => void setAppSnapEnabled(Boolean(checked))}
              aria-label={t("Enable AppSnap")}
            />
          }
        />

        <SettingsRow
          title={t("Shortcut")}
          anchorTitle="Shortcut"
          description={t(
            "Choose exactly two keys: one modifier and one other key. Synara checks its own bindings and asks macOS whether another app already owns the shortcut before saving it.",
          )}
          control={
            <AppSnapShortcutControl
              key={
                settings.appSnapShortcut.kind === "both-option-keys"
                  ? settings.appSnapShortcut.kind
                  : `${settings.appSnapShortcut.modifier}:${settings.appSnapShortcut.key}`
              }
              shortcut={settings.appSnapShortcut}
              enabled={enabled}
              reserved={enabled && appSnapState?.status === "ready"}
              keybindings={keybindings}
              onSaved={(shortcut, state) => {
                updateSettings({ appSnapShortcut: shortcut });
                setAppSnapState(state);
              }}
            />
          }
        />

        <SettingsRow
          title={t("Destination")}
          anchorTitle="Destination"
          description={t(
            "Snaps join the task you interacted with in the last minute, and consecutive snaps stay together. Otherwise Synara opens a fresh task with the capture attached.",
          )}
          control={
            <span className="text-ui leading-snug font-medium text-muted-foreground">
              {t("Automatic")}
            </span>
          }
        />

        <SettingsRow
          title={t("Capture sound")}
          anchorTitle="Capture sound"
          description={t("Play a short shutter cue when a window is captured.")}
          resetAction={
            settings.appSnapPlaySound !== defaults.appSnapPlaySound ? (
              <SettingResetButton
                label={t("capture sound")}
                onClick={() => updateSettings({ appSnapPlaySound: defaults.appSnapPlaySound })}
              />
            ) : null
          }
          control={
            <div className="flex w-full items-center gap-2 sm:w-auto sm:justify-end">
              <Button size="xs" variant="outline" onClick={() => void playAppSnapCaptureSound()}>
                {t("Preview")}
              </Button>
              <Switch
                checked={settings.appSnapPlaySound}
                onCheckedChange={(checked) =>
                  updateSettings({ appSnapPlaySound: Boolean(checked) })
                }
                aria-label={t("Play a sound when an AppSnap is captured")}
              />
            </div>
          }
        />
      </SettingsSection>

      {supported && appSnapState ? (
        <AppSnapPermissionSection
          panes={APP_SNAP_PERMISSION_PANES}
          feature="AppSnap"
          state={appSnapState}
          onStateChange={setAppSnapState}
          guidePane={openGuidePane}
          onGuidePaneChange={setOpenGuidePane}
        />
      ) : null}
    </div>
  );
}
