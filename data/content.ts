export type Locale = "tr" | "en";

// ---- Personal ----
export const NAME = "Fatih Akyol";
export const EMAIL = "muhammedfatihakyol@gmail.com";
export const GITHUB = "https://github.com/mfakyol";
export const LINKEDIN = "https://www.linkedin.com/in/mfatihakyol/";

export const ROLE: Record<Locale, string> = {
  tr: "Senior Frontend Developer",
  en: "Senior Frontend Developer",
};

export const TAGLINE: Record<Locale, string> = {
  tr: "Modern, hızlı ve erişilebilir web arayüzleri kuruyorum.",
  en: "I build modern, fast and accessible web interfaces.",
};

// Cycled with a typewriter effect in the hero.
export const TAGLINES: Record<Locale, string[]> = {
  tr: [
    "Modern, hızlı ve erişilebilir web arayüzleri kuruyorum.",
    "Figma tasarımlarını piksel-mükemmel arayüzlere çeviriyorum.",
    "Ölçeklenen React & Next.js uygulamaları geliştiriyorum.",
    "Gerçek zamanlı, Socket.io'lu deneyimler tasarlıyorum.",
    "Docker & nginx ile full-stack ürünler yayına alıyorum.",
  ],
  en: [
    "I build modern, fast and accessible web interfaces.",
    "I turn Figma designs into pixel-perfect UIs.",
    "I craft React & Next.js apps that scale.",
    "I design realtime experiences with Socket.io.",
    "I ship full-stack products with Docker & nginx.",
  ],
};

// ---- Skills ----
export interface SkillGroup {
  title: Record<Locale, string>;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: { tr: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "Angular",
      "AngularJS",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS / CSS Modules",
      "Framer Motion",
      "Electron",
    ],
  },
  {
    title: { tr: "State & Veri", en: "State & Data" },
    items: [
      "Redux",
      "Zustand",
      "TanStack Query",
      "react-hook-form",
      "REST API",
    ],
  },
  {
    title: { tr: "UI & Canvas", en: "UI & Canvas" },
    items: ["Mantine", "react-konva"],
  },
  {
    title: { tr: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.io", "SignalR"],
  },
  {
    title: { tr: "Test & Kalite", en: "Testing & Quality" },
    items: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "Prettier",
    ],
  },
  {
    title: { tr: "Araçlar & DevOps", en: "Tools & DevOps" },
    items: [
      "Docker",
      "nginx",
      "Git & GitHub",
      "Linux / VPS",
      "Vite",
      "Webpack",
      "Figma",
    ],
  },
];

