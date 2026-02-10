"use client";

import { motion } from "framer-motion";

type Direction = "left" | "right" | "top" | "bottom";
type ShapeType = "line" | "bracket" | "circle";

interface AnimatedShapeProps {
  direction: Direction;
  shape: ShapeType;
  color?: string;
  delay?: number;
  visible?: boolean;
  className?: string;
}

function getInitial(direction: Direction) {
  switch (direction) {
    case "left":
      return { x: "-100vw", opacity: 0 };
    case "right":
      return { x: "100vw", opacity: 0 };
    case "top":
      return { y: "-100vh", opacity: 0 };
    case "bottom":
      return { y: "100vh", opacity: 0 };
  }
}

function ShapeContent({ shape, color }: { shape: ShapeType; color: string }) {
  switch (shape) {
    case "line":
      return <div className={`h-px w-full ${color}`} />;
    case "bracket":
      return (
        <div className={`h-8 w-8 border-l-2 border-t-2 ${color}`} />
      );
    case "circle":
      return (
        <div className={`h-3 w-3 rounded-full ${color}`} />
      );
  }
}

export function AnimatedShape({
  direction,
  shape,
  color = "border-teal-600/40 bg-teal-600/40",
  delay = 0,
  visible = true,
  className = "",
}: AnimatedShapeProps) {
  const initial = getInitial(direction);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      aria-hidden="true"
      initial={initial}
      animate={
        visible
          ? { x: 0, y: 0, opacity: 1 }
          : initial
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ShapeContent shape={shape} color={color} />
    </motion.div>
  );
}
