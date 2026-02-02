"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Display, Heading, Body, Label } from "@/components/ui/typography";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Stat } from "@/components/ui/stat";
import { Alert } from "@/components/ui/alert";
import { Expandable } from "@/components/ui/expandable";
import { IronChart } from "@/components/kinetics/iron-chart";
import { AmyloidChart } from "@/components/kinetics/amyloid-chart";
import { TauChart } from "@/components/kinetics/tau-chart";
import { LayersChart } from "@/components/kinetics/layers-chart";
import { WindowsChart } from "@/components/kinetics/windows-chart";
import { ChartSection } from "@/components/kinetics/chart-section";
import { scenarioResults, spontaneousResults } from "@/data/kinetics/scenarios";
import {
  ironContent,
  amyloidContent,
  tauContent,
  layersContent,
  windowsContent,
  methodologyText,
} from "@/data/kinetics/chart-content";
import {
  scenarios,
  spontaneousScenarios,
  spontaneousWindows,
} from "@/lib/kinetics/parameters";
import { staggerContainer } from "@/lib/animations";
import type { CascadeMode } from "@/lib/kinetics/types";

const MODE_DEFAULTS: Record<CascadeMode, string> = {
  post_injury: "moderate",
  spontaneous: "e3e4",
};

export default function KineticsPage() {
  const [mode, setMode] = useState<CascadeMode>("post_injury");
  const [activeScenario, setActiveScenario] = useState("moderate");

  const isSpontaneous = mode === "spontaneous";
  const activeScenarios = isSpontaneous ? spontaneousScenarios : scenarios;
  const activeResults = isSpontaneous ? spontaneousResults : scenarioResults;
  const activeData = activeResults[activeScenario];

  function handleModeChange(newMode: CascadeMode) {
    if (newMode === mode) return;
    setMode(newMode);
    setActiveScenario(MODE_DEFAULTS[newMode]);
  }

  const modeKey = isSpontaneous ? "spontaneous" : "post_injury";
  const currentScenario = activeScenarios.find((s) => s.id === activeScenario);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <Container width="full" section>
          <Display>Iron Is Hiding in Plain Sight</Display>
          <Body size="lg" className="mt-4 max-w-[var(--width-reading)]">
            {isSpontaneous
              ? "400 Alzheimer's drugs have failed. Most targeted amyloid. This model shows what happens upstream: iron quietly accumulates as age-related defenses weaken, eventually triggering the amyloid and tau cascades that clinical trials have been chasing."
              : "After brain injury, iron floods out of dying cells, gets trapped by ferritin, and disappears from blood tests. But it never leaves the brain. This model tracks how that hidden iron drives a chain of failures that ends in neurodegeneration."}
          </Body>
        </Container>

        {/* The evidence → Iron vulnerabilities → FELINE introduction */}
        <Container width="full">
          <div className="mb-8">
            <Heading level={2} className="mb-3">
              The brain has an iron problem nobody talks about
            </Heading>
            <Body className="mb-4 max-w-[var(--width-reading)]">
              The Alzheimer&apos;s field focuses on plaques, tangles, oligodendrocytes, myelin, neuroinflammation. All real findings. But iron connects every one of them. Oligodendrocytes are the most iron-rich cells in the brain. Myelin synthesis requires iron as a cofactor. Tau and alpha-synuclein both have iron-binding motifs. Amyloid plaques concentrate iron. Ferroptosis, iron-driven cell death, kills the oligodendrocytes that make myelin.
            </Body>
            <Body className="mb-4 max-w-[var(--width-reading)]">
              And yet: a PubMed search for the two key proteins on the same brain structure, the astrocyte endfoot, returns <strong>zero results</strong> connecting iron export and waste clearance. The field studies these systems separately. This model shows what happens when you connect them.
            </Body>

            <div className="mb-6 grid grid-cols-3 gap-4 sm:gap-8">
              <Stat value="1%" label="Dementia in transplant patients" description="On calcineurin inhibitors vs 10% baseline" />
              <Stat value="0" label="PubMed results" description="For 'AQP4 + ferroportin' on endfeet" />
              <Stat value="5" label="Defense layers" description="Fe · Lysosome · Insulation · Neurovascular · Export" />
            </div>

            <Body className="mb-4 max-w-[var(--width-reading)]">
              The brain manages iron through five overlapping defenses. When one fails, others compensate. When multiple fail simultaneously, iron triggers ferroptosis, a form of cell death that releases more iron and damages neighboring cells. The result is a self-amplifying cascade. We use the acronym <strong>FELINE</strong> to organize these five vulnerabilities: <strong>Fe</strong> (iron homeostasis), <strong>L</strong>ysosome, <strong>I</strong>nsulation, <strong>N</strong>eurovascular, and <strong>E</strong>xport.
            </Body>

            <Body className="mb-4 max-w-[var(--width-reading)]">
              These aren&apos;t just brain defenses. Schwann cells in peripheral nerves use the same five layers: iron handling via ceruloplasmin, lysosomal function, myelin insulation, a blood-nerve barrier, and active debris clearance. Peripheral neuropathies like Charcot-Marie-Tooth disease and diabetic neuropathy show the same ferroptosis signatures. The pattern is conserved across the entire nervous system.
            </Body>

            <Body className="mb-4 max-w-[var(--width-reading)]">
              This is why so many unrelated factors converge on dementia risk. Exercise supports Export (glymphatic clearance). Sleep maintains the same pathway. Vascular health protects the Neurovascular layer. The shingles vaccine reduces dementia risk by ~20%, not by fixing the brain, but by preventing a virus from triggering lysosomal iron release. Transplant patients on calcineurin inhibitors show 1% dementia rates versus 10% in matched controls, because those drugs interrupt an iron-calcium feedback loop. Different entry points, same defense system.
            </Body>

            <Body className="mb-4 max-w-[var(--width-reading)]">
              The model also makes testable predictions. Nitric oxide protects blood vessels at low doses but generates toxic peroxynitrite at high doses. Iron maldistribution predicts a U-shaped curve: both too much and too little NO should increase Alzheimer&apos;s risk. A meta-analysis of 10,716 people confirmed exactly this. The NOS3 gene has three variants: high-activity (GG), intermediate (GT), and low-activity (TT). Heterozygotes, with intermediate NO, had the lowest risk. Both homozygotes had elevated risk. That&apos;s the genetic signature of a U-shaped dose-response, and it falls out naturally from a framework that tracks iron&apos;s interactions with the vascular system.
            </Body>

            <Alert variant="warning" title="The iron paradox" className="mb-4">
              AD brains have elevated total iron. But cells inside those brains show signs of iron starvation: upregulated transferrin receptors, activated iron-response proteins. Too much iron AND too little at the same time. The explanation: iron is trapped in the wrong compartments. Cells are starving while surrounded by iron they can&apos;t use. This is maldistribution, not overload, and it&apos;s why chelation therapy made patients worse.
            </Alert>

            <Alert variant="info" title="How to read these charts" className="mb-4">
              Each chart below shows how a biological variable changes over time.
              Y-axis values are relative to healthy baseline (1.0 = normal) unless otherwise noted.
              Hover over any chart to see interpreted values with plain-language labels.
              Dashed lines mark critical thresholds.
            </Alert>

            <Expandable title={methodologyText.title}>
              {methodologyText.paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? "mt-3" : ""}>
                  {p}
                </p>
              ))}
            </Expandable>
          </div>
        </Container>

        {/* Mode toggle + Scenario selector */}
        <Container width="full">
          <div className="mb-12">
            {/* Mode toggle */}
            <Label uppercase className="mb-3 block">
              Cascade model
            </Label>
            <div className="mb-6 flex gap-1 rounded-lg border border-gray-200 p-1 w-fit">
              <button
                onClick={() => handleModeChange("post_injury")}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                  !isSpontaneous
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Post-injury
              </button>
              <button
                onClick={() => handleModeChange("spontaneous")}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-all ${
                  isSpontaneous
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Spontaneous AD
              </button>
            </div>

            {/* Scenario selector */}
            <Label uppercase className="mb-3 block">
              {isSpontaneous ? "APOE genotype" : "Damage scenario"}
            </Label>
            <div className="flex flex-wrap gap-2">
              {activeScenarios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveScenario(s.id)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    activeScenario === s.id
                      ? "border-teal-600 bg-teal-600/10 text-teal-800"
                      : "border-gray-200 text-text-secondary hover:border-gray-300"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            {currentScenario && (
              <div className="mt-3 max-w-[var(--width-reading)]">
                <Body size="sm">{currentScenario.description}</Body>
                {currentScenario.realWorldExample && (
                  <Body size="sm" className="mt-1 text-text-muted">
                    Example: {currentScenario.realWorldExample}
                  </Body>
                )}
              </div>
            )}
          </div>
        </Container>

        {/* Charts */}
        <Container width="full">
          <motion.div
            className="space-y-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Chart 1: Iron Dynamics — where the cascade starts */}
            <ChartSection
              title="Step 1: Iron Maldistribution"
              description={
                isSpontaneous
                  ? "In spontaneous AD, iron stays near baseline for decades. It rises only late, after dying neurons release their stores. Iron is a late effector here, not the initiator. The real driver is the slow erosion of defense layers below."
                  : "This is where the cascade starts. Free iron floods out of dying pericytes and oligodendrocytes within days. Ferritin absorbs some of it, blood tests normalize, and the problem disappears from standard monitoring. But total brain iron stays elevated for years."
              }
              above={ironContent[modeKey].above}
              below={ironContent[modeKey].below}
            >
              <IronChart data={activeData} mode={mode} />
            </ChartSection>

            {/* Chart 2: Defense Layer Status — iron's damage to defenses */}
            <ChartSection
              title="Step 2: Defense Layer Damage (FELINE)"
              description={
                isSpontaneous
                  ? "Age erodes the brain's iron defenses year by year. Export function (the glymphatic drainage system) degrades fastest. As these layers weaken, the brain loses its ability to clear waste, setting the stage for amyloid buildup."
                  : "Trapped iron and ferroptosis degrade the brain's five defense layers. Each recovers at its own rate, but none fully returns to baseline. The gap between recovery ceiling and 1.0 is permanent capacity loss. This is why repeated insults compound."
              }
              above={layersContent[modeKey].above}
              below={layersContent[modeKey].below}
            >
              <LayersChart data={activeData} mode={mode} />
            </ChartSection>

            {/* Chart 3: Amyloid — consequence of defense failure */}
            <ChartSection
              title="Step 3: Amyloid Accumulation"
              description={
                isSpontaneous
                  ? "As defense layers weaken, amyloid clearance drops. Production continues at the same rate, but less gets removed. APOE4 carriers clear amyloid ~35% slower, so they reach the plaque threshold sooner."
                  : "With defense layers damaged, the brain clears amyloid slower than it produces it. The gap widens over years. Mild insults may never push amyloid past the threshold. Severe insults create a clearance deficit that compounds until plaques form."
              }
              above={amyloidContent[modeKey].above}
              below={amyloidContent[modeKey].below}
            >
              <AmyloidChart
                results={activeResults}
                activeScenario={activeScenario}
                mode={mode}
              />
            </ChartSection>

            {/* Chart 4: Tau — the downstream cascade */}
            <ChartSection
              title="Step 4: Tau Propagation"
              description={
                isSpontaneous
                  ? "Tau stays flat for decades while amyloid slowly builds. Once amyloid crosses 1.2 SUVR, it triggers tau to misfold and spread. Tau above ~1.4 correlates with cognitive symptoms. This is the step where patients notice something is wrong."
                  : "The last domino. Tau stays near baseline until amyloid crosses the plaque threshold, then rises sharply. The gap between the amyloid crossing and tau symptoms is the silent progression window, often 10-20 years."
              }
              above={tauContent[modeKey].above}
              below={tauContent[modeKey].below}
            >
              <TauChart data={activeData} mode={mode} />
            </ChartSection>

            {/* Chart 5: Therapeutic Windows — where to intervene */}
            <ChartSection
              title="Where to Intervene"
              description={
                isSpontaneous
                  ? "The cascade takes decades. That's the good news: there are multiple windows for intervention. The bad news: the most effective windows are earliest, before symptoms appear. Lifestyle interventions that maintain iron defenses have the widest window."
                  : "Knowing the cascade order reveals when each intervention has the most leverage. Blocking iron damage in the first days prevents everything downstream. By the time amyloid crosses the threshold, options narrow to slowing a process that's already self-sustaining."
              }
              above={windowsContent[modeKey].above}
              below={windowsContent[modeKey].below}
            >
              <WindowsChart
                data={activeData}
                mode={mode}
                windows={isSpontaneous ? spontaneousWindows : undefined}
              />
            </ChartSection>
          </motion.div>
        </Container>

        <div className="h-24" />
      </main>
      <Footer />
    </>
  );
}