// ---- Projects ----
export interface Project {
  name: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  tech: string[];
  live?: string;
  repo?: string;
  /** Desktop apps: link to the installers (GitHub Releases) instead of a live URL. */
  download?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Clipboard History",
    tagline: {
      tr: "Pano yöneticisi",
      en: "Clipboard manager",
    },
    description: {
      tr: "Windows ve macOS için pano geçmişi: Ctrl+Shift+V ile yazdığın alanın hemen altında açılır, tek tıkla yapıştırırsın. Metin, link, renk ve görselleri saklar; arama ve sabitleme var.",
      en: "Clipboard history for Windows and macOS: Ctrl+Shift+V opens it right under the field you're typing in, and one click pastes. Keeps text, links, colors and images, with search and pinning.",
    },
    tech: ["Electron", "React", "Vite", "C#", "Swift"],
    repo: "https://github.com/mfakyol/clipboard-history",
    download: "https://github.com/mfakyol/clipboard-history/releases/latest",
    image: "/projects/clipboard-history.png",
  },
  {
    name: "Screen Splitter",
    tagline: {
      tr: "Dijital tabela",
      en: "Digital signage",
    },
    description: {
      tr: "Mağaza TV'leri ve kiosklar için: ekranı bölgelere ayır, her bölgeye bir web sayfası ver ve birden fazla monitörde tam ekran oynat. Windows ile açılır, tepside çalışır.",
      en: "For store TVs and kiosks: split a screen into zones, give each zone a web page and play them full screen across multiple monitors. Starts with Windows and runs in the tray.",
    },
    tech: ["Electron", "React", "TypeScript", "Vite", "Vitest"],
    repo: "https://github.com/mfakyol/screen-splitter",
    download: "https://github.com/mfakyol/screen-splitter/releases/latest",
    image: "/projects/screen-splitter.png",
  },
  {
    name: "Toolbox",
    tagline: {
      tr: "Geliştirici araç seti",
      en: "Developer toolkit",
    },
    description: {
      tr: "Görsel/font/favicon dönüştürme, tek kullanımlık şifre paylaşımı, dosya transferi, JSON/JWT/diff/hash gibi dev araçları ve bir API playground'u tek çatı altında.",
      en: "Image/font/favicon conversion, one-time secret sharing, file transfer, dev tools (JSON/JWT/diff/hash) and an API playground — all in one place.",
    },
    tech: ["React", "Vite", "TypeScript", "SCSS Modules", "Node.js", "Express", "MongoDB"],
    live: "https://toolbox.fatihakyol.com",
    repo: "https://github.com/mfakyol/toolbox",
    image: "/projects/toolbox.png",
  },
  {
    name: "Realtime Chat",
    tagline: {
      tr: "Gerçek zamanlı mesajlaşma",
      en: "Realtime messaging",
    },
    description: {
      tr: "Socket.io ile anlık mesajlaşma, httpOnly cookie tabanlı oturum yönetimi, dosya paylaşımı ve okundu/çevrimiçi durumu. Next.js arayüz, Express + Socket.io sunucu.",
      en: "Instant messaging over Socket.io with httpOnly cookie sessions, file sharing and presence. Next.js front end, Express + Socket.io back end.",
    },
    tech: ["Next.js", "TypeScript", "Socket.io", "Express", "MongoDB", "Zustand"],
    live: "https://chat.fatihakyol.com",
    repo: "https://github.com/mfakyol/chatapp",
    image: "/projects/chat.png",
  },
  {
    name: "Meet",
    tagline: {
      tr: "Tarayıcıda görüntülü görüşme",
      en: "Browser video calls",
    },
    description: {
      tr: "Zoom benzeri görüntülü konferans: mesh WebRTC (P2P — medya sunucuya uğramaz) + Socket.io sinyalleşme. Oda linki paylaş, hesapsız katıl; kamera/mikrofon, ekran paylaşımı ve canlı sohbet.",
      en: "A Zoom-like video conferencing app: mesh WebRTC (P2P — media never touches the server) + Socket.io signaling. Share a room link, join without accounts; camera/mic, screen sharing and live chat.",
    },
    tech: ["React", "Vite", "TypeScript", "WebRTC", "Socket.io", "Express"],
    live: "https://meet.fatihakyol.com",
    repo: "https://github.com/mfakyol/meet",
    image: "/projects/meet.png",
  },
  {
    name: "Code Editor",
    tagline: {
      tr: "Tarayıcıda kod deneme alanı",
      en: "In-browser code playground",
    },
    description: {
      tr: "CodePen benzeri bir HTML/CSS/JS editörü: canlı önizleme, preprocessor derleme (Sass/Less/TS…), kalıcı kayıt, sosyal özellikler.",
      en: "A CodePen-style HTML/CSS/JS editor with live preview, preprocessor compilation (Sass/Less/TS…), persistence and social features.",
    },
    tech: ["React", "Vite", "TypeScript", "CodeMirror", "Express", "MongoDB"],
    live: "https://codeeditor.fatihakyol.com",
    repo: "https://github.com/mfakyol/code-editor",
    image: "/projects/code-editor.png",
  },
  {
    name: "Collab Whiteboard",
    tagline: {
      tr: "Çok kullanıcılı çizim tahtası",
      en: "Multiplayer drawing board",
    },
    description: {
      tr: "Sonsuz canvas üzerinde gerçek zamanlı ortak çizim: şekiller, seçim/döndürme/boyutlandırma, undo/redo, canlı imleçler ve presence. react-konva ile yazıldı.",
      en: "Realtime collaborative drawing on an infinite canvas: shapes, select/rotate/resize, undo/redo, live cursors and presence. Built with react-konva.",
    },
    tech: ["React", "Vite", "TypeScript", "react-konva", "Socket.io", "Express", "MongoDB"],
    live: "https://draw.fatihakyol.com",
    repo: "https://github.com/mfakyol/whiteboard",
    image: "/projects/draw.png",
  },
  {
    name: "Links",
    tagline: {
      tr: "Link-in-bio sayfa kurucu",
      en: "Link-in-bio page builder",
    },
    description: {
      tr: "Linktree tarzı, özelleştirilebilir bio sayfaları: sürükle-bırak sıralama, tema/tasarım, görsel yükleme ve tıklama analitiği.",
      en: "A Linktree-style customizable bio-page builder: drag-and-drop ordering, theming, image uploads and click analytics.",
    },
    tech: ["Next.js", "TypeScript", "Mantine", "dnd-kit", "Express", "MongoDB"],
    live: "https://links.fatihakyol.com",
    repo: "https://github.com/mfakyol/links",
    image: "/projects/link.png",
  },
  {
    name: "Lynx",
    tagline: {
      tr: "URL kısaltıcı + analitik",
      en: "URL shortener with analytics",
    },
    description: {
      tr: "Kimlik doğrulamalı panelle kısa linkler oluştur ve tıklama analitiğini incele: zaman aralıkları, grafikler, coğrafya haritası ve cihaz kırılımı. React/Vite SPA + Express API + MongoDB.",
      en: "Create short links from an authenticated dashboard and review click analytics: time ranges, charts, a world map and device breakdown. React/Vite SPA + Express API + MongoDB.",
    },
    tech: ["React", "Vite", "TypeScript", "Zustand", "Recharts", "Express", "MongoDB"],
    live: "https://lynx.fatihakyol.com",
    repo: "https://github.com/mfakyol/lynx",
    image: "/projects/lynx.png",
  },
  {
    name: "Typing Test",
    tagline: {
      tr: "Yazma hızı testi",
      en: "Typing speed test",
    },
    description: {
      tr: "Yazma hızını (WPM) ve doğruluğu ölçen bir test uygulaması; sonuçlar kaydedilir. React/Vite arayüz + Express/MongoDB API.",
      en: "A typing speed test measuring words-per-minute and accuracy, with saved results. React/Vite front end + Express/MongoDB API.",
    },
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
    live: "https://typing.fatihakyol.com",
    repo: "https://github.com/mfakyol/typing",
    image: "/projects/typing.png",
  },
];

