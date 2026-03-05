"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import {
  alternativesHeadline,
  alternativesBody,
  alternatives,
} from "@/data/landing/iron-alternatives";
import {
  insightLines,
  floatingProteins,
  type FloatingProtein,
} from "@/data/landing/alternatives-insight";

/**
 * Protein image that starts at its grid position and arcs outward
 * as scroll progress increases. During the grid phase (0–0.12),
 * images sit behind the card text at low opacity. As the grid text
 * fades, images brighten and drift along curved paths.
 */
function ArcingProtein({
  protein,
  progress,
}: {
  protein: FloatingProtein;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [sx, sy, mx, my, ex, ey] = protein.arc;

  const x = useTransform(progress, [0, 0.12, 0.50, 0.85], [sx, sx, mx, ex]);
  const xPct = useTransform(x, (v) => `${v}%`);

  const y = useTransform(progress, [0, 0.12, 0.55, 0.90], [sy, sy, my, ey]);
  const yVh = useTransform(y, (v) => `${v}vh`);

  // Grid phase: subtle behind text. Insight lines 0–1: full opacity.
  // Then gradually fade through the rest of the section.
  const opacity = useTransform(
    progress,
    [0, 0.10, 0.20, 0.42, 0.65, 0.85],
    [0.12, 0.12, 1.0, 1.0, 0.3, 0.05]
  );

  // DEV: log position in % and vh as you drag
  const handleDrag = useCallback(() => {
    const el = ref.current;
    if (!el?.offsetParent) return;
    const rect = el.getBoundingClientRect();
    const parent = (el.offsetParent as HTMLElement).getBoundingClientRect();
    const pctX = ((rect.left - parent.left) / parent.width) * 100;
    const vhY = ((rect.top - parent.top) / window.innerHeight) * 100;
    console.log(
      `%c${protein.name}%c  x: ${pctX.toFixed(1)}%  y: ${vhY.toFixed(1)}vh`,
      "color: #FBBF24; font-weight: bold",
      "color: inherit"
    );
  }, [protein.name]);

  return (
    <motion.div
      ref={ref}
      className="absolute select-none cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      onDrag={handleDrag}
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
        className="w-full h-auto mix-blend-lighten pointer-events-none"
      />
    </motion.div>
  );
}

/**
 * Desktop sticky stage: grid text visible initially with protein images
 * behind, then grid text fades while images arc outward, then insight
 * text beats and mAb critique appear.
 */
function AlternativesStage({ progress }: { progress: MotionValue<number> }) {
  const gridOpacity = useTransform(
    progress,
    [0, 0.03, 0.10, 0.16],
    [0, 1, 1, 0]
  );

  return (
    <div className="h-full relative overflow-hidden">
      {/* Arcing protein images (behind everything) */}
      {floatingProteins.map((p) => (
        <ArcingProtein key={p.name} protein={p} progress={progress} />
      ))}

      {/* Grid text content (fades out as images arc away) */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8"
      >
        <div className="reading-width w-full">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
            {alternativesHeadline}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-[52ch]">
            {alternativesBody}
          </p>
          <div className="grid gap-x-6 gap-y-6 lg:grid-cols-3">
            {alternatives.map((alt) => (
              <div key={alt.name} className="relative flex flex-col">
                <h3 className="text-white font-semibold mb-0.5">{alt.name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {alt.size} · {alt.mechanism}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {alt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Insight text (appears after grid fades) */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8">
        <div className="reading-width w-full">
          {insightLines.map((line, i) => (
            <ScrollBeat
              key={i}
              progress={progress}
              enter={0.18 + i * 0.12}
              hold={0.24 + i * 0.12}
              exit={i < insightLines.length - 1 ? 0.28 + i * 0.12 : undefined}
              gone={i < insightLines.length - 1 ? 0.34 + i * 0.12 : undefined}
              enterFrom="bottom"
            >
              <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-gray-200 max-w-[24ch]">
                {line}
              </p>
            </ScrollBeat>
          ))}

          <ScrollBeat progress={progress} enter={0.66} hold={0.76} enterFrom="bottom">
            <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-teal-400 max-w-[24ch]">
              Meanwhile...
            </p>
          </ScrollBeat>
        </div>
      </div>
    </div>
  );
}

/** Mobile: flowing layout with grid (including images) then insight text */
function AlternativesFlowing() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="reading-width mx-auto px-6 sm:px-8">
          <ScrollAnimate enterFrom="bottom">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-3">
              {alternativesHeadline}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-[52ch]">
              {alternativesBody}
            </p>
          </ScrollAnimate>

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {alternatives.map((alt) => (
              <ScrollAnimate key={alt.name} enterFrom="bottom">
                <div className="relative flex flex-col h-full pt-28 sm:pt-32">
                  <div
                    className="absolute -top-4 -right-4 w-[140%] max-w-[280px] aspect-square pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    <Image
                      src={alt.structureImage}
                      alt={`${alt.name} (${alt.structureId})`}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full mix-blend-lighten opacity-[0.12]"
                    />
                  </div>
                  <h3 className="relative text-white font-semibold mb-0.5">{alt.name}</h3>
                  <p className="relative text-sm text-gray-500 mb-2">
                    {alt.size} · {alt.mechanism}
                  </p>
                  <p className="relative text-gray-400 text-sm leading-relaxed flex-1">
                    {alt.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="reading-width mx-auto space-y-8">
          {insightLines.map((line, i) => (
            <ScrollAnimate key={i} enterFrom="bottom">
              <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-gray-200 max-w-[24ch]">
                {line}
              </p>
            </ScrollAnimate>
          ))}

          <ScrollAnimate enterFrom="bottom">
            <p className="font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.25] tracking-[-0.01em] text-teal-400 max-w-[24ch]">
              Meanwhile...
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </>
  );
}

export function IronAlternativesSection() {
  return (
    <ScrollSection id="alternatives" label="The body's iron managers" className="py-0" fullWidth breakpoints={[0, 0.25, 0.36, 0.434, 0.50, 0.66]}>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={350}>
          {(progress) => <AlternativesStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <AlternativesFlowing />
      </div>
    </ScrollSection>
  );
}
