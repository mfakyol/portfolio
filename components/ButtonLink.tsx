import type { ComponentProps } from "react";

const VARIANTS = {
  primary:
    "bg-accent font-semibold text-accent-ink hover:bg-text hover:shadow-[0_10px_28px_-10px_var(--color-accent)]",
  secondary: "border border-border-strong text-text hover:border-text hover:bg-surface",
};

/** Pill-shaped link that looks like a button. 48px tall: a comfortable touch target. */
export function ButtonLink({
  variant = "secondary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof VARIANTS }) {
  return (
    <a
      {...props}
      className={`btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] transition-[translate,scale,background-color,border-color,box-shadow,color] duration-300 ease-soft motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] ${VARIANTS[variant]} ${className}`}
    />
  );
}
