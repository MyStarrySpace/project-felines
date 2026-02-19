"use client";

import { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { felineTheme } from "@/components/kinetics/chart-theme";
import { CELL_TYPE_COLORS } from "./chart-theme";
import { computeCellTypeBudget } from "@/lib/clearance/derived";

export function CellTypeChart() {
  const budget = useMemo(() => computeCellTypeBudget(), []);

  const barData = useMemo(() => {
    return budget.map((c) => ({
      cellType: c.cellType,
      "% of cells": Math.round(c.fractionOfCells * 100),
      "% of Fpn export": Math.round(c.weightedContribution * 100),
    }));
  }, [budget]);

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
