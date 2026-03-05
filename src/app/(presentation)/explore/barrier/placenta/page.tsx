"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Expandable } from "@/components/ui/expandable";
import { BarrierDiagram } from "@/components/pattern/barrier-diagram";
import { TimescaleCascade } from "@/components/pattern/timescale-cascade";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  cellHomology,
  introBullets,
  sharedFailureModes,
  keySections,
  researchFindings,
  epidemiologicalStudies,
} from "@/data/landing/placenta";

/* ── Section A: Intro ───────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Barrier Pattern
        </p>
        <h1 id="intro-heading" className="font-serif text-4xl font-bold text-white sm:text-5xl">
          The same cascade. A different organ.
        </h1>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg text-gray-300 mb-4">
            The placenta and the brain share the same:
          </p>
          <ul className="space-y-3">
            {introBullets.map((bullet) => (
              <li key={bullet.label} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                <div>
                  <span className="font-medium text-white">
                    {bullet.label}
                  </span>
                  <span className="text-gray-400"> — {bullet.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* ── Section B: Cell Homology ───────────────────────────────────────── */

function HomologySection() {
  return (
    <section id="homology" aria-labelledby="homology-heading" className="py-16 px-6">
      <Container width="full">
        <h2 id="homology-heading" className="text-2xl font-bold text-white mb-2">
          Cell-for-cell homology
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Every major cell type in the neurovascular unit has a direct
          counterpart in the placental villous unit, arising from shared
          developmental origins.
        </p>

        <BarrierDiagram />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-10 max-w-5xl mx-auto">
          {cellHomology.map((row) => (
            <div key={row.nvuComponent} className="glass-card p-5">
              <p className="text-sm font-medium mb-1.5">
                <span className="text-white">{row.nvuComponent}</span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  className="inline-block mx-2 text-gray-500"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h13M10 1l4 4-4 4"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.2"
                  />
                </svg>
                <span className="text-teal-400">{row.placentalHomolog}</span>
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {row.sharedFunction}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Section C: Shared Failure Modes ────────────────────────────────── */

function FailureModesSection() {
  return (
    <section id="failure-modes" aria-labelledby="failure-modes-heading" className="py-16 px-6">
      <Container width="full">
        <h2 id="failure-modes-heading" className="text-2xl font-bold text-white mb-2">
          Shared failure modes
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl">
          Three failure modes appear in both the brain and the placenta,
          supported by recent research.
        </p>

        <div className="max-w-3xl space-y-3">
          {sharedFailureModes.map((mode) => (
            <Expandable key={mode.id} title={mode.title} variant="dark">
              <div className="space-y-3">
                {mode.evidence.map((ev) => (
                  <div key={`${ev.paper}-${ev.year}`}>
                    <p className="text-xs font-medium text-teal-400 mb-1">
                      {ev.paper} ({ev.year})
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {ev.finding}
                    </p>
                  </div>
                ))}
              </div>
            </Expandable>
          ))}
        </div>

        {/* Timescale transition */}
        <div className="mt-16 max-w-3xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            ...but Preeclampsia runs the full cascade in{" "}
            <em className="text-white not-italic font-medium">weeks</em>{" "}
            instead of{" "}
            <em className="text-white not-italic font-medium">decades</em>.
          </p>

          {/* Stat headline */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-14">
            <div className="text-center">
              <p className="font-serif text-4xl sm:text-5xl text-white">
                20&ndash;40 years
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Alzheimer&apos;s
              </p>
            </div>
            <svg
              width="32"
              height="20"
              viewBox="0 0 32 20"
              className="text-gray-500 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M0 10h28M22 4l8 6-8 6"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
            </svg>
            <div className="text-center">
              <p className="font-serif text-4xl sm:text-5xl text-teal-400">
                Weeks
              </p>
              <p className="text-sm text-gray-500 mt-2">Preeclampsia</p>
            </div>
          </div>

          <TimescaleCascade />
        </div>
      </Container>
    </section>
  );
}

/* ── Section D: Research ────────────────────────────────────────────── */

const researchGroups = [
  {
    title: "Iron Transport Dysregulation",
    tags: ["iron"] as const,
    papers: ["Yang et al. 2026", "Park et al. 2025"],
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "iron",
  },
  {
    title: "Ferroptotic Cell Death",
    tags: ["cell death"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "cell death",
  },
  {
    title: "A\u03B2 in the Placenta",
    tags: ["barrier"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "barrier",
  },
  {
    title: "Vascular Damage",
    tags: ["vascular"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "vascular",
  },
  {
    title: "sEV Bridge to Dementia",
    tags: ["systemic"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "systemic" && f.paper.startsWith("Park"),
  },
  {
    title: "Immune Mechanisms",
    tags: ["immune"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "immune",
  },
  {
    title: "Biomarkers & Senescence",
    tags: ["biomarker"] as const,
    filterFn: (f: (typeof researchFindings)[number]) =>
      f.tag === "biomarker",
  },
];

function ResearchSection() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section id="research" aria-labelledby="research-heading" className="py-16 px-6 pb-24">
      <Container width="full">
        <div className="flex items-center justify-between mb-6 max-w-3xl">
          <div>
            <h2 id="research-heading" className="text-2xl font-bold text-white mb-2">
              What the research shows
            </h2>
            <p className="text-gray-400 max-w-2xl">
              The research surfaces many similarities to early AD conditions
            </p>
          </div>
          <button
            onClick={() => setAllOpen((v) => !v)}
            className="shrink-0 border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-white/20 hover:text-white"
            aria-label={allOpen ? "Collapse all research sections" : "Expand all research sections"}
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

          {/* Epidemiological bridge */}
          <Expandable
            title="Epidemiological Bridge"
            variant="dark"
            open={allOpen}
            onOpenChange={() => setAllOpen((v) => !v)}
          >
            <div className="space-y-4">
              {epidemiologicalStudies.map((study) => (
                <div key={study.authors}>
                  <p className="text-xs font-medium text-teal-400 mb-1">
                    {study.authors} ({study.year})
                    <span className="text-gray-500">
                      {" "}
                      &middot; {study.cohort}
                    </span>
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {study.finding}
                  </p>
                </div>
              ))}
            </div>
          </Expandable>

          {/* Caffeine */}
          <Expandable
            title="Caffeine as Barrier Protectant"
            variant="dark"
            open={allOpen}
            onOpenChange={() => setAllOpen((v) => !v)}
          >
            <p className="text-sm text-gray-300 leading-relaxed">
              {keySections[4].body}
            </p>
          </Expandable>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */

const PLACENTA_SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "homology", label: "Cell Homology" },
  { id: "failure-modes", label: "Failure Modes" },
  { id: "research", label: "Research" },
];

export default function PlacentaPatternPage() {
  useRegisterSections(PLACENTA_SECTIONS);

  return (
    <div>
      <IntroSection />
      <HomologySection />
      <FailureModesSection />
      <ResearchSection />
    </div>
  );
}
