import { CV_URL, EMAIL } from "@/data/content";
import { ButtonLink } from "@/components/ButtonLink";
import { ArrowIcon, MailIcon } from "@/components/icons";
import { t, type Locale } from "@/lib/i18n";

export function Contact({ locale }: { locale: Locale }) {
  return (
    <section
      id="contact"
      className="reveal mb-8 mt-14 flex scroll-mt-6 hover:border-border-strong flex-col gap-6 rounded-3xl border border-border bg-surface px-5 py-7 sm:px-8 sm:py-9 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-11"
    >
      <div>
        <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-4xl">{t(locale, "contact.title")}</h2>
        <p className="mt-2 text-muted">{t(locale, "contact.sub")}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <ButtonLink variant="primary" href={`mailto:${EMAIL}`} className="max-w-full break-all">
          <MailIcon width={16} height={16} className="shrink-0" /> {EMAIL}
        </ButtonLink>
        <ButtonLink href={CV_URL} target="_blank" rel="noreferrer">
          <ArrowIcon width={16} height={16} /> {t(locale, "cv.view")}
        </ButtonLink>
      </div>
    </section>
  );
}
