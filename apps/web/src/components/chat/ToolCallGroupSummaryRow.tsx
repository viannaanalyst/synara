// FILE: ToolCallGroupSummaryRow.tsx
// Purpose: One-line disclosure for a run of tool calls. Settled runs read as a
//          summary ("Ran 2 commands, Edited 2 files"); a live run wears its
//          latest status or call instead. Both expand to the individual rows.
// Layer: Web chat presentation component
// Exports: ToolCallGroupSummaryRow
// Depends on: DisclosureRegion/DisclosureChevron (shared disclosure motion)

import { useEffect, useState, type ReactNode } from "react";

import { useT } from "~/i18n";
import { DisclosureChevron } from "../ui/DisclosureChevron";
import { DisclosureRegion } from "../ui/DisclosureRegion";
import { DISCLOSURE_CLEANUP_BUFFER_MS, DISCLOSURE_TRANSITION_MS } from "~/lib/disclosureMotion";
import { cn } from "~/lib/utils";
import { MUTED_LABEL_TEXT_CLASS_NAME } from "~/surfaceStyles";
import { extractWebFetchUrl } from "../../lib/toolCallLabel";
import { LinkChipIcon } from "../LinkChipIcon";
import type { WorkLogEntry } from "../../session-logic";
import {
  multiFileEditLabel,
  type ToolCallGroupSummary,
  workEntryRowCount,
} from "./toolCallGroup.logic";
import {
  renderWorkEntryIcon,
  workEntryDisplayText,
  workEntryLeftIcon,
} from "./TimelineWorkEntryRow";

export function ToolCallGroupSummaryRow(props: {
  summary: ToolCallGroupSummary;
  // Selected status or call of a live run, shown instead of the summary.
  liveEntry?: WorkLogEntry | null;
  open: boolean;
  onToggle: (open: boolean) => void;
  fontSizePx: number;
  renderChildren: () => ReactNode;
}) {
  const { summary, liveEntry, open, onToggle, fontSizePx, renderChildren } = props;
  const t = useT();
  const [keepChildrenMounted, setKeepChildrenMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setKeepChildrenMounted(true);
      return;
    }
    if (!keepChildrenMounted) return;
    const cleanup = window.setTimeout(
      () => setKeepChildrenMounted(false),
      DISCLOSURE_TRANSITION_MS + DISCLOSURE_CLEANUP_BUFFER_MS,
    );
    return () => window.clearTimeout(cleanup);
  }, [keepChildrenMounted, open]);

  const shouldRenderChildren = open || keepChildrenMounted;

  // The collapsed row wears its first entry's icon (favicon for web fetches),
  // so folding a run of tool calls keeps the leading glyph of the row it hides.
  const iconEntry = liveEntry ?? summary.iconEntry;
  const iconWebFetchUrl = extractWebFetchUrl(iconEntry);
  const summaryLabel = summary.parts
    .map((part) => {
      switch (part.category) {
        case "command":
          if (part.count === 1) return t("Ran {count} command", { count: part.count });
          return t("Ran {count} commands", { count: part.count });
        case "edit":
          if (part.count === 1) return t("Edited {count} file", { count: part.count });
          return t("Edited {count} files", { count: part.count });
        case "read":
          if (part.count === 1) return t("Read {count} file", { count: part.count });
          return t("Read {count} files", { count: part.count });
        case "search":
          if (part.count === 1) return t("Searched {count} file", { count: part.count });
          return t("Searched {count} files", { count: part.count });
        case "agent":
          if (part.count === 1) return t("Ran {count} agent task", { count: part.count });
          return t("Ran {count} agent tasks", { count: part.count });
        case "tool":
          if (part.count === 1) return t("Used {count} tool", { count: part.count });
          return t("Used {count} tools", { count: part.count });
        case "other":
          if (summary.parts.length === 1) {
            if (part.count === 1) return t("Ran {count} tool call", { count: part.count });
            return t("Ran {count} tool calls", { count: part.count });
          }
          if (part.count === 1) return t("{count} other tool call", { count: part.count });
          return t("{count} other tool calls", { count: part.count });
      }
    })
    .join(", ");
  const liveEntryLabel = liveEntry
    ? multiFileEditLabel(liveEntry)
      ? t("Edited {count} files", { count: workEntryRowCount(liveEntry) })
      : workEntryDisplayText(liveEntry)
    : null;

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          "inline-flex max-w-full items-center gap-1.5 py-0.5 text-left transition-colors duration-200 hover:text-foreground",
          MUTED_LABEL_TEXT_CLASS_NAME,
        )}
        style={{ fontSize: `${fontSizePx}px` }}
        onClick={() => onToggle(!open)}
      >
        <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden>
          {iconWebFetchUrl ? (
            <LinkChipIcon url={iconWebFetchUrl} className="size-3.5" />
          ) : (
            renderWorkEntryIcon(workEntryLeftIcon(iconEntry), "size-3.5")
          )}
        </span>
        <span className="min-w-0 truncate" data-tool-group-live={liveEntry ? "true" : undefined}>
          {liveEntry ? liveEntryLabel : summaryLabel}
        </span>
        {/* One step quieter than the label, matching the per-row disclosure chevron. */}
        <DisclosureChevron open={open} className="text-muted-foreground/70" />
      </button>
      <DisclosureRegion open={open}>
        {shouldRenderChildren ? renderChildren() : null}
      </DisclosureRegion>
    </div>
  );
}
