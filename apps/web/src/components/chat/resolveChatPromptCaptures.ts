import { PROVIDER_SEND_TURN_MAX_ATTACHMENTS } from "@synara/contracts";
import { t } from "~/i18n";
import { readNativeApi } from "~/nativeApi";
import {
  type ComposerAssistantSelectionAttachment,
  type ComposerFileAttachment,
  type ComposerImageAttachment,
} from "../../composerDraftStore";
import {
  maybeResolveBrowserPromptAttachment,
  type BrowserPromptAttachmentResolution,
} from "../../lib/browserPromptContext";
import {
  maybeResolveDevicePromptAttachment,
  type DevicePromptAttachmentResolution,
} from "../../lib/devicePromptContext";
import { type Thread } from "../../types";
import { toastManager } from "../ui/toast";
interface Input {
  api: NonNullable<ReturnType<typeof readNativeApi>>;
  activeThread: Thread;
  promptForSend: string;
  composerImagesForSend: ComposerImageAttachment[];
  composerFilesForSend: ComposerFileAttachment[];
  composerAssistantSelectionsForSend: ComposerAssistantSelectionAttachment[];
}

export async function resolveChatPromptCaptures({
  api,
  activeThread,
  promptForSend,
  composerImagesForSend,
  composerFilesForSend,
  composerAssistantSelectionsForSend,
}: Input) {
  const browserPromptAttachment: BrowserPromptAttachmentResolution =
    await maybeResolveBrowserPromptAttachment({
      api,
      threadId: activeThread.id,
      prompt: promptForSend,
    }).catch(
      (): BrowserPromptAttachmentResolution => ({
        requested: false,
        image: null,
      }),
    );
  if (browserPromptAttachment.image) {
    const nextAttachmentCount =
      composerImagesForSend.length +
      composerFilesForSend.length +
      composerAssistantSelectionsForSend.length +
      (browserPromptAttachment.image ? 1 : 0);
    if (nextAttachmentCount <= PROVIDER_SEND_TURN_MAX_ATTACHMENTS) {
      composerImagesForSend = [...composerImagesForSend, browserPromptAttachment.image];
    } else {
      toastManager.add({
        type: "warning",
        title: t("You can attach up to {count} references per message.", {
          count: PROVIDER_SEND_TURN_MAX_ATTACHMENTS,
        }),
        description: t(
          "The current browser screenshot was skipped because this message is already at the attachment limit.",
        ),
      });
    }
  } else if (browserPromptAttachment.requested) {
    const description =
      browserPromptAttachment.reason === "no-open-browser"
        ? t("Open the in-app browser first, then try again.")
        : browserPromptAttachment.reason === "no-active-tab"
          ? t("The in-app browser has no active tab to capture yet.")
          : browserPromptAttachment.reason === "attachment-processing-failed"
            ? t("The browser screenshot could not be optimized for attachment.")
            : t("The current browser context could not be attached.");
    toastManager.add({
      type: "warning",
      title: t("Couldn’t attach the in-app browser context"),
      description,
    });
  }

  const devicePromptAttachment: DevicePromptAttachmentResolution =
    await maybeResolveDevicePromptAttachment({
      api,
      threadId: activeThread.id,
      prompt: promptForSend,
    }).catch(
      (): DevicePromptAttachmentResolution => ({
        requested: false,
        image: null,
      }),
    );
  if (devicePromptAttachment.image) {
    const nextAttachmentCount =
      composerImagesForSend.length +
      composerFilesForSend.length +
      composerAssistantSelectionsForSend.length +
      1;
    if (nextAttachmentCount <= PROVIDER_SEND_TURN_MAX_ATTACHMENTS) {
      composerImagesForSend = [...composerImagesForSend, devicePromptAttachment.image];
    } else {
      toastManager.add({
        type: "warning",
        title: t("You can attach up to {count} references per message.", {
          count: PROVIDER_SEND_TURN_MAX_ATTACHMENTS,
        }),
        description: t(
          "The simulator screenshot was skipped because this message is already at the attachment limit.",
        ),
      });
    }
  } else if (devicePromptAttachment.requested) {
    const description =
      devicePromptAttachment.reason === "no-attached-device"
        ? t("Open the iOS Simulator panel and choose a device first, then try again.")
        : devicePromptAttachment.reason === "device-not-booted"
          ? t("The selected simulator is still starting up.")
          : devicePromptAttachment.reason === "attachment-processing-failed"
            ? t("The simulator screenshot could not be optimized for attachment.")
            : t("The current simulator context could not be attached.");
    toastManager.add({
      type: "warning",
      title: t("Couldn’t attach the simulator screen"),
      description,
    });
  }
  return { composerImagesForSend };
}
