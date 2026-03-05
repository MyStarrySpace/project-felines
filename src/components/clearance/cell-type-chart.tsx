"use client";

import { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { felineTheme } from "@/components/kinetics/chart-theme";

/**
 * Static cell-type Fpn export budget data from FELINE reference document §4.5.
 * Based on Bao 2021 back-calculation + cell-type expression ratios.
 * Confidence: LOW-MODERATE (qualitative expression data, one direct measurement).
 */
const cellTypeBudget = [
  { cellType: "Excitatory neurons", fractionOfCells: 0.16, relativeFlux: 1.0 },
  { cellType: "Inhibitory neurons", fractionOfCells: 0.04, relativeFlux: 0.75 },
  { cellType: "Astrocytes", fractionOfCells: 0.20, relativeFlux: 0.4 },
  { cellType: "Oligodendrocytes", fractionOfCells: 0.45, relativeFlux: 0.075 },
  { cellType: "Microglia", fractionOfCells: 0.10, relativeFlux: 3.5 },
  { cellType: "Endothelial/pericyte", fractionOfCells: 0.05, relativeFlux: 0.75 },
];

export function CellTypeChart() {
  const barData = useMemo(() => {
    const totalWeighted = cellTypeBudget.reduce(
      (sum, c) => sum + c.fractionOfCells * c.relativeFlux,
      0,
    );
    return cellTypeBudget.map((c) => ({
      cellType: c.cellType,
      "% of cells": Math.round(c.fractionOfCells * 100),
      "% of Fpn export": Math.round(
        (c.fractionOfCells * c.relativeFlux / totalWeighted) * 100,
      ),
    }));
  }, []);

  return (
    <div className="h-[350px] w-full">
      <ResponsiveBar
        data={barData}
        keys={["% of cells", "% of Fpn export"]}
        indexBy="cellType"
        theme={felineTheme}
        margin={{ top: 24, right: 24, bottom: 80, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={["#6B7280", "#DC2626"]}
        borderRadius={2}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -30,
          legend: "",
          legendOffset: 60,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          legend: "Percentage",
          legendOffset: -48,
          legendPosition: "middle",
        }}
        labelSkipWidth={16}
        labelSkipHeight={12}
        labelTextColor="#ffffff"
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom",
            direction: "row",
            translateY: 70,
            itemWidth: 120,
            itemHeight: 20,
            symbolSize: 12,
          },
        ]}
        tooltip={({ id, value, indexValue, color }) => (
          <div
            style={{
              background: "rgba(26, 15, 10, 0.95)",
              borderRadius: 6,
              padding: "8px 12px",
              fontSize: 12,
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              color: "#fff",
            }}
          >
            <span style={{ color }}>{"\u25CF"}</span>{" "}
            <strong>{indexValue as string}</strong>: {value}% ({id as string})
          </div>
        )}
      />
    </div>
  );
}
