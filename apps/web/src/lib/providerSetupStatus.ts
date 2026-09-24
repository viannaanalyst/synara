import type { ServerProviderStatus } from "@synara/contracts";

import { t } from "~/i18n";

/** Installation/auth health is independent of permission to run background work. */
export function providerSetupStatusLabel(input: {
  readonly status: ServerProviderStatus | undefined;
  readonly reconciled: boolean;
  readonly disabled: boolean;
}): string {
  if (input.disabled) return t("Disabled · enable to check setup");
  if (!input.reconciled || !input.status) return t("Checking setup");
  const status = input.status;
  // Missing CLIs and failed probes both report available=false. The server's
  // message supplies the specific diagnosis alongside this label in Settings.
  if (!status.available) return t("Unavailable");
  if (status.authStatus === "unauthenticated") return t("Needs sign-in");
  if (status.status !== "ready") return t("Needs attention");
  if (status.authStatus === "unknown") return t("Installed · sign-in not verified");
  return t("Connected");
}
