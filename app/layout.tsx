import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { NAME } from "@/data/content";
import { getLocale } from "@/lib/i18n.server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${NAME} — Frontend Developer`,
  description:
    "Frontend Developer building modern, fast and accessible web interfaces with React, Next.js and TypeScript.",
  openGraph: {
    title: `${NAME} — Frontend Developer`,
    description:
      "Frontend Developer building modern web interfaces with React, Next.js and TypeScript.",
    type: "website",
  },
};

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Background />
        <Nav locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
