"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const roles = [
  {
    title: "Tumor suppression",
    subtitle: "p53 kills pre-cancerous cells via ferroptosis",
    body: "p53 represses SLC7A11, starving cells of cystine and triggering iron-dependent lipid peroxidation. A p53 mutant that cannot induce apoptosis, senescence, or cell-cycle arrest fully retains ferroptosis and tumor suppression. Ferroptosis alone is sufficient for p53's anti-cancer function.",
    detail:
      "A second pathway through ALOX12 works independently of GPX4 and ACSL4. Loss of a single Alox12 allele accelerates tumorigenesis. Cancer cells overexpress SLC7A11 to evade exactly this mechanism.",
    citations: ["Jiang et al. 2015, Nature", "Chu et al. 2019, Nat Cell Biol"],
  },
  {
    title: "Anti-tumor immunity",
    subtitle:
      "CD8\u207A T cells weaponize ferroptosis against tumors",
    body: "Activated CD8\u207A T cells release IFN-\u03B3, which downregulates System Xc\u207B on tumor cells, collapsing cystine import and triggering ferroptotic death. Clinical benefit from checkpoint immunotherapy (anti-PD-1) correlates with reduced SLC3A2 and increased IFN-\u03B3.",
    detail:
      "IFN-\u03B3 combined with arachidonic acid also induces ACSL4, remodeling tumor membranes with oxidation-prone PUFAs. Meanwhile, M1 macrophages resist ferroptosis via iNOS/NO, ensuring the immune cells that deploy this weapon survive it.",
    citations: [
      "Wang et al. 2019, Nature",
      "Liao et al. 2022, Cancer Cell",
      "Kapralov et al. 2020, Nat Chem Biol",
    ],
  },
  {
    title: "Antimicrobial defense",
    subtitle: "Macrophages deploy iron to kill intracellular pathogens",
    body: "During early bacterial infection, macrophages increase intracellular ferrous iron and lipid peroxidation. They reverse ferroportin to import iron into bacterial vacuoles, inducing ferroptosis-like death in the pathogen. Ferroptosis inducers enhance intracellular bacterial killing.",
    detail:
      "The hepcidin/ferroportin axis, lactoferrin, and lipocalin-2 all restrict iron availability to extracellular pathogens (nutritional immunity). Pathogens recognize the threat: P. aeruginosa expresses a lipoxygenase that hijacks host ferroptosis machinery to kill airway epithelium.",
    citations: [
      "Ma et al. 2022, Theranostics",
      "Dar et al. 2018, J Clin Invest",
    ],
  },
];

const layerMapping = [
  {
    layer: "Fe",
    role: "Keep iron compartmentalized so it cannot catalyze lipid peroxidation in the wrong place",
  },
  {
    layer: "L",
    role: "GPX4, GSH, and NAD\u207A/SIRT3 directly neutralize lipid peroxides",
  },
  {
    layer: "I",
    role: "Myelin, ferritin, and iron-binding proteins separate iron from vulnerable membranes",
  },
  {
    layer: "N",
    role: "BBB and pericytes prevent uncontrolled iron entry; astrocyte endfeet manage distribution",
  },
  {
    layer: "E",
    role: "Ferroportin, glymphatic flow, and hepcidin regulation remove excess iron",
  },
];

