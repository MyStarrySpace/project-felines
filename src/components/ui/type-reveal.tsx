"use client";

import { motion, useTransform, useMotionTemplate, type MotionValue } from "framer-motion";
import { type ReactNode } from "react";

interface TypeRevealProps {
  /** Parent progress MotionValue (0-1) */
  progress: MotionValue<number>;
  /** Progress value where reveal starts */
  enter: number;
  /** Progress value where text is fully revealed */
  hold: number;
  children: ReactNode;
  className?: string;
}

/**
 * Reveals text left-to-right using clip-path, driven by a progress MotionValue.
 * Uses useMotionTemplate for the template literal — no React re-renders.
 */
export function TypeReveal({
  progress,
  enter,
  hold,
  children,
  className,
}: TypeRevealProps) {
  // Map progress range to 100→0 (percentage hidden from the right)
  const clipPercent = useTransform(progress, [enter, hold], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipPercent}% 0 0)`;

  return (
    <motion.div style={{ clipPath }} className={className}>
      {children}
    </motion.div>
  );
}
