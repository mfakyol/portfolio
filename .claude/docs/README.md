# Engineering Docs

Reference docs for how this codebase is built. Read the relevant one before making
structural, styling, or security decisions.

> This is a **Next.js 16 App Router** project (React 19, Tailwind v4, TypeScript) —
> client-heavy, **no backend/DB**. The pinned Next has breaking changes vs. common
> training data: **read `node_modules/next/dist/docs/` before writing Next-specific code**
> (see the repo's AGENTS.md).

## Reusable across Next.js projects (copy into any repo's `.claude/docs/`)
- [`nextjs-app-structure.md`](nextjs-app-structure.md) — App Router layout + the
  server/client component boundary.
- [`frontend-component-standards.md`](frontend-component-standards.md) — React component,
  Tailwind-token, animation & i18n standards.
- [`nextjs-frontend-security.md`](nextjs-frontend-security.md) — safe rendering, hydration,
  external links, WebGL, and deploy-edge checklist.

## Project-specific (do not copy blindly)
- [`PROJECT-portfolio.md`](PROJECT-portfolio.md) — decisions unique to this repo
  (content model, i18n flash fix, WebGL background, sticky-stack projects, Docker + nginx
  deploy, owner conventions, follow-ups).
