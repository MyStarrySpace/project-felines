"use client";

import { motion, type Variants } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  dimColor?: string;
  brightColor?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.4,
    },
  },
};

function wordVariants(dimColor: string, brightColor: string): Variants {
  return {
    hidden: { opacity: 0.25, color: dimColor },
    visible: {
      opacity: 1,
      color: brightColor,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };
}

export function ScrollRevealText({
  text,
  className,
  dimColor = "rgba(107,114,128,1)",
  brightColor = "rgba(209,213,219,1)",
}: ScrollRevealTextProps) {
  const words = text.split(" ");
  const wv = wordVariants(dimColor, brightColor);

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          variants={wv}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
}
