"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  nerveHero,
  architectureRows,
  ironFateComparison,
  barrierComparison,
  felineLayerRows,
  researchFindings,
  evolutionaryRows,
  therapeuticPredictions,
} from "@/data/landing/nerve";

/* ── Section A: Intro ───────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Barrier Pattern
        </p>
        <h1
          id="intro-heading"
          className="font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          {nerveHero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
          {nerveHero.subtitle}
        </p>

        {/* Key stat comparison */}
        <div className="mt-10 flex items-center gap-6">
          <div className="text-center">
            <p className="font-serif text-3xl sm:text-4xl text-teal-400">
              Minutes
            </p>
            <p className="text-sm text-gray-500 mt-1">PNS iron clearance</p>
          </div>
          <span className="text-gray-500 text-2xl">vs</span>
          <div className="text-center">
            <p className="font-serif text-3xl sm:text-4xl text-white">
              Days&ndash;weeks
            </p>
            <p className="text-sm text-gray-500 mt-1">CNS iron clearance</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Macrophage compensation at the BNB prevents battlefield residue from
          persisting (Bauer et al. 2023, Dev Cell)
        </p>
      </Container>
    </section>
  );
}

/* ── Section B: Architecture ──────────────────────────────────────────── */

function ArchitectureSection() {
  return (
    <section
      id="architecture"
      aria-labelledby="arch-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2 id="arch-heading" className="text-2xl font-bold text-white mb-2">
          BNB architecture
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Permeability comes from transcytosis, not weak tight junctions. The
          macrophage vacuum system compensates for what the barrier lacks.
        </p>

        <div className="max-w-3xl space-y-3">
          {architectureRows.map((row) => (
            <div key={row.feature} className="glass-card p-4">
              <p className="text-sm font-medium text-white mb-1">
                {row.feature}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {row.detail}
              </p>
            </div>
          ))}
        </div>

        {/* BBB vs BNB quick comparison */}
        <h3 className="text-lg font-bold text-white mt-12 mb-4">
          BBB vs BNB
        </h3>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm text-left min-w-[420px] max-w-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  Feature
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  CNS (BBB)
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  PNS (BNB)
                </th>
              </tr>
            </thead>
            <tbody>
              {barrierComparison.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{row.cns}</td>
                  <td className="py-3 pl-4 text-gray-400">{row.pns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ── Section C: CNS vs PNS ────────────────────────────────────────────── */

function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="comparison-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          CNS vs PNS: same iron, different fate
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          The same 30&times; iron release from dying senescent cells has
          opposite outcomes depending on the barrier.
        </p>

        {/* Iron fate table */}
        <div className="overflow-x-auto -mx-6 px-6 mb-12">
          <table className="w-full text-sm text-left min-w-[420px] max-w-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  After senescent cell death
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  In CNS
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  In PNS
                </th>
              </tr>
            </thead>
            <tbody>
              {ironFateComparison.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-red-400/80">{row.cns}</td>
                  <td className="py-3 pl-4 text-emerald-400/80">{row.pns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FELINE layer comparison */}
        <h3 className="text-lg font-bold text-white mb-4">
          FELINE layers: CNS vs PNS
        </h3>
        <div className="space-y-3 max-w-3xl">
          {felineLayerRows.map((row) => (
            <div key={row.layer} className="glass-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-teal-400/10 text-xs font-bold text-teal-400">
                  {row.layer}
                </span>
                <span className="text-sm font-medium text-white">
                  {row.layerFull}
                </span>
                <span className="ml-auto text-xs text-gray-500">
                  {row.keyDifference}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">CNS</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {row.cns}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">PNS</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {row.pns}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evolutionary perspective */}
        <h3 className="text-lg font-bold text-white mt-12 mb-2">
          Evolutionary perspective
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl text-sm">
          Neural crest origin confers superior plasticity to Schwann cells. Both
          use SOX10 for myelination but arrive from completely different
          developmental pathways.
        </p>
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm text-left min-w-[420px] max-w-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  Feature
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  Schwann Cells (PNS)
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  Oligodendrocytes (CNS)
                </th>
              </tr>
            </thead>
            <tbody>
              {evolutionaryRows.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-gray-400">
                    {row.schwannCells}
                  </td>
                  <td className="py-3 pl-4 text-gray-400">
                    {row.oligodendrocytes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ── Section D: Research ──────────────────────────────────────────────── */

const researchGroups = [
  { title: "Macrophage Discovery", group: "macrophage" as const },
  { title: "Schwann Cell Iron", group: "schwann" as const },
  { title: "Diabetic Exception", group: "diabetic" as const },
  { title: "Senolytics: CNS vs PNS", group: "senolytic" as const },
  {
    title: "Ferroptosis Inhibitors & Schwann Rejuvenation",
    group: "ferroptosis" as const,
  },
];

function ResearchSection() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="py-16 px-6 pb-24"
    >
      <Container width="full">
        <div className="flex items-center justify-between mb-6 max-w-3xl">
          <div>
            <h2
              id="research-heading"
              className="text-2xl font-bold text-white mb-2"
            >
              What the research shows
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Key studies on the BNB, peripheral nerve iron, and why the PNS
              escapes the FELINE cascade
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
          {researchGroups.map((rg) => {
            const findings = researchFindings.filter(
              (f) => f.group === rg.group
            );
            if (findings.length === 0) return null;

            return (
              <Expandable
                key={rg.title}
                title={rg.title}
                variant="dark"
                open={allOpen}
                onOpenChange={() => setAllOpen((v) => !v)}
              >
                <div className="space-y-4">
                  {findings.map((f) => (
                    <div key={f.id}>
                      <p className="text-xs font-medium text-teal-400 mb-1">
                        {f.paper} ({f.year})
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

          {/* Therapeutic predictions */}
          <Expandable
            title="Therapeutic predictions: CNS vs PNS"
            variant="dark"
            open={allOpen}
            onOpenChange={() => setAllOpen((v) => !v)}
          >
            <div className="overflow-x-auto -mx-4">
              <table className="w-full text-sm text-left min-w-[480px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-2 pr-3 text-gray-500 font-medium pl-4">
                      Intervention
                    </th>
                    <th className="pb-2 px-3 text-gray-500 font-medium">
                      CNS prediction
                    </th>
                    <th className="pb-2 px-3 text-gray-500 font-medium">
                      PNS prediction
                    </th>
                    <th className="pb-2 pl-3 text-gray-500 font-medium pr-4">
                      Evidence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {therapeuticPredictions.map((row) => (
                    <tr
                      key={row.intervention}
                      className="border-b border-white/5"
                    >
                      <td className="py-2 pr-3 font-medium text-white pl-4">
                        {row.intervention}
                      </td>
                      <td className="py-2 px-3 text-gray-400">
                        {row.cnsPrediction}
                      </td>
                      <td className="py-2 px-3 text-gray-400">
                        {row.pnsPrediction}
                      </td>
                      <td className="py-2 pl-3 text-xs text-gray-500 pr-4">
                        {row.evidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Expandable>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

const NERVE_SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "architecture", label: "Architecture" },
  { id: "comparison", label: "CNS vs PNS" },
  { id: "research", label: "Research" },
];

export default function NerveBarrierPage() {
  useRegisterSections(NERVE_SECTIONS);

  return (
    <div>
      <IntroSection />
      <ArchitectureSection />
      <ComparisonSection />
      <ResearchSection />
    </div>
  );
}
