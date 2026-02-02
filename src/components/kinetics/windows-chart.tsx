"use client";

import { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import type { LineCustomSvgLayerProps } from "@nivo/line";
import type { SimulationResult, CascadeMode, TherapeuticWindow } from "@/lib/kinetics/types";
import { therapeuticWindows } from "@/lib/kinetics/parameters";
import { felineTheme, type NumericSeries } from "./chart-theme";
import { ChartSliceTooltip } from "./chart-tooltip";
import { Caption } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

const EFFICACY_OPACITY: Record<string, number> = {
  highest: 0.35,
  high: 0.28,
  moderate: 0.2,
  low: 0.14,
  unknown: 0.1,
};

const EFFICACY_LABELS: Record<string, string> = {
  highest: "Strong evidence",
  high: "Good evidence",
  moderate: "Moderate evidence",
  low: "Limited evidence",
  unknown: "Under investigation",
};

function createWindowBandsLayer(windows: TherapeuticWindow[], xRange: [number, number]) {
  return function WindowBandsLayer(props: LineCustomSvgLayerProps<NumericSeries>) {
    const sx = props.xScale as unknown as (v: number) => number;
    const sy = props.yScale as unknown as (v: number) => number;

    return (
      <g>
        {windows.map((w) => {
          const x1 = Math.max(0, sx(Math.max(w.startYear, xRange[0])));
          const x2 = Math.min(props.innerWidth, sx(Math.min(w.endYear, xRange[1])));
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
                <>
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
                  {/* Effect size text */}
                  {w.estimatedEffect && width > 60 && (
                    <text
                      x={x1 + width / 2}
                      y={28}
                      textAnchor="middle"
                      fill={w.color}
                      fontSize={8}
                      opacity={0.7}
                    >
                      {w.estimatedEffect}
                    </text>
                  )}
                </>
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
          Plaque threshold
        </text>
      </g>
    );
  };
}

interface WindowsChartProps {
  data: SimulationResult;
  mode?: CascadeMode;
  windows?: TherapeuticWindow[];
}

export function WindowsChart({
  data,
  mode = "post_injury",
  windows,
}: WindowsChartProps) {
  const isSpontaneous = mode === "spontaneous";
  const activeWindows = windows ?? therapeuticWindows;
  const xMin = isSpontaneous ? 0 : -2;
  const xMax = isSpontaneous ? 50 : 42;

  const BandsLayer = useMemo(
    () => createWindowBandsLayer(activeWindows, [xMin, xMax]),
    [activeWindows, xMin, xMax]
  );

  const series: NumericSeries[] = useMemo(() => {
    const pts = data.timePoints
      .filter((p) => p.t <= xMax)
      .filter((_, i) => i % 5 === 0);
    return [
      {
        id: "Amyloid trajectory",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Abeta * 100) / 100,
        })),
      },
      {
        id: "Tau trajectory",
        data: pts.map((p) => ({
          x: p.t,
          y: Math.round(p.Tau * 100) / 100,
        })),
      },
    ];
  }, [data, xMax]);

  const tickValues = isSpontaneous
    ? [0, 10, 20, 30, 40, 50]
    : [-2, 0, 5, 10, 15, 20, 25, 30, 35, 40];

  return (
    <div>
      <div className="h-[400px] w-full">
        <ResponsiveLine<NumericSeries>
          data={series}
          theme={felineTheme}
          colors={["#0D132D", "#7C3AED"]}
          margin={{ top: 24, right: 24, bottom: 56, left: 60 }}
          xScale={{ type: "linear", min: xMin, max: xMax }}
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
            BandsLayer,
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

      {/* Enhanced legend with efficacy badges */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {activeWindows.map((w) => (
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
              <div className="mt-1 flex flex-wrap gap-1">
                <Badge
                  variant={w.efficacy === "highest" || w.efficacy === "high" ? "accent" : "neutral"}
                  size="sm"
                >
                  {EFFICACY_LABELS[w.efficacy]}
                </Badge>
                {w.estimatedEffect && (
                  <Badge variant="neutral" size="sm">
                    {w.estimatedEffect}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
