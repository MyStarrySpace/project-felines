"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { StepFragment } from "@/components/ui/step-fragment";
import { useFullPage } from "@/components/ui/full-page-scroll";

/**
 * Clinical trial success rates (Phase I → approval) by therapeutic area.
 * Bar widths are proportional to the success rate, scaled so the largest
 * value (33.4%) maps to 100%.
 */
const MAX_RATE = 33.4;

const barData = [
  {
    area: "Infectious disease",
    rate: 33.4,
    source: "Wong CH, Siah KW, Lo AW. Biostatistics. 2019;20(2):273-286.",
    sourceId: "wong-2019-biostatistics",
  },
  {
    area: "Cardiovascular",
    rate: 25.5,
    source: "Wong CH, Siah KW, Lo AW. Biostatistics. 2019;20(2):273-286.",
    sourceId: "wong-2019-biostatistics",
  },
  {
    area: "All drugs (industry avg.)",
    rate: 13.8,
    source: "Wong CH, Siah KW, Lo AW. Biostatistics. 2019;20(2):273-286.",
    sourceId: "wong-2019-biostatistics",
  },
  {
    area: "Oncology",
    rate: 3.4,
    source: "Wong CH, Siah KW, Lo AW. Biostatistics. 2019;20(2):273-286.",
    sourceId: "wong-2019-biostatistics",
  },
  {
    area: "Alzheimer's disease",
    rate: 0.4,
    source: "Cummings JL, Morstorf T, Zhong K. Alzheimers Res Ther. 2014;6(4):37.",
    sourceId: "cummings-2014-alzrt",
  },
];

const facts = [
  {
    headline: "A\u03B2 is an antimicrobial peptide.",
    body: "It entraps bacteria and viruses in fibrillar nets. Microbes have been found inside plaques.",
  },
  {
    headline: "It also sequesters iron.",
    body: "But during aggregation, A\u03B2 reduces Fe\u00B3\u207A to redox-active Fe\u00B2\u207A, making trapped iron more dangerous if released.",
  },
  {
    headline: "Microglia compact the damage.",
    body: "They physically remodel loose amyloid into dense-core plaques, walling off toxic material behind a cellular barrier.",
  },
  {
    headline: "And this pattern repeats everywhere.",
    body: "Tau, \u03B1-synuclein, TDP-43, prion protein, fibrinogen: every self-templating protein in disease has iron involvement. Free iron catalyzes the same \u03B1-helix to \u03B2-sheet switch in all of them. The proteins differ. The trigger doesn\u2019t.",
  },
];

function TickingNumber({
  value,
  visible,
  delay,
}: {
  value: number;
  visible: boolean;
  delay: number;
}) {
  const progress = useMotionValue(0);
  const displayValue = useTransform(progress, (v) =>
    value < 1 ? v.toFixed(1) : value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString()
  );

  useEffect(() => {
    if (visible) {
      animate(progress, value, {
        duration: 1.2,
        delay: delay + 0.3,
        ease: [0.16, 1, 0.3, 1],
      });
    } else {
      progress.set(0);
    }
  }, [visible, progress, value, delay]);

  return (
    <>
      <motion.span>{displayValue}</motion.span>%
    </>
  );
}

