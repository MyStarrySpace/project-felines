"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult, CascadeMode } from "@/lib/kinetics/types";
import { felineTheme, LAYER_COLORS, type NumericSeries } from "./chart-theme";
import { ChartSliceTooltip } from "./chart-tooltip";

const LAYER_SERIES: {
  field: "Export_fx" | "Neurovascular_fx" | "Insulation_fx" | "Lysosome_fx" | "GPX4";
  label: string;
}[] = [
  { field: "Export_fx", label: "Export (AQP4/glymphatic)" },
  { field: "Neurovascular_fx", label: "Neurovascular (pericytes)" },
  { field: "Insulation_fx", label: "Insulation (ferritin/myelin)" },
  { field: "Lysosome_fx", label: "Lysosome" },
  { field: "GPX4", label: "GPX4 activity" },
];

/** Annotations: danger zone, fully-intact line, recovery ceilings */
function LayerAnnotationsLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sy = props.yScale as unknown as (v: number) => number;

  const yDangerTop = sy(0.3);
  const yDangerBottom = sy(0);
  const yIntact = sy(1.0);

  return (
    <g>
      {/* Danger zone: 0 - 0.3 */}
      <rect
        x={0}
        y={yDangerTop}
        width={props.innerWidth}
        height={yDangerBottom - yDangerTop}
        fill="#DC2626"
        opacity={0.06}
      />
      <text
        x={4}
        y={yDangerBottom - 6}
        fill="#DC2626"
        fontSize={9}
        opacity={0.6}
      >
        Danger zone: defense failing
      </text>

      {/* Fully intact reference at 1.0 */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yIntact}
        y2={yIntact}
        stroke="#6B7280"
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.4}
      />
      <text
        x={props.innerWidth - 4}
        y={yIntact + 14}
        textAnchor="end"
        fill="#6B7280"
        fontSize={9}
        opacity={0.6}
      >
        Fully intact
      </text>
    </g>
  );
}

interface LayersChartProps {
  data: SimulationResult;
  mode?: CascadeMode;
}

export function LayersChart({ data, mode = "post_injury" }: LayersChartProps) {
  const isSpontaneous = mode === "spontaneous";
  const xMax = isSpontaneous ? 50 : 15;

  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints.filter((p) => p.t <= xMax);
    return LAYER_SERIES.map((layer) => ({
      id: layer.label,
      data: pts.map((p) => ({
        x: p.t,
        y: Math.round(p[layer.field] * 100) / 100,
      })),
    }));
  }, [data, xMax]);

  const tickValues = isSpontaneous
    ? [0, 10, 20, 30, 40, 50]
    : [0, 3, 6, 9, 12, 15];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={[
          LAYER_COLORS.Export,
          LAYER_COLORS.Neurovascular,
          LAYER_COLORS.Insulation,
          LAYER_COLORS.Lysosome,
          LAYER_COLORS.GPX4,
        ]}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: xMax }}
        yScale={{ type: "linear", min: 0, max: 1.05 }}
        axisBottom={{
          tickValues,
          legend: isSpontaneous ? "Years" : "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
          legend: "Capacity (0 = failed, 1 = intact)",
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
          LayerAnnotationsLayer,
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
            itemWidth: 180,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
