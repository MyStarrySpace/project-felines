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
  [0.72, 0.78],
  [0.75, 0.81],
  [0.78, 0.84],
];

/* ------------------------------------------------------------------ */
/*  Collapsible protein entry                                         */
/* ------------------------------------------------------------------ */

function ProteinEntry({
  name,
  summary,
  children,
  isExpanded,
  onToggle,
}: {
  name: string;
  summary: string;
  children: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#1A0F0A]/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left flex items-baseline gap-2 sm:gap-3 py-2.5 cursor-pointer"
      >
        <span className="font-serif font-semibold text-[#1A0F0A] shrink-0">
          {name}
        </span>
        <span className="text-[#1A0F0A]/50 text-xs sm:text-sm leading-snug flex-1">
          {summary}
        </span>
        <svg
          className={`w-3 h-3 shrink-0 text-[#1A0F0A]/30 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-3 text-[#1A0F0A]/70 text-sm sm:text-base leading-relaxed space-y-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Line 0: immune weapons                                            */
/* ------------------------------------------------------------------ */

function ImmuneWeapons() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-3">
      <p>
        Every major &ldquo;disease protein&rdquo; has iron-handling functions
        that evolved hundreds of millions of years ago. These are innate immune
        weapons that use iron-mediated Fenton chemistry to kill pathogens. In
        neurodegeneration, they&rsquo;re chronically triggered by sterile iron
        overload. The defense becomes the disease.
      </p>

      <div>
        <ProteinEntry
          name="&alpha;-Synuclein"
          summary="Vertebrate ferrireductase (~500 Mya). Oligomeric forms amplify iron reduction."
          isExpanded={expanded === "asyn"}
          onToggle={() => toggle("asyn")}
        >
          <p>
            &ldquo;Synuclein family members are not found outside
            vertebrates.&rdquo;
            <Cite id="george-2002-genomebiology" />{" "}
            &alpha;-Synuclein provides &ldquo;strong evidence&rdquo; of being
            &ldquo;a cellular ferrireductase, responsible for reducing iron
            (III) to bio available iron (II).&rdquo;
            <Cite
              id="davies-2011-plosone"
              citationIds={["davies-2011-plosone-c1"]}
            />{" "}
            The &alpha;-synuclein&ndash;iron complex &ldquo;can be readily
            oxidized ... to the putative alpha-syn-Fe(III) complex, with
            H&#x2082;O&#x2082; as a co-product.&rdquo;
            <Cite
              id="peng-2010-jinorgbiochem"
              citationIds={["peng-2010-jinorgbiochem-c1"]}
            />{" "}
            Aggregation is signal amplification, not malfunction.
          </p>
        </ProteinEntry>

        <ProteinEntry
          name="A&beta;"
          summary="Antimicrobial peptide (630+ Mya). Self-limiting, iron-binding, and promotes myelination."
          isExpanded={expanded === "ab"}
          onToggle={() => toggle("ab")}
        >
          <p>
            &ldquo;The presence of an A&beta;PP-like sequence in hydra and sea
            anemone genomes suggests that the ancestral gene arose ...
            between 630&ndash;540 million years ago.&rdquo;
            <Cite
              id="tharp-2013-bmcgenomics"
              citationIds={["tharp-2013-bmcgenomics-c1"]}
            />{" "}
            &ldquo;A&beta; is rapidly produced and cleared in the CNS in
            humans.&rdquo;
            <Cite
              id="bateman-2006-natmed"
              citationIds={["bateman-2006-natmed-c1"]}
            />{" "}
            In sporadic AD, the production rate doesn&rsquo;t change: clearance
            drops by about a
            third.
            <Cite
              id="mawuenyega-2010-science"
              citationIds={["mawuenyega-2010-science-c1"]}
            />
          </p>
          <p>
            It regulates its own production: &ldquo;A&beta;42 forms a
            non-productive E-S-like complex with &gamma;-secretase and its
            binding is reversible.&rdquo;
            <Cite
              id="zoltowska-2024-elife"
              citationIds={["zoltowska-2024-elife-c1"]}
            />{" "}
            This is species-specific: &ldquo;neither murine A&beta;42 nor human
            A&beta;17&ndash;42 (p3), inhibit &gamma;-secretases.&rdquo;
            <Cite
              id="zoltowska-2024-elife"
              citationIds={["zoltowska-2024-elife-c2"]}
            />
          </p>
          <p>
            A bona fide antimicrobial peptide that kills bacteria and
            yeast.
            <Cite id="soscia-2010-plosone" /> APP mRNA contains &ldquo;an
            iron-responsive element type II in the 5&prime;-untranslated
            region.&rdquo;
            <Cite
              id="rogers-2002-jbc"
              citationIds={["rogers-2002-jbc-c1"]}
            />{" "}
            Aggregation produces &ldquo;redox-active iron formation following
            aggregation of ferrihydrite and the ... peptide
            &beta;-amyloid.&rdquo;
            <Cite
              id="everett-2014-nanoscale"
              citationIds={["everett-2014-nanoscale-c1"]}
            />
          </p>
          <p>
            &ldquo;A&beta; oligomers promoted oligodendrocyte differentiation
            and maturation, as well as cell survival.&rdquo;
            <Cite
              id="quintela-lopez-2019-celldeathdis"
              citationIds={["quintela-lopez-2019-celldeathdis-c1"]}
            />{" "}
            They &ldquo;required integrin &beta;1 receptor, Src-family kinase
            Fyn and Ca&#xB2;&#x207A;/CaMKII as effectors to modulate MBP
            protein expression.&rdquo;
            <Cite
              id="quintela-lopez-2019-celldeathdis"
              citationIds={["quintela-lopez-2019-celldeathdis-c2"]}
            />
          </p>
          <p className="font-medium text-[#1A0F0A]/90">
            No other proteinopathy protein both inhibits its own generating
            enzyme and actively promotes myelination as an extracellular signal.
          </p>
        </ProteinEntry>

        <ProteinEntry
          name="Tau"
          summary="Iron export partner (~550 Mya). Knockout causes brain iron accumulation."
          isExpanded={expanded === "tau"}
          onToggle={() => toggle("tau")}
        >
          <p>
            &ldquo;Confirmed presence in Chondrichthyes sets their period of
            formation around 550+ million years ago.&rdquo;
            <Cite id="sundermann-2016-bmcgenomics" />{" "}
            &ldquo;Tau deficiency induces parkinsonism with dementia by
            impairing APP-mediated iron export.&rdquo;
            <Cite
              id="lei-2012-natmed"
              citationIds={["lei-2012-natmed-c1"]}
            />{" "}
            &ldquo;Tau-mediated iron export prevents ferroptotic damage.&rdquo;
            <Cite id="tuo-2017" citationIds={["tuo-2017-c1"]} />
          </p>
        </ProteinEntry>

        <ProteinEntry
          name="PrP"
          summary="Descended from ZIP metal transporters (~530 Mya). Knockout disrupts iron homeostasis."
          isExpanded={expanded === "prp"}
          onToggle={() => toggle("prp")}
        >
          <p>
            &ldquo;The prion gene family is phylogenetically derived from a
            ZIP-like ancestral molecule&rdquo; at &ldquo;the base of the
            chordate lineage.&rdquo;
            <Cite
              id="schmitt-ulms-2009-plosone"
              citationIds={["schmitt-ulms-2009-plosone-c1", "schmitt-ulms-2009-plosone-c2"]}
            />{" "}
            &ldquo;PrP(C) mediates cellular iron uptake and transport, and
            mutant PrP forms alter cellular iron levels.&rdquo;
            <Cite
              id="singh-2009-plosone"
              citationIds={["singh-2009-plosone-c1"]}
            />{" "}
            &ldquo;Selective deletion of PrP in transgenic mice alters systemic
            iron homeostasis.&rdquo;
            <Cite
              id="singh-2009-plosone-ko"
              citationIds={["singh-2009-plosone-ko-c1"]}
            />
          </p>
        </ProteinEntry>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Expanded content for each "What if" line                          */
/* ------------------------------------------------------------------ */

const expandedContent: ReactNode[] = [
  // Line 0: immune weapon that never switched off
  <ImmuneWeapons key="exp-0" />,

  // Line 1: not even unique to the brain — placental Aβ in preeclampsia
  <div key="exp-1" className="space-y-3">
    <p>
      A&beta; plaques are not just a brain problem. They accumulate in
      preeclamptic placentas too, where hypoxia drives BACE-1 upregulation
      and A&beta;
      production.
      <Cite
        id="nishioka-2026-lsa"
        citationIds={["nishioka-2026-lsa-c2"]}
      />{" "}
      &ldquo;A&beta;42 fibrils inhibited CTB syncytialization, a critical step
      in maintaining pregnancy.&rdquo;
      <Cite
        id="nishioka-2026-lsa"
        citationIds={["nishioka-2026-lsa-c1"]}
      />
    </p>
    <p>
      &ldquo;Patients with preeclampsia exhibited elevated hemoglobin, ferritin,
      and serum iron levels from the second trimester, alongside placental iron
      overload.&rdquo;
      <Cite
        id="yang-2026-hypertension"
        citationIds={["yang-2026-hypertension-c1"]}
      />{" "}
      Iron-loaded trophoblasts die through both ferroptosis (lipid peroxidation
      up, GPX4 down) and
      apoptosis.
      <Cite
        id="yang-2026-hypertension"
        citationIds={["yang-2026-hypertension-c2"]}
      />{" "}
      Deferoxamine (an iron chelator) and MitoQ (a mitochondrial antioxidant)
      both rescue the
      damage.
      <Cite
        id="yang-2026-hypertension"
        citationIds={["yang-2026-hypertension-c3"]}
      />
    </p>
  </div>,

  // Line 2: iron, in every brain they've checked
  <div key="exp-2" className="space-y-3">
    <ul className="space-y-3 list-none pl-0">
      <li>
        <span className="font-serif font-semibold text-[#1A0F0A]">
          Alzheimer&rsquo;s
        </span>{" "}
        &mdash; Iron-free A&beta; aggregates are non-toxic. Add iron during
        aggregation, and they become
        lethal.
        <Cite id="liu-2011-jbc" citationIds={["liu-2011-jbc-c1"]} />
      </li>
      <li>
        <span className="font-serif font-semibold text-[#1A0F0A]">
          Parkinson&rsquo;s
        </span>{" "}
        &mdash; Lewy bodies contain &ldquo;a crowded environment of membranes
        ... including vesicular structures and dysmorphic organelles.&rdquo;
        Fibrils were found in &ldquo;many, but not all&rdquo; inclusions.
        <Cite
          id="shahmoradian-2019-natneurosci"
          citationIds={["shahmoradian-2019-natneurosci-c1", "shahmoradian-2019-natneurosci-c2"]}
        />
      </li>
      <li>
        <span className="font-serif font-semibold text-[#1A0F0A]">ALS</span>{" "}
        &mdash; GPX4 depletion, the hallmark of ferroptosis, appears across
        SOD1, TDP-43, and C9orf72 models. Three mutations, one
        endpoint.
        <Cite
          id="wang-2022-celldeathdiff"
          citationIds={["wang-2022-celldeathdiff-c1"]}
        />
      </li>
      <li>
        <span className="font-serif font-semibold text-[#1A0F0A]">
          Prion disease
        </span>{" "}
        &mdash; Ferroptosis confirmed via RAC3-dependent
        pathway.
        <Cite
          id="peng-2025-natcomms"
          citationIds={["peng-2025-natcomms-c1"]}
        />{" "}
        &ldquo;The prion gene family is phylogenetically derived from a
        ZIP-like ancestral molecule.&rdquo;
        <Cite
          id="schmitt-ulms-2009-plosone"
          citationIds={["schmitt-ulms-2009-plosone-c1"]}
        />
      </li>
    </ul>
    <p>
      The protein that aggregates depends on which cell type iron overwhelms.
      The endpoint &mdash; ferroptosis &mdash; is always the same.
    </p>
  </div>,
];

/* ------------------------------------------------------------------ */
/*  Single clickable line with scroll-driven underline                */
/* ------------------------------------------------------------------ */

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
            <div className="py-6 px-6 sm:px-10 mt-0 bg-[rgba(26,15,10,0.06)] text-[#1A0F0A]/80 font-sans text-base sm:text-lg leading-relaxed">
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
  onExpandChange,
}: {
  progress: MotionValue<number>;
  onExpandChange?: (expanded: boolean) => void;
}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((i: number) => {
    setExpandedIndex((prev) => {
      const next = prev === i ? null : i;
      onExpandChange?.(next !== null);
      return next;
    });
  }, [onExpandChange]);

  // Lead-in "What if it's..." scroll entrance
  const leadInOpacity = useTransform(progress, [0.66, 0.72], [0, 1]);
  const leadInY = useTransform(progress, [0.66, 0.72], [30, 0]);

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

/* ------------------------------------------------------------------ */
/*  Mobile: no scroll-driven underline/fade — all lines visible        */
/* ------------------------------------------------------------------ */

export function WhatIfLinesMobile() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }, []);

  return (
    <div className="mt-8">
      <p className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-[#92400E] leading-tight mb-6">
        What if it&rsquo;s&hellip;
      </p>

      <div className="flex flex-col gap-4">
        {whatIfLines.map((line, i) => {
          const isExpanded = expandedIndex === i;
          const isDimmed = expandedIndex !== null && !isExpanded;

          return (
            <div key={i}>
              <button
                onClick={() => handleToggle(i)}
                className="text-left w-full cursor-pointer group"
                style={{ opacity: isDimmed ? 0.3 : 1, transition: "opacity 300ms" }}
              >
                <span className="font-serif text-[clamp(1.25rem,3vw,2rem)] text-[#1A0F0A] leading-tight">
                  {line.label}
                </span>
              </button>

              {/* Static underline */}
              <div className="relative mt-1">
                <div
                  className="h-[2px] bg-[#92400E]"
                  style={{
                    transformOrigin: line.underlineFrom === "left" ? "left" : "right",
                    opacity: isExpanded ? 0 : 1,
                    transition: "opacity 200ms",
                  }}
                />
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

              {/* Expanded block */}
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
                    <div className="py-6 px-6 sm:px-10 mt-0 bg-[rgba(26,15,10,0.06)] text-[#1A0F0A]/80 font-sans text-base sm:text-lg leading-relaxed">
                      <div className="max-w-[782px] mx-auto">
                        {expandedContent[i]}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
