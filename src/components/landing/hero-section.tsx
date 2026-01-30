"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { useFullPage } from "@/components/ui/full-page-scroll";

const STEP_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

export function HeroSection() {
  const { goToSlideById, currentStep } = useFullPage();
  const step = currentStep;

  return (
    <div className="h-full relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="dot-pattern absolute inset-0" />

      {/* Ambient orbs */}
      <ParallaxOrb
        className="left-1/4 top-1/4 h-[500px] w-[500px] bg-teal-600 opacity-15"
        speed={0.1}
      />
      <ParallaxOrb
        className="right-1/4 bottom-1/3 h-[400px] w-[400px] bg-[#2a1f5e] opacity-20"
        speed={0.2}
      />

      <Container
        width="full"
        className="relative z-10 flex h-full items-center py-[var(--space-section)]"
      >
        <div className="flex w-full flex-col items-center text-center">
          {/* Kicker badge */}
          <motion.div
            animate={{
              opacity: step < 1 ? 0 : step >= 2 ? 0.15 : 1,
              y: step >= 1 ? 0 : -10,
              filter: step >= 2 ? "blur(4px)" : "blur(0px)",
            }}
            transition={STEP_TRANSITION}
          >
            <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-teal-400 backdrop-blur-sm">
              A new framework for neurodegeneration
            </span>
          </motion.div>

          {/* Massive stat */}
          <motion.div
            className="mt-8"
            animate={{
              scale: step >= 1 ? 1 : 1.4,
              y: step >= 1 ? 0 : 60,
              opacity: step >= 1 ? 0.15 : 1,
              filter: step >= 1 ? "blur(4px)" : "blur(0px)",
            }}
            transition={STEP_TRANSITION}
          >
            <span className="text-white font-serif text-[120px] leading-none tracking-tight sm:text-[160px]">
              <AnimatedCounter value={99} suffix="%" />
            </span>
            <p className="mt-2 text-lg font-medium text-gray-400">
              of 400+ Alzheimer&apos;s drugs failed
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="mt-8"
            animate={{
              opacity: step < 1 ? 0 : step >= 2 ? 0.15 : 1,
              y: step >= 1 ? 0 : 30,
              filter: step >= 2 ? "blur(4px)" : "blur(0px)",
            }}
            transition={STEP_TRANSITION}
          >
            <h1 className="max-w-3xl font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px] sm:leading-[1.15] sm:tracking-[-0.02em]">
              Single-target drugs can&apos;t fix a multi-system disease
            </h1>
          </motion.div>

          {/* Subtitle with scroll reveal */}
          <motion.div
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 20,
            }}
            transition={{ ...STEP_TRANSITION, delay: step >= 2 ? 0.05 : 0 }}
          >
            <ScrollRevealText
              text="The PLIG framework proposes that neurodegeneration emerges from the convergence of four damage pathways: pericyte loss, lysosomal failure, iron dysregulation, and glial collapse. No single-target drug can address this."
              className="mt-6 block max-w-[var(--width-reading)] text-center text-lg leading-relaxed"
              dimColor="rgba(107,114,128,1)"
              brightColor="rgba(209,213,219,1)"
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex gap-4"
            animate={{
              opacity: step >= 2 ? 1 : 0,
              y: step >= 2 ? 0 : 20,
            }}
            transition={{ ...STEP_TRANSITION, delay: step >= 2 ? 0.1 : 0 }}
          >
            <Button
              variant="primary-inverse"
              size="lg"
              onClick={() => goToSlideById("framework")}
            >
              Explore the Framework
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary-inverse"
              size="lg"
              onClick={() => goToSlideById("evidence")}
            >
              View the Evidence
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
