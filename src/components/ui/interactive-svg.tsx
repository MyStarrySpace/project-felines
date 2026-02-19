"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DiagramStep } from "@/data/landing/iron-diagram";

interface InteractiveSvgProps {
  svgUrl: string;
  steps: DiagramStep[];
}

/** Original viewBox of the SVG */
const ORIGINAL_VB = { x: 0, y: 0, w: 1861, h: 622 };

/** Padding around highlighted groups (in SVG units) */
const ZOOM_PADDING = 40;

interface ViewBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

function lerpVB(a: ViewBox, b: ViewBox, t: number): ViewBox {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    w: a.w + (b.w - a.w) * t,
    h: a.h + (b.h - a.h) * t,
  };
}

/** Ease-out cubic */
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function InteractiveSvg({ svgUrl, steps }: InteractiveSvgProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentVB = useRef<ViewBox>({ ...ORIGINAL_VB });
  const animFrameRef = useRef<number>(0);

  // Fetch SVG on mount
  useEffect(() => {
    fetch(svgUrl)
      .then((r) => r.text())
      .then(setSvgContent)
      .catch(console.error);
  }, [svgUrl]);

  /** Get the <svg> element from the container */
  const getSvgEl = useCallback(() => {
    return containerRef.current?.querySelector("svg") as SVGSVGElement | null;
  }, []);

  /** Calculate bounding box of highlighted elements in SVG viewBox coords */
  const getHighlightBounds = useCallback(
    (elementIds: string[]): ViewBox | null => {
      const svg = getSvgEl();
      if (!svg || elementIds.length === 0) return null;

      const ctm = svg.getScreenCTM();
      if (!ctm) return null;
      const inverse = ctm.inverse();

      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;

      for (const id of elementIds) {
        const el = svg.querySelector(`[id="${CSS.escape(id)}"]`);
        if (!el) continue;

        const rect = (el as SVGGraphicsElement).getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) continue;

        // Convert screen corners to SVG viewBox coordinates
        const p1 = svg.createSVGPoint();
        p1.x = rect.left;
        p1.y = rect.top;
        const svgP1 = p1.matrixTransform(inverse);

        const p2 = svg.createSVGPoint();
        p2.x = rect.right;
        p2.y = rect.bottom;
        const svgP2 = p2.matrixTransform(inverse);

        minX = Math.min(minX, svgP1.x, svgP2.x);
        minY = Math.min(minY, svgP1.y, svgP2.y);
        maxX = Math.max(maxX, svgP1.x, svgP2.x);
        maxY = Math.max(maxY, svgP1.y, svgP2.y);
      }

      if (!isFinite(minX)) return null;

      // Add padding
      const padded: ViewBox = {
        x: minX - ZOOM_PADDING,
        y: minY - ZOOM_PADDING,
        w: maxX - minX + ZOOM_PADDING * 2,
        h: maxY - minY + ZOOM_PADDING * 2,
      };

      // Clamp to original viewBox
      padded.x = Math.max(ORIGINAL_VB.x, padded.x);
      padded.y = Math.max(ORIGINAL_VB.y, padded.y);
      if (padded.x + padded.w > ORIGINAL_VB.x + ORIGINAL_VB.w) {
        padded.w = ORIGINAL_VB.x + ORIGINAL_VB.w - padded.x;
      }
      if (padded.y + padded.h > ORIGINAL_VB.y + ORIGINAL_VB.h) {
        padded.h = ORIGINAL_VB.y + ORIGINAL_VB.h - padded.y;
      }

      return padded;
    },
    [getSvgEl],
  );

  /** Animate viewBox from current to target */
  const animateViewBox = useCallback(
    (target: ViewBox) => {
      const svg = getSvgEl();
      if (!svg) return;

      cancelAnimationFrame(animFrameRef.current);
      const from = { ...currentVB.current };
      const duration = 400;
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = easeOut(t);
        const vb = lerpVB(from, target, eased);
        svg.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
        currentVB.current = vb;

        if (t < 1) {
          animFrameRef.current = requestAnimationFrame(tick);
        }
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [getSvgEl],
  );

  // Apply highlight + zoom when step changes
  const applyStep = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const step = steps[activeStep];
    const isOverview = !step || step.elementIds.length === 0;

    // --- Highlight logic ---
    if (isOverview) {
      container.classList.remove("has-highlight");
      container
        .querySelectorAll(".highlighted")
        .forEach((el) => el.classList.remove("highlighted"));
    } else {
      container.classList.add("has-highlight");
      container
        .querySelectorAll(".highlighted")
        .forEach((el) => el.classList.remove("highlighted"));

      for (const id of step.elementIds) {
        const el = container.querySelector(`[id="${CSS.escape(id)}"]`);
        if (el) el.classList.add("highlighted");
      }
    }

    // --- Zoom logic ---
    if (isOverview) {
      animateViewBox(ORIGINAL_VB);
    } else {
      const bounds = getHighlightBounds(step.elementIds);
      if (bounds) {
        animateViewBox(bounds);
      }
    }
  }, [activeStep, steps, animateViewBox, getHighlightBounds]);

  useEffect(() => {
    applyStep();
  }, [applyStep, svgContent]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const goNext = () =>
    setActiveStep((s) => Math.min(s + 1, steps.length - 1));
  const goPrev = () => setActiveStep((s) => Math.max(s - 1, 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* SVG CSS */}
      <style>{`
        .svg-viewer.has-highlight svg > g > g[id] {
          opacity: 0.12;
          transition: opacity 300ms ease;
        }
        .svg-viewer:not(.has-highlight) svg > g > g[id] {
          opacity: 1;
          transition: opacity 300ms ease;
        }
        .svg-viewer.has-highlight svg > g > g[id].highlighted {
          opacity: 1;
        }
        .svg-viewer.has-highlight svg > g > g[id].highlighted g[id] {
          opacity: 1;
        }
        .svg-viewer svg {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      {/* SVG viewer */}
      <div className="flex-1 min-w-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
        <div
          ref={containerRef}
          className="svg-viewer"
          dangerouslySetInnerHTML={
            svgContent ? { __html: svgContent } : undefined
          }
        />
      </div>

      {/* Step controls panel */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
        {/* Step pills */}
        <div className="flex flex-wrap gap-2">
          {steps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                i === activeStep
                  ? "bg-teal-500/20 text-teal-400 border border-teal-400/40"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Active step info */}
        <div className="glass-card p-5 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-2">
            Step {activeStep + 1} of {steps.length}
          </p>
          <h3 className="text-lg font-bold text-white mb-3">
            {steps[activeStep]?.label}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {steps[activeStep]?.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            disabled={activeStep === 0}
            className="flex-1 rounded-md border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:border-white/20 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &larr; Previous
          </button>
          <button
            onClick={goNext}
            disabled={activeStep === steps.length - 1}
            className="flex-1 rounded-md border border-teal-400/40 bg-teal-500/10 px-4 py-2.5 text-sm font-medium text-teal-400 transition-colors hover:bg-teal-500/20 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next &rarr;
          </button>
        </div>

        <p className="text-xs text-gray-600 text-center">
          Use arrow keys to navigate
        </p>
      </div>
    </div>
  );
}
