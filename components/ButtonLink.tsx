import type { ComponentProps } from "react";

const VARIANTS = {
  primary: "bg-accent font-semibold text-accent-ink hover:bg-text",
  secondary: "border border-border-strong text-text hover:border-text",
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] ${VARIANTS[variant]} ${className}`}
    />
  );
}
