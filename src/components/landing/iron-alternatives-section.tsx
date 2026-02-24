"use client";

import Image from "next/image";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  alternativesHeadline,
  alternativesBody,
  alternatives,
  alternativesInsight,
} from "@/data/landing/iron-alternatives";

export function IronAlternativesSection() {
  return (
    <ScrollSection id="alternatives" label="Alternatives" className="py-24 sm:py-32">
      <ScrollAnimate enterFrom="bottom">
        <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
          Untested
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
          {alternativesHeadline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-[52ch]">
          {alternativesBody}
        </p>
      </ScrollAnimate>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {alternatives.map((alt) => (
          <ScrollAnimate key={alt.name} enterFrom="bottom">
            <div className="border border-white/5 p-5 flex flex-col h-full">
              {/* Structure image */}
              <div className="flex items-center justify-center bg-white rounded mb-4 aspect-square overflow-hidden">
                <Image
                  src={alt.structureImage}
                  alt={`${alt.name} structure (${alt.structureSource}: ${alt.structureId})`}
                  width={240}
                  height={240}
                  className="object-contain w-full h-full p-2"
                />
              </div>

              {/* Header */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                <h3 className="text-base font-semibold text-white">{alt.name}</h3>
                <span className="text-sm text-teal-400">{alt.size}</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                {alt.sizeMultiple} deferiprone
              </p>

              {/* Mechanism + description */}
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                {alt.mechanism}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-2 flex-1">
                {alt.description}
              </p>

              {/* Trial status */}
              <p className="text-gray-500 text-xs leading-relaxed">
                {alt.trialStatus}
              </p>

              {/* Structure source */}
              <p className="text-gray-600 text-[10px] mt-2">
                {alt.structureSource}: {alt.structureId}
              </p>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      <ScrollAnimate enterFrom="bottom">
        <div className="mt-10 border-l-2 border-white/10 pl-4">
          <p className="text-gray-400 text-base leading-relaxed">
            {alternativesInsight}
          </p>
        </div>
      </ScrollAnimate>
    </ScrollSection>
  );
}
