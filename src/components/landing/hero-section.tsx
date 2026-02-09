"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { heroData } from "@/data/landing/hero";

export function HeroSection() {
  const { goToSlideById, currentStep } = useFullPage();
  const step = currentStep;
  const mainQuote = heroData.quotes[0];
  const supportingQuotes = heroData.quotes.slice(1);

  return (
    <div className="h-full relative overflow-hidden">
      <div className="dot-pattern absolute inset-0" />

      <ParallaxOrb
        className="left-[10%] top-[20%] h-[600px] w-[600px] bg-teal-600 opacity-10"
        speed={0.1}
      />
      <ParallaxOrb
        className="right-[15%] bottom-[25%] h-[500px] w-[500px] bg-[#2a1f5e] opacity-15"
        speed={0.2}
      />

      {/* ── Step 0: THE PATTERN ─────────────────────────────────── */}
      {/* The core fact, stated plainly at full-screen scale.       */}
      {/* Disease names ground it. Tag line creates the gap.        */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center px-6 sm:px-12 lg:px-20">
          {heroData.openingLines.map((line, i) => (
            <motion.p
              key={i}
              className={`font-serif leading-[1.1] tracking-[-0.03em] text-[clamp(2.25rem,7vw,5.5rem)] ${
                i === heroData.openingLines.length - 1
                  ? "text-teal-400"
                  : "text-white"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.p>
          ))}

          <motion.p
            className="mt-8 text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {heroData.openingDiseases}
          </motion.p>

          <motion.p
            className="mt-4 text-sm tracking-wide text-gray-600 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            {heroData.openingTag}
          </motion.p>
        </div>
      </StepFragment>

      {/* ── Step 1: THE SHIFT ───────────────────────────────────── */}
      {/* The field is converging on iron. One pivotal quote proves */}
      {/* this isn't a fringe idea. Supporting refs show momentum.  */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-6 sm:px-12">
          <blockquote>
            <p className="font-serif italic text-[clamp(1.375rem,3.8vw,2.75rem)] leading-[1.35] tracking-[-0.01em] text-gray-200">
              &ldquo;{mainQuote.text}&rdquo;
            </p>
            <footer className="mt-8 text-base text-gray-400 sm:text-lg">
              <span className="not-italic font-medium text-teal-400">
                {mainQuote.source}
              </span>{" "}
              <a
                href={`https://doi.org/${mainQuote.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="not-italic underline underline-offset-2 decoration-gray-600 hover:decoration-teal-400 transition-colors"
              >
                {mainQuote.journal}
              </a>{" "}
              ({mainQuote.year})
            </footer>
          </blockquote>

          {supportingQuotes.length > 0 && (
            <>
              <div className="mt-8 h-px w-16 bg-gray-700" />
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm text-gray-500">
                <span>See also</span>
                {supportingQuotes.map((q, i) => (
                  <span key={i}>
                    {i > 0 && <span className="mx-1">&middot;</span>}
                    <a
                      href={`https://doi.org/${q.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 decoration-gray-700 hover:text-teal-400 hover:decoration-teal-400 transition-colors"
                    >
                      {q.source}, {q.journal} {q.year}
                    </a>
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </StepFragment>

      {/* ── Step 2: THE CALL ────────────────────────────────────── */}
      {/* Name the specific biology that needs attention. Position  */}
      {/* FELINE as a lens, not the main event.                     */}
      <StepFragment step={step} appear={2}>
        <div className="flex flex-col items-center text-center px-6">
          <span className="inline-flex items-center border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-teal-400 backdrop-blur-sm">
            {heroData.kicker}
          </span>

          <ScrollRevealText
            text={heroData.subtitle}
            className="mt-10 block max-w-[var(--width-reading)] text-center text-[clamp(1.375rem,3.2vw,2rem)] leading-relaxed"
            dimColor="rgba(107,114,128,1)"
            brightColor="rgba(209,213,219,1)"
          />

          <div className="mt-12 flex gap-4">
            <Button
              variant="primary-inverse"
              size="lg"
              onClick={() => goToSlideById("evidence")}
            >
              {heroData.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary-inverse"
              size="lg"
              onClick={() => goToSlideById("biology")}
            >
              {heroData.secondaryCta}
            </Button>
          </div>
        </div>
      </StepFragment>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 0 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-sm font-medium tracking-wide text-gray-400">
          Scroll to explore
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
