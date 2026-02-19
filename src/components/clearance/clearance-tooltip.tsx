"use client";

import type { SliceTooltipProps } from "@nivo/line";
import type { NumericSeries } from "@/components/kinetics/chart-theme";

/** Custom Nivo slice tooltip for clearance charts */
export function ClearanceSliceTooltip({
  slice,
}: SliceTooltipProps<NumericSeries>) {
  const xValue = slice.points[0]?.data.x;

  return (
    <div
      style={{
        background: "rgba(26, 15, 10, 0.95)",
        borderRadius: 6,
        padding: "10px 14px",
        boxShadow: "0 2px 8px rgba(26, 15, 10, 0.2)",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        minWidth: 180,
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
        {typeof xValue === "number" ? `Age ${xValue.toFixed(0)}` : `${xValue}`}
      </div>
      {slice.points.map((point) => {
        const value = point.data.y as number;
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
            <span style={{ color: "#E5E7EB", flex: 1 }}>
              {point.seriesId}:
            </span>
            <span style={{ color: "#ffffff", fontWeight: 500 }}>
              {value < 10 ? value.toFixed(2) : value.toFixed(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
