"use client";

import Link from "next/link";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { closingSummary } from "@/data/landing/gwas-genes";

export function ClosingCtaSection() {
  return (
    <ScrollSection
      id="closing"
      label="The mechanism"
      className="pt-24 sm:pt-32 pb-[50vh]"
    >
      {closingSummary.lines.map((line, i) => (
        <ScrollAnimate key={i} enterFrom="bottom">
          <p className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.02em] text-white mb-10 max-w-[24ch]">
            {line}
          </p>
        </ScrollAnimate>
      ))}

      <ScrollAnimate enterFrom="bottom">
        <Link
          href={closingSummary.cta.href}
          className="inline-flex items-center gap-2 mt-6 text-lg text-teal-400 hover:text-teal-300 transition-colors"
        >
          {closingSummary.cta.text} &rarr;
        </Link>
      </ScrollAnimate>
    </ScrollSection>
  );
}
