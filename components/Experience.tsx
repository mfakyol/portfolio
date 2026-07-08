"use client";

import { useI18n } from "@/lib/i18n";
import { EXPERIENCE } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t, locale } = useI18n();

  return (
    <section id="experience" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            index="02"
            title={t("experience.title")}
            sub={t("experience.sub")}
          />
        </Reveal>

        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-lg font-bold">
                      {e.role[locale]}{" "}
                      <span className="text-accent">· {e.company}</span>
                    </h3>
                    <p className="text-sm text-muted">{e.location}</p>
                  </div>
                  <span className="font-mono text-sm text-muted">
                    {e.period[locale]}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {e.bullets[locale].map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {e.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
