// Shiny text (React Bits) — a light band sweeps across the text.
export function ShinyText({
  text,
  speed = 4,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  return (
    <span
      className={`shiny-text ${className}`.trim()}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
}
