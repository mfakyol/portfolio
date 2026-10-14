import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { DesktopApps } from "@/components/DesktopApps";
import { WebApps } from "@/components/WebApps";
import { Contact } from "@/components/Contact";
import { getLocale } from "@/lib/i18n.server";

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <Hero locale={locale} />
      <Experience locale={locale} />
      <DesktopApps locale={locale} />
      <WebApps locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
