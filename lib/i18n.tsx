"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { UI, type Locale } from "@/data/content";

interface I18nValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

function storedLocale(): Locale {
  if (typeof window !== "undefined") {
    const w = window as unknown as { __LOCALE__?: string };
    if (w.__LOCALE__ === "tr" || w.__LOCALE__ === "en") return w.__LOCALE__;
    try {
      const s = localStorage.getItem("locale");
      if (s === "tr" || s === "en") return s;
    } catch {
      /* ignore */
    }
  }
  return "tr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Server + first client render use the "tr" default (no hydration mismatch);
  // the stored preference is applied on mount while the page is still hidden
  // (via the i18n-pending class), so the switch is never visible.
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const l = storedLocale();
    if (l !== locale) setLocaleState(l);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reveal only after the correct-locale render has committed.
  useEffect(() => {
    if (ready) {
      document.documentElement.lang = locale;
      document.documentElement.classList.remove("i18n-pending");
    }
  }, [ready, locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    () => setLocale(locale === "tr" ? "en" : "tr"),
    [locale, setLocale]
  );

  const t = useCallback((key: string) => UI[locale][key] ?? key, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