function SuccessRateBar({
  area,
  rate,
  source,
  index,
  visible,
}: {
  area: string;
  rate: number;
  source: string;
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = index * 0.1;
  // Scale: max rate maps to 85% container width; minimum bar width for visibility
  const widthPercent = Math.max((rate / MAX_RATE) * 85, 1.5);
  const isAlzheimers = rate < 1;

  return (
    <div
      className="group relative"
      role="figure"
      aria-label={`${area}: ${rate}% success rate`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-4">
        {/* Bar */}
        <motion.div
          className={`h-12 sm:h-16 ${isAlzheimers ? "bg-teal-400/30" : "bg-teal-600/20"}`}
          initial={{ width: 0 }}
          animate={visible ? { width: `${widthPercent}%` } : { width: 0 }}
          transition={{
            duration: 1.0,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Rate number */}
        <motion.span
          className={`font-mono text-[32px] font-bold tracking-tight whitespace-nowrap sm:text-[40px] ${isAlzheimers ? "text-teal-300" : "text-teal-400"}`}
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        >
          <TickingNumber value={rate} visible={visible} delay={delay} />
        </motion.span>
      </div>

      {/* Area label */}
      <motion.p
        className={`mt-1 text-sm font-medium sm:text-base ${isAlzheimers ? "text-gray-300" : "text-gray-500"}`}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
      >
        {area}
      </motion.p>

      {/* Source tooltip on hover */}
      <AnimatePresence>
        {hovered && visible && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-10 mt-1 max-w-sm rounded bg-navy-900/95 px-3 py-2 text-xs leading-relaxed text-gray-400 shadow-lg backdrop-blur-sm border border-white/10"
          >
            {source}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProblemSection() {
  const { currentStep } = useFullPage();
  const step = currentStep;
  const barsVisible = step >= 2;

  return (
    <div className="h-full relative overflow-hidden" role="region" aria-label="Problem">
      {/* Step 0: Provocation — top-left anchored */}
      <StepFragment step={step} appear={0} recede={1} className="!items-start !justify-start pt-28 pl-12 sm:pt-36 sm:pl-20">
        <div className="flex flex-col items-start text-left max-w-3xl px-6">
          <h2 id="problem-heading" className="text-[52px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[72px]">
            We spent 30 years removing the brain&apos;s own defense system.{" "}
            <span className="text-gray-400">
              Then wondered why patients got worse.
            </span>
          </h2>
        </div>
      </StepFragment>

      {/* Step 1: Three scientific facts — staggered reveal, centered */}
      <StepFragment step={step} appear={1} recede={2}>
        <div className="flex flex-col items-center gap-10 max-w-2xl px-6">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={step >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-serif text-[28px] font-semibold leading-tight text-white sm:text-[36px]">
                {fact.headline}
              </p>
              <p className="mt-2 text-lg leading-relaxed text-gray-400">
                {fact.body}
              </p>
            </motion.div>
          ))}
        </div>
      </StepFragment>

      {/* Steps 2–3: Success rate bars + swappable right-side text */}
      <motion.div
        className="absolute inset-0 z-[2] flex items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: barsVisible ? 1 : 0,
          y: step >= 3 ? "-8%" : "0%",
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: barsVisible ? "auto" : "none" }}
      >
        <div className="flex w-full items-start gap-6 sm:gap-10 px-8 sm:px-16">
          {/* Left: success rate bars */}
          <div className="flex flex-col gap-3 flex-1 min-w-0" role="group" aria-labelledby="bar-chart-title">
            {/* Chart title */}
            <motion.p
              className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500"
              id="bar-chart-title"
              initial={{ opacity: 0 }}
              animate={barsVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Clinical trial success rate (Phase I → approval)
            </motion.p>

            {barData.map((bar, i) => (
              <SuccessRateBar
                key={bar.area}
                area={bar.area}
                rate={bar.rate}
                source={bar.source}
                index={i}
                visible={barsVisible}
              />
            ))}
          </div>

          {/* Right: text that swaps between steps 2 and 3 */}
          <div className="relative hidden w-[33%] shrink-0 self-center sm:block">
            {/* Text A — step 2: what the bars mean */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              animate={{
                opacity: step === 2 ? 1 : 0,
                y: step === 2 ? 0 : -20,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[24px] font-semibold leading-snug text-white sm:text-[28px]">
                244 compounds tested against Alzheimer&apos;s. One conditional approval.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                The worst success rate in all of medicine.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Hover bars for sources
              </p>
            </motion.div>

            {/* Text B — step 3: the insight */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              animate={{
                opacity: step >= 3 ? 1 : 0,
                y: step >= 3 ? 0 : 20,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-l-2 border-teal-600 pl-6">
                <p className="text-[24px] font-semibold leading-snug text-white sm:text-[28px]">
                  Every major drug targeted plaques or the enzymes that produce them.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  BACE inhibitors blocked A&beta; production. Anti-amyloid antibodies cleared existing plaques. Both made patients worse. The proteins they removed were containing iron, not causing disease.
                </p>
                <Link
                  href="/explore/trials"
                  className="mt-4 inline-block text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
                >
                  See which drugs failed &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
