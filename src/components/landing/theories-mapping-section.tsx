"use client";

import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  sectionHeadline,
  sectionSubhead,
  lifestyleInterventions,
  multiLayerTreatments,
  sectionClosing,
} from "@/data/landing/theories-mapping";

function LayerBadges({ layers }: { layers: string[] }) {
  return (
    <div className="flex gap-1.5 shrink-0">
      {layers.map((layer) => (
        <span key={layer} className="text-teal-400 font-mono text-xs">
          {layer}
        </span>
      ))}
    </div>
  );
}

export function TheoriesMappingSection() {
  return (
    <ScrollSection
      id="theories"
      label="Multi-layer interventions"
      className="py-24 sm:py-32"
    >
      {/* Swiss-cheese headline */}
      <ScrollAnimate enterFrom="bottom">
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-2">
          {sectionHeadline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-16">
          {sectionSubhead}
        </p>
      </ScrollAnimate>

      {/* Lifestyle interventions */}
      <ScrollAnimate enterFrom="bottom">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
          Lifestyle interventions that protect multiple layers
        </p>
      </ScrollAnimate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mb-16">
        {lifestyleInterventions.map((item) => (
          <ScrollAnimate key={item.name} enterFrom="bottom">
            <div className="border-b border-white/5 py-3">
              <div className="flex items-baseline justify-between gap-4 mb-0.5">
                <p className="text-white text-base font-medium">
                  {item.name}
                </p>
                <LayerBadges layers={item.layers} />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.note}
              </p>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      {/* Multi-layer treatments */}
      <ScrollAnimate enterFrom="bottom">
        <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
          Treatments that target multiple layers
        </p>
      </ScrollAnimate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mb-16">
        {multiLayerTreatments.map((item) => (
          <ScrollAnimate key={item.name} enterFrom="bottom">
            <div className="border-b border-white/5 py-3">
              <div className="flex items-baseline justify-between gap-4 mb-0.5">
                <p className="text-white text-base font-medium">
                  {item.name}
                </p>
                <LayerBadges layers={item.layers} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-600 text-xs">{item.status}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mt-0.5">
                {item.note}
              </p>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      {/* Closing */}
      <ScrollAnimate enterFrom="bottom">
        <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[36ch]">
          {sectionClosing}
        </p>
      </ScrollAnimate>
    </ScrollSection>
  );
}
