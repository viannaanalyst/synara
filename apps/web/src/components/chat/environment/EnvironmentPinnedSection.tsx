// FILE: EnvironmentPinnedSection.tsx
// Purpose: "Pinned" section of the Environment panel — a checklist of pinned assistant
//          messages with jump-to-message navigation, done toggling (strikethrough),
//          inline rename (double-click), and unpin. Pins are per-thread, server-synced.
// Layer: Environment panel section

import type { MessageId, PinnedMessage } from "@synara/contracts";
import { displayLabelFor } from "~/pinnedMessages";
import { useT } from "~/i18n";

import { EnvironmentEditableChecklistRow } from "./EnvironmentEditableChecklistRow";
import { EnvironmentCollapsibleSection } from "./EnvironmentRow";

interface EnvironmentPinnedSectionProps {
  pins: readonly PinnedMessage[];
  /** Live text of pinned messages still present in the transcript (absent → unavailable). */
  messageTextById: ReadonlyMap<MessageId, string>;
  onJump: (messageId: MessageId) => void;
  onToggleDone: (messageId: MessageId) => void;
  onUnpin: (messageId: MessageId) => void;
  onRename: (messageId: MessageId, label: string | null) => void;
}

export function EnvironmentPinnedSection({
  pins,
  messageTextById,
  onJump,
  onToggleDone,
  onUnpin,
  onRename,
}: EnvironmentPinnedSectionProps) {
  const t = useT();
  if (pins.length === 0) {
    return null;
  }
  return (
    <EnvironmentCollapsibleSection label={t("Pinned")}>
      <ul className="flex flex-col">
        {pins.map((pin) => (
          <PinnedMessageRow
            key={pin.messageId}
            pin={pin}
            text={messageTextById.get(pin.messageId)}
            onJump={onJump}
            onToggleDone={onToggleDone}
            onUnpin={onUnpin}
            onRename={onRename}
          />
        ))}
      </ul>
    </EnvironmentCollapsibleSection>
  );
}

const PinnedMessageRow = function PinnedMessageRow({
  pin,
  text,
  onJump,
  onToggleDone,
  onUnpin,
  onRename,
}: {
  pin: PinnedMessage;
  text: string | undefined;
  onJump: (messageId: MessageId) => void;
  onToggleDone: (messageId: MessageId) => void;
  onUnpin: (messageId: MessageId) => void;
  onRename: (messageId: MessageId, label: string | null) => void;
}) {
  const t = useT();
  const available = text !== undefined;
  const resolvedLabel = displayLabelFor(pin, text);
  const displayLabel = resolvedLabel.length > 0 ? resolvedLabel : t("(message unavailable)");

  return (
    <EnvironmentEditableChecklistRow
      checked={pin.done}
      available={available}
      displayLabel={displayLabel}
      initialEditLabel={resolvedLabel}
      editPlaceholder={available ? "" : t("Label")}
      checkboxAriaLabel={pin.done ? t("Mark not done") : t("Mark done")}
      labelAriaLabel={
        available
          ? t("Jump to pinned message. Press F2 to rename.")
          : t("Pinned message unavailable. Press Enter to rename.")
      }
      labelTitle={
        available
          ? t("Click to jump · double-click or press F2 to rename")
          : t("Click or press Enter to rename")
      }
      removeLabel={t("Unpin message")}
      removeTooltip={t("Unpin")}
      className="group/pin"
      removeButtonClassName="group-hover/pin:opacity-100"
      onJump={() => onJump(pin.messageId)}
      onToggleDone={() => onToggleDone(pin.messageId)}
      onRemove={() => onUnpin(pin.messageId)}
      onRename={(label) => onRename(pin.messageId, label)}
    />
  );
};