export default function FerroptosisDefensePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-white/5 py-16 px-6">
        <Container width="reading">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-400 mb-3">
            Section 2.5
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Ferroptosis is an immune defense
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ferroptosis is not a design flaw. It is an ancient, deliberately
            deployed immune weapon for tumor suppression, antimicrobial defense,
            and elimination of damaged cells. The five FELINE defense layers
            exist to keep this weapon under control. Neurodegeneration is what
            happens when the safety systems fail.
          </p>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-12 px-6">
        <Container width="reading">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {roles.map((role) => (
              <motion.div key={role.title} variants={fadeInUp} className="glass-card p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-teal-400 mb-1">
                  {role.subtitle}
                </p>
                <h2 className="text-xl font-serif text-white mb-3">
                  {role.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {role.body}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {role.detail}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.citations.map((c) => (
                    <span
                      key={c}
                      className="text-xs text-gray-500 border border-white/5 rounded px-2 py-0.5"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Evolutionary context */}
      <section className="border-t border-white/5 py-12 px-6">
        <Container width="reading">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h2 className="font-serif text-2xl text-white mb-4">
              Billions of years old
            </h2>
            <div className="glass-card p-6 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Ferroptosis arises from incorporating polyunsaturated fatty acids
                into cell membranes in an oxygen-rich, iron-containing
                environment. This vulnerability has existed since aerobic
                metabolism evolved. Ferroptosis-like cell death occurs in plants,
                fungi, and protozoa.
              </p>
              <p>
                Plant GPX proteins can functionally substitute for mammalian GPX4
                in preventing ferroptosis, demonstrating billion-year
                conservation. GPX4 knockout is embryonically lethal in mice.
                Ferroptosis defense is non-negotiable for multicellular life.
              </p>
              <p className="text-gray-400 text-sm">
                Stockwell et al. 2017, Cell; Friedmann Angeli et al. 2014, Nat
                Cell Biol; Oesterle et al. 2021
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* The mop, not the weapon */}
      <section className="border-t border-white/5 py-12 px-6">
        <Container width="reading">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h2 className="font-serif text-2xl text-white mb-4">
              A{"\u03B2"}: the iron mop, not the iron weapon
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Structural biology resolves the confusion about amyloid-beta at
              plaques. A{"\u03B2"} has two structurally independent domains
              serving independent functions:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <div className="glass-card p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-red-400 mb-2">
                  Domain B (residues 17-42)
                </p>
                <p className="text-white font-medium mb-2">
                  Antimicrobial killing
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Hydrophobic. Inserts into bacterial membranes. Kills via
                  physical disruption, pore formation, and pathogen
                  agglutination. Requires no metals. This is the weapon.
                </p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-amber-400 mb-2">
                  Domain A (residues 1-16)
                </p>
                <p className="text-white font-medium mb-2">Iron cleanup</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Hydrophilic. Faces outward into aqueous phase. Contains all
                  metal-binding residues (His6, His13, His14). Chelates iron
                  released from dying neurons. This is the mop.
                </p>
              </div>
            </div>
            <div className="glass-card p-6 border-l-2 border-amber-400/40 mb-6">
              <p className="text-sm font-medium text-amber-400 mb-2">
                The geometric proof
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                When A{"\u03B2"} inserts into a bacterial membrane via Domain B,
                the metal-binding Domain A faces AWAY from the target. Compare
                piscidin, where Cu-ATCUN inserts INTO the membrane to generate
                ROS at the bacterial lipid bilayer. Piscidin copper enhancement
                is well-documented (2-16x). A{"\u03B2"} metal enhancement of
                antimicrobial killing has never been demonstrated. The geometry
                explains why. Iron at plaques is not a weapon. It is cleanup.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Hayden et al. 2015; Oludiran et al. 2019; Moir et al. 2018
            </p>
          </motion.div>
        </Container>
      </section>

      {/* The Mop Analogy */}
      <section className="border-t border-white/5 py-12 px-6">
        <Container width="reading">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h2 className="font-serif text-2xl text-white mb-4">
              The Mop Analogy
            </h2>
            <div className="glass-card p-6 mb-6">
              <p className="text-gray-300 leading-relaxed italic">
                The field observed someone mopping up biohazardous waste. They
                noticed the mop was covered in hazardous material and that people
                near dirty mops were sick. They concluded: "mops make people
                sick."
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              The disease transition is not{" "}
              <span className="text-red-400">
                weapon {"\u2192"} collateral damage
              </span>
              . It is{" "}
              <span className="text-amber-400">
                cleanup {"\u2192"} overload {"\u2192"} toxicity
              </span>
              :
            </p>
            <ol className="space-y-3 text-gray-300 text-sm leading-relaxed mb-6 list-decimal list-inside">
              <li>
                Tissue damage occurs (vascular leak, infection, aging, OL death)
              </li>
              <li>
                Two independent responses: Domain B kills pathogens, Domain A
                chelates iron from the debris
              </li>
              <li>
                Microglia compact both into dense-core plaques
              </li>
              <li>
                If damage is acute and limited: cleanup succeeds, plaques clear
              </li>
              <li>
                If damage is chronic and escalating: the mop becomes saturated.
                Iron-A{"\u03B2"} composites generate omnidirectional Fenton
                chemistry. The cleanup tool becomes a source of damage.
              </li>
            </ol>
            <div className="glass-card p-5 border-l-2 border-teal-400/40">
              <p className="text-sm font-medium text-teal-400 mb-2">
                Clinical trials confirm the model
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Therapies that handle the waste (iron) outperform those that
                merely remove the mop: donanemab (targets dirtiest plaques,
                35%) {">"} lecanemab (27%) {">"} gantenerumab (removes
                mops, dumps waste, no benefit). Deferiprone removes waste from
                the wrong location and WORSENED decline.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* The dual nature */}
      <section className="border-t border-white/5 py-12 px-6">
        <Container width="reading">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h2 className="font-serif text-2xl text-white mb-4">
              Defense becomes disease
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              The same iron-dependent lipid peroxidation that kills cancer cells
              and pathogens becomes devastating when chronic and dysregulated.
              The FELINE defense layers map directly onto ferroptosis
              containment:
            </p>
            <div className="space-y-3">
              {layerMapping.map((item) => (
                <div key={item.layer} className="glass-card p-4 flex items-start gap-4">
                  <span className="text-teal-400 font-serif font-bold text-lg shrink-0 w-8">
                    {item.layer}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 glass-card p-6 border-l-2 border-teal-400/40">
              <p className="text-gray-300 leading-relaxed">
                When these layers fail with age and comorbidity, the weapon
                designed to kill cancer cells and pathogens turns on the brain's
                own cells. Particularly the iron-rich oligodendrocytes that
                produce myelin. This is not a new disease mechanism. It is the
                body's oldest defense, running without a safety net.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
