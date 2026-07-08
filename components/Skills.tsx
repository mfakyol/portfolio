"use client";

import { useI18n } from "@/lib/i18n";
import { SKILLS } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t, locale } = useI18n();

  return (
    <section id="skills" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="03" title={t("skills.title")} sub={t("skills.sub")} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title.en} delay={i * 0.05}>
              <div className="card-glow h-full rounded-2xl border border-border bg-surface/60 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
                  {group.title[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-sm text-text"
                    >
                      {item}
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
