import {
  type ContextWindowSnapshot,
  deriveContextWindowMeterDisplay,
  formatContextWindowTokens,
  formatCostUsd,
} from "~/lib/contextWindow";
import { useState } from "react";
import { useNowMs } from "~/hooks/useNowMs";
import { useAppLocale, useT } from "~/i18n";
import { Popover, PopoverPopup, PopoverTrigger } from "../ui/popover";
import { ClaudeCacheDetails } from "./ClaudeCacheDetails";
import { Button } from "../ui/button";

export function ContextWindowMeter(props: {
  usage: ContextWindowSnapshot;
  cumulativeCostUsd?: number | null | undefined;
  activeWindowLabel?: string | null | undefined;
  pendingWindowLabel?: string | null | undefined;
  showClaudeCache?: boolean;
  onOpenChange?: (open: boolean) => void;
  compactAction?: {
    disabledReason: string | null;
    isSubmitting: boolean;
    onCompact: () => Promise<boolean>;
  };
}) {
  const t = useT();
  const locale = useAppLocale();
  const { usage, cumulativeCostUsd, activeWindowLabel, pendingWindowLabel } = props;
  const [open, setOpen] = useState(false);
  const nowMs = useNowMs(open && usage.claudeCache != null, 10_000);
  const display = deriveContextWindowMeterDisplay(usage);
  const usedPercentageLabel =
    usage.usedPercentage === null
      ? null
      : `${new Intl.NumberFormat(locale, {
          maximumFractionDigits: usage.usedPercentage < 10 ? 1 : 0,
        }).format(usage.usedPercentage)}%`;
  const radius = 6;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (display.normalizedPercentage / 100) * circumference;

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        props.onOpenChange?.(nextOpen);
      }}
    >
      <PopoverTrigger
        openOnHover
        delay={150}
        closeDelay={0}
        render={
          <button
            type="button"
            className="group inline-flex shrink-0 items-center justify-center rounded-full p-0.5 transition-opacity hover:opacity-80"
            aria-label={
              usedPercentageLabel
                ? t("Context window {usage} used", { usage: usedPercentageLabel })
                : t("Context window {usage} tokens used", { usage: display.tokenUsageLabel })
            }
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <svg
                viewBox="0 0 16 16"
                className="-rotate-90 absolute inset-0 h-full w-full transform-gpu"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-muted-foreground/25 dark:text-muted-foreground/40"
                />
                <circle
                  cx="8"
                  cy="8"
                  r={radius}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="text-primary transition-[stroke-dashoffset] duration-500 ease-out motion-reduce:transition-none dark:text-[var(--color-text-foreground)]"
                />
              </svg>
            </span>
          </button>
        }
      />
      <PopoverPopup tooltipStyle side="top" align="end" className="w-max max-w-none px-3 py-2">
        <div className="space-y-1.5 leading-tight">
          <div className="text-ui-sm font-medium text-muted-foreground">{t("Context window")}</div>
          {pendingWindowLabel ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t("Current session: {active}.", { active: activeWindowLabel ?? t("Unknown") })}
            </div>
          ) : null}
          {usedPercentageLabel ? (
            <div className="whitespace-nowrap text-ui leading-snug font-medium text-foreground">
              <span>{usedPercentageLabel}</span>
              {display.hasReliableTokenRatio ? (
                <>
                  <span className="mx-1">⋅</span>
                  <span>{display.tokenUsageLabel}</span>
                  <span>/</span>
                  <span>
                    {t("{tokens} context used", {
                      tokens: formatContextWindowTokens(usage.maxTokens),
                    })}
                  </span>
                </>
              ) : (
                <span className="ml-1">{t("context used")}</span>
              )}
            </div>
          ) : (
            <div className="text-ui leading-snug text-foreground">
              {t("{tokens} tokens used so far", { tokens: display.tokenUsageLabel })}
            </div>
          )}
          {usage.maxTokens !== null ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t("Active context limit: {tokens} tokens", {
                tokens: formatContextWindowTokens(usage.maxTokens),
              })}
            </div>
          ) : null}
          {props.showClaudeCache && activeWindowLabel ? (
            <div className="max-w-72 space-y-1 text-ui leading-snug text-muted-foreground">
              <div>{t("Auto-compact target: {label}", { label: activeWindowLabel })}</div>
              <p className="leading-relaxed">
                {t(
                  "The session's auto-compact target can be lower than the model's supported window.",
                )}
              </p>
            </div>
          ) : null}
          {pendingWindowLabel ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t("Next turn: {label}", { label: pendingWindowLabel })}
            </div>
          ) : null}
          {(usage.totalProcessedTokens ?? null) !== null &&
          (usage.totalProcessedTokens ?? 0) > usage.usedTokens ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t(
                usage.tokenAccountingVersion === 1
                  ? "Estimated total processed"
                  : "Total processed",
              )}
              : {formatContextWindowTokens(usage.totalProcessedTokens ?? null)} {t("tokens")}
            </div>
          ) : null}
          {usage.compactsAutomatically ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t("Automatically compacts its context when needed.")}
            </div>
          ) : null}
          {cumulativeCostUsd !== null && cumulativeCostUsd !== undefined ? (
            <div className="text-ui leading-snug text-muted-foreground">
              {t("Session cost: {cost}", { cost: formatCostUsd(cumulativeCostUsd) })}
            </div>
          ) : null}
          {usage.claudeCache || props.showClaudeCache ? (
            <ClaudeCacheDetails observation={usage.claudeCache ?? undefined} nowMs={nowMs} />
          ) : null}
          {props.compactAction ? (
            <div className="max-w-72 space-y-1.5 border-t border-border/50 pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={
                  props.compactAction.disabledReason !== null || props.compactAction.isSubmitting
                }
                onClick={() => {
                  void props.compactAction?.onCompact();
                }}
              >
                {props.compactAction.isSubmitting ? t("Starting compaction...") : t("Compact now")}
              </Button>
              <p className="text-ui leading-relaxed text-muted-foreground">
                {props.compactAction.disabledReason ??
                  t(
                    "Compaction processes this conversation and consumes usage. Later turns use its summary.",
                  )}
              </p>
            </div>
          ) : null}
        </div>
      </PopoverPopup>
    </Popover>
  );
}
