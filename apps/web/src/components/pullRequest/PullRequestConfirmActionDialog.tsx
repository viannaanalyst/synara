// FILE: PullRequestConfirmActionDialog.tsx
// Purpose: The one confirmation dialog for the irreversible pull request actions (merge,
//          close), shared by the PR detail panel and the Environment panel's PR menu, plus the
//          "copy PR link" helper both surfaces expose next to those actions.
// Layer: Pull request UI
// Depends on: the shared alert dialog, toast manager, and clipboard helper.

import type { PullRequestMergeMethod, PullRequestStack } from "@synara/contracts";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { toastManager } from "~/components/ui/toast";
import { copyTextToClipboard } from "~/hooks/useCopyToClipboard";
import { t, useT } from "~/i18n";

export type PullRequestConfirmAction =
  | { kind: "merge"; method: PullRequestMergeMethod }
  | { kind: "close" };

export function copyPullRequestLink(url: string): void {
  void copyTextToClipboard(url)
    .then(() => {
      toastManager.add({ type: "success", title: t("Pull request link copied") });
    })
    .catch((error: unknown) => {
      toastManager.add({
        type: "error",
        title: t("Could not copy pull request link"),
        description: error instanceof Error ? error.message : t("Clipboard access failed."),
      });
    });
}

function confirmTitle(
  action: PullRequestConfirmAction,
  stack: PullRequestStack | null,
  stackMergeTargetCount: number,
  translate: typeof t,
): string {
  if (action.kind === "close") return translate("Close pull request?");
  return stack
    ? translate(
        stackMergeTargetCount === 1
          ? "Merge {count} pull request?"
          : "Merge {count} pull requests?",
        { count: stackMergeTargetCount },
      )
    : translate("Merge pull request?");
}

function confirmDescription(
  action: PullRequestConfirmAction,
  number: number,
  baseBranch: string | null,
  stack: PullRequestStack | null,
  translate: typeof t,
): string {
  if (action.kind === "close") {
    return translate("This will close #{number} without merging it.", { number });
  }
  if (stack) {
    const description = translate(
      "This will atomically merge every open pull request through #{number} into {branch} using {method}.",
      { number, branch: stack.baseBranch, method: translate(action.method) },
    );
    return stack.position < stack.size
      ? `${description} ${translate("Pull requests above it will remain open and GitHub will retarget them.")}`
      : description;
  }
  const params = { number, method: translate(action.method) };
  return baseBranch
    ? translate("This will merge #{number} into {branch} using {method}.", {
        ...params,
        branch: baseBranch,
      })
    : translate("This will merge #{number} using {method}.", params);
}

export function PullRequestConfirmActionDialog({
  action,
  number,
  baseBranch = null,
  stack,
  stackMergeTargetCount,
  pending,
  onConfirm,
  onDismiss,
}: {
  /** The action awaiting confirmation; null keeps the dialog closed. */
  action: PullRequestConfirmAction | null;
  number: number;
  baseBranch?: string | null;
  stack: PullRequestStack | null;
  stackMergeTargetCount: number;
  pending: boolean;
  onConfirm: (action: PullRequestConfirmAction) => void;
  onDismiss: () => void;
}) {
  const translate = useT();
  // Keep rendering the last action while the dialog animates out, so the copy does not
  // flip to another action's text once the owner resets `action` to null.
  const [shownAction, setShownAction] = useState(action);
  // Compared by value: owners may build the action object inline on every render.
  if (
    action !== null &&
    (shownAction === null ||
      action.kind !== shownAction.kind ||
      (action.kind === "merge" &&
        shownAction.kind === "merge" &&
        action.method !== shownAction.method))
  ) {
    setShownAction(action);
  }
  const shown = action ?? shownAction;

  return (
    <AlertDialog
      open={action !== null}
      onOpenChange={(open) => {
        if (!open) onDismiss();
      }}
    >
      <AlertDialogPopup>
        {shown ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {confirmTitle(shown, stack, stackMergeTargetCount, translate)}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {confirmDescription(shown, number, baseBranch, stack, translate)}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogClose render={<Button variant="outline" size="sm" />}>
                {translate("Cancel")}
              </AlertDialogClose>
              <Button
                size="sm"
                variant={shown.kind === "close" ? "destructive" : "default"}
                disabled={pending}
                onClick={() => {
                  onDismiss();
                  onConfirm(shown);
                }}
              >
                {shown.kind === "close"
                  ? translate("Close")
                  : stack
                    ? translate("Merge stack")
                    : translate("Merge")}
              </Button>
            </AlertDialogFooter>
          </>
        ) : null}
      </AlertDialogPopup>
    </AlertDialog>
  );
}