// ---- Stats ----
export const STATS: { value: string; label: Record<Locale, string> }[] = [
  { value: "5+", label: { tr: "Yıl deneyim", en: "Years experience" } },
  { value: "8", label: { tr: "Canlı proje", en: "Live projects" } },
  { value: "∞", label: { tr: "Kahve", en: "Coffee" } },
];

// ---- Experience ----
export interface Experience {
  company: string;
  role: Record<Locale, string>;
  period: Record<Locale, string>;
  location: string;
  bullets: Record<Locale, string[]>;
  tech: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "naxxt software",
    role: {
      tr: "Mid / Senior Frontend Developer",
      en: "Mid / Senior Frontend Developer",
    },
    period: { tr: "Mart 2021 — Devam ediyor", en: "Mar 2021 — Present" },
    location: "İstanbul",
    bullets: {
      tr: [
        "React ve Next.js ile web uygulamaları geliştirdim; mevcut ürünlerde Angular ve AngularJS ile de çalıştım.",
        "TypeScript ile yeniden kullanılabilir UI bileşen sistemleri kurdum, Figma tasarımlarını responsive ve erişilebilir arayüzlere çevirdim.",
        "REST API entegrasyonları ve gerçek zamanlı özellikler (Socket.io, SignalR) geliştirdim; Node.js / Express / MongoDB ile uçtan uca çalıştım.",
        "Performans, kod kalitesi ve deploy süreçlerine katkı sağladım.",
      ],
      en: [
        "Built web applications with React and Next.js; also worked with Angular and AngularJS on existing products.",
        "Created reusable UI component systems in TypeScript and turned Figma designs into responsive, accessible interfaces.",
        "Developed REST API integrations and real-time features (Socket.io, SignalR); worked end-to-end with Node.js / Express / MongoDB.",
        "Contributed to performance, code quality and deployment.",
      ],
    },
    tech: [
      "React",
      "Next.js",
      "Angular",
      "AngularJS",
      "TypeScript",
      "Figma",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "SignalR",
    ],
  },
];

