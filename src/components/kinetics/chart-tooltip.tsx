"use client";

import type { SliceTooltipProps } from "@nivo/line";
import type { NumericSeries } from "./chart-theme";
import { interpretations, interpret, severityColors } from "@/data/kinetics/glossary";

/** Variable key mapping from series display names to model state keys */
const SERIES_TO_KEY: Record<string, string> = {
  "Free labile iron": "Fe_free",
  "Ferritin-stored iron": "Fe_stored",
  "Total brain iron (MRI-visible)": "Fe_brain",
  "Total brain iron (QSM)": "Fe_brain",
  "Amyloid trajectory": "Abeta",
  "Amyloid (SUVR)": "Abeta",
  "Tau (SUVR)": "Tau",
  "Tau trajectory": "Tau",
  "Export (AQP4/glymphatic)": "Export_fx",
  "Neurovascular (pericytes)": "Neurovascular_fx",
  "Insulation (ferritin/myelin)": "Insulation_fx",
  "Lysosome": "Lysosome_fx",
  "GPX4 activity": "GPX4",
};

function formatValue(key: string, value: number): string {
  const interp = interpretations[key];
  if (!interp) return value.toFixed(2);

  if (interp.unit === "% capacity") {
    return `${Math.round(value * 100)}% capacity`;
  }
  if (interp.unit === "x normal") {
    return `${value.toFixed(1)}x normal`;
  }
  if (interp.unit === "SUVR") {
    return `${value.toFixed(2)} SUVR`;
  }
  return `${value.toFixed(2)} ${interp.unit}`;
}

/**
 * Custom Nivo slice tooltip with plain-language interpretation.
 * Shows interpreted values like "Free iron: 2.3x normal (elevated)"
 * instead of raw "Free labile iron: 2.3"
 */
export function ChartSliceTooltip({ slice }: SliceTooltipProps<NumericSeries>) {
  const xValue = slice.points[0]?.data.x;

  return (
    <div
      style={{
        background: "rgba(26, 15, 10, 0.95)",
        borderRadius: 6,
        padding: "10px 14px",
        boxShadow: "0 2px 8px rgba(26, 15, 10, 0.2)",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        minWidth: 200,
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: "#9CA3AF",
          marginBottom: 6,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: 4,
        }}
      >
        {typeof xValue === "number"
          ? `Year ${xValue.toFixed(1)}`
          : `${xValue}`}
      </div>
      {slice.points.map((point) => {
        const seriesId = point.seriesId as string;
        const key = SERIES_TO_KEY[seriesId];
        const value = point.data.y as number;
        const interp = key ? interpret(key, value) : null;

        const displayName = key
          ? interpretations[key]?.displayName ?? seriesId
          : seriesId;
        const formatted = key ? formatValue(key, value) : value.toFixed(2);

        return (
          <div
            key={point.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "2px 0",
              fontSize: 12,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: point.seriesColor,
                flexShrink: 0,
              }}
            />
            <span style={{ color: "#E5E7EB", flex: 1 }}>{displayName}:</span>
            <span style={{ color: "#ffffff", fontWeight: 500 }}>
              {formatted}
            </span>
            {interp && (
              <span
                style={{
                  fontSize: 10,
                  color: severityColors[interp.severity],
                  fontWeight: 600,
                  marginLeft: 2,
                }}
              >
                ({interp.label})
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
