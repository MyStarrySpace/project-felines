"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { SliceTooltipProps, LineCustomSvgLayerProps } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS, PHASE_COLORS } from "./chart-theme";
import type { ClearanceResult } from "@/lib/clearance/types";

interface FerroptosisPhaseChartProps {
  data: ClearanceResult;
  reference?: ClearanceResult;
}

/** Phase bands + threshold lines + phase onset annotations */
function PhaseLayer(
  props: LineCustomSvgLayerProps<NumericSeries> & {
    phase1: number;
    phase2: number;
    phase1Age: number | null;
    phase2Age: number | null;
  }
) {
  const sy = props.yScale as unknown as (v: number) => number;
  const sx = props.xScale as unknown as (v: number) => number;
  const top = 0;

  const y1 = sy(1.0);
  const yP1 = sy(props.phase1);
  const yP2 = sy(props.phase2);

  return (
    <g>
      {/* Phase 1 band */}
      <rect
        x={0} y={yP2} width={props.innerWidth} height={yP1 - yP2}
        fill={PHASE_COLORS.phase1}
      />
      {/* Phase 2 band */}
      <rect
        x={0} y={top} width={props.innerWidth} height={yP2 - top}
        fill={PHASE_COLORS.phase2}
      />

      {/* Baseline */}
      <line
        x1={0} x2={props.innerWidth} y1={y1} y2={y1}
        stroke="#6B7280" strokeWidth={1} strokeDasharray="4 4" opacity={0.4}
      />
      <text x={4} y={y1 - 6} fill="#6B7280" fontSize={9} opacity={0.6}>
        Baseline (1.0{"\u00D7"})
      </text>

      {/* Phase 1 threshold */}
      <line
        x1={0} x2={props.innerWidth} y1={yP1} y2={yP1}
        stroke={PHASE_COLORS.phase1Line} strokeWidth={1} strokeDasharray="6 4" opacity={0.7}
      />
      <text
        x={props.innerWidth - 4} y={yP1 + 14}
        textAnchor="end" fill={PHASE_COLORS.phase1Line} fontSize={9} opacity={0.8}
      >
        Phase 1: sublethal stress ({props.phase1}{"\u00D7"})
      </text>

      {/* Phase 2 threshold */}
      {yP2 > top + 10 && (
        <>
          <line
            x1={0} x2={props.innerWidth} y1={yP2} y2={yP2}
            stroke={PHASE_COLORS.phase2Line} strokeWidth={1} strokeDasharray="6 4" opacity={0.7}
          />
          <text
            x={props.innerWidth - 4} y={yP2 + 14}
            textAnchor="end" fill={PHASE_COLORS.phase2Line} fontSize={9} opacity={0.8}
          >
            Phase 2: ferroptosis ({props.phase2}{"\u00D7"})
          </text>
        </>
      )}

      {/* Phase 1 onset vertical marker */}
      {props.phase1Age !== null && (
        <>
          <line
            x1={sx(props.phase1Age)} x2={sx(props.phase1Age)}
            y1={yP1} y2={props.innerHeight}
            stroke={PHASE_COLORS.phase1Line} strokeWidth={1} strokeDasharray="3 3" opacity={0.5}
          />
          <text
            x={sx(props.phase1Age) + 4} y={props.innerHeight - 6}
            fill={PHASE_COLORS.phase1Line} fontSize={10} fontWeight={600} opacity={0.9}
          >
            Age {Math.round(props.phase1Age)}
          </text>
        </>
      )}

      {/* Phase 2 onset vertical marker */}
      {props.phase2Age !== null && (
        <>
          <line
            x1={sx(props.phase2Age)} x2={sx(props.phase2Age)}
            y1={yP2} y2={props.innerHeight}
            stroke={PHASE_COLORS.phase2Line} strokeWidth={1} strokeDasharray="3 3" opacity={0.5}
          />
          <text
            x={sx(props.phase2Age) + 4} y={props.innerHeight - 20}
            fill={PHASE_COLORS.phase2Line} fontSize={10} fontWeight={600} opacity={0.9}
          >
            Age {Math.round(props.phase2Age)}
          </text>
        </>
      )}
    </g>
  );
}

function PhaseTooltip({ slice, lipBase }: SliceTooltipProps<NumericSeries> & { lipBase: number }) {
  const xValue = slice.points[0]?.data.x;
  return (
    <div style={{
      background: "rgba(26, 15, 10, 0.95)", borderRadius: 6,
      padding: "10px 14px", fontFamily: "var(--font-sans), system-ui, sans-serif",
      minWidth: 180,
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
            <span style={{ color: "#E5E7EB", flex: 1 }}>{point.seriesId}</span>
            <span style={{
              color: fold >= 1.5 ? "#DC2626" : fold >= 1.2 ? "#FBBF24" : "#ffffff",
              fontWeight: 500,
            }}>
              {fold.toFixed(2)}{"\u00D7"} ({(fold * lipBase).toFixed(2)} {"\u00B5"}M)
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function FerroptosisPhaseChart({
  data,
  reference,
}: FerroptosisPhaseChartProps) {
  const phase1 = data.parameters.phase1_threshold;
  const phase2 = data.parameters.phase2_threshold;

  const lipBase = data.baselines.Fe_LIP;

  const series: NumericSeries[] = useMemo(() => {
    const result: NumericSeries[] = [
      {
        id: "Labile iron (LIP)",
        data: data.timePoints.map((p) => ({
          x: p.age,
          y: Math.round((p.Fe_LIP / lipBase) * 1000) / 1000,
        })),
      },
    ];

    if (reference) {
      const refBase = reference.baselines.Fe_LIP;
      result.push({
        id: "LIP (healthy reference)",
        data: reference.timePoints.map((p) => ({
          x: p.age,
          y: Math.round((p.Fe_LIP / refBase) * 1000) / 1000,
        })),
      });
    }

    return result;
  }, [data, reference, lipBase]);

  const colors = reference
    ? [CLEARANCE_COLORS.LIP, PHASE_COLORS.healthyRef]
    : [CLEARANCE_COLORS.LIP];

  const customLayers = [
    "grid" as const,
    "markers" as const,
    "axes" as const,
    (props: LineCustomSvgLayerProps<NumericSeries>) => (
      <PhaseLayer
        {...props}
        phase1={phase1}
        phase2={phase2}
        phase1Age={data.phase1Age}
        phase2Age={data.phase2Age}
      />
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
        margin={{ top: 24, right: 24, bottom: 80, left: 60 }}
        xScale={{ type: "linear", min: 20, max: 100 }}
        yScale={{
          type: "linear",
          min: 0.9,
          max: Math.max(phase2 * 1.3, 2.0),
          stacked: false,
        }}
        axisBottom={{
          tickValues: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          legend: "Age (years)",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "LIP (fold change from baseline)",
          legendOffset: -48,
          legendPosition: "middle",
          format: (v) => `${v}\u00D7`,
        }}
        pointSize={0}
        enableCrosshair
        crosshairType="x"
        useMesh
        enableSlices="x"
        sliceTooltip={(props) => <PhaseTooltip {...props} lipBase={lipBase} />}
        curve="monotoneX"
        lineWidth={2.5}
        layers={customLayers}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 72,
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
