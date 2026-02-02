"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult, CascadeMode } from "@/lib/kinetics/types";
import { felineTheme, IRON_COLORS, type NumericSeries } from "./chart-theme";
import { ChartSliceTooltip } from "./chart-tooltip";

interface IronChartProps {
  data: SimulationResult;
  mode?: CascadeMode;
}

/** Custom layer to render the "apparent recovery" zone */
function ApparentRecoveryLayer(
  props: LineCustomSvgLayerProps<NumericSeries>
) {
  const sx = props.xScale as unknown as (v: number) => number;
  const x1 = sx(0.1);
  const x2 = sx(2);
  return (
    <g>
      <rect
        x={x1}
        y={0}
        width={x2 - x1}
        height={props.innerHeight}
        fill="#D97706"
        opacity={0.06}
      />
      <text
        x={(x1 + x2) / 2}
        y={14}
        textAnchor="middle"
        fill="#D97706"
        fontSize={9}
        opacity={0.8}
      >
        Apparent recovery
      </text>
    </g>
  );
}

/** Baseline + ferritin capacity annotations */
function IronAnnotationsLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sy = props.yScale as unknown as (v: number) => number;

  const yBaseline = sy(1.0);
  const yFerritinCap = sy(10);

  return (
    <g>
      {/* Baseline reference at y=1.0 */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yBaseline}
        y2={yBaseline}
        stroke="#6B7280"
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.5}
      />
      <text
        x={4}
        y={yBaseline - 6}
        textAnchor="start"
        fill="#6B7280"
        fontSize={9}
        opacity={0.7}
      >
        Normal baseline (1.0)
      </text>

      {/* Ferritin capacity limit — only render if within chart bounds */}
      {yFerritinCap > 0 && (
        <>
          <line
            x1={0}
            x2={props.innerWidth}
            y1={yFerritinCap}
            y2={yFerritinCap}
            stroke="#D97706"
            strokeWidth={1}
            strokeDasharray="6 4"
            opacity={0.5}
          />
          <text
            x={props.innerWidth - 4}
            y={yFerritinCap + 14}
            textAnchor="end"
            fill="#D97706"
            fontSize={9}
            opacity={0.7}
          >
            Ferritin storage limit
          </text>
        </>
      )}
    </g>
  );
}

export function IronChart({ data, mode = "post_injury" }: IronChartProps) {
  const isSpontaneous = mode === "spontaneous";
  const xMax = isSpontaneous ? 50 : 10;

  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints.filter((p) => p.t <= xMax);
    return [
      {
        id: "Free labile iron",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Fe_free * 100) / 100,
        })),
      },
      {
        id: "Ferritin-stored iron",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Fe_stored * 100) / 100,
        })),
      },
      {
        id: "Total brain iron (MRI-visible)",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Fe_brain * 100) / 100,
        })),
      },
    ];
  }, [data, xMax]);

  const tickValues = isSpontaneous
    ? [0, 10, 20, 30, 40, 50]
    : [0, 2, 4, 6, 8, 10];

  const customLayers = isSpontaneous
    ? [
        "grid" as const,
        "markers" as const,
        "axes" as const,
        IronAnnotationsLayer,
        "lines" as const,
        "crosshair" as const,
        "slices" as const,
        "mesh" as const,
        "legends" as const,
      ]
    : [
        "grid" as const,
        "markers" as const,
        "axes" as const,
        ApparentRecoveryLayer,
        IronAnnotationsLayer,
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
        colors={[IRON_COLORS.free, IRON_COLORS.stored, IRON_COLORS.total]}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: xMax }}
        yScale={{ type: "linear", min: 0, max: "auto", stacked: false }}
        axisBottom={{
          tickValues,
          legend: isSpontaneous ? "Years" : "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Iron level (1.0 = normal)",
          legendOffset: -48,
          legendPosition: "middle",
        }}
        pointSize={0}
        enableCrosshair
        crosshairType="x"
        useMesh
        enableSlices="x"
        sliceTooltip={ChartSliceTooltip}
        curve="monotoneX"
        lineWidth={2}
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
