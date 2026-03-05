"use client";

import { useState, useRef, useEffect } from "react";
import type { ParamSource } from "@/lib/clearance/types";

const sourceColors: Record<ParamSource, string> = {
  measured: "#059669", // green-600
  derived: "#D97706", // amber-600
  assumed: "#DC2626", // red-600
};

const sourceLabels: Record<ParamSource, string> = {
  measured: "Measured",
  derived: "Derived from measured",
  assumed: "Assumed",
};

interface ParameterSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  source?: ParamSource;
  /** Short citation label (e.g., "Hallgren & Sourander 1958") */
  cite?: string;
  /** Detailed citation note for tooltip */
  citationNote?: string;
  /** PMID for PubMed link */
  pmid?: string;
  onChange: (value: number) => void;
}

export function ParameterSlider({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  source,
  cite,
  citationNote,
  pmid,
  onChange,
}: ParameterSliderProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLButtonElement>(null);

  // Close tooltip on outside click
  useEffect(() => {
    if (!showTooltip) return;
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current && !tooltipRef.current.contains(e.target as Node) &&
        dotRef.current && !dotRef.current.contains(e.target as Node)
      ) {
        setShowTooltip(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showTooltip]);

  const hasCitation = source && (cite || citationNote);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-300">{label}</label>
        <div className="flex items-center gap-2">
          {source && (
            <div className="relative">
              <button
                ref={dotRef}
                type="button"
                onClick={() => hasCitation && setShowTooltip((v) => !v)}
                className={`inline-block h-2 w-2 rounded-full ${hasCitation ? "cursor-pointer" : "cursor-default"}`}
                style={{ backgroundColor: sourceColors[source] }}
                title={!hasCitation ? sourceLabels[source] : undefined}
                aria-label={`${sourceLabels[source]}${cite ? `: ${cite}` : ""}`}
              />
              {showTooltip && hasCitation && (
                <div
                  ref={tooltipRef}
                  className="absolute right-0 top-full z-50 mt-2 w-64 border border-white/10 bg-navy-900 p-3 shadow-lg"
                >
                  <p className="mb-1 text-xs font-medium" style={{ color: sourceColors[source] }}>
                    {sourceLabels[source]}
                  </p>
                  {cite && <p className="text-xs font-medium text-gray-200">{cite}</p>}
                  {citationNote && (
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">{citationNote}</p>
                  )}
                  {pmid && (
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-xs text-teal-400 hover:text-teal-300"
                    >
                      PubMed {pmid}
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
          <span className="text-xs tabular-nums text-white">
            {value % 1 === 0 ? value : value.toFixed(step < 0.01 ? 3 : step < 0.1 ? 2 : 1)}
            {unit ? ` ${unit}` : ""}
          </span>
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10
          [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-teal-400
          [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5
          [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:bg-teal-400"
      />
    </div>
  );
}
