import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { getLocale } from "@/lib/i18n.server";

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
