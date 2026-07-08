"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { NAME } from "@/data/content";

const LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#experience", key: "nav.experience" },
  { href: "#skills", key: "nav.skills" },
  { href: "#projects", key: "nav.projects" },
  { href: "#contact", key: "nav.contact" },
];

export function Nav() {
  const { t, locale, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="font-semibold tracking-tight">
          {NAME.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        <button
          onClick={toggle}
          className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-border-strong hover:text-text"
          aria-label="Change language"
        >
          {locale === "tr" ? "EN" : "TR"}
        </button>
      </nav>
    </header>
  );
}
