"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function ExploreBackLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/"
      aria-label="Back to Project FELINE presentation"
      className="fixed top-4 left-4 z-40 hidden md:flex items-center gap-1.5 py-1.5 transition-colors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ArrowLeft className="h-4 w-4 text-teal-400 transition-transform group-hover:-translate-x-0.5" />
      <motion.span
        initial={false}
        animate={{
          width: hovered ? "auto" : 0,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden whitespace-nowrap text-sm font-medium text-gray-400"
      >
        Project FELINE
      </motion.span>
    </Link>
  );
}
