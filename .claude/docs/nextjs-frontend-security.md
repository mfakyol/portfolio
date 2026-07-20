# Next.js Frontend — Safety & Correctness Checklist

Reusable checklist for a **client-heavy Next.js App Router site with no backend**. The
threat surface here is not a server API — it's XSS via unsafe rendering, hydration bugs,
unsafe external links, WebGL resource leaks, and the deploy edge (nginx/TLS). Apply by
default; treat exceptions as decisions that need justification.

## Safe rendering / XSS

- **Rely on React's escaping.** Never pass user/remote/derived data to
  `dangerouslySetInnerHTML`. React escapes `{value}` by default — keep it that way.
- `dangerouslySetInnerHTML` is acceptable **only** for a fixed, author-controlled inline
  bootstrap script (e.g. a pre-hydration theme/locale script) with **no interpolated
  runtime data**. If you ever interpolate into such a string, you've created an injection
  point — don't. (This app currently has none; server-side rendering removed the need.)
- No `eval`, `new Function`, or injecting strings into the DOM. If untrusted HTML ever
  needs rendering, do it in a sandboxed `<iframe sandbox="allow-scripts">` **without**
  `allow-same-origin`, not inline.
- Keep all copy in `data/` (typed constants), so there's no path for arbitrary strings to
  reach the DOM as markup.

## Hydration correctness

- **First server render and first client render must produce identical markup.** Don't
  branch rendered output on `window`, `localStorage`, `Date.now()`, or random values
  during render — it causes hydration mismatches.
- Read browser-only state in `useEffect` (post-hydration) and start from a
  deterministic default (the i18n provider renders the default locale on the server, then
  applies the stored one on mount while the page is visually hidden — copy that pattern
  instead of reading storage during render).
- Guard every browser API with `typeof window !== "undefined"` or confine it to an effect.
- For an **unavoidable, benign** server/client difference (e.g. a copyright year from
  `new Date().getFullYear()`, which can only diverge at the New Year boundary), keep the
  real value and mark the element `suppressHydrationWarning` — the sanctioned escape
  hatch. Don't reach for it to paper over genuine state-driven mismatches.
- Client-only widgets (WebGL/canvas) load via `next/dynamic(..., { ssr: false })` so they
  never execute during SSR.

## External links & navigation

- Every `target="_blank"` link **must** include `rel="noreferrer"` (or at least
  `noopener`) to prevent reverse-tabnabbing and referrer leakage. This is non-negotiable
  and easy to forget when adding project/social links.
- Keep outbound URLs in `data/` as constants; don't build them from untrusted input.
- If you add client-side redirects later, allow only same-origin targets (must start with
  a single `/`, not `//`) to avoid open redirects.

## WebGL / animation resource safety

- Any `requestAnimationFrame` loop, `IntersectionObserver`, or `resize`/`scroll` listener
  **must** be torn down in the effect's cleanup — leaks compound on route changes and
  fast refresh.
- Release GPU contexts on unmount: `getExtension("WEBGL_lose_context")?.loseContext()` and
  detach the canvas. Cap DPR (`Math.min(devicePixelRatio, 2)`) and pause offscreen work
  (IntersectionObserver) so background effects don't melt low-end devices.
- Wrap GL init/`render` in try/catch so a context-creation failure degrades to no
  background instead of crashing the page.

## Secrets & data hygiene

- This is a public static site: **anything in the bundle is public.** Never put secrets,
  tokens, or private data in client code, `NEXT_PUBLIC_*` env vars, or `data/`.
- The only "PII" here (email) is intentionally public; don't add anything you wouldn't
  publish. No analytics/keys inline without review.
- Don't put data in URL query strings that you wouldn't want logged.

## Content-Security-Policy & headers (deploy edge)

- Security headers (CSP, HSTS, `X-Content-Type-Options`, referrer policy) belong on
  **whatever serves the HTML** — here the **host nginx** terminating TLS, or Next response
  headers — not in application code.
- If you add a CSP, note that inline scripts (the locale bootstrap) and WebGL/`motion`
  need explicit allowances (`script-src` nonce/hash). Test the live preview after any CSP
  change — a strict default will silently break the background and locale script.
- Enable HSTS only once HTTPS is confirmed working for the apex + www (certbot).

## Production error hygiene

- Show raw error detail only in development (`process.env.NODE_ENV !== "production"` /
  `import.meta.env.DEV` equivalents). Production surfaces should stay generic.
- Don't leak stack traces or internal paths into the rendered page.

## Quick pre-ship checklist
- [ ] No `dangerouslySetInnerHTML` with any interpolated/runtime data
- [ ] No `window`/`localStorage`/`Date`/random read during render (hydration-safe)
- [ ] Client-only libs are `"use client"` and/or `dynamic({ ssr: false })`
- [ ] Every `target="_blank"` has `rel="noreferrer"`
- [ ] rAF loops, observers, listeners, GL contexts cleaned up on unmount
- [ ] No secrets in the bundle / `NEXT_PUBLIC_*` / `data/`
- [ ] Security headers set at the nginx/host edge; HSTS only after HTTPS verified
