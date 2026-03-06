"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollSection } from "@/components/ui/scroll-section";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { useScrollContext } from "@/components/providers/scroll-context";
import { falsificationContent } from "@/data/landing/summary";

export function SummarySection() {
  const { scrollToSection } = useScrollContext();

  return (
    <ScrollSection id="summary" label="Four predictions, none broken" className="py-24 sm:py-32">
      <ScrollAnimate enterFrom="scale">
        <h2 className="font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.2] tracking-[-0.02em] text-white mb-10 text-center">
          {falsificationContent.headline}
        </h2>
      </ScrollAnimate>

      <ol className="space-y-3 max-w-2xl mx-auto mb-8">
        {falsificationContent.criteria.map((c, i) => (
          <ScrollAnimate key={c.claim} enterFrom="bottom">
            <li className="flex gap-4 border border-white/5 p-4">
              <span className="shrink-0 text-sm font-bold text-teal-400 tabular-nums pt-0.5">
                {i + 1}.
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{c.claim}</p>
                <p className="text-sm text-gray-400">{c.test}</p>
              </div>
            </li>
          </ScrollAnimate>
        ))}
      </ol>

      <ScrollAnimate enterFrom="left">
        <p className="text-lg text-gray-300 text-center mb-10">
          {falsificationContent.afterSearch}
        </p>
      </ScrollAnimate>

      <ScrollAnimate>
        <div className="flex justify-center gap-4">
          <Link href="/explore/biology">
            <Button variant="primary-inverse" size="lg">
              {falsificationContent.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="secondary-inverse"
            size="lg"
            onClick={() => scrollToSection("teaser")}
          >
            {falsificationContent.ctaSecondary}
          </Button>
        </div>

        <p className="mt-8 text-xs text-gray-500 text-center">
          Project FELINES. For research and educational purposes.
        </p>
      </ScrollAnimate>
    </ScrollSection>
  );
}
