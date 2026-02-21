"use client";

import { useState, useCallback, type ReactNode } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { Cite } from "@/components/citation/cite";
import { whatIfLines } from "@/data/landing/teaser";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Progress ranges for staggered line entrances */
const LINE_RANGES: [enter: number, hold: number][] = [
  [0.54, 0.58],
  [0.56, 0.60],
  [0.58, 0.62],
];

/** Expanded content for each line — JSX with inline <Cite> */
const expandedContent: ReactNode[] = [
  // Line 0: ancient defense system — evolutionary origins of iron-binding proteins
  <div key="exp-0" className="space-y-3">
    <p>
      These proteins evolved iron-handling functions across independent lineages
      spanning half a billion years.
    </p>
    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
      <dt className="font-semibold text-[#1A0F0A]">APP/A&beta;</dt>
      <dd>
        Homologs in flies, worms, and even cnidarians. The ancestral gene dates
        to 630&ndash;540&thinsp;Mya.
        <Cite id="tharp-2013-bmcgenomics" citationIds={["tharp-2013-bmcgenomics-c1", "tharp-2013-bmcgenomics-c2", "tharp-2013-bmcgenomics-c3"]} /> A&beta; itself kills bacteria and
        yeast.
        <Cite id="soscia-2010-plosone" />
      </dd>
      <dt className="font-semibold text-[#1A0F0A]">&alpha;-Synuclein</dt>
      <dd>
        Vertebrate-specific (~500&thinsp;Mya).
        <Cite id="george-2002-genomebiology" /> A cellular ferrireductase: it
        reduces Fe&sup3;&#8314; to bioavailable Fe&sup2;&#8314;.
        <Cite id="davies-2011-plosone" />
      </dd>
      <dt className="font-semibold text-[#1A0F0A]">Tau</dt>
      <dd>
        Arose during vertebrate whole-genome duplication (~550&thinsp;Mya).
        <Cite id="sundermann-2016-bmcgenomics" /> Buffers cytosolic iron and
        facilitates ferroportin export.
      </dd>
      <dt className="font-semibold text-[#1A0F0A]">PrP</dt>
      <dd>
        Descended from the ZIP zinc/iron transporter family at the base of the
        chordate lineage.
        <Cite id="schmitt-ulms-2009-plosone" /> Iron handling is its original
        function.
      </dd>
    </dl>
  </div>,
  // Line 1: iron cleanup crew
  <p key="exp-1">
    A&beta; accumulates iron within aggregates, concentrating it locally.
    <Cite id="everett-2014-jrsinterface" /> Alpha-synuclein binds ferric iron
    with 10<sup>13</sup>&thinsp;M<sup>&#8315;1</sup> affinity.
    <Cite id="peng-2010-jinorgbiochem" /> A&beta; aggregates formed without iron
    are non-toxic.
    <Cite id="liu-2011-jbc" />
  </p>,
  // Line 2: same story in every disease
  <p key="exp-2">
    Lewy bodies are not protein fibrils. They are crowded organelles and lipid
    membranes.
    <Cite id="shahmoradian-2019-natneurosci" /> The protein that aggregates
    depends on where iron overwhelms defenses, not on a disease-specific
    mechanism.
  </p>,
];

/** Single clickable line with scroll-driven underline */
function WhatIfLine({
  index,
  progress,
  expandedIndex,
  onToggle,
}: {
  index: number;
  progress: MotionValue<number>;
  expandedIndex: number | null;
  onToggle: (i: number) => void;
}) {
  const line = whatIfLines[index];
  const [enter, hold] = LINE_RANGES[index];

  // Scroll-driven fade in
  const opacity = useTransform(progress, [enter, hold], [0, 1]);

  // Scroll-driven underline scaleX
  const scaleX = useTransform(progress, [enter, hold], [0, 1]);

  const isExpanded = expandedIndex === index;
  const isDimmed = expandedIndex !== null && !isExpanded;

  return (
    <motion.div
      style={{ opacity }}
      className="transition-opacity duration-300"
    >
      <button
        onClick={() => onToggle(index)}
        className="text-left w-full cursor-pointer group"
        style={{ opacity: isDimmed ? 0.3 : 1, transition: "opacity 300ms" }}
      >
        <span className="font-serif text-[clamp(1.25rem,3vw,2rem)] text-[#1A0F0A] leading-tight">
          {line.label}
        </span>
      </button>

      {/* Underline — reading-width when scrolling, full-bleed when expanded */}
      <div className="relative mt-1">
        {/* Scroll-driven underline (within reading-width) */}
        <motion.div
          style={{
            scaleX: isExpanded ? 1 : scaleX,
            transformOrigin: line.underlineFrom === "left" ? "left" : "right",
            opacity: isExpanded ? 0 : 1,
          }}
          className="h-[2px] bg-[#92400E]"
          transition={{ opacity: { duration: 0.2 } }}
        />

        {/* Full-bleed underline (shown on expand) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute top-0 h-[2px] bg-[#92400E]"
              style={{
                width: "100vw",
                left: "50%",
                marginLeft: "-50vw",
                transformOrigin: "center",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Expanded block — full-bleed */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
            style={{
              width: "100vw",
              left: "50%",
              marginLeft: "-50vw",
              position: "relative",
            }}
          >
            <div className="py-6 px-6 sm:px-10 mt-0 bg-[rgba(26,15,10,0.06)] text-[#1A0F0A]/80 font-sans text-xl leading-relaxed">
              <div className="max-w-[782px] mx-auto">
                {expandedContent[index]}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function WhatIfLines({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }, []);

  // Lead-in "What if it's..." scroll entrance
  const leadInOpacity = useTransform(progress, [0.50, 0.56], [0, 1]);
  const leadInY = useTransform(progress, [0.50, 0.56], [30, 0]);

  return (
    <div className="mt-8">
      {/* Lead-in */}
      <motion.p
        style={{ opacity: leadInOpacity, y: leadInY }}
        className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[#92400E] leading-tight mb-6"
      >
        What if it&rsquo;s&hellip;
      </motion.p>

      {/* Three clickable lines */}
      <div className="flex flex-col gap-4">
        {whatIfLines.map((_, i) => (
          <WhatIfLine
            key={i}
            index={i}
            progress={progress}
            expandedIndex={expandedIndex}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
