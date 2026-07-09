"use client";

import { useEffect, useState } from "react";

// Types a phrase, pauses, deletes it, then moves to the next — looping.
export function Typewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Restart cleanly when the phrase set changes (e.g. language switch).
  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[index % phrases.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1900);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        ),
      deleting ? 32 : 62
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="caret text-accent">|</span>
    </span>
  );
}
