"use client";

import Link from "next/link";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  gwasGenes,
  gwasStats,
  survivorshipBias,
  layerLabels,
} from "@/data/landing/gwas-genes";
import { defenseLayers } from "@/data/landing/entry-points";

const sortedGenes = [...gwasGenes].sort(
  (a, b) => defenseLayers.indexOf(a.primaryLayer) - defenseLayers.indexOf(b.primaryLayer),
);

export function GwasSection() {
  return (
    <ScrollSection id="gwas" label="Risk genes map to defense" className="py-24 sm:py-32">
        {/* Headline */}
        <ScrollAnimate enterFrom="bottom">
          <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
            Genetics
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
            The genetics of defense, not iron
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-[52ch]">
            GWAS found 75+ AD risk genes. Zero are canonical iron genes. But
            nearly all map to FELINE defense layers: they protect against iron
            damage rather than controlling iron directly.
          </p>
        </ScrollAnimate>

        {/* Stat row */}
        <ScrollAnimate enterFrom="bottom">
          <div className="grid grid-cols-3 gap-6 mb-16">
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

        {/* Gene table — 2-column grid sorted by FELINE layer */}
        <ScrollAnimate enterFrom="bottom">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-12">
            {sortedGenes.map((gene) => (
              <div
                key={gene.id}
                className="flex items-baseline gap-3 py-2 border-b border-white/5"
              >
                <span className="font-mono text-teal-400 text-xs w-5 shrink-0">
                  {gene.primaryLayer}
                </span>
                <span className="text-sm text-white font-medium w-16 shrink-0">
                  {gene.id}
                </span>
                <span className="text-xs text-gray-500 truncate">
                  {gene.fullName}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        {/* Survivorship bias callout */}
        <ScrollAnimate enterFrom="bottom">
          <div className="border-l-2 border-white/10 pl-4 mb-10">
            <p className="text-white text-sm font-semibold mb-1">
              {survivorshipBias.headline}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {survivorshipBias.body}
            </p>
          </div>
        </ScrollAnimate>

        {/* CTA */}
        <ScrollAnimate enterFrom="bottom">
          <Link
            href="/explore/gwas"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-sm"
          >
            Explore all GWAS genes by layer
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </ScrollAnimate>

      </ScrollSection>
  );
}
