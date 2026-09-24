// FILE: DiffTruncationWarning.tsx
// Purpose: Shared warning for repository diff surfaces backed by size-bounded patch reads.
// Layer: Web diff presentation

import type { HTMLAttributes } from "react";

import { TriangleAlertIcon } from "~/lib/icons";
import { cn } from "~/lib/utils";
import { useT } from "~/i18n";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const DEFAULT_DIFF_TRUNCATION_MESSAGE =
  "Synara stopped reading at the diff size limit. Some files or changes may be missing.";

export function DiffTruncationWarning({
  className,
  children = DEFAULT_DIFF_TRUNCATION_MESSAGE,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const t = useT();
  const message =
    children === DEFAULT_DIFF_TRUNCATION_MESSAGE ? t(DEFAULT_DIFF_TRUNCATION_MESSAGE) : children;
  return (
    <Alert {...props} variant="warning" size="sm" className={cn("shrink-0", className)}>
      <TriangleAlertIcon aria-hidden="true" />
      <AlertTitle>{t("Partial diff")}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
