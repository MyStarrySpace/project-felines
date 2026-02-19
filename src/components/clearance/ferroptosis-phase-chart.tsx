"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS, PHASE_COLORS } from "./chart-theme";
import { ClearanceSliceTooltip } from "./clearance-tooltip";
import type { ClearanceResult } from "@/lib/clearance/types";

interface FerroptosisPhaseChartProps {
  data: ClearanceResult;
  reference?: ClearanceResult;
}

/** Custom layer to render Phase 1 and Phase 2 threshold bands */
function PhaseThresholdLayer(
  props: LineCustomSvgLayerProps<NumericSeries> & {
    phase1Y: number;
    phase2Y: number;
  }
) {
  const sy = props.yScale as unknown as (v: number) => number;
  const top = 0;
  const bottom = props.innerHeight;

  const yPhase1 = sy(props.phase1Y);
  const yPhase2 = sy(props.phase2Y);

  return (
    <g>
      {/* Phase 1 band */}
      <rect
        x={0}
        y={yPhase2}
        width={props.innerWidth}
        height={yPhase1 - yPhase2}
        fill={PHASE_COLORS.phase1}
      />
      {/* Phase 2 band */}
      <rect
        x={0}
        y={top}
        width={props.innerWidth}
        height={yPhase2 - top}
        fill={PHASE_COLORS.phase2}
      />

      {/* Phase 1 threshold line */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yPhase1}
        y2={yPhase1}
        stroke={PHASE_COLORS.phase1Line}
        strokeWidth={1}
        strokeDasharray="6 4"
        opacity={0.7}
      />
      <text
        x={props.innerWidth - 4}
        y={yPhase1 + 14}
        textAnchor="end"
        fill={PHASE_COLORS.phase1Line}
        fontSize={9}
        opacity={0.8}
      >
        Phase 1: sublethal stress
      </text>

      {/* Phase 2 threshold line */}
      {yPhase2 > top + 10 && (
        <>
          <line
            x1={0}
            x2={props.innerWidth}
            y1={yPhase2}
            y2={yPhase2}
            stroke={PHASE_COLORS.phase2Line}
            strokeWidth={1}
            strokeDasharray="6 4"
            opacity={0.7}
          />
          <text
            x={props.innerWidth - 4}
            y={yPhase2 + 14}
            textAnchor="end"
            fill={PHASE_COLORS.phase2Line}
            fontSize={9}
            opacity={0.8}
          >
            Phase 2: ferroptosis
          </text>
        </>
      )}

      {/* Baseline reference */}
      {bottom > 0 && (
        <>
          <line
            x1={0}
            x2={props.innerWidth}
            y1={sy(2.5)}
            y2={sy(2.5)}
            stroke="#6B7280"
            strokeWidth={1}
            strokeDasharray="4 4"
            opacity={0.4}
          />
          <text
            x={4}
            y={sy(2.5) - 6}
            textAnchor="start"
            fill="#6B7280"
            fontSize={9}
            opacity={0.6}
          >
            Baseline (2.5 {"\u00B5"}M)
          </text>
        </>
      )}
    </g>
  );
}

export function FerroptosisPhaseChart({
  data,
  reference,
}: FerroptosisPhaseChartProps) {
  const lipBaseline = 2.5;
  const phase1Y = lipBaseline * data.parameters.phase1_threshold;
  const phase2Y = lipBaseline * data.parameters.phase2_threshold;

  const series: NumericSeries[] = useMemo(() => {
    const result: NumericSeries[] = [
      {
        id: "Labile iron (LIP)",
        data: data.timePoints.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_LIP * 100) / 100,
        })),
      },
    ];

    if (reference) {
      result.push({
        id: "LIP (healthy reference)",
        data: reference.timePoints.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_LIP * 100) / 100,
        })),
      });
    }

    return result;
  }, [data, reference]);

  const colors = reference
    ? [CLEARANCE_COLORS.LIP, PHASE_COLORS.healthyRef]
    : [CLEARANCE_COLORS.LIP];

  const customLayers = [
    "grid" as const,
    "markers" as const,
    "axes" as const,
    (props: LineCustomSvgLayerProps<NumericSeries>) => (
      <PhaseThresholdLayer {...props} phase1Y={phase1Y} phase2Y={phase2Y} />
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
        yScale={{
          type: "linear",
          min: 0,
          max: Math.max(phase2Y * 1.3, 6),
          stacked: false,
        }}
        axisBottom={{
          tickValues: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          legend: "Age (years)",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "LIP concentration (\u00B5M)",
          legendOffset: -48,
          legendPosition: "middle",
        }}
        pointSize={0}
        enableCrosshair
        crosshairType="x"
        useMesh
        enableSlices="x"
        sliceTooltip={ClearanceSliceTooltip}
        curve="monotoneX"
        lineWidth={2.5}
        layers={customLayers}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 160,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
