"use client";

import { useRouter } from "next/navigation";
import { CV_URL, NAME } from "@/data/content";
import { t, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

const LINKS = [
  { href: "#experience", key: "nav.experience" },
  { href: "#work", key: "nav.work" },
  { href: "#contact", key: "nav.contact" },
];

export function Nav({ locale }: { locale: Locale }) {
  const router = useRouter();

  // Persist the choice in a cookie and re-render the server tree in the new
  // locale (router.refresh sends the just-set cookie, so no full page reload).
  const toggle = () => {
    const next: Locale = locale === "tr" ? "en" : "tr";
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;samesite=lax`;
    router.refresh();
  };

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4 sm:py-6">
      <a href="#top" className="py-2 text-lg font-bold lowercase">
        {NAME}
      </a>
      <nav aria-label="Main" className="-mx-2 flex flex-wrap items-center font-mono text-[13px]">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hidden min-h-11 items-center px-3 hover:text-accent sm:inline-flex"
          >
            {t(locale, l.key)}
          </a>
        ))}
        <button
          type="button"
          onClick={toggle}
          aria-label={t(locale, "nav.language")}
          className="inline-flex min-h-11 cursor-pointer items-center px-3 text-muted hover:text-text"
        >
          <span className={locale === "tr" ? "text-text" : undefined}>tr</span>
          <span aria-hidden="true">&nbsp;/&nbsp;</span>
          <span className={locale === "en" ? "text-text" : undefined}>en</span>
        </button>
        <a
          href={CV_URL}
          download
          className="ml-1 inline-flex min-h-10 items-center rounded-full border border-border-strong px-4 hover:border-text"
        >
          cv.pdf ↓
        </a>
      </nav>
    </header>
  );
}
