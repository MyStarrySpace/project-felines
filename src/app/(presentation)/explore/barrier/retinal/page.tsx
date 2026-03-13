"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  retinalHero,
  architectureRows,
  rpeVulnerability,
  ironHandlingRows,
  felineLayerRows,
  researchFindings,
  predictions,
} from "@/data/landing/retinal";

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
          {retinalHero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
          {retinalHero.subtitle}
        </p>

        {/* Key stat */}
        <div className="mt-10 flex items-center gap-6">
          <div className="text-center">
            <p className="font-serif text-4xl sm:text-5xl text-teal-400">
              85.9
            </p>
            <p className="text-sm text-gray-500 mt-1">ng/g iron (AD retina)</p>
          </div>
          <span className="text-gray-500 text-2xl">vs</span>
          <div className="text-center">
            <p className="font-serif text-4xl sm:text-5xl text-white">42.9</p>
            <p className="text-sm text-gray-500 mt-1">ng/g iron (control)</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Mashkani et al. 2024, Metallomics. Retina mirrored hippocampus within
          each species.
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
          Dual barrier architecture
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          The retina has two barriers: the inner BRB (identical to BBB) and the
          outer BRB (RPE tight junctions), with no direct CNS counterpart.
        </p>

        {/* Inner vs Outer comparison */}
        <div className="overflow-x-auto -mx-6 px-6 mb-10">
          <table className="w-full text-sm text-left min-w-[480px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  Feature
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  Inner BRB
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  Outer BRB (RPE)
                </th>
              </tr>
            </thead>
            <tbody>
              {architectureRows.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{row.innerBrb}</td>
                  <td className="py-3 pl-4 text-gray-400">{row.outerBrb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RPE vulnerability card */}
        <div className="glass-card p-6 max-w-3xl">
          <h3 className="text-lg font-bold text-white mb-3">
            {rpeVulnerability.title}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            {rpeVulnerability.roles.map((role) => (
              <div key={role.role} className="flex gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded bg-teal-400/10 text-xs font-bold text-teal-400 mt-0.5">
                  {role.layer}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{role.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {role.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-3">
            {rpeVulnerability.cascade}
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ── Section C: Iron & Export ──────────────────────────────────────────── */

function IronExportSection() {
  return (
    <section
      id="iron-export"
      aria-labelledby="iron-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2 id="iron-heading" className="text-2xl font-bold text-white mb-2">
          Iron handling at the BRB
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          The RPE uniquely co-expresses Cp AND Heph, providing double
          ferroxidase redundancy. Only the placenta has more.
        </p>

        <div className="max-w-3xl space-y-3">
          {ironHandlingRows.map((row) => (
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

        {/* FELINE layer mini-table */}
        <h3 className="text-lg font-bold text-white mt-12 mb-4">
          FELINES layers in the retina
        </h3>
        <div className="space-y-2 max-w-3xl">
          {felineLayerRows.map((row) => (
            <div key={row.layer} className="flex gap-3 items-start">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded bg-teal-400/10 text-xs font-bold text-teal-400 mt-0.5">
                {row.layer}
              </span>
              <div>
                <p className="text-sm font-medium text-white">
                  {row.layerFull}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {row.retina}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Section D: Research ──────────────────────────────────────────────── */

const researchGroups = [
  { title: "Pericyte Loss", group: "pericyte" as const },
  { title: "Iron Mapping", group: "iron" as const },
  { title: "Vascular Senescence", group: "senescence" as const },
  { title: "Export Failure", group: "export" as const },
  { title: "RPE Barrier Breach", group: "barrier" as const },
  { title: "Retinal AI / Imaging", group: "imaging" as const },
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
              Key studies mapping the FELINES cascade in retinal tissue
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

          {/* Predictions */}
          <Expandable
            title="FELINES temporal ordering predictions"
            variant="dark"
            open={allOpen}
            onOpenChange={() => setAllOpen((v) => !v)}
          >
            <div className="space-y-3">
              {predictions.map((p) => (
                <div key={p.id} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400/10 text-xs font-bold text-teal-400">
                    {p.id}
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {p.prediction}
                  </p>
                </div>
              ))}
            </div>
          </Expandable>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

const RETINAL_SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "architecture", label: "Architecture" },
  { id: "iron-export", label: "Iron & Export" },
  { id: "research", label: "Research" },
];

export default function RetinalBarrierPage() {
  useRegisterSections(RETINAL_SECTIONS);

  return (
    <div>
      <IntroSection />
      <ArchitectureSection />
      <IronExportSection />
      <ResearchSection />
    </div>
  );
}
