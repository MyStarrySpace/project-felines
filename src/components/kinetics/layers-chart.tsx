"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { SimulationResult } from "@/lib/kinetics/types";
import { felineTheme, LAYER_COLORS, type NumericSeries } from "./chart-theme";

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

interface LayersChartProps {
  data: SimulationResult;
}

export function LayersChart({ data }: LayersChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints.filter((p) => p.t <= 15);
    return LAYER_SERIES.map((layer) => ({
      id: layer.label,
      data: pts.map((p) => ({
        x: p.t,
        y: Math.round(p[layer.field] * 100) / 100,
      })),
    }));
  }, [data]);

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
        xScale={{ type: "linear", min: 0, max: 15 }}
        yScale={{ type: "linear", min: 0, max: 1.05 }}
        axisBottom={{
          tickValues: [0, 3, 6, 9, 12, 15],
          legend: "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
          legend: "Function (0 = lost, 1 = intact)",
          legendOffset: -48,
          legendPosition: "middle",
        }}
        pointSize={0}
        enableCrosshair
        crosshairType="x"
        useMesh
        enableSlices="x"
        curve="monotoneX"
        lineWidth={2}
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
