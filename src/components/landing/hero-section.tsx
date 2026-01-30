"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

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

      {/* Step 0: 99% stat — huge, centered */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center">
          <motion.span
            className="text-white font-serif text-[120px] leading-none tracking-tight sm:text-[160px]"
            initial={{ scale: 1.4, y: 60 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedCounter value={99} suffix="%" />
          </motion.span>
          <p className="mt-2 text-lg font-medium text-gray-400">
            of 400+ Alzheimer&apos;s drugs failed
          </p>
        </div>
      </StepFragment>

      {/* Step 1: Kicker badge + headline h1 */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-teal-400 backdrop-blur-sm">
            A new framework for neurodegeneration
          </span>
          <h1 className="mt-8 max-w-3xl font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px] sm:leading-[1.15] sm:tracking-[-0.02em]">
            Single-target drugs can&apos;t fix a multi-system disease
          </h1>
        </div>
      </StepFragment>

      {/* Step 2: ScrollRevealText subtitle + CTA buttons */}
      <StepFragment step={step} appear={2}>
        <div className="flex flex-col items-center text-center">
          <ScrollRevealText
            text="The PLIG framework proposes that neurodegeneration emerges from the convergence of four damage pathways: pericyte loss, lysosomal failure, iron dysregulation, and glial collapse. No single-target drug can address this."
            className="block max-w-[var(--width-reading)] text-center text-xl leading-relaxed sm:text-2xl sm:leading-relaxed"
            dimColor="rgba(107,114,128,1)"
            brightColor="rgba(209,213,219,1)"
          />
          <div className="mt-10 flex gap-4">
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
          </div>
        </div>
      </StepFragment>
    </div>
  );
}
