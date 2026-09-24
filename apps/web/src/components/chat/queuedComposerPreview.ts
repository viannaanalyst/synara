import {
  type BrowserAnnotationDraft,
  type ComposerFileAttachment,
  type ComposerImageAttachment,
} from "../../composerDraftStore";
import { formatAssistantSelectionQueuePreview } from "../../lib/assistantSelections";
import { formatBrowserAnnotationLabel } from "../../lib/browserAnnotations";
import { hasPastedText, pastedTextTitle, type PastedTextDraft } from "../../lib/composerPastedText";
import { formatFileCommentLabel, type FileCommentDraft } from "../../lib/fileComments";
import {
  formatPullRequestContextTitleSeed,
  type PullRequestContextDraft,
} from "../../lib/pullRequestContext";
import { formatTerminalContextLabel, type TerminalContextDraft } from "../../lib/terminalContext";

export interface QueuedComposerPreviewLabels {
  readonly image?: (name: string) => string;
  readonly file?: (name: string) => string;
  readonly assistantSelections?: (count: number) => string;
  readonly pastedText?: string;
  readonly multiplePastedTexts?: (count: number) => string;
  readonly queuedFollowUp?: string;
}

export function buildQueuedComposerPreviewText(
  input: {
    trimmedPrompt: string;
    images: ReadonlyArray<ComposerImageAttachment>;
    files: ReadonlyArray<ComposerFileAttachment>;
    assistantSelections: ReadonlyArray<{ id: string }>;
    browserAnnotations: ReadonlyArray<BrowserAnnotationDraft>;
    terminalContexts: ReadonlyArray<TerminalContextDraft>;
    fileComments: ReadonlyArray<FileCommentDraft>;
    pastedTexts: ReadonlyArray<PastedTextDraft>;
    pullRequestContexts: ReadonlyArray<PullRequestContextDraft>;
  },
  labels: QueuedComposerPreviewLabels = {},
): string {
  if (input.trimmedPrompt.length > 0) {
    return input.trimmedPrompt;
  }
  const firstImage = input.images[0];
  if (firstImage) {
    return labels.image?.(firstImage.name) ?? `Image: ${firstImage.name}`;
  }
  const firstFile = input.files[0];
  if (firstFile) {
    return labels.file?.(firstFile.name) ?? `File: ${firstFile.name}`;
  }
  if (input.assistantSelections.length > 0) {
    return (
      labels.assistantSelections?.(input.assistantSelections.length) ??
      formatAssistantSelectionQueuePreview(input.assistantSelections.length)
    );
  }
  const firstBrowserAnnotation = input.browserAnnotations[0];
  if (firstBrowserAnnotation) {
    return `#${firstBrowserAnnotation.ordinal} ${formatBrowserAnnotationLabel(firstBrowserAnnotation)}`;
  }
  const firstTerminalContext = input.terminalContexts[0];
  if (firstTerminalContext) {
    return formatTerminalContextLabel(firstTerminalContext);
  }
  const firstFileComment = input.fileComments[0];
  if (firstFileComment) {
    return formatFileCommentLabel(firstFileComment);
  }
  const pastedTitle = formatPastedTextTitleSeed(input.pastedTexts, labels);
  if (pastedTitle) {
    return pastedTitle;
  }
  const pullRequestTitle = formatPullRequestContextTitleSeed(input.pullRequestContexts);
  if (pullRequestTitle) {
    return pullRequestTitle;
  }
  return labels.queuedFollowUp ?? "Queued follow-up";
}

export function formatPastedTextTitleSeed(
  pastedTexts: ReadonlyArray<PastedTextDraft>,
  labels: Pick<QueuedComposerPreviewLabels, "pastedText" | "multiplePastedTexts"> = {},
): string | null {
  const firstPastedText = pastedTexts[0];
  if (!firstPastedText) {
    return null;
  }
  if (pastedTexts.length === 1) {
    return hasPastedText(firstPastedText)
      ? pastedTextTitle(firstPastedText.text)
      : (labels.pastedText ?? "Pasted text");
  }
  return labels.multiplePastedTexts?.(pastedTexts.length) ?? `${pastedTexts.length} pasted texts`;
}

function normalizeRestoredQueuedPrompt(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function composerPromptStillMatchesRestoredQueuedDraft(
  restoredPrompt: string,
  nextPrompt: string,
): boolean {
  const restored = normalizeRestoredQueuedPrompt(restoredPrompt);
  const next = normalizeRestoredQueuedPrompt(nextPrompt);
  if (next.length === 0) {
    return false;
  }
  if (restored.length === 0) {
    return true;
  }
  if (next.includes(restored)) {
    return true;
  }
  if (next.length >= Math.min(16, restored.length) && restored.includes(next)) {
    return true;
  }
  const probe = restored.slice(0, Math.min(48, restored.length));
  return probe.length >= 16 && next.includes(probe);
}
