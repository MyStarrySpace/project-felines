"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { SliceTooltipProps, LineCustomSvgLayerProps } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS, PHASE_COLORS } from "./chart-theme";
import type { ClearanceResult } from "@/lib/clearance/types";

interface ClearanceChartProps {
  data: ClearanceResult;
  reference?: ClearanceResult;
}

/** Normalize to fold-change from baseline so all compartments share a scale */
function normalize(value: number, baseline: number): number {
  return Math.round((value / baseline) * 1000) / 1000;
}

/** Custom layer: 1.0× baseline reference line + phase threshold zone */
function BaselineLayer(props: LineCustomSvgLayerProps<NumericSeries> & {
  phase1: number;
}) {
  const sy = props.yScale as unknown as (v: number) => number;
  const y1 = sy(1.0);
  const yP1 = sy(props.phase1);

  return (
    <g>
      {/* Phase 1 threshold zone (above phase1× baseline) */}
      {yP1 < y1 && (
        <rect
          x={0}
          y={0}
          width={props.innerWidth}
          height={yP1}
          fill={PHASE_COLORS.phase2}
        />
      )}
      {yP1 < y1 && (
        <rect
          x={0}
          y={yP1}
          width={props.innerWidth}
          height={y1 - yP1}
          fill={PHASE_COLORS.phase1}
        />
      )}
      {/* 1.0× baseline */}
      <line
        x1={0} x2={props.innerWidth}
        y1={y1} y2={y1}
        stroke="#6B7280" strokeWidth={1} strokeDasharray="4 4" opacity={0.5}
      />
      <text x={4} y={y1 - 6} fill="#6B7280" fontSize={9} opacity={0.6}>
        Baseline (1.0{"\u00D7"})
      </text>
      {/* Phase 1 threshold */}
      <line
        x1={0} x2={props.innerWidth}
        y1={yP1} y2={yP1}
        stroke={PHASE_COLORS.phase1Line} strokeWidth={1} strokeDasharray="6 4" opacity={0.5}
      />
      <text
        x={props.innerWidth - 4} y={yP1 + 14}
        textAnchor="end" fill={PHASE_COLORS.phase1Line} fontSize={9} opacity={0.7}
      >
        Phase 1 ({props.phase1}{"\u00D7"})
      </text>
    </g>
  );
}

/** Tooltip showing fold-change + actual concentration */
function FoldChangeTooltip({ slice }: SliceTooltipProps<NumericSeries>) {
  const xValue = slice.points[0]?.data.x;

  return (
    <div style={{
      background: "rgba(26, 15, 10, 0.95)",
      borderRadius: 6,
      padding: "10px 14px",
      boxShadow: "0 2px 8px rgba(26, 15, 10, 0.2)",
      fontFamily: "var(--font-sans), system-ui, sans-serif",
      minWidth: 200,
    }}>
      <div style={{
        fontSize: 11, color: "#9CA3AF", marginBottom: 6,
        borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 4,
      }}>
        {typeof xValue === "number" ? `Age ${xValue.toFixed(0)}` : `${xValue}`}
      </div>
      {slice.points.map((point) => {
        const fold = point.data.y as number;
        return (
          <div key={point.id} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "2px 0", fontSize: 12,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              backgroundColor: point.seriesColor, flexShrink: 0,
            }} />
            <span style={{ color: "#E5E7EB", flex: 1 }}>
              {point.seriesId}
            </span>
            <span style={{
              color: fold >= 1.2 ? "#FBBF24" : fold >= 1.5 ? "#DC2626" : "#ffffff",
              fontWeight: 500,
            }}>
              {fold.toFixed(2)}{"\u00D7"}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function ClearanceChart({ data, reference }: ClearanceChartProps) {
  const phase1 = data.parameters.phase1_threshold;
  const base = data.baselines;

  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints;
    const result: NumericSeries[] = [
      {
        id: "Labile iron (LIP)",
        data: pts.map((p) => ({
          x: p.age,
          y: normalize(p.Fe_LIP, base.Fe_LIP),
        })),
      },
      {
        id: "Ferritin storage",
        data: pts.map((p) => ({
          x: p.age,
          y: normalize(p.Fe_ferritin, base.Fe_ferritin),
        })),
      },
      {
        id: "ISF iron",
        data: pts.map((p) => ({
          x: p.age,
          y: normalize(p.Fe_ISF, base.Fe_ISF),
        })),
      },
    ];

    if (reference) {
      const refBase = reference.baselines;
      result.push({
        id: "LIP (healthy ref)",
        data: reference.timePoints.map((p) => ({
          x: p.age,
          y: normalize(p.Fe_LIP, refBase.Fe_LIP),
        })),
      });
    }

    return result;
  }, [data, reference, base]);

  const colors = reference
    ? [CLEARANCE_COLORS.LIP, CLEARANCE_COLORS.ferritin, CLEARANCE_COLORS.ISF, "#6B7280"]
    : [CLEARANCE_COLORS.LIP, CLEARANCE_COLORS.ferritin, CLEARANCE_COLORS.ISF];

  const customLayers = [
    "grid" as const,
    "markers" as const,
    "axes" as const,
    (props: LineCustomSvgLayerProps<NumericSeries>) => (
      <BaselineLayer {...props} phase1={phase1} />
    ),
    "lines" as const,
    "crosshair" as const,
    "slices" as const,
    "mesh" as const,
    "legends" as const,
  ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={colors}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 20, max: 100 }}
        yScale={{ type: "linear", min: 0.8, max: "auto", stacked: false }}
        axisBottom={{
          tickValues: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          legend: "Age (years)",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Fold change from baseline",
          legendOffset: -48,
          legendPosition: "middle",
          format: (v) => `${v}\u00D7`,
        }}
        pointSize={0}
        enableCrosshair
        crosshairType="x"
        useMesh
        enableSlices="x"
        sliceTooltip={FoldChangeTooltip}
        curve="monotoneX"
        lineWidth={2}
        layers={customLayers}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 130,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
