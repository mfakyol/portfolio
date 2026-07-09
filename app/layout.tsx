import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { NAME } from "@/data/content";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var l=localStorage.getItem('locale');if(l==='tr'||l==='en'){window.__LOCALE__=l;document.documentElement.lang=l;}}catch(e){}document.documentElement.classList.add('i18n-pending');setTimeout(function(){document.documentElement.classList.remove('i18n-pending');},1200);})();",
          }}
        />
        <Background />
        <I18nProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
