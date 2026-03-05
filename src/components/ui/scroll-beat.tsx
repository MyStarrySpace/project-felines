"use client";

import { type ReactNode, useMemo } from "react";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";

type EnterFrom = "left" | "right" | "bottom" | "fade" | "scale";

interface ScrollBeatProps {
  /** Parent progress MotionValue (0-1) */
  progress: MotionValue<number>;
  /** Progress value where enter animation starts */
  enter: number;
  /** Progress value where content is fully visible */
  hold: number;
  /** Progress value where exit starts (omit to stay visible) */
  exit?: number;
  /** Progress value where content is fully gone (omit to stay visible) */
  gone?: number;
  /** Direction of entrance */
  enterFrom?: EnterFrom;
  children: ReactNode;
  className?: string;
}

function buildKeyframes(
  enter: number,
  hold: number,
  exit: number | undefined,
  gone: number | undefined,
  enterVal: number,
  holdVal: number,
  exitVal: number,
  goneVal: number
): { input: number[]; output: number[] } {
  const hasExit = exit !== undefined && gone !== undefined;
  return hasExit
    ? { input: [enter, hold, exit, gone], output: [enterVal, holdVal, exitVal, goneVal] }
    : { input: [enter, hold], output: [enterVal, holdVal] };
}

/**
 * Animate content within a StickyScrollStage. Maps a sub-range of parent
 * progress to enter/hold/exit transforms. All transforms use MotionValues
 * (no React re-renders on scroll).
 */
export function ScrollBeat({
  progress,
  enter,
  hold,
  exit,
  gone,
  enterFrom = "bottom",
  children,
  className,
}: ScrollBeatProps) {
  const prefersReducedMotion = useReducedMotion();

  // Compute all keyframe arrays (stable across renders for same props)
  const kf = useMemo(() => {
    const hasExit = exit !== undefined && gone !== undefined;

    // With reduced motion: instant snap to visible during active range,
    // no positional transforms
    if (prefersReducedMotion) {
      const opacityKf = hasExit
        ? { input: [enter, enter, exit, gone], output: [0, 1, 1, 0] }
        : { input: [enter, enter], output: [0, 1] };
      const identity = { input: [0, 1], output: [0, 0] };
      return {
        opacityKf,
        xKf: identity,
        yKf: identity,
        scaleKf: { input: [0, 1], output: [1, 1] },
      };
    }

    const opacityKf = hasExit
      ? { input: [enter, hold, exit, gone], output: [0, 1, 1, 0] }
      : { input: [enter, hold], output: [0, 1] };

    let xKf = { input: [0, 1], output: [0, 0] };
    let yKf = { input: [0, 1], output: [0, 0] };
    let scaleKf = { input: [0, 1], output: [1, 1] };

    if (enterFrom === "left") {
      xKf = buildKeyframes(enter, hold, exit, gone, -60, 0, 0, 60);
    } else if (enterFrom === "right") {
      xKf = buildKeyframes(enter, hold, exit, gone, 60, 0, 0, -60);
    } else if (enterFrom === "bottom") {
      yKf = buildKeyframes(enter, hold, exit, gone, 30, 0, 0, -20);
    } else if (enterFrom === "scale") {
      scaleKf = buildKeyframes(enter, hold, exit, gone, 0.92, 1, 1, 0.95);
    }

    return { opacityKf, xKf, yKf, scaleKf };
  }, [enter, hold, exit, gone, enterFrom, prefersReducedMotion]);

  // All hooks called unconditionally
  const opacity = useTransform(progress, kf.opacityKf.input, kf.opacityKf.output);
  const x = useTransform(progress, kf.xKf.input, kf.xKf.output);
  const y = useTransform(progress, kf.yKf.input, kf.yKf.output);
  const scale = useTransform(progress, kf.scaleKf.input, kf.scaleKf.output);

  // Hide from screen readers when beat is outside its visible range.
  // visibility:hidden is respected by assistive tech (unlike opacity:0).
  const visibility = useTransform(progress, (p) => {
    const hasExit = exit !== undefined && gone !== undefined;
    if (hasExit) {
      return p < enter || p > gone ? "hidden" as const : "visible" as const;
    }
    return p < enter ? "hidden" as const : "visible" as const;
  });

  return (
    <motion.div
      style={{ opacity, x, y, scale, visibility }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
