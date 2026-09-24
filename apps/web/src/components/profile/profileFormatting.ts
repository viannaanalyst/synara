// FILE: profileFormatting.ts
// Purpose: Pure display formatters shared by the Profile page and the shareable card.
// Layer: web profile feature (no I/O, safe to use during html-to-image render).

import type { ProviderKind } from "@synara/contracts";
import { getLocale, t } from "~/i18n";

// Compact token/count formatting matching the reference card ("17bn", "538m", "1.2k").
export function formatCompact(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return "—";
  }
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) {
    return `${trimZero(value / 1_000_000_000)}bn`;
  }
  if (abs >= 1_000_000) {
    return `${trimZero(value / 1_000_000)}m`;
  }
  if (abs >= 1_000) {
    return `${trimZero(value / 1_000)}k`;
  }
  return `${Math.round(value)}`;
}

function trimZero(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return new Intl.NumberFormat(getLocale(), { maximumFractionDigits: 1 }).format(rounded);
}

// Thousands-separated integer ("4,934").
export function formatNumber(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return "—";
  }
  return new Intl.NumberFormat(getLocale(), { maximumFractionDigits: 0 }).format(value);
}

export function formatDays(value: number): string {
  if (value === 1) {
    return t("{count} day", { count: value });
  }
  return t("{count} days", { count: value });
}

// Title-case a home-directory basename into a friendly display name.
export function toDisplayName(basename: string): string {
  const cleaned = basename
    .replace(/[._-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
  if (!cleaned) {
    return "Synara";
  }
  return cleaned
    .split(" ")
    .map((part) => (part.length > 0 ? part[0]!.toUpperCase() + part.slice(1) : part))
    .join(" ");
}

export function normalizeHandle(value: string): string {
  const slug = value
    .trim()
    .replace(/^@+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, 30);
  return `@${slug || "synara"}`;
}

// Pretty short date for "peak day" tooltips ("Apr 3").
export function formatShortDate(day: string | null): string | null {
  if (!day) {
    return null;
  }
  const [year, month, date] = day.split("-").map(Number);
  if (!year || !month || !date) {
    return null;
  }
  return new Intl.DateTimeFormat(getLocale(), {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, date)));
}

export function formatProviderLabel(provider: ProviderKind): string {
  switch (provider) {
    case "codex":
      return "Codex";
    case "claudeAgent":
      return "Claude";
    case "cursor":
      return "Cursor";
    case "devin":
      return "Devin";
    case "antigravity":
      return "Antigravity";
    case "grok":
      return "Grok";
    case "droid":
      return "Droid";
    case "opencode":
      return "OpenCode";
    case "pi":
      return "Pi";
  }
}

export function formatProfileUsageBasis(metric: "tokens" | "turns"): string {
  return metric === "tokens" ? t("tracked tokens") : t("turns");
}
