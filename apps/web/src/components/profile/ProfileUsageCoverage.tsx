// FILE: ProfileUsageCoverage.tsx
// Purpose: Disclose missing provider telemetry beside profile rankings and exports.
// Layer: web profile feature.

import type { ProviderKind } from "@synara/contracts";
import { useT } from "~/i18n";
import { formatProviderLabel } from "./profileFormatting";

export function ProfileUsageCoverage({
  unavailableProviders,
  className = "text-ui leading-snug text-muted-foreground",
}: {
  readonly unavailableProviders: ReadonlyArray<ProviderKind>;
  readonly className?: string;
}) {
  const t = useT();
  if (unavailableProviders.length === 0) {
    return null;
  }
  return (
    <p className={className}>
      {t(
        "Token usage is unavailable or zero for {providers}. Percentages reflect tracked tokens only. Their turns still count toward activity totals.",
        { providers: unavailableProviders.map(formatProviderLabel).join(", ") },
      )}
    </p>
  );
}
