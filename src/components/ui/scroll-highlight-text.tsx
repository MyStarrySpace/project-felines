"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollHighlightTextProps {
  children: string;
  className?: string;
  as?: "p" | "span";
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export function ScrollHighlightText({
  children,
  className,
  as: Tag = "p",
}: ScrollHighlightTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "start 0.35"],
  });

  const words = children.split(" ");
  const total = words.length;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={`${i}-${word}`}
          word={word}
          progress={scrollYProgress}
          range={[i / total, (i + 1) / total]}
        />
      ))}
    </Tag>
  );
}
