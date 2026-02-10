"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";
import { ParallaxOrb } from "@/components/ui/parallax-orb";
import { useFullPage } from "@/components/ui/full-page-scroll";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CtaSection() {
  const { goToSlideById, goToSlide } = useFullPage();

  return (
    <div className="h-full relative overflow-hidden flex flex-col" role="region" aria-label="Conclusion">
      <ParallaxOrb
        className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-teal-600 opacity-10"
        speed={0.15}
      />

      <Container width="reading" className="relative z-10 flex flex-1 items-center py-[var(--space-section)]">
        <motion.div
          className="flex w-full flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 id="cta-heading" className="font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[42px]">
              Iron biology needs more attention
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ScrollRevealText
              text="Single-target drugs keep failing. Interventions that address iron distribution, glial cell health, and export pathways together may do better. A companion paper with detailed evidence and kinetic modeling is forthcoming."
              className="mt-6 block text-xl leading-relaxed sm:text-2xl sm:leading-relaxed"
              dimColor="rgba(107,114,128,1)"
              brightColor="rgba(209,213,219,1)"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
            <Link href="/explore/biology">
              <Button
                variant="primary-inverse"
                size="lg"
              >
                Explore the research
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="secondary-inverse"
              size="lg"
              onClick={() => goToSlide(0)}
            >
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Inline footer */}
      <div className="relative z-10 border-t border-white/5 py-4 text-center text-xs text-gray-400" role="contentinfo">
        Project FELINE. For research and educational purposes.
      </div>
    </div>
  );
}
