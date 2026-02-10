"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ParallaxOrbProps {
  className?: string;
  speed?: number;
}

export function ParallaxOrb({ className, speed = 0.15 }: ParallaxOrbProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { damping: 60, stiffness: 80 });
  const y = useSpring(mouseY, { damping: 60, stiffness: 80 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) * speed);
      mouseY.set((e.clientY - cy) * speed);
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY, speed]);

  return (
    <motion.div
      className={`ambient-orb ${className ?? ""}`}
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}
