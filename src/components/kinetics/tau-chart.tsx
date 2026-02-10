"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult, CascadeMode } from "@/lib/kinetics/types";
import { felineTheme, type NumericSeries } from "./chart-theme";
import { ChartSliceTooltip } from "./chart-tooltip";

interface TauChartProps {
  data: SimulationResult;
  mode?: CascadeMode;
}

/** Custom layer for tau-specific annotations */
function TauAnnotationsLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sy = props.yScale as unknown as (v: number) => number;

  const yThreshold = sy(1.4);
  const yAmyloidTrigger = sy(1.2);

  return (
    <g>
      {/* Cognitive symptoms threshold at tau = 1.4 */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yThreshold}
        y2={yThreshold}
        stroke="#DC2626"
        strokeWidth={1}
        strokeDasharray="6 4"
      />
      <text
        x={props.innerWidth - 4}
        y={yThreshold - 6}
        textAnchor="end"
        fill="#DC2626"
        fontSize={10}
      >
        Cognitive symptoms begin (1.4 SUVR)
      </text>

      {/* Amyloid trigger level reference */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yAmyloidTrigger}
        y2={yAmyloidTrigger}
        stroke="#D97706"
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.6}
      />
      <text
        x={4}
        y={yAmyloidTrigger - 6}
        textAnchor="start"
        fill="#D97706"
        fontSize={9}
        opacity={0.8}
      >
        Amyloid triggers tau spread (1.2 SUVR)
      </text>
    </g>
  );
}

export function TauChart({ data, mode = "post_injury" }: TauChartProps) {
  const isSpontaneous = mode === "spontaneous";
  const xMax = isSpontaneous ? 50 : 40;

  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints
      .filter((p) => p.t <= xMax)
      .filter((_, i) => i % 5 === 0);
    return [
      {
        id: "Tau (SUVR)",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Tau * 100) / 100,
        })),
      },
      {
        id: "Amyloid (SUVR)",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Abeta * 100) / 100,
        })),
      },
    ];
  }, [data, xMax]);

  const tickValues = isSpontaneous
    ? [0, 10, 20, 30, 40, 50]
    : [0, 5, 10, 15, 20, 25, 30, 35, 40];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={["#7C3AED", "#D97706"]}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: xMax }}
        yScale={{ type: "linear", min: 0, max: 3.5 }}
        axisBottom={{
          tickValues,
          legend: isSpontaneous ? "Years" : "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "PET signal (SUVR)",
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
        layers={[
          "grid",
          "markers",
          "axes",
          TauAnnotationsLayer,
          "lines",
          "crosshair",
          "slices",
          "mesh",
          "legends",
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 140,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
