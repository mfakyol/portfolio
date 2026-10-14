import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { DesktopApps } from "@/components/DesktopApps";
import { WebApps } from "@/components/WebApps";
import { Contact } from "@/components/Contact";
import { EDUCATION, EMAIL, GITHUB, LINKEDIN, NAME, ROLE, SKILLS } from "@/data/content";
import { getLocale } from "@/lib/i18n.server";

// schema.org Person, so search engines know whose site this is. Built only from static
// content; `<` is escaped as the Next.js JSON-LD guide recommends.
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  jobTitle: ROLE.en,
  url: "https://fatihakyol.com",
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
  sameAs: [GITHUB, LINKEDIN],
  alumniOf: EDUCATION.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: SKILLS.flatMap((g) => g.core ?? []).concat("Node.js", "Electron"),
}).replace(/</g, "\\u003c");

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
      <Hero locale={locale} />
      <Experience locale={locale} />
      <DesktopApps locale={locale} />
      <WebApps locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
