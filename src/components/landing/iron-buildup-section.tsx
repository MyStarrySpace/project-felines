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
import { useScrollContext } from "@/components/providers/scroll-context";
import { ScrollSection } from "@/components/ui/scroll-section";
import { StickyScrollStage } from "@/components/ui/sticky-scroll-stage";
import { ScrollBeat } from "@/components/ui/scroll-beat";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/*  SVG section group IDs (must match IDs in feline-iron.svg)          */
/*  Order matches beat order: lipid-perox first, then defenses         */
/* ------------------------------------------------------------------ */

const SVG_SECTIONS = [
  "section-lipid-perox",
  "section-gsh-gpx4",
  "section-fsp1-coq10",
  "section-gch1-bh4",
  "section-dhodh-coqh2",
  "section-emerging-axes",
] as const;

/* ------------------------------------------------------------------ */
/*  Beat data: headline + expandable detail with citations             */
/*  Order: core mechanism first, then layered defenses                 */
/* ------------------------------------------------------------------ */

interface IronBeat {
  headline: ReactNode;
  detail: ReactNode;
  label: string; // short label for step indicator
}

const ironBeats: IronBeat[] = [
  {
    label: "Lipid peroxidation",
    headline:
      "Iron catalyzes lipid peroxidation: a chain reaction through cell membranes.",
    detail: (
      <>
        PE-PUFAs are oxidized by iron-catalyzed Fenton reactions and
        lipoxygenases. The chain reaction propagates through neighboring lipids.
        <Cite id="stockwell-2022-cell" />
      </>
    ),
  },
  {
    label: "GSH / GPX4",
    headline:
      "First line of defense: system xc\u207B imports cystine \u2192 GSH \u2192 GPX4 neutralizes lipid peroxides.",
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
    label: "FSP1 / CoQ10",
    headline:
      "FSP1 reduces CoQ10 to trap radicals, a backup that works without GPX4.",
    detail: (
      <>
        A GPX4-independent pathway co-discovered by two groups in 2019.
        <Cite id="bersuker-2019-nature" /> Statins block CoQ10
        synthesis, sensitizing cells to ferroptosis.
      </>
    ),
  },
  {
    label: "GCH1 / BH4",
    headline: "GCH1 produces BH4, a third independent radical trap.",
    detail: (
      <>
        BH4 synthesis suppresses ferroptosis through lipid remodeling.
        <Cite id="kraft-2020-acscentsci" /> Three redundant systems,
        any one enough to hold the line.
      </>
    ),
  },
  {
    label: "DHODH",
    headline:
      "Inside mitochondria, DHODH reduces CoQ to CoQH\u2082: a fourth axis discovered in 2021.",
    detail: (
      <>
        &ldquo;DHODH operates in parallel to mitochondrial GPX4 (but
        independent of cytosolic GPX4 or FSP1) to inhibit ferroptosis in the
        mitochondrial inner membrane.&rdquo;
        <Cite id="mao-2021-nature" />
      </>
    ),
  },
  {
    label: "iNOS \u00B7 7-DHC \u00B7 NADPH",
    headline:
      "iNOS and 7-DHC add further redundancy. NADPH fuels them all.",
    detail: (
      <>
        iNOS generates NO\u00B7 radicals that trap lipid peroxyl radicals
        in M1 macrophages and microglia.
        <Cite id="kapralov-2020-natchembiol" /> 7-dehydrocholesterol
        shields phospholipids from autoxidation directly in the membrane.
        <Cite id="freitas-2024-nature" /> NADPH is the shared reductant
        powering GPX4, FSP1, and DHODH.
        <Cite id="alves-2025-sttt" />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Step indicator: dots + label + skip at the bottom of the stage     */
/* ------------------------------------------------------------------ */

const TOTAL_STEPS = ironBeats.length + 1; // +1 for "Ferroptosis" climax

function StepIndicator({
  progress,
  onSkip,
}: {
  progress: MotionValue<number>;
  onSkip: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return progress.on("change", (p: number) => {
      const el = containerRef.current;
      if (!el) return;

      // Determine which step we're on
      let step = -1;
      if (p >= 0.05 && p < 0.16) step = 0;
      else if (p >= 0.16 && p < 0.26) step = 1;
      else if (p >= 0.26 && p < 0.35) step = 2;
      else if (p >= 0.35 && p < 0.43) step = 3;
      else if (p >= 0.43 && p < 0.51) step = 4;
      else if (p >= 0.51 && p < 0.60) step = 5;
      else if (p >= 0.66) step = 6; // ferroptosis climax

      // Update dots
      const dots = el.querySelectorAll<HTMLSpanElement>("[data-dot]");
      dots.forEach((dot, i) => {
        dot.style.opacity = i === step ? "1" : "0.3";
        dot.style.transform = i === step ? "scale(1.3)" : "scale(1)";
      });

      // Update label text
      const label = el.querySelector<HTMLSpanElement>("[data-label]");
      if (label) {
        if (step >= 0 && step < ironBeats.length) {
          label.textContent = `${step + 1}/${TOTAL_STEPS} \u00B7 ${ironBeats[step].label}`;
        } else if (step === 6) {
          label.textContent = `${TOTAL_STEPS}/${TOTAL_STEPS} \u00B7 Ferroptosis`;
        } else {
          label.textContent = "";
        }
      }

      // Show/hide the entire bar
      el.style.opacity = step >= 0 ? "1" : "0";
    });
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-3 pointer-events-auto transition-opacity duration-300"
      style={{ opacity: 0 }}
    >
      {/* Dots */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span
            key={i}
            data-dot
            className="block w-1.5 h-1.5 bg-white transition-all duration-300"
            style={{ opacity: 0.3 }}
          />
        ))}
      </div>

      {/* Step label */}
      <span
        data-label
        className="text-xs text-gray-400 font-mono whitespace-nowrap"
      />

      {/* Skip button */}
      <button
        onClick={onSkip}
        className="text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
      >
        Skip
      </button>
    </div>
  );
}

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
/*  Matches new beat order: lipid-perox → defenses                     */
/* ------------------------------------------------------------------ */

function getActiveSection(p: number): number {
  if (p >= 0.05 && p < 0.16) return 0; // Lipid peroxidation
  if (p >= 0.16 && p < 0.26) return 1; // GSH/GPX4
  if (p >= 0.26 && p < 0.35) return 2; // FSP1/CoQ10
  if (p >= 0.35 && p < 0.43) return 3; // GCH1/BH4
  if (p >= 0.43 && p < 0.51) return 4; // DHODH/CoQH₂
  if (p >= 0.51 && p < 0.60) return 5; // Emerging axes
  return -1; // all sections visible
}

/* ------------------------------------------------------------------ */
/*  Shared SVG highlight logic                                         */
/* ------------------------------------------------------------------ */

function applySvgHighlight(
  obj: HTMLObjectElement | null,
  sectionIndex: number,
) {
  const doc = obj?.contentDocument;
  if (!doc) return;
  const rootG = doc.querySelector("svg > g");
  if (!rootG) return;

  const isOverview = sectionIndex === -1;
  const fade = isOverview ? "1" : "0.15";
  const transition = "opacity 0.4s ease";

  SVG_SECTIONS.forEach((id, i) => {
    const el = doc.getElementById(id);
    if (!el) return;
    el.style.opacity = isOverview || i === sectionIndex ? "1" : "0.15";
    el.style.transition = transition;
  });

  const infraIds = ["membrane", "membrane-channel"];
  for (const id of infraIds) {
    const el = doc.getElementById(id);
    if (!el) continue;
    el.style.opacity = fade;
    el.style.transition = transition;
  }

  for (let i = 0; i < rootG.children.length; i++) {
    const child = rootG.children[i] as SVGElement;
    if (child.querySelector("[id^='section-'], #membrane, #membrane-channel")) continue;
    const hasDashedLine = child.querySelector("path[style*='stroke-dasharray']");
    const hasEllipse = child.querySelector("ellipse");
    const hasRect = child.querySelector("path[style*='fill:rgb(150,84,32)']");
    if (hasDashedLine || hasEllipse || hasRect) {
      child.style.opacity = fade;
      child.style.transition = transition;
    }
  }
}

/* ------------------------------------------------------------------ */
/*  Stage                                                              */
/* ------------------------------------------------------------------ */

const BEAT_IDS = [
  "beat-lipid-perox",
  "beat-gsh-gpx4",
  "beat-fsp1-coq10",
  "beat-gch1-bh4",
  "beat-dhodh",
  "beat-emerging-axes",
  "beat-ferroptosis-title",
  "beat-ferroptosis-subtitle",
] as const;

const BEAT_OFFSETS: Record<string, DragOffset> = {
  "beat-lipid-perox": { x: 0, y: 237 },
  "beat-gsh-gpx4": { x: 137, y: -112 },
  "beat-fsp1-coq10": { x: 484, y: -54 },
  "beat-gch1-bh4": { x: -133, y: -193 },
  "beat-dhodh": { x: 58, y: -36 },
  "beat-emerging-axes": { x: -9, y: -201 },
  "beat-ferroptosis-title": { x: 0, y: -427 },
  "beat-ferroptosis-subtitle": { x: 0, y: -442 },
};

function IronStage({
  progress,
  editMode,
  onSkip,
}: {
  progress: MotionValue<number>;
  editMode: boolean;
  onSkip: () => void;
}) {
  const objectRef = useRef<HTMLObjectElement>(null);
  const [offsets, setOffsets] = useState<Record<string, DragOffset>>({});

  // Diagram: fade in, hold through text beats, dim before ferroptosis
  const diagramOpacity = useTransform(
    progress,
    [0.0, 0.08],
    [0, 1],
  );

  const applyHighlight = useCallback(
    (sectionIndex: number) => applySvgHighlight(objectRef.current, sectionIndex),
    [],
  );

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

      {/* Ferroptosis defense diagram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ opacity: editMode ? 1 : diagramOpacity }}
          className="w-full max-w-6xl px-4"
        >
          <object
            ref={objectRef}
            data="/diagrams/feline-iron.svg"
            type="image/svg+xml"
            aria-label="Ferroptosis defense axes: GSH/GPX4, FSP1/CoQ10, GCH1/BH4, DHODH/CoQH2, iNOS, 7-DHC, NADPH, and lipid peroxidation"
            className="w-full"
            onLoad={handleSvgLoad}
          />
          <div className="flex items-center justify-between mt-6">
            {!editMode && (
              <StepIndicator progress={progress} onSkip={onSkip} />
            )}
            <p className="text-right text-xs text-gray-500 pointer-events-auto ml-auto">
              Core pathways from Zhao et al. 2023{" "}
              <Cite id="zhao-2023-biompharm" />{" "}
              · DHODH axis: Mao et al. 2021{" "}
              <Cite id="mao-2021-nature" />
            </p>
          </div>
        </motion.div>
      </div>

      {/* Text beats overlay — positioned left, vertically centered */}
      <div className={`absolute inset-0 flex items-center ${editMode ? "" : "pointer-events-none"}`}>
        <div className="reading-width mx-auto px-6 sm:px-8">
          {/* Beat 0: Lipid peroxidation — the core (SVG section 0: 0.05–0.16) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.05}
            hold={editMode ? 0 : 0.09}
            exit={editMode ? undefined : 0.13}
            gone={editMode ? undefined : 0.16}
            enterFrom="left"
          >
            {wrapBeat("beat-lipid-perox", <IronBeatText beat={ironBeats[0]} />)}
          </ScrollBeat>

          {/* Beat 1: GSH/GPX4 (SVG section 1: 0.16–0.26) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.14}
            hold={editMode ? 0 : 0.19}
            exit={editMode ? undefined : 0.23}
            gone={editMode ? undefined : 0.26}
            enterFrom="left"
          >
            {wrapBeat("beat-gsh-gpx4", <IronBeatText beat={ironBeats[1]} />)}
          </ScrollBeat>

          {/* Beat 2: FSP1/CoQ10 (SVG section 2: 0.26–0.35) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.24}
            hold={editMode ? 0 : 0.29}
            exit={editMode ? undefined : 0.32}
            gone={editMode ? undefined : 0.35}
            enterFrom="left"
          >
            {wrapBeat("beat-fsp1-coq10", <IronBeatText beat={ironBeats[2]} />)}
          </ScrollBeat>

          {/* Beat 3: GCH1/BH4 (SVG section 3: 0.35–0.43) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.33}
            hold={editMode ? 0 : 0.38}
            exit={editMode ? undefined : 0.40}
            gone={editMode ? undefined : 0.43}
            enterFrom="left"
          >
            {wrapBeat("beat-gch1-bh4", <IronBeatText beat={ironBeats[3]} />)}
          </ScrollBeat>

          {/* Beat 4: DHODH (SVG section 4: 0.43–0.51) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.41}
            hold={editMode ? 0 : 0.46}
            exit={editMode ? undefined : 0.48}
            gone={editMode ? undefined : 0.51}
            enterFrom="left"
          >
            {wrapBeat("beat-dhodh", <IronBeatText beat={ironBeats[4]} />)}
          </ScrollBeat>

          {/* Beat 5: iNOS + 7-DHC + NADPH (SVG section 5: 0.51–0.60) */}
          <ScrollBeat
            progress={progress}
            enter={editMode ? 0 : 0.49}
            hold={editMode ? 0 : 0.54}
            exit={editMode ? undefined : 0.57}
            gone={editMode ? undefined : 0.60}
            enterFrom="left"
          >
            {wrapBeat("beat-emerging-axes", <IronBeatText beat={ironBeats[5]} />)}
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
        <ScrollBeat progress={progress} enter={editMode ? 0 : 0.73} hold={editMode ? 0 : 0.86} enterFrom="bottom">
          {wrapBeat(
            "beat-ferroptosis-subtitle",
            <p className="mt-6 text-lg text-gray-400 max-w-lg pointer-events-auto">
              Iron-dependent cell death through lipid peroxidation.
              <Cite id="stockwell-2022-cell" />
            </p>,
          )}
        </ScrollBeat>
      </div>

    </div>
  );
}

