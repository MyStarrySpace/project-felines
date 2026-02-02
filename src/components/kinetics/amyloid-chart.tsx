"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult, CascadeMode } from "@/lib/kinetics/types";
import { linearApproximation } from "@/data/kinetics/scenarios";
import { felineTheme, SCENARIO_COLORS, APOE_COLORS, type NumericSeries } from "./chart-theme";
import { ChartSliceTooltip } from "./chart-tooltip";

interface AmyloidChartProps {
  results: Record<string, SimulationResult>;
  activeScenario: string;
  mode?: CascadeMode;
}

/** Custom layer: zone shading + threshold */
function AmyloidZonesLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sy = props.yScale as unknown as (v: number) => number;

  const yNormalTop = sy(1.0);
  const yElevatedTop = sy(1.2);
  const yPlaqueTop = sy(2.0);
  const yBottom = sy(0);
  const yTop = sy(3.5);

  return (
    <g>
      {/* Normal zone (0 - 1.0 SUVR) */}
      <rect
        x={0}
        y={yNormalTop}
        width={props.innerWidth}
        height={yBottom - yNormalTop}
        fill="#059669"
        opacity={0.04}
      />
      <text
        x={4}
        y={yBottom - 6}
        fill="#059669"
        fontSize={9}
        opacity={0.6}
      >
        Normal range
      </text>

      {/* Elevated zone (1.0 - 1.2 SUVR) */}
      <rect
        x={0}
        y={yElevatedTop}
        width={props.innerWidth}
        height={yNormalTop - yElevatedTop}
        fill="#D97706"
        opacity={0.05}
      />

      {/* Plaque formation zone (1.2 - 2.0 SUVR) */}
      <rect
        x={0}
        y={yPlaqueTop}
        width={props.innerWidth}
        height={yElevatedTop - yPlaqueTop}
        fill="#DC2626"
        opacity={0.04}
      />

      {/* Severe zone (>2.0 SUVR) */}
      <rect
        x={0}
        y={yTop}
        width={props.innerWidth}
        height={yPlaqueTop - yTop}
        fill="#991B1B"
        opacity={0.04}
      />
      <text
        x={props.innerWidth - 4}
        y={yTop + 14}
        textAnchor="end"
        fill="#991B1B"
        fontSize={9}
        opacity={0.6}
      >
        Severe AD
      </text>

      {/* Plaque threshold line */}
      <line
        x1={0}
        x2={props.innerWidth}
        y1={yElevatedTop}
        y2={yElevatedTop}
        stroke="#DC2626"
        strokeWidth={1}
        strokeDasharray="6 4"
      />
      <text
        x={props.innerWidth - 4}
        y={yElevatedTop - 6}
        textAnchor="end"
        fill="#DC2626"
        fontSize={10}
      >
        Plaque clumping begins (1.2 SUVR)
      </text>
    </g>
  );
}

const SPONTANEOUS_LABELS: Record<string, string> = {
  e3e3: "APOE e3/e3",
  e3e4: "APOE e3/e4",
  e4e4: "APOE e4/e4",
};

const POST_INJURY_LABELS: Record<string, string> = {
  mild: "Mild (20%)",
  moderate: "Moderate (40%)",
  severe: "Severe (60%)",
};

export function AmyloidChart({
  results,
  activeScenario,
  mode = "post_injury",
}: AmyloidChartProps) {
  const isSpontaneous = mode === "spontaneous";
  const labels = isSpontaneous ? SPONTANEOUS_LABELS : POST_INJURY_LABELS;

  const series: NumericSeries[] = useMemo(() => {
    const scenarioSeries: NumericSeries[] = Object.entries(results).map(
      ([id, result]) => ({
        id: labels[id] ?? id,
        data: result.timePoints
          .filter((_, i) => i % 5 === 0)
          .map((p) => ({
            x: p.t,
            y: Math.round(p.Abeta * 100) / 100,
          })),
      })
    );

    if (isSpontaneous) {
      return scenarioSeries;
    }

    const linearPts = linearApproximation(0.8, 0.02, 50, 0.5);
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
  }, [results, isSpontaneous, labels]);

  const colors = isSpontaneous
    ? [APOE_COLORS.e3e3, APOE_COLORS.e3e4, APOE_COLORS.e4e4]
    : [
        SCENARIO_COLORS.mild,
        SCENARIO_COLORS.moderate,
        SCENARIO_COLORS.severe,
        "#9CA3AF",
      ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={colors}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: 50 }}
        yScale={{ type: "linear", min: 0, max: 3.5 }}
        axisBottom={{
          tickValues: [0, 10, 20, 30, 40, 50],
          legend: isSpontaneous ? "Years" : "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Amyloid PET signal (SUVR)",
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
        enableArea={false}
        layers={[
          "grid",
          "markers",
          "axes",
          AmyloidZonesLayer,
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
