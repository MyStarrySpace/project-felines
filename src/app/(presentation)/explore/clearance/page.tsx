"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { ChartSection } from "@/components/kinetics/chart-section";
import { ClearanceChart } from "@/components/clearance/clearance-chart";
import { FerroptosisPhaseChart } from "@/components/clearance/ferroptosis-phase-chart";
import { ClearanceDeclineChart } from "@/components/clearance/feedback-chart";
import { CellTypeChart } from "@/components/clearance/cell-type-chart";
import { ScenarioSelector } from "@/components/clearance/scenario-selector";
import { ClearanceControls } from "@/components/clearance/clearance-controls";
import { simulateClearance } from "@/lib/clearance/model";
import { clearanceScenarios } from "@/lib/clearance/parameters";
import { summarize } from "@/lib/clearance/derived";
import { scenarioResults, healthyResult } from "@/data/clearance/scenarios";
import {
  compartmentChartContent,
  ferroptosisChartContent,
  clearanceDeclineContent,
  cellTypeChartContent,
} from "@/data/clearance/chart-content";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type {
  CoreParameters,
  OptionalExtensions,
} from "@/lib/clearance/types";

export default function ClearancePage() {
  const [activeScenario, setActiveScenario] = useState("healthy");
  const [paramOverrides, setParamOverrides] = useState<Partial<CoreParameters>>({});
  const [extensionOverrides, setExtensionOverrides] = useState<Partial<OptionalExtensions>>({});
  const [showReference, setShowReference] = useState(false);
  const [mobileControlsOpen, setMobileControlsOpen] = useState(false);

  const hasCustomizations =
    Object.keys(paramOverrides).length > 0 ||
    Object.values(extensionOverrides).some((ext) => ext?.enabled);

  const result = useMemo(() => {
    if (!hasCustomizations && scenarioResults[activeScenario]) {
      return scenarioResults[activeScenario];
    }

    const scenario = clearanceScenarios.find((s) => s.id === activeScenario);
    const mergedCore = { ...scenario?.overrides, ...paramOverrides };
    const mergedExt = { ...scenario?.extensionOverrides, ...extensionOverrides };

    return simulateClearance(mergedCore, mergedExt);
  }, [activeScenario, paramOverrides, extensionOverrides, hasCustomizations]);

  const reference = showReference ? healthyResult : undefined;
  const stats = useMemo(() => summarize(result), [result]);

  const handleScenarioSelect = useCallback((id: string) => {
    setActiveScenario(id);
    setParamOverrides({});

    const scenario = clearanceScenarios.find((s) => s.id === id);
    if (scenario?.extensionOverrides) {
      setExtensionOverrides(scenario.extensionOverrides);
    } else {
      setExtensionOverrides({});
    }
  }, []);

  const handleParamChange = useCallback(
    (key: string, value: number | string) => {
      setParamOverrides((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Hero */}
      <section className="border-b border-white/5 py-16 px-6">
        <Container width="full">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            Interactive Model
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">
            Iron clearance: the serial pathway
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Iron exits the brain through a serial pathway: cell to ISF via
            ferroportin, ISF to CSF via glymphatic flow, CSF to periphery via
            drainage. Each step declines with age. Adjust parameters to see how
            comorbidities, genetics, and sex affect the trajectory.
          </p>
        </Container>
      </section>

      {/* Scenario selector */}
      <section className="border-b border-white/5 py-6 px-6">
        <Container width="full">
          <ScenarioSelector
            activeId={activeScenario}
            onSelect={handleScenarioSelect}
          />
        </Container>
      </section>

      {/* Main content: charts + sidebar */}
      <section className="py-10 px-6">
        <Container width="full">
          <div className="lg:flex lg:gap-8">
            {/* Mobile controls toggle */}
            <div className="mb-6 lg:hidden">
              <Expandable
                title="Controls"
                variant="dark"
                open={mobileControlsOpen}
                onOpenChange={setMobileControlsOpen}
              >
                <ClearanceControls
                  params={paramOverrides}
                  extensions={extensionOverrides}
                  showReference={showReference}
                  onParamChange={handleParamChange}
                  onExtensionsChange={setExtensionOverrides}
                  onToggleReference={() => setShowReference((v) => !v)}
                />
              </Expandable>
            </div>

            {/* Charts */}
            <motion.div
              className="flex-1 space-y-12 min-w-0"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Chart 1: 4-compartment levels */}
              <ChartSection
                title={compartmentChartContent.title}
                description={compartmentChartContent.description}
                above={compartmentChartContent.above}
                below={compartmentChartContent.below}
              >
                <ClearanceChart data={result} reference={reference} />
              </ChartSection>

              {/* Chart 2: Ferroptosis phases */}
              <ChartSection
                title={ferroptosisChartContent.title}
                description={ferroptosisChartContent.description}
                above={ferroptosisChartContent.above}
                below={ferroptosisChartContent.below}
              >
                <FerroptosisPhaseChart data={result} reference={reference} />
              </ChartSection>

              {/* Chart 3: Clearance decline */}
              <ChartSection
                title={clearanceDeclineContent.title}
                description={clearanceDeclineContent.description}
                above={clearanceDeclineContent.above}
                below={clearanceDeclineContent.below}
              >
                <ClearanceDeclineChart data={result} reference={reference} />
              </ChartSection>

              {/* Chart 4: Cell-type budget */}
              <ChartSection
                title={cellTypeChartContent.title}
                description={cellTypeChartContent.description}
                below={cellTypeChartContent.below}
              >
                <CellTypeChart />
              </ChartSection>
            </motion.div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block lg:w-72 xl:w-80 lg:flex-shrink-0">
              <div className="sticky top-20">
                <ClearanceControls
                  params={paramOverrides}
                  extensions={extensionOverrides}
                  showReference={showReference}
                  onParamChange={handleParamChange}
                  onExtensionsChange={setExtensionOverrides}
                  onToggleReference={() => setShowReference((v) => !v)}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stat cards */}
      <section className="border-t border-white/5 py-10 px-6">
        <Container width="full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Time to Phase 1"
              value={stats.phase1Age ? `Age ${stats.phase1Age}` : "Not reached"}
              detail="Sublethal iron stress"
            />
            <StatCard
              label="Time to Phase 2"
              value={stats.phase2Age ? `Age ${stats.phase2Age}` : "Not reached"}
              detail="Frank ferroptosis"
            />
            <StatCard
              label="Clearance at 70"
              value={`${stats.clearanceAt70Pct}%`}
              detail="Relative to age 30"
            />
            <StatCard
              label="ISF iron at 70"
              value={`${stats.isfAt70.toFixed(2)} \u00B5M`}
              detail="Baseline: 1.0 \u00B5M"
            />
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="border-t border-white/5 py-10 px-6">
        <Container width="full">
          <Expandable title="Model methodology and parameter sources" variant="dark">
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>
                This is a 4-variable serial ODE model (LIP, ferritin, ISF, CSF)
                with optional extensions for disease perturbations. The model
                uses fourth-order Runge-Kutta integration with dt=0.05 years.
              </p>
              <p>
                <strong className="text-gray-200">Serial pathway:</strong>{" "}
                Iron flows LIP {"\u2192"} ferroportin export {"\u2192"} ISF {"\u2192"}{" "}
                glymphatic flow {"\u2192"} CSF {"\u2192"} drainage. ~85% of
                Fpn-exported iron is recaptured by neighboring cells (rho = 0.85),
                so the system primarily redistributes iron rather than exporting it.
              </p>
              <p>
                <strong className="text-gray-200">Parameter sources:</strong>{" "}
                Every parameter is classified as measured, derived, or assumed.
                Derived parameters are computed from measured baselines via
                steady-state constraints. LIP baseline 0.8 {"\u00B5"}M
                (Kakhlon {"\u0026"} Cabantchik 2002). CSF iron 61 {"\u00B5"}g/L (LeVine 1998).
                CSF turnover ~3.5{"\u00D7"}/day (Hladky {"\u0026"} Barrand 2022).
                Iron uptake ~0.5 mg/year (Hallgren {"\u0026"} Sourander 1958).
              </p>
              <p>
                <strong className="text-gray-200">Age-dependent decline:</strong>{" "}
                Fpn activity declines ~1%/year after age 40 (direction confirmed
                by Raha 2022, Lupo 2022; rate assumed). Glymphatic flow declines
                ~1.2%/year after age 30 (Patterson 2015; total A{"\u03B2"} clearance,
                not iron-specific).
              </p>
              <p>
                <strong className="text-gray-200">Limitations:</strong>{" "}
                No iron-specific glymphatic clearance rate has been measured.
                Ferroptosis thresholds (1.2{"\u00D7"}, 1.5{"\u00D7"} baseline) are
                illustrative. A 2025 study (PMC12236665) found LIP may not
                increase during ferroptosis; redistribution may matter more
                than total LIP level.
              </p>
            </div>
          </Expandable>
        </Container>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-5"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
        {label}
      </p>
      <p className="font-serif text-2xl text-white">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{detail}</p>
    </motion.div>
  );
}
