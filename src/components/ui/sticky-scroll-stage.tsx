"use client";

import { useId, useRef, type ReactNode } from "react";
import { useScroll, type MotionValue } from "framer-motion";

interface StickyScrollStageProps {
  /** Total scroll height in vh units */
  height: number;
  /** Children receive a 0-1 progress MotionValue */
  children: (progress: MotionValue<number>) => ReactNode;
  className?: string;
}

/**
 * A tall scrollable container with a sticky viewport-height stage inside.
 * Children receive a normalized `progress` MotionValue (0→1) mapped to
 * the scroll travel through the container.
 */
export function StickyScrollStage({
  height,
  children,
  className,
}: StickyScrollStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const skipId = useId();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: `${height}vh` }}
      role="region"
      aria-label="Scroll-driven animation"
    >
      {/* Skip link — visible only on keyboard focus */}
      <a
        href={`#${skipId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-teal-400 focus:border focus:border-teal-400/50 focus:rounded focus:text-sm"
      >
        Skip animation
      </a>
      <div className="sticky top-0 h-screen overflow-hidden">
        {children(scrollYProgress)}
      </div>
      {/* Skip target — just after the stage */}
      <div id={skipId} className="sr-only" aria-hidden="true" />
    </div>
  );
}
