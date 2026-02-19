"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { ChartSection } from "@/components/kinetics/chart-section";
import { ClearanceChart } from "@/components/clearance/clearance-chart";
import { FerroptosisPhaseChart } from "@/components/clearance/ferroptosis-phase-chart";
import { FeedbackChart } from "@/components/clearance/feedback-chart";
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
  feedbackChartContent,
  cellTypeChartContent,
} from "@/data/clearance/chart-content";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type {
  ClearanceParameters,
  DiseasePerturbations,
} from "@/lib/clearance/types";

export default function ClearancePage() {
  // Active scenario
  const [activeScenario, setActiveScenario] = useState("healthy");

  // Parameter overrides (from sliders)
  const [paramOverrides, setParamOverrides] = useState<
    Partial<ClearanceParameters>
  >({});

  // Disease perturbation toggles
  const [perturbations, setPerturbations] = useState<DiseasePerturbations>({
    hypertension: false,
    diabetes: false,
    sleepDisruption: false,
    chronicHepcidin: false,
  });

  // Compare to healthy reference
  const [showReference, setShowReference] = useState(false);

  // Mobile controls expanded
  const [mobileControlsOpen, setMobileControlsOpen] = useState(false);

  // Whether user has customized (if so, run live simulation)
  const hasCustomizations =
    Object.keys(paramOverrides).length > 0 ||
    perturbations.hypertension ||
    perturbations.diabetes ||
    perturbations.sleepDisruption ||
    perturbations.chronicHepcidin;

  // Active result: pre-computed if no customizations, live if customized
  const result = useMemo(() => {
    if (!hasCustomizations && scenarioResults[activeScenario]) {
      return scenarioResults[activeScenario];
    }

    // Get scenario base params
    const scenario = clearanceScenarios.find((s) => s.id === activeScenario);
    const scenarioParams = scenario?.parameters ?? {};

    return simulateClearance({
      ...scenarioParams,
      ...paramOverrides,
      perturbations,
    });
  }, [activeScenario, paramOverrides, perturbations, hasCustomizations]);

  // Healthy reference for comparison
  const reference = showReference ? healthyResult : undefined;

  // Summary stats
  const stats = useMemo(() => summarize(result), [result]);

  // Handle scenario selection
  const handleScenarioSelect = useCallback(
    (id: string) => {
      setActiveScenario(id);

      // Apply scenario's perturbations if defined
      const scenario = clearanceScenarios.find((s) => s.id === id);
      if (scenario?.parameters?.perturbations) {
        setPerturbations(scenario.parameters.perturbations);
      } else {
        setPerturbations({
          hypertension: false,
          diabetes: false,
          sleepDisruption: false,
          chronicHepcidin: false,
        });
      }

      // Reset slider overrides when switching scenarios
      setParamOverrides({});
    },
    []
  );

  // Handle individual parameter change
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
            drainage. Each step declines with age, and iron-coupled feedback
            loops accelerate the decline. Adjust parameters to see how
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
                  perturbations={perturbations}
                  showReference={showReference}
                  onParamChange={handleParamChange}
                  onPerturbationsChange={setPerturbations}
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

              {/* Chart 3: Feedback loops */}
              <ChartSection
                title={feedbackChartContent.title}
                description={feedbackChartContent.description}
                above={feedbackChartContent.above}
                below={feedbackChartContent.below}
              >
                <FeedbackChart data={result} reference={reference} />
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
                  perturbations={perturbations}
                  showReference={showReference}
                  onParamChange={handleParamChange}
                  onPerturbationsChange={setPerturbations}
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
              value={`${stats.isfAt70.toFixed(3)} \u00B5M`}
              detail="Baseline: ~0.005 \u00B5M"
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
                This is a 5-variable serial ODE model (LIP, ferritin, ISF, CSF,
                cumulative damage) with four iron-coupled feedback loops. The
                model uses fourth-order Runge-Kutta integration with dt=0.05
                years.
              </p>
              <p>
                <strong className="text-gray-200">Feedback loops:</strong>{" "}
                (1) Cu depletion: cumulative oxidative damage depletes Cu,
                reducing ferroxidase activity and stalling Fpn export. (2)
                Dynamic hepcidin: elevated LIP triggers microglial IL-6,
                raising hepcidin, internalizing Fpn. (3) Rho decline: damage
                causes neurite retraction (Phase 1) and neuron death (Phase 2),
                reducing ISF recapture. (4) Protein-iron: above a damage
                threshold, iron-protein interactions mildly amplify effective
                iron burden.
              </p>
              <p>
                <strong className="text-gray-200">
                  Key parameter sources:
                </strong>{" "}
                Ferroportin flux from Bao et al. 2021 back-calculation. Glymphatic
                decline from Kress et al. 2014 (mouse) extrapolated to human at
                ~1.2%/year after age 30. ISF recapture fraction (rho ~0.85) from
                mass balance. Disease perturbations from Mestre 2018 (HTN),
                Jiang 2017 (DM), Xie 2013 (sleep).
              </p>
              <p>
                <strong className="text-gray-200">Confidence levels:</strong>{" "}
                Parameters are color-coded by confidence. Green (high) =
                well-measured in human studies. Amber (moderate) = estimated from
                animal data or indirect measurements. Red (low) = poorly
                constrained, based on mechanistic reasoning.
              </p>
              <p>
                <strong className="text-gray-200">Limitations:</strong> No
                iron-specific glymphatic clearance rate has been directly
                measured. Feedback loop coupling strengths are estimated from
                mechanistic reasoning, not fitted to human longitudinal data.
                Ferroptosis thresholds are estimated from Bao 2021 mouse
                timelines with allometric scaling.
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
      <p className="text-xs text-gray-500 mt-1">{detail}</p>
    </motion.div>
  );
}
