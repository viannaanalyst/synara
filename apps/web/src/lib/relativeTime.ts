// FILE: relativeTime.ts
// Purpose: Compact relative-time labels ("now", "5m", "3h", "2d", "1w", "5mo") for thread and
//          pull request lists.
// Layer: Web UI utility

import { getLocale, t } from "~/i18n";

export function formatRelativeTime(iso: string): string {
  const diff = Math.max(0, Date.now() - new Date(iso).getTime());
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return t("now");
  if (getLocale() === "en") {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d`;
    if (days < 30) return `${Math.floor(days / 7)}w`;
    if (days < 365) return `${Math.floor(days / 30)}mo`;
    return `${Math.floor(days / 365)}y`;
  }

  const formatter = new Intl.RelativeTimeFormat(getLocale(), {
    numeric: "always",
    style: "narrow",
  });
  if (minutes < 60) return formatter.format(-minutes, "minute");
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return formatter.format(-hours, "hour");
  const days = Math.floor(hours / 24);
  if (days < 7) return formatter.format(-days, "day");
  if (days < 30) return formatter.format(-Math.floor(days / 7), "week");
  if (days < 365) return formatter.format(-Math.floor(days / 30), "month");
  return formatter.format(-Math.floor(days / 365), "year");
}
