"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  sectionHeadline,
  sectionSubhead,
  lifestyleInterventions,
  multiLayerTreatments,
  sectionClosing,
  type LayerEffect,
  type Strength,
} from "@/data/landing/theories-mapping";

const ALL_LAYERS = ["Fe", "L", "I", "N", "E", "S"] as const;

const strengthOpacity: Record<Strength, string> = {
  strong: "opacity-100",
  moderate: "opacity-50",
  weak: "opacity-25",
};

const strengthLabel: Record<Strength, string> = {
  strong: "Strong evidence",
  moderate: "Moderate evidence",
  weak: "Weak evidence",
};

function LayerTooltip({
  effect,
  anchorRef,
  onClose,
}: {
  effect: LayerEffect;
  anchorRef: HTMLElement | null;
  onClose: () => void;
}) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (!anchorRef || !tooltipRef.current) return;
    const rect = anchorRef.getBoundingClientRect();
    const tip = tooltipRef.current.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - tip.width / 2;
    // Keep tooltip on screen
    if (left < 8) left = 8;
    if (left + tip.width > window.innerWidth - 8)
      left = window.innerWidth - tip.width - 8;
    setPos({ top: rect.top - tip.height - 6, left });
  }, [anchorRef]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        anchorRef &&
        !anchorRef.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [anchorRef, onClose]);

  return (
    <div
      ref={tooltipRef}
      className="fixed z-50 max-w-xs border border-white/10 bg-[#1A0F0A]/95 px-3 py-2.5 text-sm shadow-xl"
      style={{
        top: pos ? pos.top : -9999,
        left: pos ? pos.left : -9999,
        visibility: pos ? "visible" : "hidden",
      }}
    >
      <p className="text-teal-400 text-xs font-medium mb-1">
        {effect.layer} · {strengthLabel[effect.strength]}
      </p>
      <p className="text-gray-300 text-xs leading-relaxed">
        {effect.rationale}
      </p>
    </div>
  );
}

function LayerBadges({ effects }: { effects: LayerEffect[] }) {
  const [active, setActive] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLSpanElement | null>>({});

  const effectMap = new Map(effects.map((e) => [e.layer, e]));
  const activeEffect = active ? effectMap.get(active) : null;

  return (
    <>
      <div className="flex gap-1.5 shrink-0">
        {ALL_LAYERS.map((layer) => {
          const effect = effectMap.get(layer);
          return (
            <span
              key={layer}
              ref={(el) => {
                refs.current[layer] = el;
              }}
              className={`font-serif text-xs select-none ${
                effect
                  ? `text-teal-400 ${strengthOpacity[effect.strength]} cursor-pointer hover:!opacity-100 transition-opacity`
                  : "text-white/[0.06]"
              }`}
              onClick={() => {
                if (effect) setActive(active === layer ? null : layer);
              }}
              onMouseEnter={() => {
                if (effect) setActive(layer);
              }}
              onMouseLeave={() => setActive(null)}
            >
              {layer}
            </span>
          );
        })}
      </div>
      {activeEffect && (
        <LayerTooltip
          effect={activeEffect}
          anchorRef={refs.current[active!] ?? null}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}

export function TheoriesMappingSection() {
  return (
    <ScrollSection
      id="theories"
      label="Multi-layer interventions"
      className="py-24 sm:py-32"
      breakpoints={[]}
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
                <LayerBadges effects={item.effects} />
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
                <LayerBadges effects={item.effects} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 text-xs">{item.status}</span>
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
