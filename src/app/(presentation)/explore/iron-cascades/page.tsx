"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  cascadesHero,
  amyloidSection,
  tauSection,
  demyelinationSection,
  cholinergicSection,
  viciousCycleSteps,
  ironConcentrations,
  antiTauTrials,
  antiAmyloidTrials,
  metalOligomerTable,
  ariaBindingTable,
  olVulnerabilityTable,
  opcDifferentiationTable,
  regionalVulnerabilityTable,
  crossDiseaseNBMTable,
  researchFindings,
  type CascadeSection,
  type MechanismStep,
} from "@/data/landing/iron-cascades";

/* ── Mechanism Step Card ─────────────────────────────────────────────── */

function MechanismStepCard({ step }: { step: MechanismStep }) {
  return (
    <Expandable
      title={`${step.step}. ${step.title}`}
      variant="dark"
    >
      <div className="space-y-3">
        <p className="text-sm text-gray-300 leading-relaxed">
          {step.body}
        </p>
        {step.detail && (
          <p className="text-xs text-gray-500 leading-relaxed">
            {step.detail}
          </p>
        )}
        {step.keyPaper && (
          <p className="text-xs font-medium text-teal-400 mt-2">
            {step.keyPaper}
          </p>
        )}
        {step.quote && (
          <blockquote className="text-xs text-gray-500 italic border-l-2 border-white/10 pl-3 mt-2">
            &ldquo;{step.quote}&rdquo;
          </blockquote>
        )}
      </div>
    </Expandable>
  );
}

/* ── Generic Cascade Section ─────────────────────────────────────────── */

