"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult } from "@/lib/kinetics/types";
import { felineTheme, IRON_COLORS, type NumericSeries } from "./chart-theme";

interface IronChartProps {
  data: SimulationResult;
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

export function IronChart({ data }: IronChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints.filter((p) => p.t <= 10);
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
        id: "Total brain iron (QSM)",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Fe_brain * 100) / 100,
        })),
      },
    ];
  }, [data]);

  return (
    <div className="h-[400px] w-full">
      <ResponsiveLine<NumericSeries>
        data={series}
        theme={felineTheme}
        colors={[IRON_COLORS.free, IRON_COLORS.stored, IRON_COLORS.total]}
        margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
        xScale={{ type: "linear", min: 0, max: 10 }}
        yScale={{ type: "linear", min: 0, max: "auto", stacked: false }}
        axisBottom={{
          tickValues: [0, 2, 4, 6, 8, 10],
          legend: "Years post-insult",
          legendOffset: 44,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Iron (relative units)",
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
        layers={[
          "grid",
          "markers",
          "axes",
          ApparentRecoveryLayer,
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
