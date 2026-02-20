"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useTransform, type MotionValue } from "framer-motion";
import { trialBars, type TrialBar, type TrialBarSource } from "@/data/landing/teaser";

const GOLD = "#FBBF24";

/** Layer colors: lightest (widest bar) to darkest (narrowest) */
const LAYER_COLORS = [
  "rgba(255,255,255,0.08)",
  "rgba(255,255,255,0.18)",
  "rgba(255,255,255,0.35)",
];

/* ------------------------------------------------------------------ */
/*  Portal tooltip (same pattern as CitationTooltip / StatTooltip)    */
/* ------------------------------------------------------------------ */

function BarTooltip({
  source,
  bar,
  anchorRect,
  visible,
}: {
  source: TrialBarSource;
  bar: TrialBar;
  anchorRect: DOMRect | null;
  visible: boolean;
}) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect) return null;

  const tooltipWidth = 340;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 8;

  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

  const fmtPct = (n: number) => (n < 10 ? n.toFixed(1) : String(Math.round(n)));

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed z-[101]"
          style={{
            left,
            top,
            width: tooltipWidth,
            transform: "translateY(-100%)",
          }}
        >
          <div className="rounded bg-navy-900/95 px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-sm border border-white/10">
            <p className="text-xs font-medium text-teal-400 mb-1">
              {source.label}
            </p>
            {/* Numbers row */}
            <div className="flex gap-3 text-xs text-gray-300 mb-1.5">
              <span>Past Ph1: {fmtPct(bar.pastPhase1)}%</span>
              <span>Past Ph2: {fmtPct(bar.pastPhase2)}%</span>
              <span className={bar.highlight ? "text-teal-400 font-medium" : ""}>
                Approved: {fmtPct(bar.approved)}%
              </span>
            </div>
            <p className="text-xs text-gray-400">{source.detail}</p>
            {source.url && (
              <p className="mt-1 text-xs text-teal-400/70 truncate">
                {source.url.replace("https://", "")}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget,
  );
}

/* ------------------------------------------------------------------ */
/*  Bar row                                                           */
/* ------------------------------------------------------------------ */

function BarRow({
  bar,
  index,
  progress,
}: {
  bar: TrialBar;
  index: number;
  progress: MotionValue<number>;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [hovered, setHovered] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  // Stagger row fade-in: 0.72 + index * 0.015
  const fadeStart = 0.72 + index * 0.015;
  const fadeEnd = fadeStart + 0.06;
  const rowOpacity = useTransform(progress, [fadeStart, fadeEnd], [0, 1]);
  const rowY = useTransform(progress, [fadeStart, fadeEnd], [20, 0]);

  // Bar growth: scaleX from 0 to 1
  const scaleX = useTransform(progress, [0.80, 0.88], [0, 1]);

  // Percentage label fade
  const labelOpacity = useTransform(progress, [0.88, 0.93], [0, 1]);

  useEffect(() => {
    const unsubRow = rowOpacity.on("change", (v) => {
      if (rowRef.current) {
        rowRef.current.style.opacity = String(v);
      }
    });
    const unsubY = rowY.on("change", (v) => {
      if (rowRef.current) {
        rowRef.current.style.transform = `translateY(${v}px)`;
      }
    });
    return () => {
      unsubRow();
      unsubY();
    };
  }, [rowOpacity, rowY]);

  useEffect(() => {
    const unsub = labelOpacity.on("change", (v) => {
      if (labelRef.current) {
        labelRef.current.style.opacity = String(v);
      }
    });
    return unsub;
  }, [labelOpacity]);

  const handleMouseEnter = () => {
    if (rowRef.current) {
      setRect(rowRef.current.getBoundingClientRect());
    }
    setHovered(true);
  };

  const handleClick = () => {
    if (bar.source.url) {
      window.open(bar.source.url, "_blank", "noopener,noreferrer");
    }
  };

  // Three overlapping layers: widest (past Phase 1) to narrowest (approved)
  const layers = [
    { width: bar.pastPhase1, color: LAYER_COLORS[0] },
    { width: bar.pastPhase2, color: LAYER_COLORS[1] },
    { width: bar.approved, color: bar.highlight ? GOLD : LAYER_COLORS[2] },
  ];

  return (
    <>
      <div
        ref={rowRef}
        className="flex items-center gap-3 sm:gap-4 cursor-help"
        style={{ opacity: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
      >
        {/* Disease label */}
        <div className="w-[5.5rem] sm:w-28 shrink-0 text-right">
          <span
            className={`text-sm sm:text-base ${bar.highlight ? "text-white font-medium" : "text-gray-400"}`}
          >
            {bar.disease}
          </span>
        </div>

        {/* Overlapping bars */}
        <div className="flex-1 flex items-center">
          <LayeredBar layers={layers} scaleX={scaleX} />

          {/* Approved percentage label */}
          <span
            ref={labelRef}
            className="ml-2 text-xs sm:text-sm tabular-nums whitespace-nowrap"
            style={{
              opacity: 0,
              color: bar.highlight ? GOLD : "rgba(255,255,255,0.5)",
            }}
          >
            {bar.approved < 10 ? bar.approved.toFixed(1) : Math.round(bar.approved)}%
          </span>
        </div>
      </div>
      <BarTooltip source={bar.source} bar={bar} anchorRect={rect} visible={hovered} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Layered bar (overlapping segments)                                */
/* ------------------------------------------------------------------ */

function LayeredBar({
  layers,
  scaleX,
}: {
  layers: { width: number; color: string }[];
  scaleX: MotionValue<number>;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = scaleX.on("change", (v) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${v})`;
      }
    });
    return unsub;
  }, [scaleX]);

  return (
    <div
      ref={barRef}
      className="relative h-8 sm:h-10 w-full origin-left"
      style={{ transform: "scaleX(0)" }}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          className="absolute inset-y-0 left-0"
          style={{
            width: `${layer.width}%`,
            backgroundColor: layer.color,
            minWidth: layer.width > 0 ? "1px" : 0,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                       */
/* ------------------------------------------------------------------ */

/**
 * Scroll-driven layered bar chart showing % of drugs surviving
 * past each clinical trial phase, across neurodegenerative diseases.
 */
export function TrialBars({ progress }: { progress: MotionValue<number> }) {
  const legendRef = useRef<HTMLDivElement>(null);
  const legendOpacity = useTransform(progress, [0.88, 0.93], [0, 1]);

  useEffect(() => {
    const unsub = legendOpacity.on("change", (v) => {
      if (legendRef.current) {
        legendRef.current.style.opacity = String(v);
      }
    });
    return unsub;
  }, [legendOpacity]);

  return (
    <div className="w-full max-w-3xl">
      {/* Header */}
      <p className="text-sm text-gray-500 mb-4 sm:mb-6 pl-[5.5rem] sm:pl-28 ml-3 sm:ml-4">
        % of drugs that get past each trial phase
      </p>

      {/* Bars */}
      <div className="flex flex-col gap-2 sm:gap-3">
        {trialBars.map((bar, i) => (
          <BarRow key={bar.shortName} bar={bar} index={i} progress={progress} />
        ))}
      </div>

      {/* Legend */}
      <div
        ref={legendRef}
        className="mt-4 sm:mt-6 pl-[5.5rem] sm:pl-28 ml-3 sm:ml-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500"
        style={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3" style={{ backgroundColor: LAYER_COLORS[0] }} />
          Past Phase 1
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3" style={{ backgroundColor: LAYER_COLORS[1] }} />
          Past Phase 2
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3" style={{ backgroundColor: LAYER_COLORS[2] }} />
          Approved
        </span>
      </div>
    </div>
  );
}
