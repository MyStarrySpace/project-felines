"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS } from "./chart-theme";
import { ClearanceSliceTooltip } from "./clearance-tooltip";
import type { ClearanceResult } from "@/lib/clearance/types";

interface FeedbackChartProps {
  data: ClearanceResult;
  reference?: ClearanceResult;
}

/** Shows cumulative damage, ferroxidase efficiency, and rho over time */
export function FeedbackChart({ data, reference }: FeedbackChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints;
    const result: NumericSeries[] = [
      {
        id: "Cumulative damage",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.damage * 1000) / 1000,
        })),
      },
      {
        id: "Ferroxidase efficiency",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.ferroxidase_eff * 1000) / 1000,
        })),
      },
      {
        id: "Rho (recapture)",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.rho * 1000) / 1000,
        })),
      },
    ];

    if (reference) {
      result.push({
        id: "Damage (healthy ref)",
        data: reference.timePoints.map((p) => ({
          x: p.age,
          y: Math.round(p.damage * 1000) / 1000,
        })),
      });
    }

    return result;
  }, [data, reference]);

  const colors = reference
    ? [
        CLEARANCE_COLORS.damage,
        CLEARANCE_COLORS.ferroxidase,
        CLEARANCE_COLORS.rho,
        "#6B7280",
      ]
    : [
        CLEARANCE_COLORS.damage,
        CLEARANCE_COLORS.ferroxidase,
        CLEARANCE_COLORS.rho,
      ];

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
          legend: "Fraction (0-1)",
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
            itemWidth: 150,
            itemHeight: 20,
            symbolSize: 12,
            symbolShape: "circle",
          },
        ]}
      />
    </div>
  );
}
