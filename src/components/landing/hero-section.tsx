"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

const mainQuote = {
  text: "A scheme of AD pathogenesis where brain iron is center stage and is involved in every step of the sequence of events that produce characteristic AD pathology.",
  source: "Streit, Phan & Bechmann",
  journal: "Pharmacological Reviews",
  year: 2024,
  doi: "10.1124/pharmrev.123.000823",
};

const supportingQuotes = [
  {
    text: "Future developments directed to non-amyloid targets that might have more clinical efficacy and less adverse effects.",
    source: "Frisoni et al.",
    journal: "The Lancet",
    year: 2025,
    doi: "10.1016/S0140-6736(25)01389-3",
  },
  {
    text: "Neurons have an exceptionally large surface area and metabolic demand, which necessitates specific mechanisms to engage constantly to protect the plasma membrane against lipid peroxidation.",
    source: "Lei et al.",
    journal: "Nature Reviews Neuroscience",
    year: 2025,
    doi: "10.1038/s41583-025-00930-5",
  },
];

export function HeroSection() {
  const { goToSlideById, currentStep } = useFullPage();
  const step = currentStep;

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

      {/* ── Step 0: THE PATTERN ─────────────────────────────────── */}
      <StepFragment step={step} appear={0} recede={1}>
        <div className="flex flex-col items-center text-center px-6 sm:px-12 lg:px-20 max-w-5xl mx-auto">
          <motion.p
            className="font-serif leading-[1.15] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4rem)] text-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Your brain&apos;s designed to manage iron until you&apos;re finished
            raising your children.
          </motion.p>
          <motion.p
            className="font-serif leading-[1.15] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4rem)] text-white mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            You&apos;re asking it to work when they start raising theirs.
          </motion.p>

          <motion.p
            className="mt-8 text-lg text-gray-400 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Alzheimer&apos;s. Parkinson&apos;s. ALS. MS. Long COVID. Prion disease.
          </motion.p>

          <motion.p
            className="mt-4 text-sm tracking-wide text-gray-600 sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            This has been known for decades.
          </motion.p>
        </div>
      </StepFragment>

      {/* ── Step 1: THE SHIFT ───────────────────────────────────── */}
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
        </div>
      </StepFragment>

      {/* ── Step 2: THE CALL ────────────────────────────────────── */}
      <StepFragment step={step} appear={2}>
        <div className="flex flex-col items-center text-center px-6">
          <ScrollRevealText
            text="How the brain handles iron. How glial cells distribute it. What happens when those systems fail."
            className="block max-w-[var(--width-reading)] text-center text-[clamp(1.375rem,3.2vw,2rem)] leading-relaxed"
            dimColor="rgba(107,114,128,1)"
            brightColor="rgba(209,213,219,1)"
          />

          <div className="mt-12 flex gap-4">
            <Button
              variant="primary-inverse"
              size="lg"
              onClick={() => goToSlideById("evidence")}
            >
              Explore the evidence
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary-inverse"
              size="lg"
              onClick={() => goToSlideById("findings")}
            >
              See key findings
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
