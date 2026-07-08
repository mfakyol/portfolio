"use client";

import { useI18n } from "@/lib/i18n";
import { NAME } from "@/data/content";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>
          © {year} {NAME}. {t("footer.rights")}
        </span>
        <span>{t("footer.built")}</span>
      </div>
    </footer>
  );
}
