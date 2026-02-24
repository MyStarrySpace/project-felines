"use client";

import { useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/*  Beat data: headline + expandable detail with citations             */
/* ------------------------------------------------------------------ */

interface IronBeat {
  headline: ReactNode;
  detail: ReactNode;
}

const ironBeats: IronBeat[] = [
  {
    headline: "Iron is the most dangerous essential nutrient in biology. Essential for energy, oxygen transport, and DNA synthesis.",
    detail: (
      <>
        &ldquo;Non-haemin iron increases with age in human brain,&rdquo;
        concentrating in the substantia nigra and globus pallidus.
        <Cite id="hallgren-1958-jneurochem" /> The brain has no regulated export
        pathway to match intake.
      </>
    ),
  },
  {
    headline: "Free iron catalyzes hydroxyl radicals that attack every cell membrane.",
    detail: (
      <>
        Ferroptosis: &ldquo;an iron-dependent form of regulated cell death
        driven by lipid peroxidation.&rdquo;
        <Cite id="stockwell-2022-cell" /> Free iron catalyzes
        the Fenton reaction, generating hydroxyl radicals that attack membrane
        lipids.
      </>
    ),
  },
  {
    headline: "GPX4 is the only brake. When iron outpaces it, the membrane collapses.",
    detail: (
      <>
        Glutathione peroxidase 4 (GPX4) is the main brake on lipid
        peroxidation. &ldquo;GPX4 depletion is early and universal across
        SOD1, TDP-43, and C9orf72 mouse models; transgenic GPX4
        overexpression delayed disease onset and prolonged lifespan.&rdquo;
        <Cite id="wang-2022-celldeathdiff" />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Interactive beat: hover/tap to reveal detail                       */
/* ------------------------------------------------------------------ */

function IronBeatText({ beat }: { beat: IronBeat }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="pointer-events-auto group cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
    >
      <p className="font-serif text-[clamp(1.25rem,3vw,2rem)] leading-[1.3] text-gray-200 max-w-xl">
        {beat.headline}
        <span className="inline-block ml-2 text-gray-500 text-sm align-middle opacity-60 group-hover:opacity-100 transition-opacity">
          +
        </span>
      </p>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-base leading-relaxed mt-3 max-w-xl">
              {beat.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stage                                                              */
/* ------------------------------------------------------------------ */

function IronStage({ progress }: { progress: MotionValue<number> }) {
  // Diagram: fade in, hold through text beats, dim before ferroptosis
  const diagramOpacity = useTransform(
    progress,
    [0.00, 0.10, 0.55, 0.65],
    [0, 1, 1, 0.15]
  );

  return (
    <div className="h-full relative">
      {/* FELINE iron metabolism diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div style={{ opacity: diagramOpacity }} className="w-full max-w-6xl px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/feline-iron.svg"
            alt="Iron metabolism diagram: import and processing, lipid peroxidation and mitochondrial damage, antioxidant defense"
            className="w-full"
            style={{ filter: "invert(1)" }}
          />
        </motion.div>
      </div>

      {/* Text beats overlay — positioned bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pointer-events-none">
        <div className="reading-width mx-auto">
          <ScrollBeat progress={progress} enter={0.08} hold={0.14} exit={0.14} gone={0.20} enterFrom="left">
            <IronBeatText beat={ironBeats[0]} />
          </ScrollBeat>

          <ScrollBeat progress={progress} enter={0.18} hold={0.28} exit={0.28} gone={0.34} enterFrom="left">
            <IronBeatText beat={ironBeats[1]} />
          </ScrollBeat>

          <ScrollBeat progress={progress} enter={0.40} hold={0.48} exit={0.48} gone={0.55} enterFrom="left">
            <IronBeatText beat={ironBeats[2]} />
          </ScrollBeat>
        </div>
      </div>

      {/* "This is ferroptosis." overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <ScrollBeat progress={progress} enter={0.60} hold={0.75} enterFrom="scale">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            This is ferroptosis.
          </h2>
        </ScrollBeat>
        <ScrollBeat progress={progress} enter={0.72} hold={0.80} enterFrom="bottom">
          <p className="mt-6 text-lg text-gray-400 max-w-lg">
            Iron-dependent cell death through lipid peroxidation.
          </p>
          <p className="mt-4 text-sm text-gray-500 pointer-events-auto">
            &ldquo;An iron-dependent form of regulated cell death driven by lipid peroxidation.&rdquo;<Cite id="stockwell-2022-cell" />
          </p>
        </ScrollBeat>
      </div>
    </div>
  );
}

function IronBuildupFlowing() {
  return (
    <div className="py-24 space-y-16 px-6">
      <ScrollAnimate>
        <div className="reading-width mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/feline-iron.svg"
            alt="Iron metabolism diagram: import and processing, lipid peroxidation and mitochondrial damage, antioxidant defense"
            className="w-full max-w-md mx-auto"
            style={{ filter: "invert(1)" }}
          />
        </div>
      </ScrollAnimate>

      {ironBeats.map((beat, i) => (
        <ScrollAnimate key={i} enterFrom={i % 2 === 0 ? "left" : "right"}>
          <div className="reading-width mx-auto">
            <IronBeatText beat={beat} />
          </div>
        </ScrollAnimate>
      ))}

      <ScrollAnimate enterFrom="scale">
        <div className="reading-width mx-auto text-center">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            This is ferroptosis.
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto">
            Iron-dependent cell death through lipid peroxidation.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            &ldquo;An iron-dependent form of regulated cell death driven by lipid peroxidation.&rdquo;<Cite id="stockwell-2022-cell" />
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

export function IronBuildupSection() {
  return (
    <ScrollSection id="iron" label="Iron" className="py-0" fullWidth>
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={300}>
          {(progress) => <IronStage progress={progress} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <IronBuildupFlowing />
      </div>
    </ScrollSection>
  );
}
