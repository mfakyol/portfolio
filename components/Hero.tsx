"use client";

import { motion } from "motion/react";
import { NAME, ROLE, TAGLINES, GITHUB, EMAIL, LINKEDIN } from "@/data/content";
import { GitHubIcon, MailIcon, LinkedInIcon } from "@/components/icons";
import { Typewriter } from "@/components/Typewriter";
import { ShinyText } from "@/components/ShinyText";
import { t, type Locale } from "@/lib/i18n";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
});

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section id="top" className="relative flex min-h-svh items-center px-5 pt-16">
      <div className="mx-auto w-full max-w-5xl">
        <motion.span
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t(locale, "hero.available")}
        </motion.span>

        <motion.h1
          {...fade(0.08)}
          className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          {NAME.split(" ")[0]} <span className="gradient-text">{NAME.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-4 text-xl font-semibold sm:text-2xl"
        >
          <ShinyText text={ROLE[locale]} />
        </motion.p>

        <motion.p
          {...fade(0.24)}
          className="mt-4 flex min-h-[3.5rem] max-w-xl items-start text-base leading-relaxed text-muted sm:min-h-[2rem] sm:text-lg"
        >
          <Typewriter phrases={TAGLINES[locale]} />
        </motion.p>

        <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="glow-btn rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5"
          >
            {t(locale, "hero.cta.projects")}
          </a>
          <a
            href="#contact"
            className="glow-btn rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text hover:border-border-strong"
          >
            {t(locale, "hero.cta.contact")}
          </a>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-8 flex items-center gap-4 text-muted">
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-text">
            <GitHubIcon />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-text">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-colors hover:text-text">
            <MailIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
