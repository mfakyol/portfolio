import Image from "next/image";
import { DESKTOP_PROJECTS } from "@/data/content";
import { ButtonLink } from "@/components/ButtonLink";
import { Spotlight } from "@/components/Spotlight";
import { CodeIcon, DownloadIcon } from "@/components/icons";
import { t, type Locale } from "@/lib/i18n";

export function DesktopApps({ locale }: { locale: Locale }) {
  return (
    <section id="work" className="flex scroll-mt-6 flex-col gap-6 border-t border-border pt-14 lg:pt-20">
      <div className="reveal flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-4xl font-bold tracking-[-0.02em]">{t(locale, "desktop.title")}</h2>
        <p className="font-mono text-[13px] text-muted">{t(locale, "desktop.sub")}</p>
      </div>

      {DESKTOP_PROJECTS.map((p, i) => (
        <Spotlight
          key={p.name}
          className="reveal flex flex-col gap-6 rounded-[20px] bg-surface p-4 sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-9"
        >
          {/* Screenshot first on phones; alternates sides on wide screens. */}
          <Image
            src={p.image.src}
            width={p.image.width}
            height={p.image.height}
            alt={p.image.alt[locale]}
            sizes="(min-width: 1024px) 640px, 100vw"
            className={`w-full rounded-xl lg:w-[58%] ${i % 2 ? "lg:order-last" : ""}`}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <p className="font-mono text-[12.5px] text-muted">{p.platforms}</p>
            <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-4xl">{p.name}</h3>
            <p className="text-muted">{p.description[locale]}</p>
            <p className="rounded-r-xl border-l-2 border-accent bg-surface-2 px-4 py-3 text-[15px] leading-snug">
              <span className="block font-mono text-[12.5px] text-accent">{t(locale, "desktop.hard")}</span>
              {p.hardPart[locale]}
            </p>
            <p className="font-mono text-[12.5px] text-muted">{p.tech.join(" · ")}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink variant="primary" href={p.download} target="_blank" rel="noreferrer">
                <DownloadIcon width={16} height={16} /> {t(locale, "desktop.download")}
              </ButtonLink>
              <ButtonLink href={p.repo} target="_blank" rel="noreferrer">
                <CodeIcon width={16} height={16} /> {t(locale, "desktop.source")}
              </ButtonLink>
            </div>
          </div>
        </Spotlight>
      ))}
    </section>
  );
}
