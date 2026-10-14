"use client";

import type { ComponentProps, PointerEvent } from "react";

/**
 * An <article> with a soft light that follows the pointer (`.spotlight` in globals.css).
 * Only the pointer position lives here; the content stays server-rendered `children`.
 * Touch pointers are ignored, and the CSS only paints it on devices that can hover.
 */
export function Spotlight({ className = "", ...props }: ComponentProps<"article">) {
  const move = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const leave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.removeProperty("--mx");
    e.currentTarget.style.removeProperty("--my");
  };

  return <article {...props} onPointerMove={move} onPointerLeave={leave} className={`spotlight ${className}`} />;
}
