# Project-Specific — Portfolio (Next.js App Router)

Notes unique to **this** repo. General standards live in the sibling docs
(`nextjs-app-structure.md`, `frontend-component-standards.md`,
`nextjs-frontend-security.md`).

## What this is

- A **single-page, bilingual (TR/EN) personal site** for Fatih Akyol, meant to be linked
  from a CV in job applications (not a freelance landing page: no "hire me for your
  project" copy). Its readers are recruiters and interviewers, so the order is: who he is →
  experience and skills → desktop apps → live web apps → contact. Live: https://fatihakyol.com
- **Next.js 16 App Router, React 19, Tailwind v4, TypeScript.** Static content, **no backend,
  no database, no API routes.** Runtime deps are just `next`, `react`, `react-dom` — no
  animation or WebGL libraries.
- ⚠️ Pinned Next has breaking changes vs. training data — read
  `node_modules/next/dist/docs/` before touching Next-specific APIs (see AGENTS.md).

## Topology

- `app/` — App Router. `layout.tsx` (async) is the shell (fonts, metadata, one centered
  `max-w-6xl` column holding `Nav`, `main` and `Footer`); `page.tsx` (async) resolves the
  locale and composes the sections in order: `Hero → Experience → DesktopApps → WebApps → Contact`.
- `components/` — one component per section + `ButtonLink` (pill link styled as a button,
  48px tall), `Spotlight` and `icons`. Flat, PascalCase. **Everything is a server component
  except `Nav`** (the language toggle), **`Spotlight`** (tracks the pointer; its content is
  server-rendered `children`) **and `RevealObserver`** (scroll reveal; renders nothing).
- `data/content.ts` — **the single source of truth for all copy and config.**
- `public/Fatih_Akyol_CV.pdf` — the CV behind every "Download CV" link (`CV_URL`). Replace the
  file to update it; keep the name or change `CV_URL`.
- `public/projects/*.png` — project screenshots, 2:1.
- `app/opengraph-image.png` + `app/twitter-image.png` (+ `.alt.txt`) — the 1200×630 link-preview
  card (file convention; `metadataBase` in `layout.tsx` makes the URLs absolute). Rendered from
  `scripts/og-image.html`; after changing the role or headline, re-render it at 1200×630 and
  overwrite both PNGs.
- `lib/i18n.ts` — pure, client-safe helpers: `t(locale, key)`, `isLocale`,
  `DEFAULT_LOCALE`, `LOCALE_COOKIE`, and the `Locale` type.
- `lib/i18n.server.ts` — `getLocale()`, which reads the locale cookie via `next/headers`
  (server-only; importing it into a client component fails the build by design).

## Content model — edit `data/content.ts`, not JSX

- All copy is typed exports in `data/content.ts`: `GREETING`, `HEADLINE`, `INTRO`, `GLANCE`
  (the "at a glance" row), `EXPERIENCE` (bullets are `{ lead, text }`: the lead renders bold),
  `SKILLS` (groups; `core` items render as highlighted chips), `EDUCATION`,
  `DESKTOP_PROJECTS`, `WEB_PROJECTS` and the `UI` string table. Components map over them and
  never hardcode copy.
- **Desktop apps** (`DESKTOP_PROJECTS`) get a full case-study block: platforms, description,
  `hardPart` (the hardest engineering problem — interview material), Download (GitHub
  Releases) + Source. **Web apps** (`WEB_PROJECTS`) are cards linking to the live app, with a
  separate source-code link. Adding a project = push one object to the right array. A future
  mobile (React Native) app would get its own array and section in the same case-study style.
- Localized fields use `Record<Locale, string>` (`Locale = "tr" | "en"`). UI labels live in the
  `UI[locale][key]` table, read via `t(locale, "key")` — the `locale` flows down as a prop from
  the server (no context/hook). `web.sub` contains a `{n}` placeholder for the project count.
- **Every new string needs both `tr` and `en`.** A missing UI key falls back to the raw
  key text (visible bug).
- Keep the site consistent with the CV (role, dates, skills); recruiters read both.

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

Server-first resolution renders the correct language in the **first HTML byte**, so there is
no language flash and no client i18n provider. Don't reintroduce a client i18n context.

**There is no `dangerouslySetInnerHTML` in the app.** If you ever need one, see the security
doc — the bar is "static, no interpolated runtime data."

## Design

- Dark "product showcase" look: near-black ground, `surface` cards, one lime accent used
  only for primary buttons, core-skill chips and small labels. Tokens are in `globals.css`
  `@theme` (`bg`, `surface`, `surface-2`, `border`, `border-strong`, `text`, `muted`,
  `accent`, `accent-ink`); use them, never inline hex.
- Type: **Bricolage Grotesque** (variable, `opsz` axis) for text, **IBM Plex Mono** (400/500)
  for small labels, both via `next/font/google` with `latin-ext` for Turkish letters.
- **Mobile first:** base classes are the phone layout, `sm:` / `md:` / `lg:` widen it. Grids
  collapse to one column, the hero headline scales 40px → 80px, the page gutter is 16px on
  phones. Touch targets are ≥44px (`ButtonLink` is 48px).
- Effects are CSS-only (no animation library) and all switch off under
  `prefers-reduced-motion`; they live in `globals.css`:
  - `.rise` (+ `[--d:…]` delay): the hero pieces rise in one after another on load.
  - `.type-char` / `.type-caret`: the hero greeting types itself out without JS. Each
    character starts at `font-size: 0` and snaps to `1em` at its own `--d`, so the caret moves
    along; screen readers get the full greeting from an `sr-only` copy. Timing is in `Hero.tsx`.
  - `.wave`: the hand appears when typing ends and waves twice.
  - `.reveal`: sections and cards fade/lift in as they scroll into view. `RevealObserver.tsx`
    (client, renders nothing, mounted once in `layout.tsx`) uses an IntersectionObserver to add
    `is-visible`; items are only hidden under `html.reveal-on`, which it sets, so without JS
    nothing stays invisible. Not CSS scroll-driven animations: those didn't run in the owner's
    browser, and with an `entry` range small items finished within a few pixels.
  - `.page-glow`: a still, faint lime glow falling from the top edge of the page behind the
    hero; a full-width element in `layout.tsx`, not the content column, so it has no visible
    start edge. It slowly "breathes" (opacity + vertical scale only, so it can't widen the page).
  - `.spotlight`: a soft light following the mouse on desktop-app cards, painted only under
    `@media (hover: hover)`; `Spotlight.tsx` writes `--mx`/`--my` and ignores touch pointers.
  - `ButtonLink` lifts and grows slightly on hover and presses in on click; its icon hops once
    (`.btn:hover svg`, `icon-hop`).
  - Hover states (Tailwind classes in the components): buttons, experience cards, skill
    chips, glance cells, cards and the contact block lift, light up or show a border; nav
    links grow an accent underline. Movement uses `motion-safe:` so reduced motion keeps only
    the color changes. Revealed elements get their transition list from
    `.reveal-on .reveal.is-visible` (unlayered CSS beats Tailwind's), so a new hover property
    on a `.reveal` element must be added to that list too.
- History: this replaced a design with a WebGL "Side Rays" background (`ogl`), motion-driven
  reveals, a typewriter tagline and sticky stacking project cards (see git log). Don't bring
  those back; the redesign removed them on purpose.

## Deploy

- **Dockerized Next standalone.** `next.config.ts` sets `output: "standalone"`; the
  multi-stage `Dockerfile` copies `.next/standalone` + `.next/static` + `public` and runs
  `node server.js` on port 3000.
- `docker-compose.prod.yml` publishes the container on **`127.0.0.1:8085`** only.
- The **host nginx** (not containerized; template in `deploy/nginx-host.conf.example`)
  terminates TLS for `fatihakyol.com` (+ www → apex redirect) via certbot and
  reverse-proxies to `127.0.0.1:8085`.
- **Security headers / any CSP belong at the host nginx**, not in app code (see security doc).
  They are live (2026-10-14) as snippets in `/etc/nginx/snippets/`, copied in
  `deploy/snippets/`: `security-headers.conf` (HSTS incl. subdomains, nosniff,
  Referrer-Policy, X-Frame-Options SAMEORIGIN) and a `permissions-*.conf` in every
  *.fatihakyol.com site, plus `csp-portfolio.conf` here only; `server_tokens off` in nginx.conf.
- ⚠️ **The CSP only allows same-origin resources** (`script-src 'self' 'unsafe-inline'`,
  images/fonts/connect `'self'`). Adding anything external (analytics, a CDN font, an embed)
  means updating `csp-portfolio.conf` on the host and its copy here, or the browser blocks it.
  Check the console for "Content Security Policy" errors after such a change.
- Deploy: `docker compose -f docker-compose.prod.yml up -d --build`.

## Testing

- **No test suite currently** (no `test` script; deps are `dev`/`build`/`start`/`lint`
  only). Don't claim tests exist. Verify changes with `npx tsc --noEmit`, `npm run lint`
  (clean), `npm run build`, and by checking `npm run dev` at phone and desktop widths.

## Conventions for this repo/owner

- **Do not add a `Co-Authored-By` trailer** to commits (owner preference — matches the
  owner's other repos).
- Prefer small, single-concern commits; commit messages describe the visible change.
- Content/config changes go through `data/content.ts`; styling tokens through
  `globals.css` `@theme` — not inline hex.

## Open follow-ups / ideas (not committed)

- No sitemap/robots or per-route metadata beyond the root (single page — low priority).
- Locale is not reflected in the URL (a `locale` cookie, resolved server-side); a
  `/[locale]` route segment would make links shareable in a specific language and allow
  static rendering again, but adds a middleware + restructure — deferred.