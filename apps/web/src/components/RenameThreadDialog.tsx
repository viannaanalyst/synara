import { useT } from "~/i18n";

import { RenameDialog } from "./RenameDialog";

interface RenameThreadDialogProps {
  open: boolean;
  currentTitle: string;
  onOpenChange: (open: boolean) => void;
  onSave: (newTitle: string) => Promise<void> | void;
}

export function RenameThreadDialog({
  open,
  currentTitle,
  onOpenChange,
  onSave,
}: RenameThreadDialogProps) {
  const t = useT();
  return (
    <RenameDialog
      open={open}
      title={t("Rename chat")}
      description={t("Keep it short and recognizable.")}
      initialValue={currentTitle}
      onOpenChange={onOpenChange}
      onSave={onSave}
    />
  );
}