// ---- Education ----
export interface Education {
  school: string;
  degree: Record<Locale, string>;
  period: string;
  location: string;
}

export const EDUCATION: Education[] = [
  {
    school: "Erciyes Üniversitesi",
    degree: {
      tr: "Bilgisayar Mühendisliği (Lisans)",
      en: "Computer Engineering (BSc)",
    },
    period: "2015 — 2021",
    location: "Kayseri",
  },
];

// ---- UI strings ----
export const UI: Record<Locale, Record<string, string>> = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "hero.cta.projects": "Projeleri gör",
    "hero.cta.contact": "İletişime geç",
    "hero.available": "Yeni projelere açık",
    "about.title": "Hakkımda",
    "about.p1": "5+ yıldır web arayüzleri geliştiren bir Frontend Developer'ım. React ve Next.js ekosisteminde, performanslı ve bakımı kolay uygulamalar kurmaya odaklanıyorum.",
    "about.p2": "Full-stack tarafında Node.js, Express, MongoDB ve Socket.io ile uçtan uca ürünler geliştirip Docker + nginx ile kendi sunucuma deploy ediyorum. Aşağıdaki web projelerinin tamamı canlıda ve kendi altyapımda çalışıyor; masaüstü uygulamalarını ise Electron ile geliştirip GitHub Releases üzerinden kurulum dosyası olarak yayınlıyorum.",
    "experience.title": "Deneyim",
    "experience.sub": "Profesyonel çalışma geçmişim.",
    "experience.education": "Eğitim",
    "skills.title": "Yetenekler",
    "skills.sub": "Kullandığım teknolojiler ve araçlar.",
    "projects.title": "Projeler",
    "projects.sub": "Sıfırdan geliştirip yayına aldığım web ve masaüstü uygulamaları.",
    "projects.live": "Canlı",
    "projects.download": "İndir",
    "projects.code": "Kod",
    "contact.title": "İletişime geç",
    "contact.sub": "Bir fikrin mi var ya da birlikte çalışmak mı istiyorsun? Yaz.",
    "contact.email": "E-posta gönder",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.built": "Next.js ile geliştirildi",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "hero.available": "Open to new projects",
    "about.title": "About",
    "about.p1": "I'm a Frontend Developer with 5+ years of experience building web interfaces. I focus on performant, maintainable apps in the React and Next.js ecosystem.",
    "about.p2": "On the full-stack side I build end-to-end products with Node.js, Express, MongoDB and Socket.io, then ship them to my own server with Docker + nginx. Every web project below is live and running on my own infrastructure, and I build desktop apps with Electron and ship them as installers on GitHub Releases.",
    "experience.title": "Experience",
    "experience.sub": "My professional work history.",
    "experience.education": "Education",
    "skills.title": "Skills",
    "skills.sub": "Technologies and tools I work with.",
    "projects.title": "Projects",
    "projects.sub": "Web and desktop apps I designed, built and shipped from scratch.",
    "projects.live": "Live",
    "projects.download": "Download",
    "projects.code": "Code",
    "contact.title": "Get in touch",
    "contact.sub": "Got an idea, or want to work together? Drop me a line.",
    "contact.email": "Send an email",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js",
  },
};
