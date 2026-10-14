import Image from "next/image";
import { PROJECTS } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, CodeIcon, DownloadIcon } from "@/components/icons";
import { GlowCard } from "@/components/GlowCard";
import { t, type Locale } from "@/lib/i18n";

export function Projects({ locale }: { locale: Locale }) {
  return (
    <section id="projects" className="scroll-mt-20 px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            index="04"
            title={t(locale, "projects.title")}
            sub={t(locale, "projects.sub")}
          />
        </Reveal>

        {/* Sticky stacking cards — driven by the normal page scroll. */}
        <div className="mt-10">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="sticky pb-6"
              style={{ top: `${96 + i * 16}px` }}
            >
              <GlowCard className="stack-card flex h-[380px] gap-8 overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.85)] sm:p-10">
                <div className="flex min-w-0 flex-1 flex-col justify-between">
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
                          aria-label={`${p.name} ${t(locale, "projects.code")}`}
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
                          aria-label={`${p.name} ${t(locale, "projects.live")}`}
                          className="rounded-lg border border-border p-2 transition-colors hover:border-border-strong hover:text-text"
                        >
                          <ArrowIcon width={18} height={18} />
                        </a>
                      )}
                      {p.download && (
                        <a
                          href={p.download}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.name} ${t(locale, "projects.download")}`}
                          className="rounded-lg border border-border p-2 transition-colors hover:border-border-strong hover:text-text"
                        >
                          <DownloadIcon width={18} height={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 line-clamp-3 max-w-2xl leading-relaxed text-muted">
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
                        {t(locale, "projects.live")} <ArrowIcon width={14} height={14} />
                      </a>
                    )}
                    {p.download && (
                      <a
                        href={p.download}
                        target="_blank"
                        rel="noreferrer"
                        className="glow-btn inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5"
                      >
                        <DownloadIcon width={14} height={14} /> {t(locale, "projects.download")}
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="glow-btn inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold text-text hover:border-border-strong"
                      >
                        <CodeIcon width={14} height={14} /> {t(locale, "projects.code")}
                      </a>
                    )}
                  </div>
                </div>
                </div>
                {p.image && (
                  <a
                    href={p.live ?? p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden w-[300px] shrink-0 self-center lg:block"
                    aria-label={p.name}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      width={600}
                      height={300}
                      className="rounded-xl border border-border object-cover transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </a>
                )}
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
