"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { felineTheme, type NumericSeries } from "@/components/kinetics/chart-theme";
import { CLEARANCE_COLORS } from "./chart-theme";
import { ClearanceSliceTooltip } from "./clearance-tooltip";
import type { ClearanceResult } from "@/lib/clearance/types";

interface ClearanceChartProps {
  data: ClearanceResult;
  /** Optional healthy reference to overlay */
  reference?: ClearanceResult;
}

export function ClearanceChart({ data, reference }: ClearanceChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints;
    const result: NumericSeries[] = [
      {
        id: "LIP (labile Fe\u00B2\u207A)",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_LIP * 100) / 100,
        })),
      },
      {
        id: "Ferritin storage",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_ferritin * 100) / 100,
        })),
      },
      {
        id: "ISF iron",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_ISF * 1000) / 1000,
        })),
      },
      {
        id: "CSF iron",
        data: pts.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_CSF * 10) / 10,
        })),
      },
    ];

    if (reference) {
      result.push({
        id: "LIP (healthy ref)",
        data: reference.timePoints.map((p) => ({
          x: p.age,
          y: Math.round(p.Fe_LIP * 100) / 100,
        })),
      });
    }

    return result;
  }, [data, reference]);

  const colors = reference
    ? [
        CLEARANCE_COLORS.LIP,
        CLEARANCE_COLORS.ferritin,
        CLEARANCE_COLORS.ISF,
        CLEARANCE_COLORS.CSF,
        "#6B7280", // gray for healthy reference
      ]
    : [
        CLEARANCE_COLORS.LIP,
        CLEARANCE_COLORS.ferritin,
        CLEARANCE_COLORS.ISF,
        CLEARANCE_COLORS.CSF,
      ];

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={colors}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 20, max: 100 }}
        yScale={{ type: "linear", min: 0, max: "auto", stacked: false }}
        axisBottom={{
          tickValues: [20, 30, 40, 50, 60, 70, 80, 90, 100],
          legend: "Age (years)",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Concentration",
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
