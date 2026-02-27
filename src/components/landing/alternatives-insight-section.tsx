"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  insightLines,
  floatingProteins,
  mabCritique,
  type FloatingProtein,
} from "@/data/landing/alternatives-insight";

/**
 * Protein image that follows a 3-point arc driven by scroll progress.
 * The arc is defined as [startX, startY, midX, midY, endX, endY],
 * where X is % from left and Y is vh from top.
 *
 * Using separate input ranges for X and Y with a mid-point creates
 * a curved path (parabolic arc) rather than a straight line.
 */
function ArcingProtein({
  protein,
  progress,
}: {
  protein: FloatingProtein;
  progress: MotionValue<number>;
}) {
  const [sx, sy, mx, my, ex, ey] = protein.arc;

  // X follows: start -> mid (quick) -> end (slow drift)
  const x = useTransform(progress, [0, 0.35, 0.8], [sx, mx, ex]);
  const xPct = useTransform(x, (v) => `${v}%`);

  // Y follows: start -> mid -> end (slightly different timing = curved path)
  const y = useTransform(progress, [0, 0.4, 0.85], [sy, my, ey]);
  const yVh = useTransform(y, (v) => `${v}vh`);

  // Opacity: visible at grid position, brighten during arc, dim at end
  const opacity = useTransform(
    progress,
    [0, 0.08, 0.2, 0.65, 0.9],
    [0.15, 0.3, 0.3, 0.2, 0.05]
  );

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: xPct,
        top: yVh,
        width: `${protein.sizeVw}vw`,
        maxWidth: "300px",
        opacity,
        maskImage:
          "radial-gradient(ellipse 80% 80% at center, rgba(0,0,0,0.9) 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 80% at center, rgba(0,0,0,0.9) 0%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <Image
        src={protein.src}
        alt={protein.name}
        width={400}
        height={400}
        className="w-full h-auto mix-blend-lighten"
      />
    </motion.div>
  );
}

function InsightStage({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="h-full relative overflow-hidden">
      {/* Arcing protein images */}
      {floatingProteins.map((p) => (
        <ArcingProtein key={p.name} protein={p} progress={progress} />
      ))}

      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8">
        <div className="reading-width w-full">
          {insightLines.map((line, i) => (
            <ScrollBeat
              key={i}
              progress={progress}
              enter={0.10 + i * 0.12}
              hold={0.18 + i * 0.12}
              exit={i < insightLines.length - 1 ? 0.22 + i * 0.12 : undefined}
              gone={i < insightLines.length - 1 ? 0.28 + i * 0.12 : undefined}
              enterFrom="bottom"
            >
              <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-gray-200 max-w-[24ch]">
                {line}
              </p>
            </ScrollBeat>
          ))}

          {/* mAb critique */}
          <ScrollBeat progress={progress} enter={0.62} hold={0.72} enterFrom="left">
            <div className="mt-6 border border-white/5 p-6 max-w-lg">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                Meanwhile
              </p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-[clamp(2rem,6vw,3.5rem)] text-red-400 leading-none">
                  {mabCritique.stat}
                </span>
                <span className="text-sm text-gray-400">
                  {mabCritique.statLabel}
                </span>
              </div>
              {mabCritique.points.map((point, i) => (
                <p key={i} className="text-sm text-gray-400 leading-relaxed mb-1 last:mb-0">
                  {point}
                  {i === 0 && <Cite id="muir-2024-alz-dement" />}
                  {i === 1 && <Cite id="wolters-2024-alz-dement" />}
                  {i === 2 && <Cite id="alves-2023-neurology" />}
                </p>
              ))}
            </div>
          </ScrollBeat>
        </div>
      </div>
    </div>
  );
}

function InsightFlowing() {
  return (
    <div className="py-24 px-6">
      <div className="reading-width mx-auto space-y-8">
        {insightLines.map((line, i) => (
          <ScrollAnimate key={i} enterFrom="bottom">
            <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-gray-200 max-w-[24ch]">
              {line}
            </p>
          </ScrollAnimate>
        ))}

        <ScrollAnimate enterFrom="left">
          <div className="border border-white/5 p-6 max-w-lg">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
              Meanwhile
            </p>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono text-[clamp(2rem,6vw,3.5rem)] text-red-400 leading-none">
                {mabCritique.stat}
              </span>
              <span className="text-sm text-gray-400">
                {mabCritique.statLabel}
              </span>
            </div>
            {mabCritique.points.map((point, i) => (
              <p key={i} className="text-sm text-gray-400 leading-relaxed mb-1 last:mb-0">
                {point}
                {i === 0 && <Cite id="muir-2024-alz-dement" />}
                {i === 1 && <Cite id="wolters-2024-alz-dement" />}
                {i === 2 && <Cite id="alves-2023-neurology" />}
              </p>
            ))}
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
}

export function AlternativesInsightSection() {
  return (
    <ScrollSection id="insight" label="Five natural proteins, one pilot" className="py-0" fullWidth>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={250}>
          {(progress) => <InsightStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <InsightFlowing />
      </div>
    </ScrollSection>
  );
}
