# Project-Specific — Portfolio (Next.js App Router)

Notes unique to **this** repo. General standards live in the sibling docs
(`nextjs-app-structure.md`, `frontend-component-standards.md`,
`nextjs-frontend-security.md`).

## What this is

- A **single-page, bilingual (TR/EN) personal portfolio** for Fatih Akyol.
  Live: https://fatihakyol.com
- **Next.js 16 App Router, React 19, Tailwind v4, TypeScript.** Client-heavy but
  **no backend, no database, no API routes** — it's a static-content site with client
  interactivity. Deps are intentionally tiny: `next`, `react`, `motion` (animation),
  `ogl` (WebGL background).
- ⚠️ Pinned Next has breaking changes vs. training data — read
  `node_modules/next/dist/docs/` before touching Next-specific APIs (see AGENTS.md).

## Topology

- `app/` — App Router. `layout.tsx` (async) is the shell (fonts, metadata, `Background`,
  `Nav`, `Footer`); `page.tsx` (async) resolves the locale and composes the sections in
  order: `Hero → About → Experience → Skills → Projects → Contact`.
- `components/` — one component per section + a few reusable wrappers. Flat, PascalCase.
  The content sections (`About`, `Experience`, `Skills`, `Projects`, `Contact`), `Footer`,
  and the presentational leaves (`SectionHeading`, `ShinyText`, `icons`) are **server
  components**. Only the genuinely-interactive parts are `"use client"`: `Hero` (motion),
  `Nav` (scroll + locale toggle), `Background`/`SideRays` (WebGL), and the `Reveal` /
  `GlowCard` / `Typewriter` wrappers (which take server-rendered `children`).
- `data/content.ts` — **the single source of truth for all copy and config.**
- `lib/i18n.ts` — pure, client-safe helpers: `t(locale, key)`, `isLocale`,
  `DEFAULT_LOCALE`, `LOCALE_COOKIE`, and the `Locale` type.
- `lib/i18n.server.ts` — `getLocale()`, which reads the locale cookie via `next/headers`
  (server-only; importing it into a client component fails the build by design).

## Content model — edit `data/content.ts`, not JSX

- All copy, projects, skills, experience, education, stats, and UI strings are typed
  exports in `data/content.ts`. **To add/change content, edit this file** — components map
  over it and never hardcode copy.
- Localized fields use `Record<Locale, string>` (`Locale = "tr" | "en"`); list content
  uses `Record<Locale, string[]>`. UI labels live in the `UI[locale][key]` table, read via
  `t(locale, "key")` — the `locale` flows down as a prop from the server (no context/hook).
- Adding a project = push one object to `PROJECTS` (`name`, `tagline`, `description`,
  `tech`, optional `live`/`repo`). The `Projects` sticky-stack renders it automatically.
  If you add one, keep the `STATS` "Live projects" count in sync.
- **Every new string needs both `tr` and `en`.** A missing UI key falls back to the raw
  key text (visible bug).

## i18n — server-first, cookie-based (single URL, no `/tr` `/en` segments)

Locale is resolved **on the server** and defaults to **`tr`**:

1. **Source of truth = a `locale` cookie.** `getLocale()` (`lib/i18n.server.ts`) reads it
   via `next/headers` and validates it (falls back to `tr`). Reading the cookie opts `/`
   into **dynamic rendering** (`ƒ` in the build output) — intended and fine for this site.
2. **`layout.tsx` / `page.tsx` are async**, call `getLocale()`, set `<html lang={locale}>`,
   and pass `locale` **down as a prop** to every component. There is **no React context and
   no `useI18n()` hook** — components call the pure `t(locale, key)` from `lib/i18n.ts`.
3. **The toggle** lives in `Nav` (client): it writes the `locale` cookie with
   `document.cookie` and calls `router.refresh()`. The refresh re-requests the server tree
   with the just-set cookie, so the whole page re-renders in the new language **without a
   full reload** and without losing scroll position.

**Why this matters / what it replaced:** the old design used a client context + a
three-part flash-prevention hack (a pre-hydration `dangerouslySetInnerHTML` script,
`localStorage`, an `html.i18n-pending { opacity:0 }` CSS gate, and an effect in the
provider). Because the whole tree had to be `"use client"` to read the context, **every
section shipped as client JS.** Server-first resolution renders the correct language in the
**first HTML byte**, so the flash cannot happen — the inline script, the `i18n-pending` CSS,
and the client provider were all **deleted**. The content sections are now server
components (zero JS). Don't reintroduce a client i18n context.

