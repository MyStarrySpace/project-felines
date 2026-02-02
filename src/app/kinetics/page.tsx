"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Display, Heading, Body, Label } from "@/components/ui/typography";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { IronChart } from "@/components/kinetics/iron-chart";
import { AmyloidChart } from "@/components/kinetics/amyloid-chart";
import { LayersChart } from "@/components/kinetics/layers-chart";
import { WindowsChart } from "@/components/kinetics/windows-chart";
import { scenarioResults } from "@/data/kinetics/scenarios";
import { scenarios } from "@/lib/kinetics/parameters";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function KineticsPage() {
  const [activeScenario, setActiveScenario] = useState("moderate");
  const activeData = scenarioResults[activeScenario];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <Container width="full" section>
          <Display>FELINE Kinetics Model</Display>
          <Body size="lg" className="mt-4 max-w-[var(--width-reading)]">
            Numerical simulation of the FELINE framework: from acute insult
            through iron maldistribution, clearance failure, and protein
            accumulation to neurodegeneration. All curves derived from
            corrected ODEs solved with fourth-order Runge-Kutta.
          </Body>
        </Container>

        {/* Scenario selector */}
        <Container width="full">
          <div className="mb-12">
            <Label uppercase className="mb-3 block">
              Damage scenario
            </Label>
            <div className="flex flex-wrap gap-2">
              {scenarios.map((s) => (
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
            <Body size="sm" className="mt-2 max-w-[var(--width-reading)]">
              {scenarios.find((s) => s.id === activeScenario)?.description}
            </Body>
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
            {/* Chart 1: Iron Dynamics */}
            <motion.section variants={fadeInUp}>
              <Heading level={2} className="mb-2">
                Iron Dynamics
              </Heading>
              <Body className="mb-6 max-w-[var(--width-reading)]">
                Free labile iron spikes within days of insult, then gets
                partially sequestered by ferritin. Serum markers normalize
                (the &ldquo;apparent recovery&rdquo; zone), but total brain
                iron remains elevated. This compartmental trapping is the
                core of the iron maldistribution model.
              </Body>
              <IronChart data={activeData} />
            </motion.section>

            {/* Chart 2: Amyloid Accumulation */}
            <motion.section variants={fadeInUp}>
              <Heading level={2} className="mb-2">
                Amyloid Accumulation
              </Heading>
              <Body className="mb-6 max-w-[var(--width-reading)]">
                Clearance failure drives slow amyloid accumulation toward the
                nucleation threshold (1.2 SUVR). The dashed gray line shows
                the incorrect linear approximation. The correct model uses
                exponential approach to a new steady state, meaning mild
                damage may never reach threshold.
              </Body>
              <AmyloidChart
                results={scenarioResults}
                activeScenario={activeScenario}
              />
            </motion.section>

            {/* Chart 3: FELINE Layer Status */}
            <motion.section variants={fadeInUp}>
              <Heading level={2} className="mb-2">
                FELINE Layer Status
              </Heading>
              <Body className="mb-6 max-w-[var(--width-reading)]">
                Each FELINE defense layer degrades at its own rate and
                recovers partially. Export function (AQP4/glymphatic) and
                neurovascular integrity (pericytes) are the slowest to
                recover. Lysosomal function and GPX4 activity recover faster
                but remain below baseline.
              </Body>
              <LayersChart data={activeData} />
            </motion.section>

            {/* Chart 4: Therapeutic Windows */}
            <motion.section variants={fadeInUp}>
              <Heading level={2} className="mb-2">
                Therapeutic Windows
              </Heading>
              <Body className="mb-6 max-w-[var(--width-reading)]">
                Six intervention windows mapped against the amyloid
                trajectory. Earlier windows have higher potential efficacy.
                The extended window (weeks 2-12+) for brain iron
                redistribution is a key insight from 2024-2025 data showing
                persistent iron maldistribution.
              </Body>
              <WindowsChart data={activeData} />
            </motion.section>
          </motion.div>
        </Container>

        <div className="h-24" />
      </main>
      <Footer />
    </>
  );
}
