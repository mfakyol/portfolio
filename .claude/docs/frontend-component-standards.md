# Frontend — Component, Styling & Animation Standards

Reusable standards for React 19 + Tailwind v4 UI in this repo. Pair with
`nextjs-app-structure.md` (where components live and the server/client split) and
`nextjs-frontend-security.md` (safe rendering).

## Component model

- **Small, focused, single-purpose components.** A section = one component
  (`Hero`, `About`, `Projects`…); a reusable behavior = its own wrapper
  (`Reveal`, `GlowCard`, `Typewriter`).
- **Separate behavior from content.** Behavior/animation wrappers take `children` +
  props and know nothing about copy; content comes from `data/`. `GlowCard` and `Reveal`
  are pure wrappers; `Projects` supplies the data.
- **Keep presentational leaves on the server.** No `"use client"` unless the component
  needs state/effects/handlers/browser APIs (see the structure doc). `SectionHeading` and
  the icon SVGs are server components on purpose.
- **Props are explicit and typed inline** for small components
  (`{ children, className = "" }: { children: ReactNode; className?: string }`).
  Default `className` to `""` and merge with a template string so callers can extend styling.

## Styling (Tailwind v4 + design tokens)

- **Design tokens are the single source of color/type.** They're defined once in
  `app/globals.css` under `@theme` (`--color-bg`, `--color-surface`, `--color-accent`,
  fonts…) and consumed as Tailwind utilities (`bg-surface`, `text-accent`, `border-border`).
  **Never hardcode hex colors in components** — add or reuse a token.
- **Utilities first, in JSX.** Reach for a shared CSS class only for effects Tailwind
  can't express cleanly — pseudo-element glows, keyframes, scroll-driven timelines. Those
  live in `globals.css` as named helpers (`.glow-card`, `.shiny-text`, `.gradient-text`,
  `.stack-card`) and are applied by className.
- **Merge, don't overwrite, `className`.** Wrappers append their base classes to the
  passed `className` (`` `glow-card ${className}`.trim() ``) so callers control layout.
- **Mobile-first responsive:** base styles target mobile; layer `sm:`/`md:` for larger
  screens (`text-5xl sm:text-7xl`). Constrain content width with a shared
  `mx-auto max-w-5xl` container and consistent section padding (`px-5 py-24`).
- **Section anchors:** each section has an `id` and `scroll-mt-*` so the fixed nav's
  hash links land below the header.

## Animation

- **Scroll-in reveals:** wrap content in the shared `Reveal` (motion `whileInView`,
  `viewport={{ once: true }}`). Don't re-implement per section.
- **Entrance sequences:** stagger with a small delay helper (`fade(0.08)`, `fade(0.16)`…),
  not hand-tuned timeouts.
- **Prefer CSS for continuous/scroll-driven effects.** Looping shines, carets, and
  sticky-card shrink use CSS keyframes / `animation-timeline: view()` — cheaper than JS
  and they run off the main thread. Gate experimental timelines behind
  `@supports (animation-timeline: view())` so unsupported browsers degrade gracefully.
- **`motion` is client-only.** Any component importing `motion/react` must be
  `"use client"`.
- Respect the WebGL/animation lifecycle: cancel `requestAnimationFrame`, remove listeners,
  and release GL contexts on unmount (see the WebGL pattern in the project doc).

## Internationalization

- **All user-facing copy comes from `data/` through the i18n layer** — never hardcode
  strings in components. UI labels go through `t("key")`; localized content is keyed by
  `locale` (`tagline[locale]`).
- Read locale via the `useI18n()` hook inside client components; components that only
  render already-resolved strings can stay on the server.
- When adding copy, add **both** locales in `data/content.ts`. A missing key falls back to
  the raw key string, which is a visible bug.

## Accessibility

- Icon-only controls/links need an `aria-label`; decorative pings/glows are
  `pointer-events-none` and unlabeled.
- Use semantic elements (`header`, `nav`, `main`, `section`, `h1/h2/h3` in order).
- External links: `target="_blank"` **must** pair with `rel="noreferrer"` (security + a11y).

## Naming

- Components `PascalCase.tsx`; hooks `useCamelCase.tsx`; shared CSS helpers kebab-case
  classes in `globals.css`; data modules `camelCase.ts`.
