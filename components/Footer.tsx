import { GITHUB, LINKEDIN, NAME } from "@/data/content";
import { t, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  // Server component: the year is rendered on the server per request, so there
  // is no client/server mismatch to guard against.
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-3 pb-8 font-mono text-[12.5px] text-muted">
      <span>
        © {year} {NAME}. {t(locale, "footer.rights")}
      </span>
      <span className="flex gap-1">
        <a href={GITHUB} target="_blank" rel="noreferrer" className="px-2 py-3 hover:text-text">
          github
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="px-2 py-3 hover:text-text">
          linkedin
        </a>
      </span>
    </footer>
  );
}
