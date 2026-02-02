"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult } from "@/lib/kinetics/types";
import { therapeuticWindows } from "@/lib/kinetics/parameters";
import { felineTheme, type NumericSeries } from "./chart-theme";
import { Caption } from "@/components/ui/typography";

const EFFICACY_OPACITY: Record<string, number> = {
  highest: 0.35,
  high: 0.28,
  moderate: 0.2,
  low: 0.14,
  unknown: 0.1,
};

/** Custom layer: therapeutic window bands + nucleation threshold */
function WindowBandsLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
  const sx = props.xScale as unknown as (v: number) => number;
  const sy = props.yScale as unknown as (v: number) => number;

  return (
    <g>
      {therapeuticWindows.map((w) => {
        const x1 = Math.max(0, sx(Math.max(w.startYear, -2)));
        const x2 = Math.min(props.innerWidth, sx(Math.min(w.endYear, 42)));
        const opacity = EFFICACY_OPACITY[w.efficacy] ?? 0.1;
        const width = Math.max(4, x2 - x1);

        return (
          <g key={w.id}>
            <rect
              x={x1}
              y={0}
              width={width}
              height={props.innerHeight}
              fill={w.color}
              opacity={opacity}
            />
            {width > 25 && (
              <text
                x={x1 + width / 2}
                y={14}
                textAnchor="middle"
                fill={w.color}
                fontSize={9}
                fontWeight={600}
              >
                {w.label}
              </text>
            )}
          </g>
        );
      })}

      <line
        x1={0}
        x2={props.innerWidth}
        y1={sy(1.2)}
        y2={sy(1.2)}
        stroke="#DC2626"
        strokeWidth={1}
        strokeDasharray="6 4"
      />
      <text
        x={props.innerWidth - 4}
        y={sy(1.2) - 6}
        textAnchor="end"
        fill="#DC2626"
        fontSize={10}
      >
        Nucleation threshold
      </text>
    </g>
  );
}

interface WindowsChartProps {
  data: SimulationResult;
}

export function WindowsChart({ data }: WindowsChartProps) {
  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints
      .filter((p) => p.t <= 42)
      .filter((_, i) => i % 5 === 0);
    return [
      {
        id: "Amyloid trajectory",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Abeta * 100) / 100,
        })),
      },
    ];
  }, [data]);

  return (
    <div>
      <div className="h-[400px] w-full">
        <ResponsiveLine<NumericSeries>
          data={series}
          theme={felineTheme}
          colors={["#0D132D"]}
          margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
          xScale={{ type: "linear", min: -2, max: 42 }}
          yScale={{ type: "linear", min: 0, max: 3.5 }}
          axisBottom={{
            tickValues: [-2, 0, 5, 10, 15, 20, 25, 30, 35, 40],
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
          curve="monotoneX"
          lineWidth={2}
          layers={[
            "grid",
            "markers",
            "axes",
            WindowBandsLayer,
            "lines",
            "crosshair",
            "mesh",
          ]}
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {therapeuticWindows.map((w) => (
          <div key={w.id} className="flex items-start gap-2">
            <div
              className="mt-1 h-3 w-3 shrink-0 rounded-sm"
              style={{
                backgroundColor: w.color,
                opacity: (EFFICACY_OPACITY[w.efficacy] ?? 0.1) * 2.5,
              }}
            />
            <div>
              <Caption className="font-medium">
                W{w.id}: {w.label}
              </Caption>
              <Caption className="block">{w.target}</Caption>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
