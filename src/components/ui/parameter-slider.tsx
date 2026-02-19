"use client";

import type { ConfidenceLevel } from "@/lib/clearance/types";

const confidenceColors: Record<ConfidenceLevel, string> = {
  high: "#059669", // green-600
  moderate: "#D97706", // amber-600
  low: "#DC2626", // red-600
};

const confidenceLabels: Record<ConfidenceLevel, string> = {
  high: "Well-measured",
  moderate: "Estimated",
  low: "Poorly constrained",
};

interface ParameterSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  confidence?: ConfidenceLevel;
  onChange: (value: number) => void;
}

export function ParameterSlider({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  confidence,
  onChange,
}: ParameterSliderProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-300">{label}</label>
        <div className="flex items-center gap-2">
          {confidence && (
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: confidenceColors[confidence] }}
              title={confidenceLabels[confidence]}
            />
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
