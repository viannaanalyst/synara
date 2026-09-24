import { Loader2Icon } from "~/lib/icons";
import { useT } from "~/i18n";
import { cn } from "~/lib/utils";

function Spinner({ className, ...props }: React.ComponentProps<typeof Loader2Icon>) {
  const t = useT();
  return (
    <Loader2Icon
      aria-label={t("Loading")}
      className={cn("animate-spin", className)}
      role="status"
      {...props}
    />
  );
}

export { Spinner };
