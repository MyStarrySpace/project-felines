"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import {
  barrierCards,
  architectureComparison,
  felineLayerMap,
  protectionGradient,
  ferroxidaseGradient,
} from "@/data/landing/barrier-overview";

/* ── Hero ─────────────────────────────────────────────────────────────── */

function IntroSection() {
  return (
    <section id="intro" aria-labelledby="intro-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Barrier Pattern
        </p>
        <h1
          id="intro-heading"
          className="font-serif text-4xl font-bold sm:text-5xl max-w-2xl"
        >
          <span className="text-gray-300">
            Your brain&apos;s designed to manage iron until you&apos;re finished
            raising your children.
          </span>{" "}
          <span className="text-white">
            You&apos;re asking it to work when they start raising theirs.
          </span>
        </h1>
      </Container>
    </section>
  );
}

/* ── Barrier Cards ────────────────────────────────────────────────────── */

function BarrierCardsSection() {
  return (
    <section
      id="barriers"
      aria-labelledby="barriers-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="barriers-heading"
          className="text-2xl font-bold text-white mb-8"
        >
          Four FELINES compartments
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {barrierCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="glass-card p-6 group transition-colors hover:border-teal-400/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-medium text-teal-400">
                    {card.abbreviation}
                  </span>
                  <h3 className="text-lg font-bold text-white">{card.name}</h3>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-400" />
              </div>
              <p className="text-sm text-gray-400 mb-3">{card.cellTypes}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <span>
                  Pericytes:{" "}
                  <span className="text-gray-300">{card.pericyteCoverage}</span>
                </span>
                <span>
                  Iron clearance:{" "}
                  <span className="text-gray-300">{card.ironClearance}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Architecture Comparison ──────────────────────────────────────────── */

function ArchitectureSection() {
  return (
    <section
      id="architecture"
      aria-labelledby="architecture-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="architecture-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          Barrier architecture comparison
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Same molecular toolkit, different deployment.
        </p>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-sm text-left min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  Feature
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  BBB (Brain)
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  BRB (Retina)
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  BNB (Nerve)
                </th>
              </tr>
            </thead>
            <tbody>
              {architectureComparison.map((row) => (
                <tr key={row.feature} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{row.bbb}</td>
                  <td className="py-3 px-4 text-gray-400">{row.brb}</td>
                  <td className="py-3 pl-4 text-gray-400">{row.bnb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

/* ── FELINE Layer Map ─────────────────────────────────────────────────── */

function FelineMapSection() {
  return (
    <section
      id="feline-map"
      aria-labelledby="feline-map-heading"
      className="py-16 px-6"
    >
      <Container width="full">
        <h2
          id="feline-map-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          FELINES layer map across barriers
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Every FELINES layer is conserved, but the cellular ecosystem around
          each differs.
        </p>

        <div className="space-y-3">
          {felineLayerMap.map((row) => (
            <div key={row.layer} className="glass-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-teal-400/10 text-xs font-bold text-teal-400">
                  {row.layer}
                </span>
                <span className="text-sm font-medium text-white">
                  {row.layerFull}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    Brain (BBB)
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {row.bbb}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    Retina (BRB)
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {row.brb}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">
                    Nerve (BNB)
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {row.bnb}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Protection-Regeneration Tradeoff ─────────────────────────────────── */

function TradeoffSection() {
  return (
    <section
      id="tradeoff"
      aria-labelledby="tradeoff-heading"
      className="py-16 px-6 pb-24"
    >
      <Container width="full">
        <h2
          id="tradeoff-heading"
          className="text-2xl font-bold text-white mb-2"
        >
          The protection-regeneration tradeoff
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Evolution invested ferroxidase redundancy where it matters for
          reproductive fitness. The brain&apos;s post-reproductive degeneration
          was never selected against.
        </p>

        {/* Protection gradient table */}
        <div className="overflow-x-auto -mx-6 px-6 mb-12">
          <table className="w-full text-sm text-left min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4 text-gray-500 font-medium">
                  Property
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  BBB (Brain)
                </th>
                <th className="pb-3 px-4 text-gray-500 font-medium">
                  BRB (Retina)
                </th>
                <th className="pb-3 pl-4 text-gray-500 font-medium">
                  BNB (Nerve)
                </th>
              </tr>
            </thead>
            <tbody>
              {protectionGradient.map((row) => (
                <tr key={row.property} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">
                    {row.property}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{row.bbb}</td>
                  <td className="py-3 px-4 text-gray-400">{row.brb}</td>
                  <td className="py-3 pl-4 text-gray-400">{row.bnb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ferroxidase gradient */}
        <h3 className="text-lg font-bold text-white mb-2">
          Ferroxidase redundancy gradient
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl text-sm">
          Ferroxidase redundancy tracks evolutionary fitness priority. The
          placenta has triple backup; the brain has none.
        </p>

        <div className="space-y-3">
          {ferroxidaseGradient.map((row) => (
            <div key={row.barrier} className="glass-card p-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-sm font-bold text-white">{row.barrier}</h4>
                <span
                  className={`shrink-0 px-2.5 py-0.5 text-xs font-medium ${
                    row.redundancy === "TRIPLE"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : row.redundancy === "DOUBLE"
                        ? "bg-teal-400/10 text-teal-400"
                        : row.redundancy === "SINGLE"
                          ? "bg-amber-400/10 text-amber-400"
                          : "bg-gray-400/10 text-gray-400"
                  }`}
                >
                  {row.redundancy}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1">
                Export cells:{" "}
                <span className="text-gray-400">{row.exportCells}</span>
                {" \u00B7 "}
                Ferroxidases:{" "}
                <span className="text-gray-400">{row.ferroxidases}</span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {row.knockoutPhenotype}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

const OVERVIEW_SECTIONS = [
  { id: "intro", label: "Introduction" },
  { id: "barriers", label: "Barrier Cards" },
  { id: "architecture", label: "Architecture" },
  { id: "feline-map", label: "FELINES Map" },
  { id: "tradeoff", label: "Tradeoff" },
];

export default function BarrierOverviewPage() {
  useRegisterSections(OVERVIEW_SECTIONS);

  return (
    <div>
      <IntroSection />
      <BarrierCardsSection />
      <ArchitectureSection />
      <FelineMapSection />
      <TradeoffSection />
    </div>
  );
}