/** Inline SVG highlight — operates on a container div holding injected SVG markup */
function applyInlineSvgHighlight(
  container: HTMLDivElement | null,
  sectionIndex: number,
) {
  if (!container) return;
  const svg = container.querySelector("svg");
  if (!svg) return;
  const rootG = svg.querySelector("svg > g");
  if (!rootG) return;

  const isOverview = sectionIndex === -1;
  const fade = isOverview ? "1" : "0.15";
  const transition = "opacity 0.4s ease";

  SVG_SECTIONS.forEach((id, i) => {
    const el = container.querySelector<SVGElement>(`#${id}`);
    if (!el) return;
    el.style.opacity = isOverview || i === sectionIndex ? "1" : "0.15";
    el.style.transition = transition;
  });

  const infraIds = ["membrane", "membrane-channel"];
  for (const id of infraIds) {
    const el = container.querySelector<SVGElement>(`#${id}`);
    if (!el) continue;
    el.style.opacity = fade;
    el.style.transition = transition;
  }

  for (let i = 0; i < rootG.children.length; i++) {
    const child = rootG.children[i] as SVGElement;
    if (child.querySelector("[id^='section-'], #membrane, #membrane-channel")) continue;
    const hasDashedLine = child.querySelector("path[style*='stroke-dasharray']");
    const hasEllipse = child.querySelector("ellipse");
    const hasRect = child.querySelector("path[style*='fill:rgb(150,84,32)']");
    if (hasDashedLine || hasEllipse || hasRect) {
      child.style.opacity = fade;
      child.style.transition = transition;
    }
  }
}

