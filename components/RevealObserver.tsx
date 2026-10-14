"use client";

import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they scroll into view (styles in globals.css).
 * Renders nothing. Content is only hidden once this has run (`html.reveal-on`), so without
 * JS, or with reduced motion, everything is simply visible. Works in every browser,
 * unlike CSS scroll-driven animations.
 */
export function RevealObserver() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        // Items entering together come in one after another.
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Math.min(order++, 6) * 80}ms`;
          // Drop the delay afterwards so hover transitions stay instant.
          el.addEventListener("transitionend", () => (el.style.transitionDelay = ""), { once: true });
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
