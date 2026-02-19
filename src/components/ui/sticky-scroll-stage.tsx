"use client";

import { useRef, type ReactNode } from "react";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: `${height}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}
