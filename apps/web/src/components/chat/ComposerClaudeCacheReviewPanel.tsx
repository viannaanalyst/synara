import type { PendingClaudeCacheReview } from "@synara/contracts";
import { useRef, useState } from "react";
import { formatContextWindowTokens } from "~/lib/contextWindow";
import { useT } from "~/i18n";
import { cn } from "~/lib/utils";
import { ComposerChoiceRow } from "./ComposerChoiceRow";
import { COMPOSER_INPUT_SURFACE_CLASS_NAME } from "./composerPickerStyles";

export type ClaudeCacheReviewDecision = "continue" | "compact" | "cancel";

// An accepted choice is already visible in the transcript (compaction progress
// or the resumed turn), so the panel only returns if the review fails.
export function isClaudeCacheReviewPanelVisible(review: PendingClaudeCacheReview): boolean {
  return review.status !== "responding" && review.status !== "compacting";
}

export function ComposerClaudeCacheReviewPanel({
  review,
  compactDisabledReason,
  isCompactionRequest = false,
  onRespond,
}: {
  review: PendingClaudeCacheReview;
  compactDisabledReason: string | null;
  isCompactionRequest?: boolean;
  onRespond: (
    review: PendingClaudeCacheReview,
    decision: ClaudeCacheReviewDecision,
  ) => Promise<void>;
}) {
  const t = useT();
  const submittedReviewRef = useRef<PendingClaudeCacheReview | null>(null);
  const [submittedReview, setSubmittedReview] = useState<PendingClaudeCacheReview | null>(null);
  const [dispatchError, setDispatchError] = useState<string | null>(null);
  const actionable = review.status === "pending" || review.status === "failed";
  const disabled = !actionable || submittedReview === review;
  const contextTokens = review.assessment.contextTokens;
  const title =
    review.status === "uncertain"
      ? t("Request status is uncertain")
      : isCompactionRequest
        ? t("Compaction will read the expired context")
        : t("Claude's prompt cache likely expired");

  const respondOnce = (decision: ClaudeCacheReviewDecision) => {
    if (disabled || submittedReviewRef.current === review) return;
    if (decision === "compact" && (compactDisabledReason !== null || isCompactionRequest)) return;
    submittedReviewRef.current = review;
    setSubmittedReview(review);
    setDispatchError(null);
    void onRespond(review, decision).catch((error: unknown) => {
      if (submittedReviewRef.current !== review) return;
      submittedReviewRef.current = null;
      setSubmittedReview(null);
      setDispatchError(
        error instanceof Error ? error.message : t("Could not submit this choice. Try again."),
      );
    });
  };

  if (!isClaudeCacheReviewPanelVisible(review)) return null;

  return (
    <section
      aria-label={t("Claude cache review")}
      aria-busy={submittedReview === review}
      className={cn(COMPOSER_INPUT_SURFACE_CLASS_NAME, "overflow-hidden px-3.5 py-3")}
    >
      <p className="text-ui-lg font-medium leading-snug text-foreground/90">{title}</p>
      <p className="mt-1.5 text-ui leading-relaxed text-muted-foreground">
        {review.status === "uncertain"
          ? t(
              "Claude may have accepted the request. Sending is paused until its status can be confirmed.",
            )
          : t("Your message is saved and on hold. Continuing may reprocess {context}.", {
              context:
                contextTokens === undefined
                  ? t("the conversation's context")
                  : t("about {tokens} tokens", {
                      tokens: formatContextWindowTokens(contextTokens),
                    }),
            })}
      </p>
      {actionable ? (
        <p className="mt-1.5 text-ui leading-relaxed text-muted-foreground">
          {t("Compacting also processes the full history once. Later requests use its summary.")}
        </p>
      ) : null}
      {review.error || dispatchError ? (
        <p role="alert" className="mt-2 text-ui leading-relaxed text-destructive">
          {dispatchError ?? review.error}
        </p>
      ) : null}
      <div className="mt-2.5 space-y-0.5">
        <ComposerChoiceRow
          shortcut={null}
          label={
            isCompactionRequest ? t("Compact this conversation") : t("Continue with full context")
          }
          description={
            isCompactionRequest
              ? t("Process the existing history and save its summary")
              : t("Send the saved message with the existing history")
          }
          disabled={disabled}
          onSelect={() => respondOnce("continue")}
        />
        {!isCompactionRequest ? (
          <ComposerChoiceRow
            shortcut={null}
            label={t("Compact, then send")}
            description={
              compactDisabledReason ??
              t("Summarize this conversation before sending the saved message")
            }
            disabled={disabled || compactDisabledReason !== null}
            onSelect={() => respondOnce("compact")}
          />
        ) : null}
        <ComposerChoiceRow
          shortcut={null}
          label={t("Cancel this send")}
          description={t("Keep this conversation without sending the held message")}
          disabled={disabled}
          onSelect={() => respondOnce("cancel")}
        />
      </div>
    </section>
  );
}
