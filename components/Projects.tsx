"use client";

import { useI18n } from "@/lib/i18n";
import { PROJECTS } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ArrowIcon, CodeIcon } from "./icons";

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

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <article className="card-glow flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <p className="text-sm text-accent">{p.tagline[locale]}</p>
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
                        <CodeIcon width={16} height={16} />
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
                        <ArrowIcon width={16} height={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.description[locale]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-2"
                  >
                    {t("projects.live")} <ArrowIcon width={14} height={14} />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
