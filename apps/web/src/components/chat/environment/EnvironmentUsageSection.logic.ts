// FILE: EnvironmentUsageSection.logic.ts
// Purpose: Pure compact-summary decisions for provider rows in the Environment panel.

import type { ServerProviderUsageSnapshot } from "@synara/contracts";
import type { ProviderUsageDisplayRow } from "~/lib/providerUsageDisplay";
import { t } from "~/i18n";

export interface EnvironmentProviderUsageSummary {
  readonly rows: ReadonlyArray<ProviderUsageDisplayRow>;
  readonly statusLabel: string;
  readonly ariaLabel: string;
}

function providerUsageStatusLabel(
  snapshot: ServerProviderUsageSnapshot | undefined,
  hasUsageLines: boolean,
): string {
  switch (snapshot?.status) {
    case "needs-auth":
      return t("Sign in");
    case "unsupported":
      return t("Unsupported");
    case "error":
      return t("Unavailable");
    default:
      return hasUsageLines ? t("Connected") : t("No data");
  }
}

export function resolveEnvironmentProviderUsageSummary(input: {
  readonly providerName: string;
  readonly rows: ReadonlyArray<ProviderUsageDisplayRow>;
  /** Live batch snapshot when available; the row renders without one (local/thread fallbacks). */
  readonly snapshot: ServerProviderUsageSnapshot | undefined;
  readonly hasUsageLines: boolean;
}): EnvironmentProviderUsageSummary {
  const statusLabel = providerUsageStatusLabel(input.snapshot, input.hasUsageLines);
  const rowSummary = input.rows
    .map((row) =>
      t("{label} {remaining} remaining", {
        label: row.label,
        remaining: row.remainingLabel,
      }),
    )
    .join(", ");
  const summary = rowSummary || statusLabel;

  return {
    rows: input.rows,
    statusLabel,
    ariaLabel: t("{provider} usage: {summary}", {
      provider: input.providerName,
      summary,
    }),
  };
}
