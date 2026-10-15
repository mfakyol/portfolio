import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { NAME } from "@/data/content";
import { getLocale } from "@/lib/i18n.server";
import type { Locale } from "@/lib/i18n";

// latin-ext covers Turkish letters (ş, ğ, ı, İ).
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

// Matches the page language; a description in another language than the body
// tends to be ignored by Google in favour of a snippet it picks itself.
const DESCRIPTION: Record<Locale, string> = {
  tr: "React, Next.js ve TypeScript odaklı Senior Frontend Developer; backend tarafında Node.js ve Express. Yayında web uygulamaları, Windows ve macOS için masaüstü uygulamaları.",
  en: "Senior Frontend Developer specialized in React, Next.js and TypeScript, with Node.js and Express on the backend. Web apps live in production and desktop apps for Windows and macOS.",
};

const TITLE = `${NAME} — Senior Frontend Developer`;

// The share images come from app/opengraph-image.png and app/twitter-image.png (file
// convention); metadataBase turns their paths into the absolute URLs crawlers require.
export async function generateMetadata(): Promise<Metadata> {
  const description = DESCRIPTION[await getLocale()];
  return {
    metadataBase: new URL("https://fatihakyol.com"),
    title: TITLE,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title: TITLE,
      description,
      url: "/",
      siteName: NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale is resolved on the server from the cookie, so the very first HTML is
  // already in the right language — no client flash, no pre-hydration script.
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${bricolage.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div aria-hidden="true" className="page-glow" />
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-8 lg:px-10">
          <Nav locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </div>
        <RevealObserver />
      </body>
    </html>
  );
}