function CascadeSectionBlock({ section }: { section: CascadeSection }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="py-16 px-6"
    >
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          {section.kicker}
        </p>
        <h2
          id={`${section.id}-heading`}
          className="text-2xl font-bold text-white mb-2"
        >
          {section.title}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">{section.subtitle}</p>

        <div className="max-w-3xl space-y-3">
          {section.mechanismSteps.map((step) => (
            <MechanismStepCard key={step.step} step={step} />
          ))}
        </div>

        {/* Stats row */}
        {section.stats && section.stats.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {section.stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <p className="font-serif text-2xl text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                {stat.source && (
                  <p className="text-xs text-gray-500 mt-1">{stat.source}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Cross-links */}
        {section.crossLinks && section.crossLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {section.crossLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
              >
                <span aria-hidden="true">&rarr;</span> {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

/* ── Intro Section ───────────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          {cascadesHero.kicker}
        </p>
        <h1
          id="intro-heading"
          className="font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          {cascadesHero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          {cascadesHero.subtitle}
        </p>

        {/* Four cascade cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
          {[amyloidSection, tauSection, demyelinationSection, cholinergicSection].map(
            (section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="glass-card p-5 transition-colors hover:border-teal-400/30"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-2">
                  {section.kicker}
                </p>
                <p className="text-sm font-medium text-white">
                  {section.title}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {section.mechanismSteps.length} mechanisms
                </p>
              </a>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

/* ── Vicious Cycle Diagram ───────────────────────────────────────────── */

function ViciousCycleDiagram() {
  return (
    <div className="my-12 max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-white mb-6 text-center">
        The vicious cycle
      </h3>
      <div className="glass-card p-8">
        {/* Circular text layout */}
        <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs text-gray-500 text-center leading-tight">
              Feed-forward
              <br />
              loop
            </p>
          </div>

          {/* Cycle nodes positioned around the circle */}
          {viciousCycleSteps.map((step, i) => {
            const angle = (i / viciousCycleSteps.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 130;
            const x = 160 + radius * Math.cos(angle);
            const y = 160 + radius * Math.sin(angle);

            return (
              <div
                key={step.id}
                className="absolute flex items-center justify-center"
                style={{
                  left: x - 50,
                  top: y - 18,
                  width: 100,
                  height: 36,
                }}
              >
                <span className="bg-white/5 border border-white/10 px-2.5 py-1.5 text-xs font-medium text-white text-center leading-tight whitespace-nowrap">
                  {step.label}
                </span>
              </div>
            );
          })}

          {/* SVG arrows connecting nodes */}
          <svg
            className="absolute inset-0"
            width={320}
            height={320}
            viewBox="0 0 320 320"
            aria-hidden="true"
          >
            {viciousCycleSteps.map((_, i) => {
              const from = (i / viciousCycleSteps.length) * 2 * Math.PI - Math.PI / 2;
              const to =
                ((i + 1) / viciousCycleSteps.length) * 2 * Math.PI - Math.PI / 2;
              const r = 100;
              const midAngle = (from + to) / 2;
              const x1 = 160 + r * Math.cos(from);
              const y1 = 160 + r * Math.sin(from);
              const mx = 160 + (r - 10) * Math.cos(midAngle);
              const my = 160 + (r - 10) * Math.sin(midAngle);
              const x2 = 160 + r * Math.cos(to);
              const y2 = 160 + r * Math.sin(to);

              return (
                <path
                  key={i}
                  d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                  stroke="rgba(45,212,191,0.3)"
                  strokeWidth="1.5"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon
                  points="0 0, 8 3, 0 6"
                  fill="rgba(45,212,191,0.5)"
                />
              </marker>
            </defs>
          </svg>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed max-w-sm mx-auto">
          Iron drives APP production and tau dysfunction through parallel
          pathways. Both converge on ferroportin destabilization, trapping more
          iron inside the cell.
        </p>
      </div>
    </div>
  );
}

/* ── Anti-Tau Trial Table ───────────────────────────────────────────── */

function AntiTauTrialTable() {
  const generationLabel = {
    first: "1st gen (N-terminal)",
    second: "2nd gen (mid-domain)",
    aso: "ASO (mRNA reduction)",
  } as const;

  return (
    <div className="mt-10 max-w-4xl">
      <h3 className="text-lg font-bold text-white mb-2">
        Anti-tau antibody trials through the cofactor lens
      </h3>
      <p className="text-sm text-gray-400 mb-4 max-w-2xl">
        First-generation antibodies intercept extracellular tau seeds. If the
        extracellular seed were rate-limiting, 98% target engagement should slow
        disease. It didn&rsquo;t. The cofactor model predicts this: intracellular
        iron, not extracellular seeds, drives aggregation.
      </p>
      <div className="overflow-x-auto border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Antibody
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Target
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Engagement
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Outcome
              </th>
            </tr>
          </thead>
          <tbody>
            {antiTauTrials.map((trial, i) => {
              const isFirst =
                i === 0 ||
                antiTauTrials[i - 1].generation !== trial.generation;
              return (
                <tr
                  key={trial.antibody}
                  className={
                    isFirst
                      ? "border-t border-white/10"
                      : "border-t border-white/5"
                  }
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-white">
                      {trial.antibody}
                    </span>
                    {isFirst && (
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
                        {generationLabel[trial.generation]}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {trial.target}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {trial.engagement}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span
                      className={
                        trial.generation === "first"
                          ? "text-red-400"
                          : trial.generation === "aso"
                            ? "text-teal-400"
                            : "text-amber-400"
                      }
                    >
                      {trial.outcome}
                    </span>
                    {trial.source && (
                      <span className="block text-gray-500 mt-0.5">
                        {trial.source}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Anti-Amyloid Trial Table ──────────────────────────────────────── */

function AntiAmyloidTrialTable() {
  return (
    <div className="mt-10 max-w-5xl">
      <h3 className="text-lg font-bold text-white mb-2">
        Anti-amyloid trials through the iron lens
      </h3>
      <p className="text-sm text-gray-400 mb-4 max-w-2xl">
        Target specificity predicts clinical outcomes. Antibodies that don&rsquo;t
        engage iron-A&beta; complexes in plaques fail entirely. Those that do show
        modest benefit, likely via microglial iron relocation. BACE inhibitors
        worsened cognition by removing backup iron sequestration.
      </p>
      <div className="overflow-x-auto border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Drug
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Target
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Amyloid effect
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Clinical outcome
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Iron-lens interpretation
              </th>
            </tr>
          </thead>
          <tbody>
            {antiAmyloidTrials.map((trial, i) => {
              const isFirst =
                i === 0 ||
                antiAmyloidTrials[i - 1].category !== trial.category;
              return (
                <tr
                  key={trial.drug}
                  className={
                    isFirst
                      ? "border-t border-white/10"
                      : "border-t border-white/5"
                  }
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-white">
                      {trial.drug}
                    </span>
                    {isFirst && (
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500 mt-0.5">
                        {trial.category === "bace"
                          ? "BACE inhibitor"
                          : "Antibody"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {trial.target}
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-xs">
                    {trial.amyloidEffect}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span
                      className={
                        trial.category === "bace"
                          ? "text-red-400"
                          : trial.clinicalOutcome.includes("slowing")
                            ? "text-amber-400"
                            : "text-red-400"
                      }
                    >
                      {trial.clinicalOutcome}
                    </span>
                    {trial.ariaRate && (
                      <span className="block text-gray-500 mt-0.5">
                        ARIA: {trial.ariaRate}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400">
                    {trial.felineNote}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Metal-Oligomer Morphology Table ──────────────────────────────── */

function MetalOligomerMorphologyTable() {
  return (
    <div className="mt-10 max-w-2xl">
      <h3 className="text-lg font-bold text-white mb-2">
        Metals determine oligomer morphology and toxicity
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        Iron produces the most toxic aggregate form. Without metal, A&beta; forms
        mature fibrils, the least toxic form.
      </p>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Metal
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Effect
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Morphology
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Toxicity
              </th>
            </tr>
          </thead>
          <tbody>
            {metalOligomerTable.map((row, i) => (
              <tr
                key={row.metal}
                className={
                  i < metalOligomerTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white font-serif">
                  {row.metal}
                </td>
                <td className="px-4 py-3 text-gray-300 text-xs">
                  {row.effect}
                </td>
                <td className="px-4 py-3 text-gray-300 text-xs">
                  {row.morphology}
                </td>
                <td className="px-4 py-3 text-xs">
                  <span
                    className={
                      row.metal.startsWith("Fe")
                        ? "text-red-400"
                        : row.metal === "No metal"
                          ? "text-teal-400"
                          : "text-amber-400"
                    }
                  >
                    {row.toxicity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: Bolognin et al. 2011, Int J Biochem Cell Biol
      </p>
    </div>
  );
}

/* ── ARIA Binding Affinity Table ───────────────────────────────────── */

function AriaBindingTable() {
  return (
    <div className="mt-10 max-w-2xl">
      <h3 className="text-lg font-bold text-white mb-2">
        ARIA correlates with CAA binding, not plaque clearance
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        S&ouml;derberg et al. (2024) measured A&beta; antibody binding to CAA
        fibrils from human leptomeningeal tissue. The correlation with ARIA rates
        is striking.
      </p>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Antibody
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                CAA binding
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-400">
                ARIA-E rate
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {ariaBindingTable.map((row, i) => (
              <tr
                key={row.antibody}
                className={
                  i < ariaBindingTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white">
                  {row.antibody}
                </td>
                <td className="px-4 py-3 text-gray-300 text-xs">
                  {row.caaBinding}
                </td>
                <td className="px-4 py-3 text-right font-serif">
                  <span
                    className={
                      row.ariaRate === "0%"
                        ? "text-teal-400"
                        : row.ariaRate.includes("35")
                          ? "text-red-400"
                          : "text-amber-400"
                    }
                  >
                    {row.ariaRate}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: S&ouml;derberg et al. 2024, Scientific Reports
      </p>
    </div>
  );
}

/* ── OL Vulnerability Trade-off Table ──────────────────────────────── */

function OlVulnerabilityTradeoffTable() {
  return (
    <div className="mt-10 max-w-3xl">
      <h3 className="text-lg font-bold text-white mb-2">
        Why oligodendrocytes are uniquely vulnerable
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        Every property that makes OLs essential for brain function also makes
        them the most ferroptosis-vulnerable cell type.
      </p>
      <div className="overflow-x-auto border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Property
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Function
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Vulnerability
              </th>
            </tr>
          </thead>
          <tbody>
            {olVulnerabilityTable.map((row, i) => (
              <tr
                key={row.property}
                className={
                  i < olVulnerabilityTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white text-xs">
                  {row.property}
                </td>
                <td className="px-4 py-3 text-gray-300 text-xs">
                  {row.function}
                </td>
                <td className="px-4 py-3 text-xs text-red-400">
                  {row.vulnerability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Sources: Reinert 2019, Thorburne &amp; Juurlink 1996, Wade &amp; Connor
        2025
      </p>
    </div>
  );
}

/* ── OPC Differentiation Factors Table ─────────────────────────────── */

function OpcDifferentiationTable() {
  return (
    <div className="mt-10 max-w-2xl">
      <h3 className="text-lg font-bold text-white mb-2">
        What affects OPC differentiation rate
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        OPCs attempt to differentiate constitutively, but nothing speeds them up
        when myelin is lost. Inflammation actively slows them down.
      </p>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Factor
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Effect on differentiation
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Implication
              </th>
            </tr>
          </thead>
          <tbody>
            {opcDifferentiationTable.map((row, i) => (
              <tr
                key={row.factor}
                className={
                  i < opcDifferentiationTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white text-xs">
                  {row.factor}
                </td>
                <td className="px-4 py-3 text-xs">
                  <span
                    className={
                      row.effect.includes("No change")
                        ? "text-amber-400"
                        : "text-red-400"
                    }
                  >
                    {row.effect}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400 text-xs">
                  {row.felineNote}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: Mironova et al. 2026, Science
      </p>
    </div>
  );
}

/* ── Iron Concentration Table ────────────────────────────────────────── */

function IronConcentrationTable() {
  return (
    <div className="mt-10 max-w-xl">
      <h3 className="text-lg font-bold text-white mb-4">
        Cellular iron concentrations
      </h3>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Cell type
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-400">
                [Fe]
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {ironConcentrations.map((row, i) => (
              <tr
                key={row.cellType}
                className={
                  i < ironConcentrations.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white">
                  {row.cellType}
                </td>
                <td className="px-4 py-3 text-right font-serif text-teal-400">
                  {row.concentration}
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: Reinert et al. 2019, calibrated synchrotron X-ray fluorescence
      </p>
    </div>
  );
}

/* ── Regional Vulnerability Hierarchy Table ────────────────────────── */

function RegionalVulnerabilityHierarchyTable() {
  return (
    <div className="mt-10 max-w-3xl">
      <h3 className="text-lg font-bold text-white mb-2">
        Regional vulnerability hierarchy
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        Brain regions ranked by iron exposure risk. The NBM sits at the
        worst intersection: maximum CSF iron influx, poor efflux, and
        cholinergic neurons that regulate their own clearance.
      </p>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                Rank
              </th>
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                Region
              </th>
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                Influx
              </th>
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                Efflux
              </th>
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                Self-regulates?
              </th>
              <th className="px-3 py-3 text-left font-medium text-gray-400">
                First affected
              </th>
            </tr>
          </thead>
          <tbody>
            {regionalVulnerabilityTable.map((row, i) => (
              <tr
                key={row.region}
                className={
                  i < regionalVulnerabilityTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-3 py-3 font-medium text-white text-xs">
                  <span
                    className={
                      row.rank.includes("WORST")
                        ? "text-red-400 font-bold"
                        : ""
                    }
                  >
                    {row.rank}
                  </span>
                </td>
                <td className="px-3 py-3 text-white text-xs">{row.region}</td>
                <td className="px-3 py-3 text-xs">
                  <span
                    className={
                      row.influx === "MAXIMUM"
                        ? "text-red-400 font-bold"
                        : "text-amber-400"
                    }
                  >
                    {row.influx}
                  </span>
                </td>
                <td className="px-3 py-3 text-gray-400 text-xs">
                  {row.efflux}
                </td>
                <td className="px-3 py-3 text-xs">
                  <span
                    className={
                      row.selfRegulates.startsWith("YES")
                        ? "text-teal-400"
                        : "text-gray-500"
                    }
                  >
                    {row.selfRegulates}
                  </span>
                </td>
                <td className="px-3 py-3 text-gray-400 text-xs">
                  {row.firstAffected}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: Iliff et al. 2012, Ringstad et al. 2018, Shafiee et al. 2024
      </p>
    </div>
  );
}

/* ── Cross-Disease NBM Table ───────────────────────────────────────── */

function CrossDiseaseNBMTableComponent() {
  return (
    <div className="mt-10 max-w-2xl">
      <h3 className="text-lg font-bold text-white mb-2">
        NBM degeneration across diseases
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        The nucleus basalis degenerates early in every major neurodegenerative
        disease, not just Alzheimer&apos;s.
      </p>
      <div className="overflow-hidden border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                Disease
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                NBM status
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-400">
                FELINE layer
              </th>
            </tr>
          </thead>
          <tbody>
            {crossDiseaseNBMTable.map((row, i) => (
              <tr
                key={row.disease}
                className={
                  i < crossDiseaseNBMTable.length - 1
                    ? "border-b border-white/5"
                    : ""
                }
              >
                <td className="px-4 py-3 font-medium text-white text-xs">
                  {row.disease}
                </td>
                <td className="px-4 py-3 text-gray-300 text-xs">
                  {row.nbmStatus}
                </td>
                <td className="px-4 py-3 text-teal-400 text-xs">
                  {row.felineLayer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Source: Pereira et al. 2020, Whitehouse et al. 1981/1982
      </p>
    </div>
  );
}

/* ── Research Section ────────────────────────────────────────────────── */

const researchGroups = [
  {
    title: "Iron \u2192 Amyloid",
    filterFn: (f: (typeof researchFindings)[number]) => f.tag === "amyloid",
  },
  {
    title: "Iron \u2192 Tau",
    filterFn: (f: (typeof researchFindings)[number]) => f.tag === "tau",
  },
  {
    title: "Iron \u2192 Demyelination",
    filterFn: (f: (typeof researchFindings)[number]) => f.tag === "myelin",
  },
  {
    title: "Iron \u2192 Cholinergic",
    filterFn: (f: (typeof researchFindings)[number]) => f.tag === "cholinergic",
  },
];

function ResearchSection() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <div className="flex items-center justify-between mb-6 max-w-3xl">
          <div>
            <h2
              id="research-heading"
              className="text-2xl font-bold text-white mb-2"
            >
              Key research findings
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Selected papers supporting each iron cascade
            </p>
          </div>
          <button
            onClick={() => setAllOpen((v) => !v)}
            className="shrink-0 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-white/20 hover:text-white"
            aria-label={
              allOpen
                ? "Collapse all research sections"
                : "Expand all research sections"
            }
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div className="max-w-3xl space-y-3">
          {researchGroups.map((group) => {
            const findings = researchFindings.filter(group.filterFn);

            return (
              <Expandable
                key={group.title}
                title={group.title}
                variant="dark"
                open={allOpen}
                onOpenChange={() => setAllOpen((v) => !v)}
              >
                <div className="space-y-4">
                  {findings.map((f, i) => (
                    <div key={`${f.paper}-${i}`}>
                      <p className="text-xs font-medium text-teal-400 mb-1">
                        {f.paper}
                        {f.journal && (
                          <span className="text-gray-500">
                            {" "}
                            &middot; {f.journal}
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {f.finding}
                      </p>
                      {f.detail && (
                        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                          {f.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Expandable>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ── Synthesis Section ───────────────────────────────────────────────── */

function SynthesisSection() {
  return (
    <section
      id="synthesis"
      aria-labelledby="synthesis-heading"
      className="py-16 px-6 pb-24"
    >
      <Container width="full">
        <h2
          id="synthesis-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          Where the cascades converge
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          These four downstream systems are not independent. Iron connects them
          all, and failure in one accelerates the others.
        </p>

        <div className="max-w-3xl space-y-4">
          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-teal-400 mb-3">
              Amyloid \u2194 Tau convergence
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Iron increases APP (via IRE). Tau normally traffics APP to the
              surface. Iron also hyperphosphorylates tau via GSK-3\u03B2, blocking
              APP trafficking. Result: more APP stuck inside the cell, more
              amyloidogenic processing, more A\u03B2, more iron concentration.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-teal-400 mb-3">
              Oligodendrocyte death \u2192 accelerated iron release
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              When iron-rich oligodendrocytes die by ferroptosis, they release
              their stored iron (3.05 mM) and stop secreting FTH1. This floods
              the local environment with reactive iron, accelerating all other
              cascades: more A\u03B2, more pTau, more cholinergic damage.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-teal-400 mb-3">
              Cholinergic loss as the clinical endpoint
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The cholinergic system is downstream of all three other cascades.
              Iron-driven lipid peroxidation (HNE) kills cholinergic neurons
              directly. Demyelination disrupts cholinergic white matter tracts.
              This is why cholinergic loss correlates most strongly with clinical
              symptoms.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-medium text-teal-400 mb-3">
              The treatment implication
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              If iron is upstream of all four systems, then targeting individual
              downstream proteins (anti-amyloid, anti-tau, cholinesterase
              inhibitors) treats symptoms, not causes. This explains four decades
              of trial failure. Addressing iron maldistribution would hit all
              four cascades simultaneously.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

const PAGE_SECTIONS = [
  { id: "intro", label: "Overview" },
  { id: "amyloid", label: "Iron \u2192 Amyloid" },
  { id: "tau", label: "Iron \u2192 Tau" },
  { id: "demyelination", label: "Iron \u2192 Myelin" },
  { id: "cholinergic", label: "Iron \u2192 Cholinergic" },
  { id: "research", label: "Research" },
  { id: "synthesis", label: "Convergence" },
];

export default function IronCascadesPage() {
  useRegisterSections(PAGE_SECTIONS);

  return (
    <div>
      <IntroSection />
      {/* Amyloid section with trial table, metal-oligomer table, ARIA table */}
      <section
        id="amyloid"
        aria-labelledby="amyloid-heading"
        className="py-16 px-6"
      >
        <Container width="full">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            {amyloidSection.kicker}
          </p>
          <h2
            id="amyloid-heading"
            className="text-2xl font-bold text-white mb-2"
          >
            {amyloidSection.title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            {amyloidSection.subtitle}
          </p>

          <div className="max-w-3xl space-y-3">
            {amyloidSection.mechanismSteps.map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          <MetalOligomerMorphologyTable />

          <AntiAmyloidTrialTable />

          <AriaBindingTable />

          {/* Stats */}
          {amyloidSection.stats && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
              {amyloidSection.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="font-serif text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs text-gray-500 mt-1">{stat.source}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Cross-links */}
          {amyloidSection.crossLinks && amyloidSection.crossLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {amyloidSection.crossLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-teal-400/40 hover:text-teal-400"
                >
                  <span aria-hidden="true">&rarr;</span> {link.label}
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>
      {/* Tau section with vicious cycle diagram and trial table */}
      <section
        id="tau"
        aria-labelledby="tau-heading"
        className="py-16 px-6"
      >
        <Container width="full">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            {tauSection.kicker}
          </p>
          <h2
            id="tau-heading"
            className="text-2xl font-bold text-white mb-2"
          >
            {tauSection.title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            {tauSection.subtitle}
          </p>

          <div className="max-w-3xl space-y-3">
            {tauSection.mechanismSteps.map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          <ViciousCycleDiagram />

          <AntiTauTrialTable />

          {/* Stats */}
          {tauSection.stats && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
              {tauSection.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="font-serif text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs text-gray-500 mt-1">{stat.source}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
      {/* Demyelination section with vulnerability, OPC, and iron concentration tables */}
      <section
        id="demyelination"
        aria-labelledby="demyelination-heading"
        className="py-16 px-6"
      >
        <Container width="full">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            {demyelinationSection.kicker}
          </p>
          <h2
            id="demyelination-heading"
            className="text-2xl font-bold text-white mb-2"
          >
            {demyelinationSection.title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            {demyelinationSection.subtitle}
          </p>

          <div className="max-w-3xl space-y-3">
            {demyelinationSection.mechanismSteps.map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          <IronConcentrationTable />

          <OlVulnerabilityTradeoffTable />

          <OpcDifferentiationTable />

          {/* Stats */}
          {demyelinationSection.stats && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
              {demyelinationSection.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="font-serif text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs text-gray-500 mt-1">{stat.source}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
      {/* Cholinergic Section — inline with embedded tables */}
      <section
        id={cholinergicSection.id}
        aria-labelledby="cholinergic-heading"
        className="py-16 px-6"
      >
        <Container width="full">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            {cholinergicSection.kicker}
          </p>
          <h2
            id="cholinergic-heading"
            className="text-2xl font-bold text-white mb-2"
          >
            {cholinergicSection.title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            {cholinergicSection.subtitle}
          </p>

          <div className="max-w-3xl space-y-3">
            {cholinergicSection.mechanismSteps.slice(0, 4).map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          {/* Regional Vulnerability Hierarchy Table */}
          <RegionalVulnerabilityHierarchyTable />

          <div className="max-w-3xl space-y-3 mt-6">
            {cholinergicSection.mechanismSteps.slice(4, 8).map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          {/* Cross-Disease NBM Table */}
          <CrossDiseaseNBMTableComponent />

          <div className="max-w-3xl space-y-3 mt-6">
            {cholinergicSection.mechanismSteps.slice(8).map((step) => (
              <MechanismStepCard key={step.step} step={step} />
            ))}
          </div>

          {/* Stats row */}
          {cholinergicSection.stats && cholinergicSection.stats.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
              {cholinergicSection.stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="font-serif text-2xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  {stat.source && (
                    <p className="text-xs text-gray-500 mt-1">{stat.source}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
      <ResearchSection />
      <SynthesisSection />
    </div>
  );
}
