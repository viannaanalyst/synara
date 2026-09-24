// FILE: SidebarStatusTrailingGlyph.tsx
// Purpose: Keep thread status glyphs identical across classic and Activity sidebar rows.
// Layer: Sidebar UI primitive

import { cn } from "~/lib/utils";
import { useT } from "~/i18n";
import type { ThreadStatusPill } from "./Sidebar.logic";
import { ThreadRunningSpinner } from "./ThreadRunningSpinner";

export function SidebarUnreadCompletionGlyph({ className }: { className?: string }) {
  const t = useT();
  return (
    <span
      role="img"
      aria-label={t("Unread completion")}
      className={cn("size-[7px] shrink-0 rounded-full bg-[var(--color-text-accent)]", className)}
    />
  );
}

export function SidebarStatusTrailingGlyph({ status }: { status: ThreadStatusPill }) {
  const t = useT();
  if (status.label === "Completed") {
    return <SidebarUnreadCompletionGlyph />;
  }
  if (status.pulse) {
    return (
      <span role="img" aria-label={t(status.label)} className="inline-flex shrink-0">
        <ThreadRunningSpinner />
      </span>
    );
  }
  return (
    <span
      role="img"
      aria-label={t(status.label)}
      className={cn("size-1.5 shrink-0 rounded-full", status.dotClass)}
    />
  );
}
