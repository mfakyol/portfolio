import { NAME } from "@/data/content";
import { t, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  // Server component: the year is rendered on the server per request, so there
  // is no client/server mismatch to guard against.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>
          © {year} {NAME}. {t(locale, "footer.rights")}
        </span>
        <span>{t(locale, "footer.built")}</span>
      </div>
    </footer>
  );
}
