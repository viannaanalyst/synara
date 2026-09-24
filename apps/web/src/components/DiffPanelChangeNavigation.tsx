import { ChevronDownIcon, ChevronUpIcon } from "~/lib/icons";
import { useT } from "~/i18n";

import { IconButton } from "./ui/icon-button";

export interface DiffPanelChangeNavigation {
  canGoToPrevious: boolean;
  canGoToNext: boolean;
  previousShortcutLabel: string | null;
  nextShortcutLabel: string | null;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
}

function withShortcut(label: string, shortcutLabel: string | null): string {
  return shortcutLabel ? `${label} (${shortcutLabel})` : label;
}

export function DiffPanelChangeNavigationButtons(props: {
  navigation: DiffPanelChangeNavigation;
  className?: string;
}) {
  const t = useT();
  const { navigation } = props;
  const previousLabel = t("Previous change");
  const nextLabel = t("Next change");
  return (
    <>
      <IconButton
        variant="ghost"
        size="icon-xs"
        className={props.className}
        disabled={!navigation.canGoToPrevious}
        label={previousLabel}
        title={withShortcut(previousLabel, navigation.previousShortcutLabel)}
        onClick={navigation.onGoToPrevious}
      >
        <ChevronUpIcon className="size-3.5" />
      </IconButton>
      <IconButton
        variant="ghost"
        size="icon-xs"
        className={props.className}
        disabled={!navigation.canGoToNext}
        label={nextLabel}
        title={withShortcut(nextLabel, navigation.nextShortcutLabel)}
        onClick={navigation.onGoToNext}
      >
        <ChevronDownIcon className="size-3.5" />
      </IconButton>
    </>
  );
}
