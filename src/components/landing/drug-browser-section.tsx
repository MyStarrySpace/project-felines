"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, type MotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { DrugBrowser, type SpotlightPhase } from "@/components/landing/drug-browser";
import { drugs, outcomeColor, outcomeLabel, type Drug } from "@/data/landing/drug-browser";
import { Cite } from "@/components/citation";

/* ------------------------------------------------------------------ */
/*  Desktop: scroll-driven two-beat stage                              */
/* ------------------------------------------------------------------ */

const PHASE_THRESHOLD = 0.45;

function DrugBrowserStage({ progress }: { progress: MotionValue<number> }) {
  const [phase, setPhase] = useState<SpotlightPhase>("chelators");
  const dismissed = useRef(false);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useMotionValueEvent(progress, "change", (v) => {
    if (dismissed.current) return;
    const next = v >= PHASE_THRESHOLD ? "signals" : "chelators";
    if (next !== phaseRef.current) setPhase(next);
  });

  const handleDismiss = useCallback(() => {
    dismissed.current = true;
    setPhase("dismissed");
  }, []);

  // Pointer-events gating for overlapping headings
  const pe1 = useTransform(progress, (p) =>
    p >= 0.0 && p <= 0.50 ? "auto" : "none",
  );
  const pe2 = useTransform(progress, (p) =>
    p >= 0.40 ? "auto" : "none",
  );

  return (
    <div className="h-full flex flex-col justify-center px-6 sm:px-8">
      <div className="w-full max-w-[782px] mx-auto">
        {/* Heading area: overlapping absolute-positioned beats */}
        <div className="relative min-h-[12rem] mb-8">
          <div
            className="grid"
            style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
          >
            {/* Beat 1 heading */}
            <motion.div className="col-start-1 row-start-1" style={{ pointerEvents: pe1 }}>
              <ScrollBeat
                progress={progress}
                enter={0.00}
                hold={0.05}
                exit={0.40}
                gone={0.48}
                enterFrom="bottom"
              >
                <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
                  Drug trials
                </p>
                <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
                  Deferiprone failed by working.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-[52ch]">
                  72 drugs across six diseases. Deferiprone, the only iron
                  chelator trialed in neurodegeneration, reduced brain iron
                  exactly as designed. Patients got worse. The problem
                  isn&rsquo;t too much iron. It&rsquo;s iron in the wrong places.
                </p>
              </ScrollBeat>
            </motion.div>

            {/* Beat 2 heading */}
            <motion.div className="col-start-1 row-start-1" style={{ pointerEvents: pe2 }}>
              <ScrollBeat
                progress={progress}
                enter={0.42}
                hold={0.52}
                enterFrom="bottom"
              >
                <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
                  Signal drugs
                </p>
                <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
                  They&rsquo;re only part of the iron picture.
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-[52ch]">
                  Deferoxamine binds iron more tightly than deferiprone,
                  but IM injection and poor brain penetration meant it
                  redistributed more than it chelated. It halved AD
                  decline in 1991. ATH434 slowed MSA by 48% through
                  deliberate redistribution. Lactoferrin improved
                  cognition for $15/month. Three signals. No follow-up.
                </p>
              </ScrollBeat>
            </motion.div>
          </div>
        </div>

        {/* Grid persists across both beats */}
        <DrugBrowser
          spotlightPhase={phase}
          onDismissSpotlight={handleDismiss}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: summary cards for key drugs + link to full browser          */
/* ------------------------------------------------------------------ */

/** IDs of spotlight drugs: Deferiprone (PD), Deferiprone (AD), Deferoxamine, ATH434, Lactoferrin */
const mobileDrugIds = [26, 27, 30, 29, 62];
const mobileDrugs = mobileDrugIds
  .map((id) => drugs.find((d) => d.id === id))
  .filter((d): d is Drug => d !== undefined);

function DrugCard({ drug }: { drug: Drug }) {
  const color = outcomeColor(drug.outcome);
  return (
    <div className="border border-white/5 px-4 py-3">
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <p className="text-white font-medium text-sm">
          {drug.name}
          <span className="text-gray-500 font-normal text-xs ml-1">
            ({drug.disease})
          </span>
        </p>
        <span
          className="text-xs font-medium px-1.5 py-0.5 shrink-0"
          style={{ color, backgroundColor: `${color}15` }}
        >
          {outcomeLabel(drug.outcome)}
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-1">{drug.company}</p>
      <p className="text-xs text-gray-300 leading-relaxed">
        {drug.detail ?? drug.note}
        {drug.sourceId && (
          <Cite id={drug.sourceId} citationIds={drug.citationIds} />
        )}
      </p>
    </div>
  );
}

function DrugBrowserFlowing() {
  return (
    <div className="reading-width px-6 py-24 sm:py-32">
      <ScrollAnimate enterFrom="bottom">
        <p className="text-sm text-teal-400 tracking-wide uppercase mb-3">
          Drug trials
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
          Deferiprone failed by working.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-[52ch]">
          72 drugs across six diseases. Deferiprone, the only iron
          chelator trialed in neurodegeneration, reduced brain iron
          exactly as designed. Patients got worse. The problem
          isn&rsquo;t too much iron. It&rsquo;s iron in the wrong places.
        </p>
      </ScrollAnimate>

      <ScrollAnimate enterFrom="bottom">
        <div className="space-y-3 mb-8">
          {mobileDrugs.map((drug) => (
            <DrugCard key={drug.id} drug={drug} />
          ))}
        </div>

        <Link
          href="/explore/drugs"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gray-200 border border-white/15 hover:text-white hover:border-white/30 transition-colors"
        >
          Browse all {drugs.length} drugs
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </ScrollAnimate>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported section                                                   */
/* ------------------------------------------------------------------ */

export function DrugBrowserSection() {
  return (
    <ScrollSection id="trials" label="Chelation backfired" fullWidth className="py-0" breakpoints={[0, 0.37, 0.60]}>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={300}>
          {(progress) => <DrugBrowserStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <DrugBrowserFlowing />
      </div>
    </ScrollSection>
  );
}
