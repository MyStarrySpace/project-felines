"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

interface StepFragmentProps extends Omit<HTMLMotionProps<"div">, "animate" | "transition"> {
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
  const hidden = step < appear;
  const receded = recede !== undefined && step >= recede;

  return (
    <motion.div
      className={className}
      animate={{
        opacity: hidden ? 0 : receded ? 0.15 : 1,
        y: hidden ? 20 : 0,
        filter: receded ? "blur(4px)" : "blur(0px)",
      }}
      transition={{
        ...STEP_TRANSITION,
        delay: !hidden && delay > 0 ? delay : 0,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
