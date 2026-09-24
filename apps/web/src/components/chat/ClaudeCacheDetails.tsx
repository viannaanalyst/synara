import type { ClaudeCacheObservation } from "@synara/contracts";
import { assessClaudeCache } from "@synara/shared/claudeCache";
import { formatContextWindowTokens } from "~/lib/contextWindow";
import { useT } from "~/i18n";

export function ClaudeCacheDetails({
  observation,
  nowMs,
}: {
  observation: ClaudeCacheObservation | undefined;
  nowMs: number;
}) {
  const t = useT();
  const assessment = assessClaudeCache(observation, nowMs);
  const label =
    assessment.state === "likely-warm"
      ? t("Likely warm")
      : assessment.state === "likely-expired"
        ? t("Likely expired")
        : t("Unknown");
  const usage = observation?.lastRequest;

  return (
    <div className="space-y-1.5 border-t border-border/50 pt-2 text-ui leading-snug text-muted-foreground">
      <div className="font-medium text-foreground">
        {t("Claude prompt cache: {status}", { status: label })}
      </div>
      {observation?.ttlSeconds !== undefined ? (
        <div>
          {t("Observed lifetime: {duration}", {
            duration: formatCacheDuration(observation.ttlSeconds, t),
          })}
        </div>
      ) : (
        <div>{t("Cache lifetime is unavailable.")}</div>
      )}
      {assessment.idleSeconds !== undefined ? (
        <div>
          {t("Last response: {duration} ago", {
            duration: formatCacheDuration(assessment.idleSeconds, t),
          })}
        </div>
      ) : null}
      {assessment.state === "likely-expired" && observation?.contextTokens !== undefined ? (
        <p className="max-w-72 leading-relaxed">
          {t("The next request may reprocess about {tokens} tokens.", {
            tokens: formatContextWindowTokens(observation.contextTokens),
          })}
        </p>
      ) : null}
      {usage ? (
        <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
          <dt>{t("Last request · cache read")}</dt>
          <dd className="text-right tabular-nums">
            {formatCacheTokens(usage.cacheReadInputTokens, t)}
          </dd>
          <dt>{t("Cache written")}</dt>
          <dd className="text-right tabular-nums">
            {formatCacheTokens(usage.cacheCreationInputTokens, t)}
          </dd>
          <dt>{t("Input outside cache")}</dt>
          <dd className="text-right tabular-nums">{formatCacheTokens(usage.inputTokens, t)}</dd>
        </dl>
      ) : null}
      <p className="max-w-72 leading-relaxed">
        {t("Cache state is estimated. It does not measure your plan's remaining usage.")}
      </p>
    </div>
  );
}

function formatCacheTokens(value: number | undefined, t: (key: string) => string): string {
  return value === undefined
    ? t("Unavailable")
    : `${formatContextWindowTokens(value)} ${t("tokens")}`;
}

export function formatCacheDuration(
  seconds: number,
  t: (key: string) => string = (key) => key,
): string {
  if (seconds < 60) return t("less than a minute");
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} ${minutes === 1 ? t("minute") : t("minutes")}`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} ${hours === 1 ? t("hour") : t("hours")}${remainingMinutes > 0 ? ` ${remainingMinutes} ${t("min")}` : ""}`;
}
