"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult } from "@/lib/kinetics/types";
import { linearApproximation } from "@/data/kinetics/scenarios";
import { felineTheme, SCENARIO_COLORS, type NumericSeries } from "./chart-theme";

interface AmyloidChartProps {
  results: Record<string, SimulationResult>;
  activeScenario: string;
}

/** Custom layer to draw the nucleation threshold line */
function ThresholdLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sy = props.yScale as unknown as (v: number) => number;
  const y = sy(1.2);
  return (
    <g>
      <line
        x1={0}
        x2={props.innerWidth}
        y1={y}
        y2={y}
        stroke="#DC2626"
        strokeWidth={1}
        strokeDasharray="6 4"
      />
      <text
        x={props.innerWidth - 4}
        y={y - 6}
        textAnchor="end"
        fill="#DC2626"
        fontSize={10}
      >
        Nucleation threshold (1.2 SUVR)
      </text>
    </g>
  );
}

export function AmyloidChart({ results, activeScenario }: AmyloidChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const linearPts = linearApproximation(0.8, 0.02, 50, 0.5);

    const scenarioSeries: NumericSeries[] = Object.entries(results).map(
      ([id, result]) => ({
        id:
          id === "mild"
            ? "Mild (20%)"
            : id === "moderate"
              ? "Moderate (40%)"
              : "Severe (60%)",
        data: result.timePoints
          .filter((_, i) => i % 5 === 0)
          .map((p) => ({
            x: p.t,
            y: Math.round(p.Abeta * 100) / 100,
          })),
      })
    );

    return [
      ...scenarioSeries,
      {
        id: "Linear approx. (incorrect)",
        data: linearPts.map((p) => ({
          x: p.t,
          y: Math.round(p.value * 100) / 100,
        })),
      },
    ];
  }, [results]);

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={[
          SCENARIO_COLORS.mild,
          SCENARIO_COLORS.moderate,
          SCENARIO_COLORS.severe,
          "#9CA3AF",
        ]}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: 50 }}
        yScale={{ type: "linear", min: 0, max: 3.5 }}
        axisBottom={{
          tickValues: [0, 10, 20, 30, 40, 50],
          legend: "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Amyloid PET (SUVR)",
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
        enableArea={false}
        layers={[
          "grid",
          "markers",
          "axes",
          ThresholdLayer,
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
