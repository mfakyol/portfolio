import { EDUCATION, EXPERIENCE, EXPERIENCE_SUMMARY, SKILLS } from "@/data/content";
import { t, type Locale } from "@/lib/i18n";

export function Experience({ locale }: { locale: Locale }) {
  return (
    <section
      id="experience"
      className="flex scroll-mt-6 flex-col gap-8 border-t border-border py-14 lg:flex-row lg:gap-10 lg:py-20"
    >
      <div className="reveal lg:w-1/3">
        <h2 className="text-4xl font-bold tracking-[-0.02em]">{t(locale, "experience.title")}</h2>
        <p className="mt-3 text-muted">{EXPERIENCE_SUMMARY[locale]}</p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-10">
        {EXPERIENCE.map((e) => (
          <article key={e.company}>
            <div className="reveal flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[22px] font-semibold">{e.company}</h3>
              <span className="font-mono text-[13px] text-muted">{e.period[locale]}</span>
            </div>
            <p className="mt-0.5 text-muted">{e.role[locale]}</p>
            <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {e.bullets.map((b) => (
                <li
                  key={b.lead.en}
                  className="reveal rounded-xl border border-transparent bg-surface px-4 py-4 leading-snug transition-[translate,background-color,border-color] duration-300 ease-soft hover:border-border-strong hover:bg-surface-2 motion-safe:hover:-translate-y-0.5"
                >
                  <strong className="font-semibold">{b.lead[locale]}</strong> {b.text[locale]}
                </li>
              ))}
            </ul>
          </article>
        ))}

        <div className="flex flex-col gap-4">
          {SKILLS.map((g) => (
            <div key={g.title.en} className="reveal flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
              <h3 className="shrink-0 font-mono text-[13px] font-medium text-muted sm:w-44">
                {g.title[locale]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) =>
                  g.core?.includes(item) ? (
                    <li
                      key={item}
                      className="rounded-full bg-accent px-3 py-1.5 text-[14.5px] font-semibold text-accent-ink transition-[translate,box-shadow] duration-300 ease-soft hover:shadow-[0_6px_18px_-8px_var(--color-accent)] motion-safe:hover:-translate-y-0.5"
                    >
                      {item}
                    </li>
                  ) : (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-[14.5px] transition-[translate,border-color,color] duration-300 ease-soft hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {EDUCATION.map((e) => (
            <p
              key={e.school}
              className="mt-2 flex flex-col gap-1 border-t border-border pt-5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="shrink-0 font-mono text-[13px] text-muted sm:w-44">
                {t(locale, "experience.education")}
              </span>
              <span>
                {e.degree[locale]}, {e.school}, {e.year}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