const SVG_ORIGINAL_VIEWBOX = { x: 0, y: 0, w: 1277, h: 779 };
const SVG_ZOOM_PADDING = 40; // SVG units of padding around section bbox

/** Animate the SVG viewBox from current to target over ~400ms */
function animateViewBox(
  svg: SVGSVGElement,
  target: { x: number; y: number; w: number; h: number },
) {
  const current = svg.viewBox.baseVal;
  const from = { x: current.x, y: current.y, w: current.width, h: current.height };
  const duration = 400;
  const start = performance.now();

  function tick(now: number) {
    const t = Math.min((now - start) / duration, 1);
    // ease-out cubic
    const e = 1 - Math.pow(1 - t, 3);
    const x = from.x + (target.x - from.x) * e;
    const y = from.y + (target.y - from.y) * e;
    const w = from.w + (target.w - from.w) * e;
    const h = from.h + (target.h - from.h) * e;
    svg.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function IronBuildupMobile() {
  const [activeStep, setActiveStep] = useState(0);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgReady, setSvgReady] = useState(false);

  // Map step index to SVG section: 0-5 = ironBeats, 6 = ferroptosis (overview)
  const svgSection = activeStep < ironBeats.length ? activeStep : -1;

  // Fetch SVG and inject as inline markup (avoids contentDocument issues on mobile)
  useEffect(() => {
    let cancelled = false;
    fetch("/diagrams/feline-iron.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (cancelled || !svgContainerRef.current) return;
        svgContainerRef.current.innerHTML = svgText;
        setSvgReady(true);
      });
    return () => { cancelled = true; };
  }, []);

  // Apply highlight + zoom whenever step changes
  useEffect(() => {
    if (!svgReady) return;
    applyInlineSvgHighlight(svgContainerRef.current, svgSection);

    const container = svgContainerRef.current;
    if (!container) return;
    const svg = container.querySelector("svg");
    if (!svg) return;

    if (svgSection === -1) {
      // Zoom out to full diagram
      animateViewBox(svg, SVG_ORIGINAL_VIEWBOX);
      return;
    }

    const sectionId = SVG_SECTIONS[svgSection];
    const sectionEl = svg.querySelector<SVGGElement>(`#${sectionId}`);
    if (!sectionEl) return;

    const bbox = sectionEl.getBBox();
    const pad = SVG_ZOOM_PADDING;
    const target = {
      x: bbox.x - pad,
      y: bbox.y - pad,
      w: bbox.width + pad * 2,
      h: bbox.height + pad * 2,
    };

    // Maintain aspect ratio — expand the shorter axis
    const svgAspect = SVG_ORIGINAL_VIEWBOX.w / SVG_ORIGINAL_VIEWBOX.h;
    const targetAspect = target.w / target.h;
    if (targetAspect > svgAspect) {
      // target is wider — expand height
      const newH = target.w / svgAspect;
      target.y -= (newH - target.h) / 2;
      target.h = newH;
    } else {
      // target is taller — expand width
      const newW = target.h * svgAspect;
      target.x -= (newW - target.w) / 2;
      target.w = newW;
    }

    animateViewBox(svg, target);
  }, [svgSection, svgReady]);

  const isFerroptosis = activeStep === ironBeats.length;
  const beat = !isFerroptosis ? ironBeats[activeStep] : null;

  return (
    <div className="py-16 px-6">
      <div className="max-w-lg mx-auto">
        {/* Diagram — inline SVG for reliable DOM access on mobile */}
        <div
          ref={svgContainerRef}
          role="img"
          aria-label="Ferroptosis defense axes"
          className="w-full [&>svg]:w-full [&>svg]:h-auto"
        />

        {/* Step buttons */}
        <div className="flex items-center justify-center gap-1 mt-4 mb-6">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-8 h-8 text-xs font-mono transition-colors ${
                i === activeStep
                  ? "text-teal-400 border border-teal-400/40"
                  : "text-gray-500 border border-white/5 hover:text-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="min-h-[120px]"
          >
            {isFerroptosis ? (
              <div className="text-center">
                <h2 className="font-serif text-[clamp(2rem,7vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white">
                  This is ferroptosis.
                </h2>
                <p className="mt-4 text-base text-gray-400">
                  Iron-dependent cell death through lipid peroxidation.
                  <Cite id="stockwell-2022-cell" />
                </p>
              </div>
            ) : beat ? (
              <div>
                <p className="text-xs text-gray-500 font-mono mb-2">
                  {activeStep + 1}/{TOTAL_STEPS} · {beat.label}
                </p>
                <p className="font-serif text-lg leading-[1.3] text-gray-200 mb-3">
                  {beat.headline}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {beat.detail}
                </p>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function IronBuildupSection() {
  const searchParams = useSearchParams();
  const editMode = searchParams.get("edit") === "iron";
  const { scrollToSection } = useScrollContext();

  const handleSkip = useCallback(() => {
    scrollToSection("cells", "smooth");
  }, [scrollToSection]);

  return (
    <ScrollSection
      id="iron"
      label="Iron triggers ferroptosis"
      className="py-0"
      fullWidth
      breakpoints={[0.31, 0.35, 0.40, 0.44, 0.48, 0.52, 0.75]}
    >
      {/* Desktop: sticky scroll stage */}
      <div className="hidden md:block">
        <StickyScrollStage height={300}>
          {(progress) => <IronStage progress={progress} editMode={editMode} onSkip={handleSkip} />}
        </StickyScrollStage>
      </div>

      {/* Mobile: interactive stepped layout */}
      <div className="md:hidden">
        <IronBuildupMobile />
      </div>
    </ScrollSection>
  );
}
