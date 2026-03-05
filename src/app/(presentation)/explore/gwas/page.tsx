"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  gwasGenes,
  gwasStats,
  survivorshipBias,
  genesByLayer,
  layerLabels,
  type GwasGene,
} from "@/data/landing/gwas-genes";
import { defenseLayers } from "@/data/landing/entry-points";

type FilterId = "All" | (typeof defenseLayers)[number];

const filters: { id: FilterId; label: string }[] = [
  { id: "All", label: "All" },
  ...defenseLayers.map((l) => ({ id: l as FilterId, label: l })),
];

const grouped = genesByLayer();

function GeneCard({ gene }: { gene: GwasGene }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-teal-400 text-sm">
            {gene.primaryLayer}
          </span>
          <span className="text-white font-semibold">{gene.id}</span>
          <span className="text-gray-500 text-sm hidden sm:inline">
            {gene.fullName}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-3">
              <p className="text-sm text-gray-300 leading-relaxed">
                {gene.function}
              </p>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Iron connection
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {gene.ironConnection}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
                <span>Chromosome {gene.chromosome}</span>
                {gene.secondaryLayers && gene.secondaryLayers.length > 0 && (
                  <span>
                    Also:{" "}
                    {gene.secondaryLayers
                      .map((l) => `${l} (${layerLabels[l]})`)
                      .join(", ")}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GwasPage() {
  const [filter, setFilter] = useState<FilterId>("All");

  const filteredGenes: GwasGene[] =
    filter === "All" ? gwasGenes : (grouped[filter] ?? []);

  return (
    <Container width="full" className="py-12">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Genetics
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Risk genes map to iron defense
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          217 AD and PD risk loci, zero canonical iron genes. Nearly every
          hit maps to a FELINE defense layer that protects against
          iron-driven damage.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        {Object.values(gwasStats).map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-3xl text-white">{stat.value}</p>
            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Why no iron genes */}
      <div className="glass-card p-6 mb-12">
        <h2 className="text-lg font-semibold text-white mb-2">
          {survivorshipBias.headline}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          {survivorshipBias.body}
        </p>
      </div>

      {/* Layer filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 text-sm border transition-colors ${
              filter === f.id
                ? "border-teal-400 text-teal-400"
                : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {f.label}
            {f.id !== "All" && (
              <span className="ml-1.5 text-gray-500">
                {grouped[f.id as (typeof defenseLayers)[number]]?.length ?? 0}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Gene accordion cards */}
      <div className="space-y-2">
        {filteredGenes.map((gene) => (
          <GeneCard key={gene.id} gene={gene} />
        ))}
      </div>

      {filteredGenes.length === 0 && (
        <p className="text-gray-500 text-sm py-8">
          No genes in this layer.
        </p>
      )}
    </Container>
  );
}
