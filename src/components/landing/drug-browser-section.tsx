"use client";

import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { DrugBrowser } from "@/components/landing/drug-browser";

export function DrugBrowserSection() {
  return (
    <ScrollSection id="trials" label="Chelation backfired" className="py-24 sm:py-32">
      <ScrollAnimate enterFrom="bottom">
        <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
          Drug trials
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
          Iron chelators failed by working.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-[52ch]">
          Antibodies, gene therapies, kinase inhibitors, iron chelators.
          72 drugs across six diseases. Deferiprone reduced brain iron
          exactly as designed, and patients got worse. The problem
          isn&rsquo;t too much iron. It&rsquo;s iron in the wrong places.
        </p>
      </ScrollAnimate>
      <ScrollAnimate enterFrom="bottom" start={0.1} end={0.25}>
        <DrugBrowser />
      </ScrollAnimate>
    </ScrollSection>
  );
}
