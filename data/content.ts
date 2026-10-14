export type Locale = "tr" | "en";
type Localized = Record<Locale, string>;

// ---- Personal ----
export const NAME = "Fatih Akyol";
export const EMAIL = "muhammedfatihakyol@gmail.com";
export const GITHUB = "https://github.com/mfakyol";
export const LINKEDIN = "https://www.linkedin.com/in/mfatihakyol/";
/** Served from public/. Keep the file name in sync when the CV is replaced. */
export const CV_URL = "/Fatih_Akyol_CV.pdf";

export const ROLE: Localized = {
  tr: "Senior Frontend Developer",
  en: "Senior Frontend Developer",
};
export const LOCATION = "İstanbul";

// ---- Hero ----
export const GREETING: Localized = {
  tr: "Merhaba, ben Fatih",
  en: "Hi, I'm Fatih",
};

export const HEADLINE: Localized = {
  tr: "React ve Next.js ile ürünler geliştiriyor, uçtan uca yayına alıyorum.",
  en: "I build React and Next.js products, and ship them end to end.",
};

export const INTRO: Localized = {
  tr: "Uzmanlığım frontend; backend tarafında da Node.js ve Express ile rahatım. Beş yıldır farklı sektörlerden müşteriler için canlı ürünler geliştiriyorum: admin panelleri, e-ticaret, masaüstü ve mobil uygulamalar, kiosklar.",
  en: "Frontend is my specialty, and I'm just as comfortable with Node.js and Express on the backend. Five years shipping production software for clients across industries: admin dashboards, e-commerce, desktop and mobile apps, and kiosks.",
};

// The "at a glance" row under the hero.
export const GLANCE: { label: Localized; value: Localized }[] = [
  { label: { tr: "deneyim", en: "experience" }, value: { tr: "5+ yıl", en: "5+ years" } },
  { label: { tr: "şu an", en: "currently" }, value: { tr: "Naxxt Software", en: "Naxxt Software" } },
  {
    label: { tr: "uzmanlık", en: "specialty" },
    value: { tr: "React · Next.js · TypeScript", en: "React · Next.js · TypeScript" },
  },
  {
    label: { tr: "backend", en: "backend" },
    value: { tr: "Node.js · Express · MongoDB", en: "Node.js · Express · MongoDB" },
  },
];

// ---- Experience ----
export interface Experience {
  company: string;
  role: Localized;
  period: Localized;
  /** Each bullet opens with a bold `lead`, followed by `text`. */
  bullets: { lead: Localized; text: Localized }[];
}

export const EXPERIENCE_SUMMARY: Localized = {
  tr: "Ajans projelerinde frontend'i ilk mimari toplantısından canlıya kadar yönetiyorum.",
  en: "Leading the frontend on agency projects, from the first architecture call to production.",
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Naxxt Software",
    role: {
      tr: "Frontend Developer → Senior Frontend Developer",
      en: "Frontend Developer → Senior Frontend Developer",
    },
    period: { tr: "Mart 2021 — Devam ediyor", en: "Mar 2021 — now" },
    bullets: [
      {
        lead: { tr: "Frontend lead:", en: "Frontend lead" },
        text: {
          tr: "7 kişilik ekipte mimari, kütüphane seçimleri ve kod standartları; kod incelemeleri ve junior geliştiricilere mentorluk",
          en: "in a 7-person team: architecture, library choices and code standards, plus code reviews and mentoring juniors",
        },
      },
      {
        lead: { tr: "Farklı sektörlerden müşteriler için:", en: "Shipped for clients across industries:" },
        text: {
          tr: "admin panelleri, ödeme adımlarıyla e-ticaret siteleri, şirket içi masaüstü uygulamaları ve React Native mobil uygulamalar",
          en: "admin dashboards, e-commerce storefronts with checkout and payments, internal desktop apps and React Native mobile apps",
        },
      },
      {
        lead: { tr: "Kiosk yazılımları:", en: "Kiosk software" },
        text: {
          tr: "Electron ile, kâğıt para ve bozuk para kabul cihazlarıyla entegre",
          en: "in Electron, integrated with bill and coin acceptors",
        },
      },
      {
        lead: {
          tr: "İş açısından kritik bir admin panelini sıfırdan yeniden yazdım:",
          en: "Rebuilt a business-critical admin dashboard",
        },
        text: {
          tr: "daha hızlı yükleme, daha sıkı rol bazlı yetkilendirme, çok daha iyi bir deneyim",
          en: "from scratch: faster loads, stricter role-based access, a far better experience",
        },
      },
      {
        lead: { tr: "Güvenlik açıklarını kapattım:", en: "Closed security gaps" },
        text: {
          tr: "ekibin kontrolü dışındaki bir backend için Backend-for-Frontend katmanı; httpOnly cookie oturumları ve sunucuda yapılan yetki kontrolleri",
          en: "in a backend outside the team's control with a Backend-for-Frontend layer: httpOnly cookie sessions, permissions enforced on the server",
        },
      },
      {
        lead: { tr: "Eski uygulamaları modernleştirdim:", en: "Modernized legacy apps:" },
        text: {
          tr: "AngularJS, jQuery ve Angular 4–9 kod tabanlarını React ve Next.js'e taşıdım",
          en: "AngularJS, jQuery and Angular 4–9 codebases moved to React and Next.js",
        },
      },
    ],
  },
];

