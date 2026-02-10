"use client";

import { useRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useFullPage } from "@/components/ui/full-page-scroll";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

interface StepFragmentProps extends Omit<HTMLMotionProps<"div">, "animate" | "transition" | "style"> {
  step: number;
  appear: number;
  recede?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function StepFragment({
  step,
  appear,
  recede,
  delay = 0,
  className,
  children,
  ...rest
}: StepFragmentProps) {
  const { isTransitioning } = useFullPage();
  const wasReceded = useRef(false);

  const hidden = step < appear;
  const receded = recede !== undefined && step >= recede;

  // Track whether this fragment has ever been receded
  if (receded) wasReceded.current = true;

  // During slide transitions, keep previously-receded fragments in the receded
  // state. Without this, the step reset (to 0 for the new slide) causes exiting
  // fragments to snap back to focal before the section exit animation hides them.
  const forceReceded = isTransitioning && wasReceded.current && !hidden && !receded;
  const isReceded = receded || forceReceded;

  const zIndex = hidden ? 0 : isReceded ? 1 : 2;

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center ${className ?? ""}`}
      style={{ zIndex }}
      animate={{
        opacity: hidden ? 0 : isReceded ? 0 : 1,
        scale: hidden ? 0.9 : isReceded ? 0.85 : 1,
        y: hidden ? 30 : isReceded ? -20 : 0,
        filter: hidden ? "blur(0px)" : isReceded ? "blur(12px)" : "blur(0px)",
      }}
      transition={{
        ...STEP_TRANSITION,
        delay: !hidden && !isReceded && delay > 0 ? delay : 0,
      }}
      aria-hidden={hidden || isReceded}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
