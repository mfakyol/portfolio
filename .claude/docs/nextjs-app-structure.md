# Next.js (App Router) — Structure & Conventions

Reusable structure standards for a **Next.js App Router + TypeScript** project (React 19,
Tailwind v4). Optimizes for a clear server/client boundary, discoverability, and a
consistent component model.

> ⚠️ **This is not the Next.js in your training data.** The pinned version has breaking
> changes to APIs, conventions, and file layout. **Read the relevant guide in
> `node_modules/next/dist/docs/` before writing any Next-specific code** (routing,
> metadata, fonts, `dynamic`, image, config). Heed deprecation notices. Everything below
> is repo convention, not a substitute for those docs.

## Layout

```
app/                 # App Router: routing + document shell
  layout.tsx         # root layout — <html>/<body>, fonts, metadata, global providers
  page.tsx           # a route's screen (composes components; little logic)
  globals.css        # Tailwind entry + @theme tokens + global helpers
  favicon.ico        # app-dir favicon (auto-wired by Next)
components/           # presentational + feature components (flat, PascalCase.tsx)
data/                # static content as typed TS modules (single source of truth)
lib/                 # cross-cutting client logic (providers, hooks, helpers)
public/              # static assets served at the web root
next.config.ts       # build/runtime config
```

## Server vs. Client — the boundary that matters most

- **Components are Server Components by default.** They render on the server, ship **zero
  JS**, and cannot use hooks, browser APIs, or event handlers. Keep a component on the
  server unless it needs one of those.
- Add `"use client"` **only** when the component uses state/effects, event handlers,
  browser APIs (`window`, `localStorage`, WebGL), or a client-only library (`motion`, `ogl`).
- **Push `"use client"` down the tree, not up.** Keep `layout.tsx`/`page.tsx` as server
  components that compose client leaves. Don't mark a whole page client just to animate one child.
- A server component may import and render client components; **a client component may not
  import a server component** (it can only receive one via `children`/props).
- Pure presentational leaves with no interactivity (headings, icon SVGs, static text)
  stay server components — no directive.

## Layering & responsibilities

- **`app/layout.tsx`** owns the document: `<html lang>`, `<body>`, `next/font` variables,
  `export const metadata`, and the global provider/chrome wrapping (`Nav`, `Footer`,
  background, i18n provider). One layout wraps every route.
- **`app/page.tsx`** composes section components in order and owns route-level wiring only.
- **`components/`** hold the UI. Presentational primitives and feature sections live
  together, flat — this is a small surface, so no `ui/` vs. `feature/` split is needed.
  Introduce subfolders only when a feature grows several files.
- **`data/`** holds all copy/config as typed exports (`content.ts`). Components import
  from it; **never hardcode user-facing copy inline**. This is what makes the i18n and
  "add a project = edit one array" model work.
- **`lib/`** holds cross-cutting client logic — context providers, hooks, pure helpers.

## Metadata & fonts (App Router)

- Set page/site metadata by exporting a `metadata` object (or `generateMetadata`) from a
  `layout`/`page` — **not** a hand-written `<head>`. Derive dynamic values from `data/`.
- Load fonts via `next/font` in the layout, expose them as CSS variables
  (`--font-geist-sans`), and reference those variables from Tailwind's `@theme`. Don't add
  `<link>` font tags.

## Client-only / heavy widgets

- Wrap browser-only libraries (WebGL/canvas, anything touching `window` at import time) in
  a **client component**, and load it with `next/dynamic(..., { ssr: false })` from its
  parent so it never runs during SSR. See the Background/WebGL pattern in the project doc.
- Guard every browser API behind `typeof window !== "undefined"` or an effect, so the
  first server render and first client render match (see hydration rules in the security doc).

## Naming & imports

- Components `PascalCase.tsx`; hooks `useCamelCase.ts`; data/lib modules `camelCase.ts`.
- Route files keep their framework names (`layout.tsx`, `page.tsx`, `loading.tsx`, …).
- Use the `@/` path alias (configured in `tsconfig.json` `paths`) for cross-directory
  imports so they stay grep-able and survive moves. Relative sibling imports (`./Foo`)
  appear in the current components — prefer `@/` for anything crossing a directory.

## Config & build

- Keep build config in `next.config.ts`. This repo uses `output: "standalone"` to produce
  a self-contained server bundle for a small production image (see the project doc's deploy section).
- Lint with the flat `eslint.config.mjs` (`eslint-config-next` core-web-vitals + TS). Run
  `npm run lint` before shipping; treat core-web-vitals warnings as real.
