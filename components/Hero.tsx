import type { CSSProperties } from "react";
import { CV_URL, GITHUB, GLANCE, GREETING, HEADLINE, INTRO, LINKEDIN, LOCATION, ROLE } from "@/data/content";
import { ButtonLink } from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { t, type Locale } from "@/lib/i18n";

// Typewriter timing for the greeting (CSS-only, see .type-char in globals.css).
const TYPE_START = 350;
const TYPE_STEP = 60;
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  const greeting = Array.from(GREETING[locale]);
  const typed = TYPE_START + greeting.length * TYPE_STEP;

  return (
    <section id="top" className="pb-14 pt-10 sm:pt-16 lg:pt-24">
      <p className="rise font-mono text-[13px] text-accent">
        {ROLE[locale]} · {LOCATION}
      </p>
      <p className="rise mt-5 text-[22px] font-medium [--d:90ms] sm:text-[26px]">
        {/* Screen readers get the whole greeting once; the typed characters are decorative. */}
        <span className="sr-only">{GREETING[locale]}</span>
        <span aria-hidden="true">
          {greeting.map((c, i) => (
            <span key={i} className="type-char" style={delay(TYPE_START + i * TYPE_STEP)}>
              {c}
            </span>
          ))}
        </span>
        <span aria-hidden="true" className="type-caret" style={{ "--done": `${typed + 900}ms` } as CSSProperties} />{" "}
        <span
          className="wave type-char"
          role="img"
          aria-label="waving hand"
          style={{ ...delay(typed + 150), "--wave-delay": `${typed + 300}ms` } as CSSProperties}
        >
          👋
        </span>
      </p>
      <h1 className="rise mt-3 max-w-4xl [--d:180ms] text-[40px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[80px] lg:leading-[0.98]">
        {HEADLINE[locale]}
      </h1>
      <p className="rise mt-6 max-w-2xl text-[17px] leading-relaxed text-muted [--d:270ms] sm:text-xl">
        {INTRO[locale]}
      </p>

      <div className="rise mt-8 flex flex-wrap gap-3 [--d:360ms]">
        <ButtonLink variant="primary" href={CV_URL} download>
          <DownloadIcon width={16} height={16} /> {t(locale, "cv.download")}
        </ButtonLink>
        <ButtonLink href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </ButtonLink>
        <ButtonLink href={GITHUB} target="_blank" rel="noreferrer">
          GitHub
        </ButtonLink>
      </div>

      {/* 1px gaps over a border-colored grid draw the dividers between cells. On wide screens
          the columns are sized to their values so the stack lists stay on one line. */}
      <dl className="rise mt-12 grid [--d:450ms] grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-[0.7fr_0.85fr_1.25fr_1.35fr]">
        {GLANCE.map((g) => (
          <div key={g.label.en} className="bg-bg px-5 py-4 lg:px-4 xl:px-5">
            <dt className="font-mono text-[12.5px] text-muted">{g.label[locale]}</dt>
            <dd className="mt-1 text-lg font-semibold">{g.value[locale]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
