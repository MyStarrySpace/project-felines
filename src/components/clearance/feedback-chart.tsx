"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS } from "./chart-theme";
import { ClearanceSliceTooltip } from "./clearance-tooltip";
import type { ClearanceResult } from "@/lib/clearance/types";

interface ClearanceDeclineChartProps {
  data: ClearanceResult;
  reference?: ClearanceResult;
}

/** Shows Fpn fraction and glymphatic fraction declining over time */
export function ClearanceDeclineChart({ data, reference }: ClearanceDeclineChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints;
    const result: NumericSeries[] = [
      {
        id: "Fpn activity",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.fpn_fraction * 1000) / 1000,
        })),
      },
      {
        id: "Glymphatic flow",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.gly_fraction * 1000) / 1000,
        })),
      },
    ];

    if (reference) {
      result.push(
        {
          id: "Fpn (healthy ref)",
          data: reference.timePoints.map((p) => ({
            x: p.age,
            y: Math.round(p.fpn_fraction * 1000) / 1000,
          })),
        },
        {
          id: "Gly (healthy ref)",
          data: reference.timePoints.map((p) => ({
            x: p.age,
            y: Math.round(p.gly_fraction * 1000) / 1000,
          })),
        },
      );
    }

    return result;
  }, [data, reference]);

  const colors = reference
    ? [
        CLEARANCE_COLORS.fpn,
        CLEARANCE_COLORS.gly,
        "#4B5563", // gray-600 for refs
        "#6B7280",
      ]
    : [CLEARANCE_COLORS.fpn, CLEARANCE_COLORS.gly];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={colors}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 20, max: 100 }}
        yScale={{ type: "linear", min: 0, max: 1, stacked: false }}
        axisBottom={{
          tickValues: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          legend: "Age (years)",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
          legend: "Fraction of young-adult capacity",
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
        lineWidth={2}
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