// ---- Skills ----
export interface SkillGroup {
  title: Localized;
  items: string[];
  /** Items shown as highlighted chips (the core stack). */
  core?: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: { tr: "frontend", en: "frontend" },
    items: ["TypeScript", "React 19", "Next.js", "Vue 3", "Redux Toolkit", "Zustand", "TanStack Query", "Tailwind CSS", "Ant Design"],
    core: ["TypeScript", "React 19", "Next.js"],
  },
  { title: { tr: "masaüstü & mobil", en: "desktop & mobile" }, items: ["Electron", "React Native"] },
  {
    title: { tr: "gerçek zamanlı & grafik", en: "realtime & graphics" },
    items: ["Socket.io", "WebSockets", "Three.js", "Konva"],
  },
  { title: { tr: "backend", en: "backend" }, items: ["Node.js", "Express", "MongoDB", "BFF & cookie auth"] },
  {
    title: { tr: "test & yayın", en: "testing & delivery" },
    items: ["Vitest", "Testing Library", "Playwright", "Docker", "nginx", "AWS", "CI/CD"],
  },
];

// ---- Education ----
export interface Education {
  school: string;
  degree: Localized;
  year: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Erciyes Üniversitesi",
    degree: { tr: "Bilgisayar Mühendisliği (Lisans)", en: "B.Sc. Computer Engineering" },
    year: "2021",
  },
];

// ---- Projects ----
/** Desktop apps get a full case-study block; they ship as installers on GitHub Releases. */
export interface DesktopProject {
  name: string;
  platforms: string;
  description: Localized;
  /** One or two sentences on the hardest engineering problem — interview material. */
  hardPart: Localized;
  tech: string[];
  repo: string;
  download: string;
  image: { src: string; width: number; height: number; alt: Localized };
}

/** Web apps are live on my own server and shown as cards. */
export interface WebProject {
  name: string;
  summary: Localized;
  tech: string[];
  live: string;
  repo: string;
  image: string;
}

export const DESKTOP_PROJECTS: DesktopProject[] = [
  {
    name: "Clipboard History",
    platforms: "windows · macos",
    description: {
      tr: "Ctrl+Shift+V ile geçmişin yazdığın alanın hemen altında açılır. Bir öğeye tıkla, oraya yapışsın.",
      en: "Ctrl+Shift+V opens your history right under the field you're typing in. Click an item and it's pasted there.",
    },
    hardPart: {
      tr: "Hiç odak almayan bir pencere; UI Automation ve Accessibility API ile imlecin altına yerleşiyor, küçük C# ve Swift yardımcılarıyla.",
      en: "A window that never takes focus, placed under the caret with UI Automation and the Accessibility API, through small C# and Swift helpers.",
    },
    tech: ["Electron", "React", "Vite", "C#", "Swift"],
    repo: "https://github.com/mfakyol/clipboard-history",
    download: "https://github.com/mfakyol/clipboard-history/releases/latest",
    image: {
      src: "/projects/clipboard-history.png",
      width: 960,
      height: 480,
      alt: {
        tr: "Bir not editöründe imlecin altında açılmış Clipboard History",
        en: "Clipboard History opened under the caret in a notes editor",
      },
    },
  },
  {
    name: "Screen Splitter",
    platforms: "windows · macos",
    description: {
      tr: "Mağaza TV'leri ve kiosklar için dijital tabela: ekranı bölgelere ayır, her bölgeye bir web sayfası ver ve hepsini her monitörde tam ekran oynat.",
      en: "Digital signage for store TVs and kiosks: split a screen into zones, give each zone a web page and play them full screen on every monitor.",
    },
    hardPart: {
      tr: "Gömülmeyi reddeden sayfalar bile yükleniyor, çöken sayfalar kendini yeniliyor, pencereler takılıp çıkarılan monitörleri takip ediyor. 150 test.",
      en: "Pages that refuse to be embedded still load, crashed pages reload themselves and windows follow monitors as they are plugged in. 150 tests.",
    },
    tech: ["Electron", "React", "TypeScript", "Vitest"],
    repo: "https://github.com/mfakyol/screen-splitter",
    download: "https://github.com/mfakyol/screen-splitter/releases/latest",
    image: {
      src: "/projects/screen-splitter.png",
      width: 1180,
      height: 590,
      alt: {
        tr: "Yerleşim önizlemesiyle Screen Splitter ayarlar penceresi",
        en: "Screen Splitter settings window with a layout preview",
      },
    },
  },
];

