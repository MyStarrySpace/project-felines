"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { useFullPage } from "@/components/ui/full-page-scroll";

export function HeroSection() {
  return (
    <div className="h-full relative overflow-hidden" role="region" aria-label="Hero">
      <div className="dot-pattern absolute inset-0" aria-hidden="true" />

      <ParallaxOrb
        className="left-[10%] top-[20%] h-[600px] w-[600px] bg-teal-600 opacity-10"
        speed={0.1}
      />
      <ParallaxOrb
        className="right-[15%] bottom-[25%] h-[500px] w-[500px] bg-[#4A2510] opacity-15"
        speed={0.2}
      />

      <div className="flex h-full flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.p
          className="font-serif leading-[1.15] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4rem)] text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Your brain&apos;s designed to manage iron
          <br />
          <span className="text-teal-400">until you&apos;re finished raising your children.</span>
        </motion.p>
        <motion.p
          className="font-serif leading-[1.15] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4rem)] text-white mt-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          You&apos;re asking it to work
          <br />
          <span className="text-teal-400">when they start raising theirs.</span>
        </motion.p>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        aria-hidden="true"
      >
        <span className="text-sm font-medium tracking-wide text-gray-400">
          Scroll or tap to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-teal-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
