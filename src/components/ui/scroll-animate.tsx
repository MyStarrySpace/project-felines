"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type EnterFrom = "bottom" | "left" | "right" | "scale";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  /** Viewport offset where animation starts (0 = element enters viewport bottom) */
  start?: number;
  /** Viewport offset where animation ends (1 = element exits viewport top) */
  end?: number;
  /** Direction of entrance (default "bottom") */
  enterFrom?: EnterFrom;
}

/**
 * Scroll-driven entrance animation for flowing (non-sticky) content.
 * Supports directional transforms: bottom (translateY), left/right (translateX), scale.
 */
export function ScrollAnimate({
  children,
  className,
  start = 0.15,
  end = 0.35,
  enterFrom = "bottom",
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Direction-specific transforms (all called unconditionally)
  const y = useTransform(
    scrollYProgress,
    [start, end],
    enterFrom === "bottom" ? [20, 0] : [0, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [start, end],
    enterFrom === "left" ? [-40, 0] : enterFrom === "right" ? [40, 0] : [0, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    enterFrom === "scale" ? [0.92, 1] : [1, 1]
  );

  return (
    <motion.div ref={ref} style={{ opacity, y, x, scale }} className={className}>
      {children}
    </motion.div>
  );
}
