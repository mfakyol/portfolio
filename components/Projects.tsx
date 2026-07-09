"use client";

import { useI18n } from "@/lib/i18n";
import { PROJECTS } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ArrowIcon, CodeIcon } from "./icons";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { GlowCard } from "./GlowCard";

export function Projects() {
  const { t, locale } = useI18n();

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            index="04"
            title={t("projects.title")}
            sub={t("projects.sub")}
          />
        </Reveal>

        <div className="h-[80vh] w-full">
          <ScrollStack>
            {PROJECTS.map((p, i) => (
              <ScrollStackItem key={p.name}>
                <GlowCard className="flex min-h-[360px] flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.8)] sm:p-10">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-sm text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-accent">{p.tagline[locale]}</p>
                    </div>
                    <div className="flex shrink-0 gap-2 text-muted">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} ${t("projects.code")}`}
                          className="rounded-lg border border-border p-2 transition-colors hover:border-border-strong hover:text-text"
                        >
                          <CodeIcon width={18} height={18} />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} ${t("projects.live")}`}
                          className="rounded-lg border border-border p-2 transition-colors hover:border-border-strong hover:text-text"
                        >
                          <ArrowIcon width={18} height={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                    {p.description[locale]}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="glow-btn inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5"
                      >
                        {t("projects.live")} <ArrowIcon width={14} height={14} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="glow-btn inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold text-text hover:border-border-strong"
                      >
                        <CodeIcon width={14} height={14} /> {t("projects.code")}
                      </a>
                    )}
                  </div>
                </div>
                </GlowCard>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
