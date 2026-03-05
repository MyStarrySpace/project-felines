"use client";

import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { survivorshipBias } from "@/data/landing/gwas-genes";

export function SurvivorshipBiasSection() {
  return (
    <ScrollSection
      id="survivorship"
      label="Survivorship bias"
      className="py-24 sm:py-32"
    >
      <ScrollAnimate enterFrom="bottom">
        <h3 className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.1] tracking-[-0.02em] text-white mb-4">
          {survivorshipBias.headline}
        </h3>
        <p className="text-gray-400 text-base leading-relaxed max-w-[52ch]">
          {survivorshipBias.body}
        </p>
      </ScrollAnimate>
    </ScrollSection>
  );
}
