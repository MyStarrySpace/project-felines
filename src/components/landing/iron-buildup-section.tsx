"use client";

import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Cite } from "@/components/citation/cite";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/*  SVG section group IDs (must match IDs in feline-iron.svg)          */
/* ------------------------------------------------------------------ */

const SVG_SECTIONS = [
  "section-gsh-gpx4",
  "section-fsp1-coq10",
  "section-gch1-bh4",
  "section-lipid-perox",
] as const;

/* ------------------------------------------------------------------ */
/*  Beat data: headline + expandable detail with citations             */
/* ------------------------------------------------------------------ */

interface IronBeat {
  headline: ReactNode;
  detail: ReactNode;
}

const ironBeats: IronBeat[] = [
  {
    headline:
      "System xc\u207B imports cystine \u2192 GSH \u2192 GPX4 neutralizes lipid peroxides.",
    detail: (
      <>
        &ldquo;Cysteine and glutamate are used in the biosynthesis of reduced
        glutathione, which is in turn used by GPX4 to reduce reactive PUFA
        phospholipid hydroperoxides.&rdquo;
        <Cite id="stockwell-2022-cell" /> Erastin blocks system xc⁻; RSL3
        inhibits GPX4 directly.
      </>
    ),
  },
  {
    headline:
      "FSP1 reduces CoQ10 to trap radicals, a backup that works without GPX4.",
    detail: (
      <>
        A GPX4-independent pathway discovered in 2019. Statins block CoQ10
        synthesis, sensitizing cells to ferroptosis.
        <Cite id="zhao-2023-biompharm" />
      </>
    ),
  },
  {
    headline: "GCH1 produces BH4, a third independent radical trap.",
    detail: (
      <>
        The BH4/DHFR axis provides yet another line of defense. When all three
        axes fail, lipid peroxidation chain-reacts into ferroptosis.
        <Cite id="zhao-2023-biompharm" />
      </>
    ),
  },
  {
    headline:
      "When all three axes fail, iron-driven lipid peroxidation chain-reacts through cell membranes.",
    detail: (
      <>
        PE-PUFAs are oxidized by iron-catalyzed Fenton reactions and
        lipoxygenases. The chain reaction propagates through neighboring lipids.
        Iron chelators interrupt Fenton chemistry; radical-trapping agents
        (ferrostatin-1, liproxstatin-1) break the chain.
        <Cite id="stockwell-2022-cell" />
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
/*  Draggable wrapper for dev/edit mode                                */
/* ------------------------------------------------------------------ */

interface DragOffset {
  x: number;
  y: number;
}

interface DraggableBeatProps {
  id: string;
  children: ReactNode;
  onDragEnd: (id: string, offset: DragOffset) => void;
}

function DraggableBeat({ id, children, onDragEnd }: DraggableBeatProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={(_e, info) => {
        onDragEnd(id, { x: Math.round(info.offset.x), y: Math.round(info.offset.y) });
      }}
      whileDrag={{ cursor: "grabbing" }}
      style={{ cursor: "grab", position: "relative", zIndex: 50 }}
      className="ring-2 ring-teal-400/50 ring-offset-2 ring-offset-transparent"
    >
      <div className="absolute -top-6 left-0 text-[10px] font-mono text-teal-400 bg-black/80 px-1.5 py-0.5 pointer-events-none whitespace-nowrap">
        {id}
      </div>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Map scroll progress to which SVG section should be highlighted     */
/* ------------------------------------------------------------------ */

function getActiveSection(p: number): number {
  if (p >= 0.06 && p < 0.32) return 0; // GSH/GPX4
  if (p >= 0.32 && p < 0.39) return 1; // FSP1/CoQ10
  if (p >= 0.39 && p < 0.49) return 2; // GCH1/BH4
  if (p >= 0.49 && p < 0.75) return 3; // Lipid peroxidation
  return -1; // all sections visible
}

/* ------------------------------------------------------------------ */
/*  Stage                                                              */
/* ------------------------------------------------------------------ */

const BEAT_IDS = [
  "beat-gsh-gpx4",
  "beat-fsp1-coq10",
  "beat-gch1-bh4",
  "beat-lipid-perox",
  "beat-ferroptosis-title",
  "beat-ferroptosis-subtitle",
] as const;

const BEAT_OFFSETS: Record<string, DragOffset> = {
  "beat-gsh-gpx4": { x: 140, y: 17 },
  "beat-fsp1-coq10": { x: -9, y: 241 },
  "beat-gch1-bh4": { x: -168, y: -112 },
  "beat-lipid-perox": { x: 0, y: 0 },
  "beat-ferroptosis-title": { x: 0, y: -1 },
  "beat-ferroptosis-subtitle": { x: 0, y: 0 },
};

function IronStage({ progress, editMode }: { progress: MotionValue<number>; editMode: boolean }) {
  const objectRef = useRef<HTMLObjectElement>(null);
  const [offsets, setOffsets] = useState<Record<string, DragOffset>>({});

  // Diagram: fade in, hold through text beats, dim before ferroptosis
  const diagramOpacity = useTransform(
    progress,
    [0.0, 0.1, 0.65, 0.75],
    [0, 1, 1, 0.15],
  );

  const applyHighlight = useCallback((sectionIndex: number) => {
    const doc = objectRef.current?.contentDocument;
    if (!doc) return;
    const rootG = doc.querySelector("svg > g");
    if (!rootG) return;

    const isOverview = sectionIndex === -1;

    // Fade sections
    SVG_SECTIONS.forEach((id, i) => {
      const el = doc.getElementById(id);
      if (!el) return;
      el.style.opacity = isOverview ? "1" : i === sectionIndex ? "1" : "0.15";
      el.style.transition = "opacity 0.4s ease";
    });

    // Fade dashed divider lines and oval label backgrounds
    for (let i = 0; i < rootG.children.length; i++) {
      const child = rootG.children[i] as SVGElement;
      // Skip section groups (handled above)
      if (child.id && child.id.startsWith("section-")) continue;

      const hasDashedLine = child.querySelector("path[style*='stroke-dasharray']");
      const hasEllipse = child.querySelector("ellipse");

      if (hasDashedLine || hasEllipse) {
        child.style.opacity = isOverview ? "1" : "0.15";
        child.style.transition = "opacity 0.4s ease";
      }
    }
  }, []);

  // Apply SVG section highlighting on scroll (DOM-only, no React re-renders)
  useEffect(() => {
    return progress.on("change", (p: number) => {
      applyHighlight(getActiveSection(p));
    });
  }, [progress, applyHighlight]);

  // Apply highlight when SVG first loads
  const handleSvgLoad = useCallback(() => {
    applyHighlight(getActiveSection(progress.get()));
  }, [progress, applyHighlight]);

  const handleDragEnd = useCallback((id: string, offset: DragOffset) => {
    setOffsets((prev) => {
      const existing = prev[id] ?? { x: 0, y: 0 };
      const next = {
        ...prev,
        [id]: { x: existing.x + offset.x, y: existing.y + offset.y },
      };
      console.log("\n=== Beat Positions ===");
      for (const beatId of BEAT_IDS) {
        const o = next[beatId] ?? { x: 0, y: 0 };
        console.log(`${beatId}: { x: ${o.x}, y: ${o.y} }`);
      }
      console.log("=== JSON ===");
      console.log(JSON.stringify(next, null, 2));
      return next;
    });
  }, []);

  const copyPositions = useCallback(() => {
    const out: Record<string, DragOffset> = {};
    for (const id of BEAT_IDS) {
      out[id] = offsets[id] ?? { x: 0, y: 0 };
    }
    navigator.clipboard.writeText(JSON.stringify(out, null, 2));
    alert("Positions copied to clipboard!");
  }, [offsets]);

  // In edit mode, wrap each beat's content with DraggableBeat
  // In normal mode, apply saved offsets as transforms
  const wrapBeat = (id: string, children: ReactNode) => {
    if (editMode) {
      return (
        <DraggableBeat id={id} onDragEnd={handleDragEnd}>
          {children}
        </DraggableBeat>
      );
    }
    const off = BEAT_OFFSETS[id];
    if (off && (off.x !== 0 || off.y !== 0)) {
      return (
        <div style={{ transform: `translate(${off.x}px, ${off.y}px)` }}>
          {children}
        </div>
      );
    }
    return children;
  };

  return (
    <div className="h-full relative">
      {/* Edit mode toolbar */}
      {editMode && (
        <div className="absolute top-4 right-4 z-[60] flex gap-2">
          <button
            onClick={copyPositions}
            className="bg-teal-500 text-black text-xs font-bold px-3 py-1.5 hover:bg-teal-400 transition-colors"
          >
            Copy Positions
          </button>
          <div className="bg-black/80 text-teal-400 text-[10px] font-mono px-2 py-1.5 max-w-xs overflow-auto">
            Drag beats to reposition. Check console for live coords.
          </div>
        </div>
      )}

      {/* Ferroptosis defense diagram (Zhao et al. 2023) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ opacity: editMode ? 1 : diagramOpacity }}
          className="w-full max-w-6xl px-4"
        >
          <object
            ref={objectRef}
            data="/diagrams/feline-iron.svg"
            type="image/svg+xml"
            aria-label="Ferroptosis defense: three antioxidant axes (GSH/GPX4, FSP1/CoQ10, GCH1/BH4) and lipid peroxidation"
            className="w-full"
            onLoad={handleSvgLoad}
          />
          <p className="text-right text-xs text-gray-500 mt-1 pointer-events-auto">
            Adapted from Zhao et al. 2023{" "}
            <Cite id="zhao-2023-biompharm" />
          </p>
        </motion.div>
      </div>

      {/* Text beats overlay — positioned left, vertically centered */}
      <div className={`absolute inset-0 flex items-center ${editMode ? "" : "pointer-events-none"}`}>
        <div className="reading-width mx-auto px-6 sm:px-8">
          {/* Beat 0: GSH/GPX4 axis (section 0: 0.06–0.32) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.06}
            hold={editMode ? 0 : 0.15}
            exit={editMode ? undefined : 0.24}
            gone={editMode ? undefined : 0.32}
            enterFrom="left"
          >
            {wrapBeat("beat-gsh-gpx4", <IronBeatText beat={ironBeats[0]} />)}
          </ScrollBeat>

          {/* Beat 1: FSP1/CoQ10 axis (section 1: 0.32–0.39) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.28}
            hold={editMode ? 0 : 0.34}
            exit={editMode ? undefined : 0.37}
            gone={editMode ? undefined : 0.41}
            enterFrom="left"
          >
            {wrapBeat("beat-fsp1-coq10", <IronBeatText beat={ironBeats[1]} />)}
          </ScrollBeat>

          {/* Beat 2: GCH1/BH4 axis (section 2: 0.39–0.49) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.37}
            hold={editMode ? 0 : 0.43}
            exit={editMode ? undefined : 0.47}
            gone={editMode ? undefined : 0.51}
            enterFrom="left"
          >
            {wrapBeat("beat-gch1-bh4", <IronBeatText beat={ironBeats[2]} />)}
          </ScrollBeat>

          {/* Beat 3: Lipid peroxidation (section 3: 0.49–0.75) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.48}
            hold={editMode ? 0 : 0.55}
            exit={editMode ? undefined : 0.60}
            gone={editMode ? undefined : 0.66}
            enterFrom="left"
          >
            {wrapBeat("beat-lipid-perox", <IronBeatText beat={ironBeats[3]} />)}
          </ScrollBeat>
        </div>
      </div>

      {/* "This is ferroptosis." overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 ${editMode ? "" : "pointer-events-none"}`}>
        <ScrollBeat progress={progress} enter={editMode ? 0 : 0.66} hold={editMode ? 0 : 0.80} enterFrom="scale">
          {wrapBeat(
            "beat-ferroptosis-title",
            <h2 className="font-serif text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
              This is ferroptosis.
            </h2>,
          )}
        </ScrollBeat>
        <ScrollBeat progress={progress} enter={editMode ? 0 : 0.74} hold={editMode ? 0 : 0.85} enterFrom="bottom">
          {wrapBeat(
            "beat-ferroptosis-subtitle",
            <div>
              <p className="mt-6 text-lg text-gray-400 max-w-lg">
                Iron-dependent cell death through lipid peroxidation.
              </p>
              <p className="mt-4 text-sm text-gray-500 pointer-events-auto">
                &ldquo;An iron-dependent form of regulated cell death driven by
                lipid peroxidation.&rdquo;
                <Cite id="stockwell-2022-cell" />
              </p>
            </div>,
          )}
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
            alt="Ferroptosis defense: three antioxidant axes (GSH/GPX4, FSP1/CoQ10, GCH1/BH4) and lipid peroxidation"
            className="w-full max-w-md mx-auto"
          />
          <p className="text-right text-xs text-gray-500 mt-1">
            Adapted from Zhao et al. 2023{" "}
            <Cite id="zhao-2023-biompharm" />
          </p>
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
            &ldquo;An iron-dependent form of regulated cell death driven by
            lipid peroxidation.&rdquo;
            <Cite id="stockwell-2022-cell" />
          </p>
        </div>
      </ScrollAnimate>
    </div>
  );
}

export function IronBuildupSection() {
  const searchParams = useSearchParams();
  const editMode = searchParams.get("edit") === "iron";

  return (
    <ScrollSection
      id="iron"
      label="Iron triggers ferroptosis"
      className="py-0"
      fullWidth
      breakpoints={[0, 0.15, 0.34, 0.43, 0.53, 0.80]}
    >
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={300}>
          {(progress) => <IronStage progress={progress} editMode={editMode} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: flowing layout */}
      <div className="md:hidden">
        <IronBuildupFlowing />
      </div>
    </ScrollSection>
  );
}