export const WEB_PROJECTS: WebProject[] = [
  {
    name: "Realtime Chat",
    summary: {
      tr: "Grup sohbetleri, okundu bilgisi, yazıyor göstergesi ve çevrimiçi durumu",
      en: "Group chats, read receipts, typing indicators and presence",
    },
    tech: ["Next.js", "Socket.io"],
    live: "https://chat.fatihakyol.com",
    repo: "https://github.com/mfakyol/chatapp",
    image: "/projects/chat.png",
  },
  {
    name: "Code Editor",
    summary: {
      tr: "Canlı önizleme; Sass, Less, Pug ve JSX sunucuda derleniyor",
      en: "Live preview with server-side Sass, Less, Pug and JSX",
    },
    tech: ["React", "CodeMirror 6"],
    live: "https://codeeditor.fatihakyol.com",
    repo: "https://github.com/mfakyol/code-editor",
    image: "/projects/code-editor.png",
  },
  {
    name: "Collab Whiteboard",
    summary: {
      tr: "Ortak tahtalarda gerçek zamanlı, çok kullanıcılı çizim",
      en: "Realtime multi-user drawing on shared boards",
    },
    tech: ["React", "Konva", "Socket.io"],
    live: "https://draw.fatihakyol.com",
    repo: "https://github.com/mfakyol/whiteboard",
    image: "/projects/draw.png",
  },
  {
    name: "Lynx",
    summary: {
      tr: "Tıklama grafikleri ve dünya haritasıyla URL kısaltıcı",
      en: "URL shortener with click charts and a world map",
    },
    tech: ["React", "Recharts"],
    live: "https://lynx.fatihakyol.com",
    repo: "https://github.com/mfakyol/lynx",
    image: "/projects/lynx.png",
  },
  {
    name: "Meet",
    summary: {
      tr: "Ekran paylaşımlı, eşten eşe görüntülü görüşme",
      en: "Peer-to-peer video calls with screen sharing",
    },
    tech: ["WebRTC", "Socket.io"],
    live: "https://meet.fatihakyol.com",
    repo: "https://github.com/mfakyol/meet",
    image: "/projects/meet.png",
  },
  {
    name: "Toolbox",
    summary: {
      tr: "Dönüştürücüler, tek kullanımlık şifreler ve geliştirici araçları",
      en: "Converters, one-time secrets and dev tools",
    },
    tech: ["React", "Express"],
    live: "https://toolbox.fatihakyol.com",
    repo: "https://github.com/mfakyol/toolbox",
    image: "/projects/toolbox.png",
  },
  {
    name: "Links",
    summary: {
      tr: "Tıklama analitiğiyle link-in-bio sayfa kurucu",
      en: "Link-in-bio builder with click analytics",
    },
    tech: ["Next.js", "Mantine"],
    live: "https://links.fatihakyol.com",
    repo: "https://github.com/mfakyol/links",
    image: "/projects/link.png",
  },
  {
    name: "Typing Test",
    summary: {
      tr: "Dakikada kelime ve doğruluk, sonuçlar kaydediliyor",
      en: "Words per minute and accuracy, with saved results",
    },
    tech: ["React", "Tailwind"],
    live: "https://typing.fatihakyol.com",
    repo: "https://github.com/mfakyol/typing",
    image: "/projects/typing.png",
  },
];

// ---- UI strings ----
export const UI: Record<Locale, Record<string, string>> = {
  tr: {
    "nav.experience": "deneyim",
    "nav.work": "projeler",
    "nav.contact": "iletişim",
    "nav.language": "Dili İngilizce yap",
    "cv.download": "CV'yi indir",
    "experience.title": "Deneyim",
    "experience.more": "tüm geçmiş cv'de",
    "experience.education": "eğitim",
    "desktop.title": "Masaüstü uygulamaları",
    "desktop.sub": "kurulum dosyaları github releases'ta",
    "desktop.hard": "işin zor kısmı",
    "desktop.download": "İndir",
    "desktop.source": "Kaynak kod",
    "web.title": "Canlıdaki web uygulamaları",
    "web.sub": "{n} uygulama · kendi sunucumda docker + nginx",
    "web.open": "Aç",
    "contact.title": "Frontend rolü için birini mi arıyorsunuz?",
    "contact.sub": "Tüm geçmişim CV'de.",
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    "nav.experience": "experience",
    "nav.work": "work",
    "nav.contact": "contact",
    "nav.language": "Switch to Turkish",
    "cv.download": "Download CV",
    "experience.title": "Experience",
    "experience.more": "full history in the cv",
    "experience.education": "education",
    "desktop.title": "Desktop apps",
    "desktop.sub": "installers on github releases",
    "desktop.hard": "the hard part",
    "desktop.download": "Download",
    "desktop.source": "Source",
    "web.title": "Live on the web",
    "web.sub": "{n} apps · docker + nginx on my own server",
    "web.open": "Open",
    "contact.title": "Hiring for a frontend role?",
    "contact.sub": "The CV has the full history.",
    "footer.rights": "All rights reserved.",
  },
};
