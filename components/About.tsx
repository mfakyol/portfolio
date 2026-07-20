import { STATS } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { t, type Locale } from "@/lib/i18n";

export function About({ locale }: { locale: Locale }) {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="01" title={t(locale, "about.title")} />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>{t(locale, "about.p1")}</p>
              <p>{t(locale, "about.p2")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {STATS.map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-border bg-surface/60 p-5"
                >
                  <div className="gradient-text text-3xl font-extrabold">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted">{s.label[locale]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
