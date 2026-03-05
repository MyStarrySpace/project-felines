"use client";

import { Container } from "@/components/ui/container";
import { DrugBrowser } from "@/components/landing/drug-browser";
import { drugs } from "@/data/landing/drug-browser";

export default function DrugsPage() {
  return (
    <Container width="full" className="py-12">
      {/* Hero */}
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Drug Browser
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          {drugs.length} drugs across six diseases
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Every major neurodegeneration drug trial mapped by category,
          disease target, trial phase, and outcome. Filter by mechanism
          or target to see the pattern.
        </p>
      </div>

      {/* Full interactive browser */}
      <DrugBrowser />
    </Container>
  );
}