**There is no longer any `dangerouslySetInnerHTML` in the app.** If you ever need one, see
the security doc — the bar is "static, no interpolated runtime data."

## WebGL background (Side Rays via `ogl`)

- `components/Background.tsx` renders a **fixed, full-viewport** rays effect behind
  everything (`fixed inset-0 -z-10`, `pointer-events-none`). It loads `SideRays` via
  `next/dynamic(..., { ssr: false })` — **WebGL must never run during SSR.**
- `components/SideRays.tsx` is a React Bits (reactbits.dev) shader ported to `ogl`. It
  already implements the safety patterns the security doc requires:
  IntersectionObserver-gated (pauses offscreen), DPR-capped at 2, full teardown on unmount
  (cancel rAF, remove listeners, `WEBGL_lose_context`), and try/catch around GL init/render.
- There are also **two static gradient washes** as background: CSS radial-gradients on
  `body` in `globals.css`. The WebGL rays layer on top of those.
- History: this replaced an earlier "Aurora" WebGL background (see git log). If revisiting
  the background, prefer tuning `SideRays` props in `Background.tsx` over adding new WebGL.

## Projects section — sticky stacking cards (CSS-driven, not JS scroll)

- `components/Projects.tsx` renders each project in a `position: sticky` wrapper with a
  staggered `top` (`96 + i*16`px) so cards **stack** as you scroll the normal page.
- Cards **shrink + dim as they get buried** purely via CSS scroll-driven animation
  (`.stack-card`, `animation-timeline: view()` in `globals.css`), gated behind
  `@supports` so unsupported browsers just stack without the shrink. **No JS scroll
  listener, no Lenis, no inner-scroll library** — an earlier ScrollStack/Lenis approach
  was deliberately removed (git log `1cd1d73`). Don't reintroduce a scroll library for this.
- Cards use `GlowCard` (mouse-following border glow via CSS `--mx/--my`) + the `.glow-card`
  helper. Fixed card height (`h-[380px]`) keeps the stack uniform.

## Reusable visual wrappers

- `Reveal` — motion scroll-in wrapper (`whileInView`, `once`). Use for section entrances.
- `GlowCard` — mouse-following border-glow card wrapper.
- `Typewriter` — cycles `TAGLINES[locale]` in the hero; resets cleanly on language switch.
- `ShinyText` — sweeping shine on the role heading (`.shiny-text` keyframes).
- All the `.gradient-text` / `.glow-btn` / `.card-glow` helpers live in `globals.css`.

## Deploy

- **Dockerized Next standalone.** `next.config.ts` sets `output: "standalone"`; the
  multi-stage `Dockerfile` copies `.next/standalone` + `.next/static` + `public` and runs
  `node server.js` on port 3000.
- `docker-compose.prod.yml` publishes the container on **`127.0.0.1:8085`** only.
- The **host nginx** (not containerized; template in `deploy/nginx-host.conf.example`)
  terminates TLS for `fatihakyol.com` (+ www → apex redirect) via certbot and
  reverse-proxies to `127.0.0.1:8085`.
- **Security headers / any CSP belong at the host nginx**, not in app code (see security doc).
- Deploy: `docker compose -f docker-compose.prod.yml up -d --build`.

## Testing

- **No test suite currently** (no `test` script; deps are `dev`/`build`/`start`/`lint`
  only). Don't claim tests exist. Verify changes by running `npm run dev` and checking the
  live preview + `npm run lint`.

## Conventions for this repo/owner

- **Do not add a `Co-Authored-By` trailer** to commits (owner preference — matches the
  owner's other repos).
- Prefer small, single-concern commits; commit messages describe the visible change
  (see git log style: "Typewriter hero tagline…", "Sticky stacking project cards…").
- Content/config changes go through `data/content.ts`; styling tokens through
  `globals.css` `@theme` — not inline hex.

## Open follow-ups / ideas (not committed)

- No sitemap/robots or per-route metadata beyond the root (single page — low priority).
- Locale is not reflected in the URL (a `locale` cookie, resolved server-side); a
  `/[locale]` route segment would make links shareable in a specific language and allow
  static rendering again, but adds a middleware + restructure — deferred.
- `Typewriter.tsx` trips the newer `react-hooks/set-state-in-effect` lint rule
  (pre-existing; setState called synchronously inside its effect). Worth a refactor to a
  ref/timer-driven loop so `npm run lint` is clean.
