"use client";

import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { gwasStats } from "@/data/landing/gwas-genes";
import { GwasBrowser } from "@/components/landing/gwas-browser";

export function GwasSection() {
  return (
    <ScrollSection id="gwas" label="Risk genes map to defense" className="py-24 sm:py-32" breakpoints={[]}>
      {/* Headline */}
      <ScrollAnimate enterFrom="bottom">
        <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
          Genetics
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
          217 risk genes. Where do they map?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-[52ch]">
          AD and PD GWAS hits, sorted by biological function. Zero
          canonical iron genes, but nearly every hit involves a defense
          layer that handles iron.
        </p>
      </ScrollAnimate>

      {/* Stat row */}
      <ScrollAnimate enterFrom="bottom">
        <div className="grid grid-cols-2 gap-6 mb-16">
          {Object.values(gwasStats).map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-[clamp(2rem,4vw,3rem)] text-white leading-none">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* Interactive gene browser */}
      <ScrollAnimate enterFrom="bottom">
        <GwasBrowser />
      </ScrollAnimate>

    </ScrollSection>
  );
}
