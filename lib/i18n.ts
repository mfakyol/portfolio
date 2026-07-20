// Pure i18n helpers — safe to import from both Server and Client Components.
// (No next/headers here; the cookie read lives in i18n.server.ts.)
import { UI, type Locale } from "@/data/content";

export type { Locale };

export const DEFAULT_LOCALE: Locale = "tr";
export const LOCALE_COOKIE = "locale";

export function isLocale(v: unknown): v is Locale {
  return v === "tr" || v === "en";
}

// Look up a UI string; falls back to the raw key so a missing key is visible.
export function t(locale: Locale, key: string): string {
  return UI[locale][key] ?? key;
}
