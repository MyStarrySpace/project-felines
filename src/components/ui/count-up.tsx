"use client";

import { useRef, useEffect } from "react";
import { useTransform, type MotionValue } from "framer-motion";

interface CountUpProps {
  /** Parent progress MotionValue (0-1) */
  progress: MotionValue<number>;
  /** Progress value where counting starts */
  enter: number;
  /** Progress value where counting ends */
  hold: number;
  /** Start number */
  from: number;
  /** End number */
  to: number;
  /** Format function (default: round to integer) */
  format?: (value: number) => string;
  className?: string;
}

/**
 * Scroll-driven number counter. Maps a progress range to a number range
 * using useTransform. Updates via MotionValue subscription (no React re-renders).
 */
export function CountUp({
  progress,
  enter,
  hold,
  from,
  to,
  format = (v) => Math.round(v).toString(),
  className,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const value = useTransform(progress, [enter, hold], [from, to]);

  useEffect(() => {
    const unsubscribe = value.on("change", (v) => {
      if (spanRef.current) {
        spanRef.current.textContent = format(v);
      }
    });
    return unsubscribe;
  }, [value, format]);

  return (
    <span ref={spanRef} className={className}>
      {format(from)}
    </span>
  );
}
