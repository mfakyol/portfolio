"use client";

import dynamic from "next/dynamic";

// WebGL Side Rays — client only.
const SideRays = dynamic(() => import("./SideRays"), { ssr: false });

// Fixed, full-viewport rays that stay visible while scrolling.
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <SideRays
        origin="top-right"
        rayColor1="#a855f7"
        rayColor2="#6366f1"
        speed={2}
        intensity={1.3}
        spread={2}
        tilt={0}
        saturation={1.2}
        blend={0.6}
        falloff={2.0}
        opacity={0.7}
      />
    </div>
  );
}
