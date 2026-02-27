"use client";

import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  theoriesMappingHeadline,
  theoriesMappingSubhead,
  theoryMappings,
  failedTheories,
  failedTheoriesHeadline,
  theoriesMappingClosing,
} from "@/data/landing/theories-mapping";

export function TheoriesMappingSection() {
  return (
    <ScrollSection
      id="theories"
      label="One system, not competing theories"
      className="py-24 sm:py-32"
    >
      {/* Headline */}
      <ScrollAnimate enterFrom="bottom">
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-2">
          {theoriesMappingHeadline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-16">
          {theoriesMappingSubhead}
        </p>
      </ScrollAnimate>

      {/* Theory → Layer rows */}
      <div className="space-y-0 mb-16">
        {theoryMappings.map((mapping) => (
          <ScrollAnimate key={mapping.theory} enterFrom="bottom">
            <div className="border-t border-white/5 py-5">
              <div className="flex items-baseline justify-between gap-4 mb-1.5">
                <p className="text-white text-base font-medium">
                  {mapping.theory}
                </p>
                <div className="flex gap-1.5 shrink-0">
                  {mapping.layers.map((layer) => (
                    <span
                      key={layer}
                      className="text-teal-400 font-mono text-sm"
                    >
                      {layer}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {mapping.explanation}
              </p>
              <p className="text-gray-600 text-xs mt-1">
                {mapping.treatments}
              </p>
            </div>
          </ScrollAnimate>
        ))}
        {/* Bottom border for last row */}
        <div className="border-t border-white/5" />
      </div>

      {/* Failed theories */}
      <ScrollAnimate enterFrom="bottom">
        <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.1] text-gray-500 mb-8">
          {failedTheoriesHeadline}
        </p>
      </ScrollAnimate>

      <ScrollAnimate enterFrom="bottom">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 mb-16">
          {failedTheories.map((ft) => (
            <div
              key={ft.theory}
              className="border-b border-white/5 py-3"
            >
              <p className="text-gray-500 text-sm font-medium">
                {ft.theory}
              </p>
              <p className="text-gray-600 text-xs leading-relaxed mt-0.5">
                {ft.treatment} — {ft.outcome}
              </p>
            </div>
          ))}
        </div>
      </ScrollAnimate>

      {/* Closing */}
      <ScrollAnimate enterFrom="bottom">
        <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-relaxed text-gray-200 max-w-[32ch]">
          {theoriesMappingClosing}
        </p>
      </ScrollAnimate>
    </ScrollSection>
  );
}
