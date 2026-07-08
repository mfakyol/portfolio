"use client";

import { useI18n } from "@/lib/i18n";
import { EMAIL, GITHUB, LINKEDIN } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GitHubIcon, MailIcon, LinkedInIcon } from "./icons";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="05" title={t("contact.title")} sub={t("contact.sub")} />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-surface/60 p-8 sm:p-10">
            <a
              href={`mailto:${EMAIL}`}
              className="gradient-text break-all text-2xl font-bold tracking-tight hover:opacity-90 sm:text-4xl"
            >
              {EMAIL}
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
              >
                {t("contact.email")}
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-border-strong"
              >
                <GitHubIcon width={18} height={18} /> GitHub
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-border-strong"
              >
                <LinkedInIcon width={18} height={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
