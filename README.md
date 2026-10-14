# fatihakyol.com

My personal site — a bilingual (EN/TR) single page with my experience, skills
and the products I build and ship: desktop apps for Windows and macOS, and web
apps running live on my own server (real-time chat, video calls, a collaborative
whiteboard, a browser code editor and more). Desktop apps link to their
installers, web apps to a **live demo**, and every project to its source.

**Live:** [fatihakyol.com](https://fatihakyol.com)

![Portfolio screenshot](assets/screenshot.png)

## Features

- Mobile-first layout that scales from a 360px phone to a wide desktop
- EN / TR language toggle, resolved on the server so the first HTML is already in the right language
- All content is data-driven from a single typed file
- Desktop app case studies, live web app cards and a downloadable CV
- Almost all server components (only the language toggle, a pointer spotlight and the scroll reveal run on the client), no animation or WebGL libraries
- CSS animations that switch off when the visitor asks for reduced motion

## Tech Stack

- **Framework** — Next.js (App Router), React, TypeScript
- **Styling** — Tailwind CSS
- **Deployment** — Docker + nginx

## Getting Started

```bash
npm install
npm run dev               # http://localhost:3000
```

Site content (bio, experience, skills, projects, links) lives in
[`data/content.ts`](data/content.ts) — edit that single file to update the site.
The CV is served from [`public/Fatih_Akyol_CV.pdf`](public/Fatih_Akyol_CV.pdf).

## Deployment

Built as a standalone Next.js output and served from a Docker container behind
the host nginx, which terminates TLS.

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## License

MIT
