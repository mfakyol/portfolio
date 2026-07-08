export type Locale = "tr" | "en";

// ---- Personal ----
export const NAME = "Fatih Akyol";
export const EMAIL = "muhammedfatihakyol@gmail.com";
export const GITHUB = "https://github.com/mfakyol";
// TODO: gerçek LinkedIn adresini koy (yoksa Contact'tan kaldırılabilir).
export const LINKEDIN = "https://www.linkedin.com/in/mfakyol";

export const ROLE: Record<Locale, string> = {
  tr: "Frontend Developer",
  en: "Frontend Developer",
};

export const TAGLINE: Record<Locale, string> = {
  tr: "Modern, hızlı ve erişilebilir web arayüzleri kuruyorum.",
  en: "I build modern, fast and accessible web interfaces.",
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
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS / CSS Modules",
      "Framer Motion",
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
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "Socket.io"],
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
}

export const PROJECTS: Project[] = [
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
  },
  {
    name: "Realtime Chat",
    tagline: {
      tr: "Gerçek zamanlı mesajlaşma",
      en: "Realtime messaging",
    },
    description: {
      tr: "Socket.io ile anlık mesajlaşma, JWT kimlik doğrulama, dosya paylaşımı ve okundu/çevrimiçi durumu. Next.js arayüz, Express + Socket.io sunucu.",
      en: "Instant messaging over Socket.io with JWT auth, file sharing and presence. Next.js front end, Express + Socket.io back end.",
    },
    tech: ["Next.js", "TypeScript", "Socket.io", "Express", "MongoDB", "JWT"],
    live: "https://chat.fatihakyol.com",
    repo: "https://github.com/mfakyol/chatapp",
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
  },
];

// ---- Stats ----
export const STATS: { value: string; label: Record<Locale, string> }[] = [
  { value: "5+", label: { tr: "Yıl deneyim", en: "Years experience" } },
  { value: "5", label: { tr: "Canlı proje", en: "Live projects" } },
  { value: "∞", label: { tr: "Kahve", en: "Coffee" } },
];

// ---- UI strings ----
export const UI: Record<Locale, Record<string, string>> = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "hero.cta.projects": "Projeleri gör",
    "hero.cta.contact": "İletişime geç",
    "hero.available": "Yeni projelere açık",
    "about.title": "Hakkımda",
    "about.p1": "5+ yıldır web arayüzleri geliştiren bir Frontend Developer'ım. React ve Next.js ekosisteminde, performanslı ve bakımı kolay uygulamalar kurmaya odaklanıyorum.",
    "about.p2": "Full-stack tarafında Node.js, Express, MongoDB ve Socket.io ile uçtan uca ürünler geliştirip Docker + nginx ile kendi sunucuma deploy ediyorum. Aşağıdaki projelerin tamamı canlıda ve kendi altyapımda çalışıyor.",
    "skills.title": "Yetenekler",
    "skills.sub": "Kullandığım teknolojiler ve araçlar.",
    "projects.title": "Projeler",
    "projects.sub": "Sıfırdan geliştirip yayına aldığım, canlıda çalışan uygulamalar.",
    "projects.live": "Canlı",
    "projects.code": "Kod",
    "contact.title": "İletişime geç",
    "contact.sub": "Bir fikrin mi var ya da birlikte çalışmak mı istiyorsun? Yaz.",
    "contact.email": "E-posta gönder",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.built": "Next.js ile geliştirildi",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "hero.available": "Open to new projects",
    "about.title": "About",
    "about.p1": "I'm a Frontend Developer with 5+ years of experience building web interfaces. I focus on performant, maintainable apps in the React and Next.js ecosystem.",
    "about.p2": "On the full-stack side I build end-to-end products with Node.js, Express, MongoDB and Socket.io, then ship them to my own server with Docker + nginx. Every project below is live and running on my own infrastructure.",
    "skills.title": "Skills",
    "skills.sub": "Technologies and tools I work with.",
    "projects.title": "Projects",
    "projects.sub": "Live apps I designed, built and deployed from scratch.",
    "projects.live": "Live",
    "projects.code": "Code",
    "contact.title": "Get in touch",
    "contact.sub": "Got an idea, or want to work together? Drop me a line.",
    "contact.email": "Send an email",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js",
  },
};
