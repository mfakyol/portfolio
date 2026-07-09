"use client";

import dynamic from "next/dynamic";

// WebGL Aurora — client only.
const Aurora = dynamic(() => import("./Aurora"), { ssr: false });

// Fixed, full-viewport aurora that stays visible while scrolling.
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 -top-32 h-[95vh] opacity-85 [mask-image:linear-gradient(to_bottom,black_30%,transparent)]">
        <Aurora
          colorStops={["#6366f1", "#a855f7", "#6366f1"]}
          amplitude={1.2}
          blend={0.5}
          speed={0.6}
        />
      </div>
    </div>
  );
}
