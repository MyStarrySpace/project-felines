"use client";

import { Container } from "@/components/ui/container";
import { InteractiveSvg } from "@/components/ui/interactive-svg";
import { useRegisterSections } from "@/components/providers/explore-sections-context";
import { diagramSteps } from "@/data/landing/iron-diagram";

const PAGE_SECTIONS = [{ id: "diagram", label: "Iron Diagram" }];

export default function IronDiagramPage() {
  useRegisterSections(PAGE_SECTIONS);

  return (
    <section id="diagram" aria-labelledby="diagram-heading" className="py-16 px-6">
      <Container width="full">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
          Iron Biology
        </p>
        <h1
          id="diagram-heading"
          className="font-serif text-4xl font-bold text-white sm:text-5xl"
        >
          Iron processing, step by step
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mb-12">
          Walk through each stage of cellular iron metabolism: from import
          through the transferrin receptor, to the Fenton reaction that drives
          oxidative damage, and the defense systems that keep it in check.
        </p>

        <InteractiveSvg
          svgUrl="/diagrams/feline-iron.svg"
          steps={diagramSteps}
        />
      </Container>
    </section>
  );
}
