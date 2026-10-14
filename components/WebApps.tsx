import Image from "next/image";
import { WEB_PROJECTS } from "@/data/content";
import { ArrowIcon, CodeIcon } from "@/components/icons";
import { t, type Locale } from "@/lib/i18n";

export function WebApps({ locale }: { locale: Locale }) {
  return (
    <section id="web" className="scroll-mt-6 pb-6 pt-14 lg:pt-20">
      <div className="reveal mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-4xl font-bold tracking-[-0.02em]">{t(locale, "web.title")}</h2>
        <p className="font-mono text-[13px] text-muted">
          {t(locale, "web.sub").replace("{n}", String(WEB_PROJECTS.length))}
        </p>
      </div>

      {/* Two columns from tablet up: big enough to actually see each screenshot. */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {WEB_PROJECTS.map((p) => (
          <li
            key={p.name}
            className="reveal group relative flex flex-col gap-3 rounded-[20px] bg-surface p-3 transition-[background-color,translate] duration-200 hover:-translate-y-1 hover:bg-surface-2 sm:p-4"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={p.image}
                width={1200}
                height={600}
                alt=""
                sizes="(min-width: 1152px) 540px, (min-width: 768px) 50vw, 100vw"
                className="aspect-[2/1] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="flex items-center justify-between gap-2 px-1 pt-1 text-xl font-semibold sm:text-[22px]">
              {/* The card is one big link to the live app; the code link sits above it. */}
              <a href={p.live} target="_blank" rel="noreferrer" className="after:absolute after:inset-0 after:rounded-[20px]">
                {p.name}
              </a>
              <ArrowIcon
                width={18}
                height={18}
                aria-hidden="true"
                className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </h3>
            <p className="px-1 leading-snug text-muted">{p.summary[locale]}</p>
            <div className="mt-auto flex items-center justify-between gap-2 px-1 pb-0.5">
              <span className="font-mono text-[12.5px] text-muted">{p.tech.join(" · ")}</span>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} — ${t(locale, "desktop.source")}`}
                className="relative z-10 -m-2 grid size-11 place-items-center rounded-full text-muted hover:text-text"
              >
                <CodeIcon width={18} height={18} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
