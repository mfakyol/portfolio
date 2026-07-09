"use client";

import {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import Lenis from "lenis";

// ScrollStack — adapted from React Bits (reactbits.dev).
// Cards pin and stack on top of each other as you scroll through the region.

export function ScrollStackItem({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  return (
    <div
      className={`scroll-stack-card relative w-full my-8 box-border origin-top will-change-transform ${itemClassName}`.trim()}
      style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

interface Transform {
  translateY: number;
  scale: number;
  rotation: number;
  blur: number;
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 90,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "22%",
  scaleEndPosition = "12%",
  baseScale = 0.86,
  rotationAmount = 0,
  blurAmount = 0,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransforms = useRef(new Map<number, Transform>());
  const rafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const parsePct = useCallback((value: string, container: number) => {
    if (value.includes("%")) return (parseFloat(value) / 100) * container;
    return parseFloat(value);
  }, []);

  const progress = (scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  };

  const update = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = scroller.scrollTop;
    const containerHeight = scroller.clientHeight;
    const stackPx = parsePct(stackPosition, containerHeight);
    const scaleEndPx = parsePct(scaleEndPosition, containerHeight);
    const endEl = scroller.querySelector<HTMLElement>(".scroll-stack-end");
    const endTop = endEl ? endEl.offsetTop : 0;

    cards.forEach((card, i) => {
      const cardTop = card.offsetTop;
      const triggerStart = cardTop - stackPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;
      const pinStart = cardTop - stackPx - itemStackDistance * i;
      const pinEnd = endTop - containerHeight / 2;

      const scaleProgress = progress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTop = cards[j].offsetTop;
          const jStart = jTop - stackPx - itemStackDistance * j;
          if (scrollTop >= jStart) topIndex = j;
        }
        if (i < topIndex) blur = Math.max(0, (topIndex - i) * blurAmount);
      }

      let translateY = 0;
      const pinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (pinned) {
        translateY = scrollTop - cardTop + stackPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPx + itemStackDistance * i;
      }

      const next: Transform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };
      const last = lastTransforms.current.get(i);
      const changed =
        !last ||
        Math.abs(last.translateY - next.translateY) > 0.1 ||
        Math.abs(last.scale - next.scale) > 0.001 ||
        Math.abs(last.rotation - next.rotation) > 0.1 ||
        Math.abs(last.blur - next.blur) > 0.1;
      if (changed) {
        card.style.transform = `translate3d(0, ${next.translateY}px, 0) scale(${next.scale}) rotate(${next.rotation}deg)`;
        card.style.filter = next.blur > 0 ? `blur(${next.blur}px)` : "";
        lastTransforms.current.set(i, next);
      }
    });
  }, [
    parsePct,
    stackPosition,
    scaleEndPosition,
    itemStackDistance,
    baseScale,
    itemScale,
    rotationAmount,
    blurAmount,
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
    );
    cardsRef.current = cards;
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
    });

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller.querySelector<HTMLElement>(".scroll-stack-inner")!,
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenis.on("scroll", update);
    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    update();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      cardsRef.current = [];
      lastTransforms.current.clear();
    };
  }, [update, itemDistance]);

  return (
    <div
      ref={scrollerRef}
      className={`relative h-full w-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      style={{ overscrollBehavior: "contain" }}
    >
      <div className="scroll-stack-inner min-h-full pt-[18vh] pb-[40vh]">
        {children}
        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  );
}
