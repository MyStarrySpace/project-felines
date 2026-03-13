// Iron Downstream Cascades — structured data for /explore/iron-cascades

export interface MechanismStep {
  step: number;
  title: string;
  body: string;
  detail?: string;
  keyPaper?: string;
  quote?: string;
}

export interface CascadeStat {
  value: string;
  label: string;
  source?: string;
}

export interface CrossLink {
  label: string;
  href: string;
}

export interface CascadeSection {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  mechanismSteps: MechanismStep[];
  stats?: CascadeStat[];
  crossLinks?: CrossLink[];
}

export interface ResearchFinding {
  paper: string;
  journal?: string;
  finding: string;
  detail?: string;
  tag: "amyloid" | "tau" | "myelin" | "cholinergic";
}

export interface AntiTauTrialResult {
  antibody: string;
  generation: "first" | "second" | "aso";
  target: string;
  engagement: string;
  outcome: string;
  source?: string;
}

export interface AntiAmyloidTrialResult {
  drug: string;
  category: "antibody" | "bace";
  target: string;
  amyloidEffect: string;
  clinicalOutcome: string;
  ariaRate?: string;
  felineNote: string;
  source?: string;
}

export interface MetalOligomerRow {
  metal: string;
  effect: string;
  morphology: string;
  toxicity: string;
}

export interface AriaBindingRow {
  antibody: string;
  caaBinding: string;
  ariaRate: string;
  note: string;
}

export interface OlVulnerabilityRow {
  property: string;
  function: string;
  vulnerability: string;
}

export interface OpcDifferentiationRow {
  factor: string;
  effect: string;
  felineNote: string;
}

export interface RegionalVulnerabilityRow {
  rank: string;
  region: string;
  influx: string;
  efflux: string;
  selfRegulates: string;
  firstAffected: string;
}

export interface CrossDiseaseNBMRow {
  disease: string;
  nbmStatus: string;
  felineLayer: string;
}

export const cascadesHero = {
  kicker: "Iron Cascades",
  title: "One metal. Four downstream disasters.",
  subtitle:
    "Iron doesn\u2019t just accumulate. It drives amyloid production, tau pathology, oligodendrocyte death, and cholinergic failure through distinct but converging mechanisms.",
};

/* ── Section A: Iron → Amyloid ───────────────────────────────────────── */

export const amyloidSection: CascadeSection = {
  id: "amyloid",
  kicker: "Iron \u2192 Amyloid",
  title: "Iron drives amyloid production, not the other way around",
  subtitle:
    "APP contains an iron-responsive element in its 5\u2019 UTR. When intracellular iron rises, APP translation increases. The resulting amyloid-\u03B2 then concentrates iron further, creating a feed-forward loop. Every major anti-amyloid trial result is consistent with this model.",
  mechanismSteps: [
    {
      step: 1,
      title: "Iron drives APP translation via IRE",
      body: "The APP mRNA 5\u2019 untranslated region contains a functional iron-responsive element (IRE). When intracellular iron rises, iron regulatory proteins release the IRE, allowing ribosomes to translate more APP. IRP2 knockout mice show increased APP and A\u03B2.",
      detail:
        "The IRE in APP is a type II stem-loop that responds to the same iron-sensing machinery (IRP1/IRP2) that controls ferritin and transferrin receptor. This places APP under direct iron-dependent translational control.",
      keyPaper: "Rogers et al., J Biol Chem, 2002",
      quote:
        "An iron-responsive element type II in the 5'-untranslated region of the Alzheimer's amyloid precursor protein transcript",
    },
    {
      step: 2,
      title: "Iron shifts APP to amyloidogenic processing",
      body: "Iron increases BACE1 expression and activity, pushing APP cleavage from the non-amyloidogenic (\u03B1-secretase) pathway toward the amyloidogenic (\u03B2-secretase) pathway. The result: more A\u03B2 production from each APP molecule.",
      detail:
        "Iron treatment of neuronal cells increases BACE1 protein levels and shifts the ratio of sAPP\u03B1 to sAPP\u03B2. This is independent of the IRE-mediated APP increase, meaning iron hits both quantity (more APP) and processing (more amyloidogenic cleavage).",
      keyPaper: "Becerril-Ortega et al., 2014",
    },
    {
      step: 3,
      title: "APP dual function: surface protection vs amyloidogenic harm",
      body: "APP on the cell surface stabilizes ferroportin, enabling iron export (Function 1). When BACE1 cleaves APP, it removes APP from the surface, destabilizing ferroportin. The released A\u03B2 then concentrates iron extracellularly (Function 2). The shift from Function 1 to Function 2 is doubly harmful: intracellular iron rises AND extracellular iron-A\u03B2 composites form.",
      detail:
        "Tsatsanis et al. (2020) showed endocytotic amyloidogenic processing of APP destabilizes ferroportin. Non-amyloidogenic processing preserves ferroportin stability. Wong et al. (2014) corrected the earlier Duce 2010 ferroxidase claim: APP lacks ferroxidase activity but stabilizes ferroportin. Ji et al. (2018) identified hephaestin as the actual neuronal ferroxidase.",
      keyPaper: "Tsatsanis et al., Mol Psychiatry, 2020",
    },
    {
      step: 4,
      title: "A\u03B2 concentrates and reduces iron: four-step biophysics",
      body: "A\u03B2 does not simply chelate iron protectively. The process has four stages: (1) Iron accumulation via His6/His13/His14 coordination. (2) Redox reduction of Fe\u00B3\u207A to Fe\u00B2\u207A during aggregation. (3) Mineral transformation to magnetite (Fe\u2083O\u2084), a mixed-valence mineral that catalyzes Fenton chemistry. (4) Microglial compaction into dense-core plaques to physically isolate the dangerous composites.",
      detail:
        "Everett et al. (2014) showed A\u03B2 directly reduces ferric iron. Telling et al. (2017) confirmed dense-core plaques contain Fe\u00B2\u207A while diffuse plaques contain Fe\u00B3\u207A. Everett et al. (2020) demonstrated iron stored in ferritin is chemically reduced in the presence of aggregating A\u03B2. Everett et al. (2021) found elemental zero-oxidation-state Fe\u2070 and Cu\u2070 in human AD plaque cores.",
      keyPaper: "Telling et al., Cell Chemical Biology, 2017",
    },
    {
      step: 5,
      title: "His13 as linchpin: why mice don\u2019t get AD",
      body: "Human and rodent A\u03B2 differ at three residues in the metal-binding domain. The critical substitution is His13 (human) \u2192 Arg13 (rodent), which eliminates one of three metal coordination sites. With only two histidines, rodent A\u03B2 forms dimers whose C-terminal tails point in opposite directions, blocking further oligomerization. Mice never develop spontaneous AD because their A\u03B2 cannot form metal-bridged aggregates.",
      detail:
        "Istrate et al. (2012) determined the NMR structure of rat A\u03B2(1-16) and showed Arg13 prevents oligomeric assembly. All transgenic AD models require human APP to produce plaques. Chourrout et al. (2023) showed different transgenic constructs produce plaques with dramatically different metal profiles, reinforcing that the A\u03B2-metal interaction, not A\u03B2 alone, drives plaque pathology.",
      keyPaper: "Istrate et al., Biophys J, 2012",
    },
    {
      step: 6,
      title: "Iron determines oligomer toxicity",
      body: "Ott et al. (2015) provided definitive evidence in Drosophila: the interaction between iron and A\u03B2 is specific, not seen for other aggregation-prone polypeptides. Systematic His\u2192Ala substitutions showed both metal-dependent aggregation toxicity and Fenton-mediated toxicity, and both pathways require iron. Iron is important for A\u03B2 dimerization itself, the first step in oligomer formation.",
      detail:
        "Different metals produce radically different aggregate forms. Fe\u00B3\u207A promotes annular protofibrils (most toxic). Cu\u00B2\u207A produces amorphous aggregates. Zn\u00B2\u207A stabilizes non-fibrillar oligomers. Without any metal, A\u03B2 forms mature fibrils, the least toxic form. The foundational oligomer toxicity experiments used synthetic A\u03B2 in standard buffers not treated to remove trace metals. The \u201Cmetal-free oligomer\u201D preparations almost certainly contain metal-A\u03B2 complexes.",
      keyPaper: "Ott et al., Dis Model Mech, 2015",
    },
    {
      step: 7,
      title: "Compaction as damage control",
      body: "Microglia compact diffuse A\u03B2 into dense-core plaques as iron isolation, not cleanup. Dense-core plaques have less toxic effect than diffuse plaques because iron is contained. TREM2 knockout mice have diffuse, not compact, plaques and worse outcomes. Genetic manipulation increasing compaction (Plexin-B1 deletion) improves outcomes.",
      detail:
        "The Fe\u00B2\u207A/magnetite composites within A\u03B2 aggregates are dangerous if diffuse (accessible to surrounding neurons). TREM2-mediated microglial compaction into dense-core plaques physically isolates these composites behind an ApoE/microglial barrier. A Zn\u00B2\u207A spreading wave from maturing plaques can disrupt APP-ferroportin interaction in neighboring neurons, propagating iron retention. Compaction sequesters both iron and zinc, breaking this cycle.",
      keyPaper: "Lemke & Bhatt, Front Neurol, 2022",
    },
    {
      step: 8,
      title: "Anti-amyloid trials through the iron lens",
      body: "Target specificity predicts outcomes. Solanezumab (targets monomers, no CAA binding) and Crenezumab (targets oligomers) both failed: these species don\u2019t engage iron-A\u03B2 complexes in plaques. Lecanemab (~27% slowing) and Donanemab (~35% slowing) show modest benefit because removing plaques also removes iron-A\u03B2 complexes via Fc-mediated microglial phagocytosis.",
      detail:
        "Gantenerumab significantly reduced amyloid plaques, CSF total tau, and pTau181 but showed no clinical benefit: biomarker win without clinical win, exactly what an iron-first model predicts. Fc-silenced lecanemab (which removes plaques without activating microglia) shows no benefit, suggesting the benefit comes from microglial reprogramming, not plaque removal per se.",
      keyPaper: "Söderberg et al., Sci Rep, 2024",
    },
    {
      step: 9,
      title: "BACE inhibitors confirm: blocking A\u03B2 worsens outcomes",
      body: "Three BACE inhibitors (verubecestat, atabecestat, lanabecestat) didn\u2019t just fail. They worsened cognition. Under the amyloid hypothesis, reducing A\u03B2 production should slow disease. Under the iron model, this is expected: blocking A\u03B2 production removes the backup iron sequestration system while upstream iron accumulation continues.",
      detail:
        "BACE inhibitors preserve surface APP (good for ferroportin) but also signal that iron dysregulation is severe enough that the system cannot maintain normal processing. Simply blocking BACE1 does not fix upstream iron accumulation or ferroportin destabilization. The worsened cognition may reflect unsequestered iron causing direct neuronal damage.",
    },
    {
      step: 10,
      title: "ARIA: a vascular event, not a plaque event",
      body: "S\u00F6derberg et al. (2024) measured A\u03B2 antibody binding to cerebral amyloid angiopathy (CAA) fibrils from human tissue. ARIA rates correlate with CAA fibril binding affinity, not parenchymal plaque clearance. Solanezumab (negligible CAA binding): 0% ARIA. Aducanumab (high CAA binding): ~35% ARIA. Lecanemab (low CAA binding): ~13% ARIA.",
      detail:
        "Taylor et al. (2024) showed antibody-CAA immune complex formation triggers perivascular macrophage activation, smooth muscle cell destruction, vascular fibrosis, and BBB breakdown. APOE4 dose-dependence is explained by CAA burden (APOE4 accelerates vascular amyloid deposition). Iron release from vascular A\u03B2 composites may amplify damage via Fenton chemistry in vessel walls, but this is not yet experimentally demonstrated as a major ARIA contributor.",
      keyPaper: "S\u00F6derberg et al., Sci Rep, 2024",
    },
    {
      step: 11,
      title: "A\u03B2 is not brain-exclusive",
      body: "APP is expressed throughout the body. Gut epithelium has 2\u20136\u00D7 higher APP mRNA than brain. The retina, placenta, and skin all produce A\u03B2. This argues against A\u03B2 as a brain-specific pathological molecule and for it as a general iron-response protein.",
      detail:
        "Arai et al. (1991) showed APP mRNA is abundant in peripheral tissues. Guo et al. (2014) confirmed high gut epithelial expression. Jin et al. (2023) documented A\u03B2 in retinal iron pathology. Nishioka et al. (2026) found A\u03B2 aggregates in preeclamptic placentas.",
      keyPaper: "Guo et al., 2014",
    },
    {
      step: 12,
      title: "Iron\u2013A\u03B2 colocalization in vivo",
      body: "Laser ablation ICP-MS shows iron and A\u03B2 colocalize in amyloid plaques. MRI iron (QSM) correlates with amyloid PET signal. In MCI patients, cortical iron explains A\u03B2 deposition better than any other single variable (R\u00B2 = 0.80).",
      detail:
        "Hare et al. (2016) mapped iron distribution at sub-plaque resolution, confirming direct colocalization. Ayton et al. (2015) showed brain iron (ferritin) correlates with A\u03B2 PET signal and predicts cognitive decline.",
      keyPaper: "Ayton et al., Nat Commun, 2015",
    },
  ],
  stats: [
    { value: "R\u00B2 = 0.80", label: "Iron\u2013A\u03B2 correlation in MCI", source: "Ayton 2015" },
    { value: "0%", label: "Clinical benefit from BACE inhibitors (3 trials)", source: "Verubecestat, Atabecestat, Lanabecestat" },
    { value: "~27%", label: "Cognitive slowing by lecanemab", source: "Lecanemab Phase 3" },
    { value: "Fe\u2070", label: "Zero-valent iron found in human AD plaque cores", source: "Everett 2021" },
  ],
  crossLinks: [
    { label: "A\u03B2 in preeclampsia", href: "/explore/barrier/placenta" },
    { label: "A\u03B2 in retinal disease", href: "/explore/barrier/retinal" },
  ],
};

/* ── Section B: Iron → Tau ───────────────────────────────────────────── */

export const tauSection: CascadeSection = {
  id: "tau",
  kicker: "Iron \u2192 Tau",
  title: "Iron hijacks tau from its real job, then uses it as a scaffold",
  subtitle:
    "Tau normally traffics APP to the cell surface to stabilize ferroportin. Iron-driven kinase activation hyperphosphorylates tau, detaching it from microtubules. Then iron serves as the cofactor that drives tau aggregation. The result is a self-sustaining vicious cycle.",
  mechanismSteps: [
    {
      step: 1,
      title: "Tau\u2019s normal job: APP trafficking for iron export",
      body: "Tau binds microtubules and transports APP-containing vesicles to the cell surface. Once there, APP stabilizes ferroportin, enabling iron export. When tau functions normally, this is an iron defense mechanism.",
      detail:
        "Lei et al. (2012) showed tau knockout leads to iron accumulation in the brain, directly implicating tau in iron homeostasis. Tuo et al. (2017) confirmed that tau deficiency causes age-dependent brain iron accumulation and neurodegeneration rescued by iron chelation.",
      keyPaper: "Lei et al., Nature Medicine, 2012",
    },
    {
      step: 2,
      title: "Iron activates GSK-3\u03B2/CDK5 \u2192 tau hyperphosphorylation",
      body: "Iron activates glycogen synthase kinase-3\u03B2 (GSK-3\u03B2) and cyclin-dependent kinase 5 (CDK5). These kinases phosphorylate tau at multiple sites including Thr205, Thr231, and Ser396. Hyperphosphorylated tau detaches from microtubules.",
      detail:
        "Guo et al. (2013) demonstrated iron treatment increases pTau at specific AD-relevant epitopes via GSK-3\u03B2 activation. The iron-GSK-3\u03B2-tau axis is upstream of the aggregation cascade.",
      keyPaper: "Guo et al., 2013",
    },
    {
      step: 3,
      title: "Some phosphorylation is initially protective",
      body: "Not all tau phosphorylation is pathological. Phosphorylation at Ser262 and Ser214 prevents tau from forming paired helical filaments (PHFs). This early phosphorylation may be a defense against aggregation that is eventually overwhelmed.",
      detail:
        "Schneider et al. (1999) showed Ser262 phosphorylation inhibits PHF assembly. This creates a window where phosphorylated tau is actually safer than unmodified tau, but continued iron-driven kinase activity eventually pushes tau past the protective threshold into pathological aggregation.",
      keyPaper: "Schneider et al., Biochemistry, 1999",
    },
    {
      step: 4,
      title: "The aggregation paradox: tau won\u2019t aggregate alone",
      body: "Tau is one of the most soluble proteins known. Even at 150 \u03BCM, recombinant tau won\u2019t form fibrils without an exogenous cofactor. Every in vitro tau aggregation experiment uses heparin, RNA, arachidonic acid, or another polyanion. The field has studied cofactor-dependent aggregation for decades while interpreting results through a self-templating prion framework.",
      detail:
        "Heparin-induced tau filaments produce structures that differ from disease (Zhang et al. 2019, cryo-EM). The standard in vitro model may not reflect the actual in vivo aggregation mechanism. The identity of the true in vivo cofactor is a critical open question.",
      keyPaper: "Zheng et al., Int J Mol Sci, 2024",
    },
    {
      step: 5,
      title: "Iron is the in vivo cofactor",
      body: "Fe\u00B3\u207A bridges phosphate groups on hyperphosphorylated tau, creating intermolecular cross-links that nucleate aggregation. Both Fe\u00B2\u207A and Fe\u00B3\u207A induce conformational changes (coil-to-helix transitions preceding \u03B2-sheet formation). Fe\u00B3\u207A also promotes tau\u2013\u03B1-synuclein co-aggregation, producing oligomers of ~53 tau + 10 \u03B1-syn monomers per particle.",
      detail:
        "Yamamoto et al. (2002) showed Fe\u00B3\u207A induces PHF-tau aggregation through phosphate-dependent binding, and Fe\u00B2\u207A reverses it. Ahmadi et al. (2019) confirmed both iron oxidation states promote aggregation-prone conformational changes via mass spectrometry and CD. N\u00FCbling et al. (2012) demonstrated iron-enhanced tau-\u03B1Syn co-aggregation, explaining their frequent co-occurrence in disease.",
      keyPaper: "Yamamoto et al., J Neurochem, 2002",
    },
    {
      step: 6,
      title: "Remove the cofactor, reverse the aggregation",
      body: "Heparin- and RNA-induced tau fibrils spontaneously depolymerize when the cofactor is removed. Brain-derived tau seeds lost propagation capacity after a single generation without cofactor supplementation. Only when RNA cofactors were re-supplied did sustained multi-generational seeding continue. Tau aggregation is cofactor-dependent and reversible.",
      detail:
        "Fichou et al. (2018) demonstrated this in PNAS: the cross-\u03B2 assemblies are not thermodynamically stable structures. This is incompatible with a purely self-sustaining prion mechanism and suggests that maintaining the cofactor environment (i.e., elevated iron) is necessary for sustained aggregation.",
      keyPaper: "Fichou et al., PNAS, 2018",
    },
    {
      step: 7,
      title: "Ferroptosis \u2192 GSK-3\u03B2 \u2192 tau aggregation",
      body: "Ferroptotic signaling activates GSK-3\u03B2, which phosphorylates tau and also inhibits the proteasome. This creates a double hit: more aggregated tau and less capacity to clear it. The ferroptosis\u2013tau connection closes the loop between iron-driven cell death and protein pathology.",
      keyPaper: "Wang et al., Mol Neurobiol, 2022",
    },
    {
      step: 8,
      title: "The vicious cycle is self-sustaining",
      body: "Every tau molecule sequestered into a tangle is one that no longer traffics APP to the membrane. Aggregated tau is functionally equivalent to tau deletion for iron export. Progressive tau aggregation produces progressive iron retention, independent of any external iron loading. A small initial perturbation can tip the system past a threshold after which the tau\u2013iron cycle maintains itself autonomously.",
      detail:
        "The cycle: Tau aggregation \u2192 loss of APP trafficking \u2192 ferroportin loss \u2192 iron retention \u2192 more tau aggregation. Lei et al. (2012) showed clioquinol rescued the tau-KO phenotype, confirming iron accumulation (not loss of other tau functions) was the proximate cause of neurodegeneration.",
      keyPaper: "Lei et al., Nature Medicine, 2012",
    },
    {
      step: 9,
      title: "Cofactor-dependent propagation: why seeds need iron to catch",
      body: "Tau seeds spread between neurons via synaptic connectivity (Braak staging). But whether they successfully template aggregation in the recipient neuron depends on the local iron environment. Neurons with normal iron homeostasis may receive seeds and clear them. Iron-loaded neurons are primed for seeds to catch.",
      detail:
        "This explains why Braak staging follows connectivity but isn\u2019t perfectly predicted by connectivity alone. APOE4 carriers show faster tau progression not because APOE4 directly affects tau seeding, but because APOE4 worsens iron handling (pericyte dysfunction, microglial iron loading), creating a more permissive cofactor environment.",
    },
    {
      step: 10,
      title: "Anti-tau antibodies confirm the cofactor model",
      body: "First-generation anti-tau antibodies achieved up to 98% reduction in CSF free tau yet produced zero cognitive benefit. Under a pure prion model, this degree of seed interception should slow propagation. The cofactor model explains why: the extracellular seed is not the rate-limiting factor. Intracellular iron is.",
      detail:
        "Second-generation antibodies targeting tau\u2019s mid-domain show the first biological signals. Bepranemab slowed tau PET accumulation by 33\u201358% vs placebo but only showed cognitive benefit in APOE4 non-carriers with low baseline tau. Under the cofactor model, APOE4 carriers have such poor iron handling that tau-only therapy cannot overcome the iron-driven aggregation. BIIB080 (an ASO reducing tau mRNA) may work more broadly because it reduces substrate for iron-dependent aggregation in every neuron.",
    },
    {
      step: 11,
      title: "Iron\u2013tau colocalization; chelators reduce pTau",
      body: "Iron colocalizes with neurofibrillary tangles in AD brain tissue. Iron chelators reduce tau phosphorylation in animal models. Deferiprone and other chelators lower pTau levels, supporting iron as an upstream driver of tau pathology.",
      detail:
        "Rao & Adlard (2018) reviewed the evidence linking iron directly to tau pathology and showed that iron-targeted interventions reduce pTau. The cofactor model predicts that combining iron redistribution with anti-tau therapy should produce synergistic rather than additive benefit, because it breaks the vicious cycle at two points simultaneously.",
      keyPaper: "Rao & Adlard, Front Mol Neurosci, 2018",
    },
  ],
  stats: [
    { value: "150 \u03BCM", label: "Tau concentration that still won\u2019t fibrilize alone", source: "Ramachandran 2010" },
    { value: "98%", label: "CSF tau reduction by gosuranemab. Zero cognitive benefit.", source: "Shulman 2023" },
    { value: "33\u201358%", label: "Tau PET slowing by bepranemab (mid-domain antibody)", source: "Barton 2024 (CTAD)" },
    { value: "2\u00D7", label: "Brain iron increase in tau knockout mice", source: "Lei 2012" },
  ],
};

/* ── Vicious Cycle ───────────────────────────────────────────────────── */

export const viciousCycleSteps = [
  { id: "iron", label: "Iron \u2191", position: "top" as const },
  { id: "app", label: "APP \u2191", position: "right" as const },
  { id: "abeta", label: "A\u03B2 \u2191", position: "bottom-right" as const },
  { id: "fpn-destab", label: "Ferroportin destabilized", position: "bottom" as const },
  { id: "gsk3b", label: "GSK-3\u03B2 activated", position: "left-bottom" as const },
  { id: "tau-dys", label: "Tau can\u2019t traffic APP", position: "left" as const },
];

/* ── Anti-Tau Trial Results ─────────────────────────────────────────── */

export const antiTauTrials: AntiTauTrialResult[] = [
  {
    antibody: "Gosuranemab",
    generation: "first",
    target: "N-term aa 15\u201324",
    engagement: "98% reduction in CSF unbound N-term tau",
    outcome: "No benefit; worsened cognition in early AD",
    source: "Shulman 2023",
  },
  {
    antibody: "Tilavonemab",
    generation: "first",
    target: "N-term aa 25\u201330",
    engagement: "CSF/plasma tau shifts confirmed",
    outcome: "No benefit in PSP or AD; discontinued",
    source: "H\u00F6glinger 2021",
  },
  {
    antibody: "Zagotenemab",
    generation: "first",
    target: "MC1 conformational (N-term)",
    engagement: "Confirmed",
    outcome: "Missed primary endpoint; discontinued",
  },
  {
    antibody: "Semorinemab",
    generation: "first",
    target: "N-term aa 6\u201323",
    engagement: "CSF/plasma tau shifts confirmed",
    outcome: "Failed in early AD; modest signal in moderate AD",
    source: "Monteiro 2023",
  },
  {
    antibody: "Bepranemab",
    generation: "second",
    target: "Mid-domain aa 235\u2013250",
    engagement: "Tau PET slowed 33\u201358% vs placebo",
    outcome: "First biological disease modification; cognitive signal in APOE4 non-carriers only",
    source: "Barton 2024 (CTAD)",
  },
  {
    antibody: "E2814",
    generation: "second",
    target: "MTBR (HVPGG epitope)",
    engagement: "CSF MTBR-tau243 declined 30\u201370%",
    outcome: "Phase 2 in DIAN-TU; cognitive endpoints pending",
  },
  {
    antibody: "BIIB080 (ASO)",
    generation: "aso",
    target: "Tau mRNA (reduces production)",
    engagement: "CSF total tau reduced ~50\u201360%",
    outcome: "Slowed tau PET; favorable cognitive trends; FDA fast-tracked",
    source: "Mummery 2023",
  },
];

/* ── Anti-Amyloid Trial Results ────────────────────────────────────── */

export const antiAmyloidTrials: AntiAmyloidTrialResult[] = [
  {
    drug: "AN1792",
    category: "antibody",
    target: "A\u03B2 vaccine (active immunization)",
    amyloidEffect: "Cleared plaques",
    clinicalOutcome: "No cognitive benefit; encephalitis",
    felineNote: "Removed protective plaques",
  },
  {
    drug: "Bapineuzumab",
    category: "antibody",
    target: "A\u03B2 N-terminus",
    amyloidEffect: "Modest plaque reduction",
    clinicalOutcome: "Failed Phase 3",
    ariaRate: "~25%",
    felineNote: "High CAA binding; removed protective mechanism",
  },
  {
    drug: "Solanezumab",
    category: "antibody",
    target: "Soluble monomers",
    amyloidEffect: "No plaque effect",
    clinicalOutcome: "Failed Phase 3",
    ariaRate: "0%",
    felineNote: "Monomers don\u2019t engage iron-A\u03B2 complexes",
  },
  {
    drug: "Crenezumab",
    category: "antibody",
    target: "Oligomers preferentially",
    amyloidEffect: "No plaque effect",
    clinicalOutcome: "Failed Phase 3",
    ariaRate: "0%",
    felineNote: "Oligomers don\u2019t engage plaque-associated iron",
  },
  {
    drug: "Gantenerumab",
    category: "antibody",
    target: "Aggregated forms",
    amyloidEffect: "Strong plaque reduction, \u2193 CSF tau",
    clinicalOutcome: "Biomarker win, no clinical benefit",
    ariaRate: "~35%",
    felineNote: "Biomarker win without clinical win: doesn\u2019t address upstream iron",
  },
  {
    drug: "Aducanumab",
    category: "antibody",
    target: "Aggregated forms",
    amyloidEffect: "Strong plaque reduction",
    clinicalOutcome: "Marginal benefit, ARIA, controversial",
    ariaRate: "~35%",
    felineNote: "High CAA binding; partial iron redistribution",
  },
  {
    drug: "Lecanemab",
    category: "antibody",
    target: "Protofibrils",
    amyloidEffect: "Plaque reduction",
    clinicalOutcome: "~27% slowing; ARIA; deaths",
    ariaRate: "~13%",
    felineNote: "Fc-mediated microglial iron relocation, not plaque removal, drives benefit",
  },
  {
    drug: "Donanemab",
    category: "antibody",
    target: "Pyroglutamate-modified A\u03B2",
    amyloidEffect: "Strong plaque reduction",
    clinicalOutcome: "~35% slowing; ARIA",
    ariaRate: "~24%",
    felineNote: "Most direct plaque engagement of iron-A\u03B2 complexes",
  },
  {
    drug: "Verubecestat",
    category: "bace",
    target: "BACE1 inhibitor",
    amyloidEffect: "\u2193 A\u03B2 production",
    clinicalOutcome: "Worsened cognition",
    felineNote: "Blocked backup iron sequestration",
  },
  {
    drug: "Atabecestat",
    category: "bace",
    target: "BACE1 inhibitor",
    amyloidEffect: "\u2193 A\u03B2 production",
    clinicalOutcome: "Worsened cognition; liver toxicity",
    felineNote: "Same mechanism; also hepatotoxic",
  },
  {
    drug: "Lanabecestat",
    category: "bace",
    target: "BACE1 inhibitor",
    amyloidEffect: "\u2193 A\u03B2 production",
    clinicalOutcome: "Failed; stopped early",
    felineNote: "Blocked backup iron sequestration",
  },
];

/* ── Metal-Dependent Oligomer Morphology ──────────────────────────── */

export const metalOligomerTable: MetalOligomerRow[] = [
  {
    metal: "Fe\u00B3\u207A",
    effect: "Promotes aggregation",
    morphology: "Annular protofibrils + fibrillar oligomers",
    toxicity: "HIGH: generates ROS via Fenton",
  },
  {
    metal: "Cu\u00B2\u207A",
    effect: "Inhibits fibril formation",
    morphology: "Amorphous aggregates (non-fibrillar)",
    toxicity: "Generates H\u2082O\u2082 via redox cycling",
  },
  {
    metal: "Zn\u00B2\u207A",
    effect: "Inhibits fibril formation",
    morphology: "Stabilizes non-fibrillar oligomers",
    toxicity: "Prevents protective fibril maturation",
  },
  {
    metal: "No metal",
    effect: "Forms fibrils normally",
    morphology: "Mature amyloid fibrils",
    toxicity: "Lower than oligomeric forms",
  },
];

/* ── ARIA Binding Affinity ────────────────────────────────────────── */

export const ariaBindingTable: AriaBindingRow[] = [
  { antibody: "Solanezumab", caaBinding: "Negligible", ariaRate: "0%", note: "Targets soluble monomers" },
  { antibody: "Crenezumab", caaBinding: "Negligible", ariaRate: "0%", note: "Targets multiple soluble forms" },
  { antibody: "Lecanemab", caaBinding: "Low", ariaRate: "~13%", note: "Protofibrils, low CAA engagement" },
  { antibody: "Donanemab", caaBinding: "Variable", ariaRate: "~24%", note: "Depends on pyroglutamate-A\u03B2 in CAA" },
  { antibody: "Bapineuzumab", caaBinding: "High", ariaRate: "~25%", note: "N-terminal epitope on fibrils" },
  { antibody: "Aducanumab", caaBinding: "High", ariaRate: "~35%", note: "Targets aggregated forms" },
  { antibody: "Gantenerumab", caaBinding: "High", ariaRate: "~35%", note: "Multiple epitope binding" },
];

/* ── Section C: Iron → Demyelination ─────────────────────────────────── */

export const demyelinationSection: CascadeSection = {
  id: "demyelination",
  kicker: "Iron \u2192 Demyelination",
  title: "The cells that need iron most die from it first",
  subtitle:
    "Oligodendrocytes contain 5.4\u00D7 more iron than neurons and have 3\u00D7 less glutathione than astrocytes. They need iron for myelination but are the most vulnerable to iron-driven ferroptosis. When they die, the brain loses both electrical and iron insulation, and the immune response to their debris blocks the very repair process that could save them.",
  mechanismSteps: [
    {
      step: 1,
      title: "Triple vulnerability: high iron, low GSH, high metabolic demand",
      body: "Oligodendrocytes are the most iron-rich cells in the brain (3.05 mM vs 0.57 mM in neurons). They have the lowest glutathione reserves of any glial cell. And they have enormous metabolic demand from maintaining myelin sheaths. This combination makes them uniquely vulnerable to ferroptosis.",
      detail:
        "Reinert et al. (2019) measured intracellular iron using calibrated synchrotron X-ray fluorescence: oligodendrocytes 3.05 mM, microglia 1.76 mM, astrocytes 1.29 mM, neurons 0.57 mM. Thorburne & Juurlink (1996) showed oligodendrocytes have approximately one-third the GSH of astrocytes. Wade & Connor (2025) confirmed: oligodendrocytes have the highest level of oxidative metabolism per volume of any brain cell, and stain strongest for iron.",
      keyPaper: "Reinert et al., BMC Neuroscience, 2019",
    },
    {
      step: 2,
      title: "Iron paradox: essential for myelination, lethal in excess",
      body: "Oligodendrocytes need iron to synthesize cholesterol and fatty acids for myelin membranes. Each oligodendrocyte extends processes to myelinate up to 50 axon segments, requiring enormous lipid synthesis. During development, OPCs actively accumulate iron. But the same iron that enables myelination can trigger ferroptosis if antioxidant defenses fail.",
      detail:
        "Todorich et al. (2009) reviewed the dual role of iron in oligodendrocyte biology. Connor & Menzies (1996) mapped the developmental window where iron acquisition peaks during active myelination. Developmental iron deficiency causes hypomyelination and impaired sensorimotor function (Guitart et al. 2019).",
      keyPaper: "Todorich et al., Glia, 2009",
    },
    {
      step: 3,
      title: "OPC remyelination requires iron via transferrin receptor",
      body: "OPCs depend on transferrin receptor (TfR) for iron uptake during remyelination. Ferritin heavy chain (Fth) knockout blocks OPC differentiation. TfR is critical for OPCs but less important for mature oligodendrocytes, which use different iron uptake pathways.",
      detail:
        "Cheli et al. (2020, 2023) showed Fth conditional knockout prevents OPC-to-oligodendrocyte differentiation. TfR deletion in OPCs blocks remyelination but has minimal effect on mature oligodendrocytes, revealing stage-specific iron requirements.",
      keyPaper: "Cheli et al., J Neurosci, 2020",
    },
    {
      step: 4,
      title: "FTH1 as iron insulation: OLs protect neurons from iron",
      body: "Oligodendrocytes secrete ferritin heavy chain (FTH1) via extracellular vesicles, with 20\u00D7 enrichment compared to neurons. FTH1 has a 17-day turnover and acts as a secreted iron buffer, protecting the local microenvironment. Oligodendrocytes provide two types of insulation: electrical (myelin) and chemical (iron buffering).",
      detail:
        "Mukherjee et al. (2020, Cell Metabolism) discovered that oligodendrocytes are the primary source of extracellular FTH1 in the brain. This paradigm-shifting finding means the S-layer (sheathing) of the FELINES framework has both an electrical and a chemical component, both provided by the same cell type.",
      keyPaper: "Mukherjee et al., Cell Metabolism, 2020",
    },
    {
      step: 5,
      title: "Double loss when oligodendrocytes die",
      body: "When an oligodendrocyte dies, the brain loses both electrical insulation (myelin sheaths) and iron insulation (FTH1 secretion). The 3.05 mM of iron safely stored in the dying cell is released into the extracellular space, potentially triggering ferroptosis in neighboring cells. This creates a cascade: OL death \u2192 demyelination + iron release \u2192 neighboring cell iron overload \u2192 more ferroptosis \u2192 expanding lesion.",
      detail:
        "This double-loss mechanism explains the slow, centrifugal expansion of MS lesions. In AD, surviving oligodendrocytes in diseased tissue show massively reduced iron scores (the most iron-loaded, most vulnerable OLs have already died), consistent with a survivorship bias that validates the FELINES model.",
    },
    {
      step: 6,
      title: "Multiple ferroptosis pathways converge on OLs",
      body: "At least four distinct molecular pathways drive oligodendrocyte ferroptosis. AKR1C1 (an anti-ferroptotic enzyme) is downregulated by neuroinflammation-induced miRNAs, stripping mature OLs of their last defense. DHHC5-mediated palmitoylation of TfR1 is disrupted, causing iron accumulation. FoxO1a-SLC7A11 axis failure cuts glutathione synthesis. HDAC3-PDK4 links epigenetic dysregulation to metabolic ferroptosis.",
      detail:
        "Saverio et al. (2024) showed AKR1C1 normally counters maturation-dependent iron as a pro-ferroptotic signal; in MS, neuroinflammation downregulates it via miRNAs. Liu et al. (2025) found disrupted DHHC5-TfR1 palmitoylation causes OL ferroptosis in corpus callosum, producing hypomyelination. DHHC5 overexpression rescues. OL ferroptosis then initiates neuronal ferroptosis across multiple brain regions.",
      keyPaper: "Saverio et al., Redox Biology, 2024",
    },
    {
      step: 7,
      title: "OPCs try to repair constantly, but inflammation blocks them",
      body: "OPCs attempt to differentiate constitutively throughout the adult CNS at a constant rate, independent of myelin demand or OL loss. Most differentiating OPCs die before maturing. The critical problem: the immune system's debris-clearance response to ferroptotic OLs (IFN-\u03B3, TNF-\u03B1) actively suppresses OPC differentiation. The repair mechanism and the damage response are in direct conflict.",
      detail:
        "Mironova et al. (2026, Science) discovered that demyelination does NOT increase OPC differentiation rate. OPCs modify surrounding ECM during differentiation attempts, creating visible 'dandelion clock-like structures' (DACS) that mark each attempt. Aging decreases the differentiation rate. Inflammation suppresses it. In MS, the immune clearance response to ferroptotic debris actively prevents the repair that OPCs are constantly attempting.",
      keyPaper: "Mironova et al., Science, 2026",
    },
    {
      step: 8,
      title: "Complement targets myelin and blocks OPC repair",
      body: "C1q binds directly to myelin basic protein (MBP), and this colocalization increases with age (R\u00B2 = 0.31). CD47 ('don't eat me' signal) on myelin decreases in middle age. C1q also activates Wnt/\u03B2-catenin signaling in OPCs, preventing their differentiation into mature myelinating OLs. The complement system simultaneously attacks existing myelin and blocks its replacement.",
      detail:
        "DeVries et al. (2024) showed in rhesus monkeys that C1q-MBP colocalization correlates with cognitive impairment. OL CD47 mRNA decreases 38.7% in old animals while microglial C1qA mRNA increases 125.5%. Gao et al. (2021) showed C1q activates Wnt/\u03B2-catenin in OPCs, preventing differentiation; C1s knockdown attenuated demyelination and promoted M2 microglia.",
      keyPaper: "DeVries et al., Front Immunol, 2024",
    },
    {
      step: 9,
      title: "MS drugs inadvertently treat OL ferroptosis",
      body: "Dimethyl fumarate (DMF) and diroximel fumarate (DRF), approved MS drugs thought to work via immunomodulation, actually upregulate anti-ferroptotic enzymes in oligodendrocytes via Nrf2 activation. The cuprizone demyelination model confirmed ferroptosis as the mechanism of OL death. Anti-CD20 therapies (ocrelizumab, ofatumumab) target B cells, but only 4.3% of lymphocytes in chronic active MS lesions are CD20+ B cells.",
      detail:
        "Fischer et al. (2025) showed DMF/DRF upregulate anti-ferroptotic enzymes in OLs, cerebellum of treated mice, and PBMCs of DMF-treated patients. This effect is disease-specific (not seen in arthritis fibroblasts). Jhelum et al. (2020) demonstrated ferroptosis mediates cuprizone-induced OL loss. The iron-laden microglia driving smoldering inflammation in progressive MS are NOT targeted by anti-CD20.",
      keyPaper: "Jhelum et al., J Neurosci, 2020",
    },
    {
      step: 10,
      title: "Species context: more myelin means more vulnerability",
      body: "Human brains are ~75% white matter by volume vs ~15% in mice. More myelin requires more oligodendrocytes, more iron, and longer accumulation time. Late-myelinating regions (prefrontal cortex, temporal association areas) require the highest iron investment over the longest time. These same regions are the first to show AD pathology.",
      detail:
        "The myelination-iron-lifespan triangle: sufficient myelination to create iron-rich OLs + sufficient lifespan for iron to accumulate + A\u03B2 capable of concentrating released iron. Only humans (and perhaps great apes) satisfy all three conditions. When OLs die via ferroptosis and release their iron, APP translation increases via IRE, directly linking OL iron release to A\u03B2 generation.",
    },
    {
      step: 11,
      title: "Iron rim lesions: the signature of slow-burning destruction",
      body: "In MS, 50\u201365% of chronic lesions have an iron rim of iron-laden microglia/macrophages at the lesion edge. These paramagnetic rim lesions (PRLs) expand at 2.2% per year and predict worse disability (OR 2.24\u20132.87). The iron rim is both a marker and a driver of ongoing damage: released OL iron that cannot be cleared, visible on 7T MRI.",
      detail:
        "Dal-Bianco et al. (2017) tracked iron rim lesion expansion over 4 years using 7T MRI. Absinta et al. (2019) showed PRLs are associated with more tissue damage and worse clinical outcomes. Haider et al. (2014) demonstrated oxidative damage and iron accumulation in all active MS lesions, with iron released from dying OLs trapped in activated microglia at the lesion edge. This is FELINES' I-layer failure made visible.",
      keyPaper: "Dal-Bianco et al., Acta Neuropathologica, 2017",
    },
  ],
  stats: [
    { value: "3.05 mM", label: "Iron in oligodendrocytes", source: "Reinert 2019" },
    { value: "0.57 mM", label: "Iron in neurons (5.4\u00D7 less)", source: "Reinert 2019" },
    { value: "20\u00D7", label: "FTH1 enrichment in OL-derived EVs", source: "Mukherjee 2020" },
    { value: "75%", label: "Human brain white matter (vs 15% mouse)", source: "Comparative neuroanatomy" },
    { value: "50\u201365%", label: "MS lesions with iron rim", source: "Absinta 2019" },
    { value: "2.2%/yr", label: "Iron rim lesion expansion rate", source: "Dal-Bianco 2017" },
    { value: "4.3%", label: "CD20+ cells in chronic active MS lesions", source: "Absinta 2019" },
  ],
};

/* ── Section D: Iron → Cholinergic System ────────────────────────────── */

export const cholinergicSection: CascadeSection = {
  id: "cholinergic",
  kicker: "Iron \u2192 Cholinergic",
  title: "Iron kills the cells that acetylcholine depends on",
  subtitle:
    "The nucleus basalis of Meynert (NBM) degenerates first in AD, not the hippocampus. It sits in the brain\u2019s worst metabolic cul-de-sac: maximum iron influx, poor efflux, and its cholinergic neurons regulate the very clearance system meant to protect them.",
  mechanismSteps: [
    {
      step: 1,
      title: "Choroid plexus as iron gatekeeper",
      body: "The choroid plexus produces most of the brain\u2019s transferrin and exports iron via ferroportin into the CSF. It maintains a 10-fold iron concentration gradient between blood and CSF. When the choroid plexus deteriorates, this gradient collapses.",
      detail:
        "Moos & Morgan (2000) mapped iron transport through the choroid plexus. Mesquita et al. (2012) showed the choroid plexus secretes transferrin, ceruloplasmin, and other iron-binding proteins that regulate CSF iron homeostasis. The choroid plexus is the first checkpoint: it controls how much iron enters the CSF compartment.",
      keyPaper: "Moos & Morgan, Cell Mol Neurobiol, 2000",
    },
    {
      step: 2,
      title: "Choroid plexus deteriorates with age and disease",
      body: "The choroid plexus flattens and accumulates iron deposits with age. In FXTAS (fragile X-associated tremor/ataxia), the choroid plexus shows decreased ferroportin, decreased ceruloplasmin, and increased iron deposits. Similar changes occur in AD.",
      detail:
        "Ariza et al. (2015) documented reduced ferroportin and ceruloplasmin expression alongside iron accumulation in FXTAS choroid plexus. This represents failure of the brain\u2019s primary iron gatekeeping system. When the choroid plexus can no longer regulate iron, downstream regions receive uncontrolled iron loads.",
      keyPaper: "Ariza et al., Brain Research, 2015",
    },
    {
      step: 3,
      title: "The nucleus basalis degenerates first, not the hippocampus",
      body: "The textbook AD narrative (entorhinal cortex \u2192 hippocampus) requires revision. Deformation-based morphometry on 1,447 ADNI participants shows NBM volume loss before entorhinal or hippocampal changes. NBM white matter tract damage is detectable in early MCI when NBM volume is still normal.",
      detail:
        "Shafiee et al. (2024) found the earliest deviations in NBM volumes from cognitively healthy trajectories, challenging the prevailing idea that AD originates in the entorhinal cortex. Crockett et al. (2024) showed lateral NBM tract integrity is the most sensitive marker for earliest AD stages. The NBM is the primary cholinergic nucleus projecting to cortex, making its early loss devastating for cognition.",
      keyPaper: "Shafiee et al., Neurobiol Aging, 2024",
    },
    {
      step: 4,
      title: "NBM sits in the brain\u2019s worst metabolic cul-de-sac",
      body: "The NBM occupies the anterior perforated substance (APS), where large ventral perforating arteries deliver substantial CSF tracer influx. But its deep location means poor venous efflux. High input, minimal output. Iron and solutes accumulate faster here than in most other regions.",
      detail:
        "Iliff et al. (2012, the original glymphatic paper) showed large amounts of tracer in the basal ganglia and thalamus, entering along large ventral perforating arteries. Ringstad et al. (2018) showed that clearance of tracer substance was delayed in the dementia cohort. The APS is literally named for the numerous penetrating arteries that pierce through it, but these are end arteries with no collaterals.",
      keyPaper: "Iliff et al., Sci Transl Med, 2012",
    },
    {
      step: 5,
      title: "Iron \u2192 cPLA2 \u2192 lipid peroxidation \u2192 HNE \u2192 cholinergic neuron death",
      body: "Iron combines with cPLA2-released arachidonic acid to drive lipid peroxidation via Fenton chemistry. The product, 4-hydroxynonenal (HNE), is selectively toxic to cholinergic neurons in the NBM. AD patients show 60\u201380% loss of choline acetyltransferase (ChAT) activity.",
      detail:
        "cPLA2 is the rate-limiting enzyme that liberates arachidonic acid from membranes. Iron catalyzes oxidation of these PUFAs. Genetic ablation of cPLA2 protected hAPP mice against A\u03B2-dependent deficits in learning and memory (Sanchez-Mejia 2008). APOE4 increases cPLA2 activity via p38 MAPK, providing more substrate for ferroptosis. Mark et al. (1997) showed HNE directly kills cholinergic neurons.",
      keyPaper: "Mark et al., J Mol Neurosci, 1997",
    },
    {
      step: 6,
      title: "4-HNE creates immunogenic neoantigens",
      body: "HNE doesn\u2019t just kill neurons directly. It modifies proteins to create neoantigens that the immune system recognizes. Once the immune response starts, it spreads: HNE-modified myelin proteins trigger T/B cell responses that progressively expand to target native (unmodified) myelin.",
      detail:
        "Kurien & Scofield (2008) demonstrated that 4-HNE-modified proteins are highly immunogenic and trigger epitope spreading. This means ferroptotic damage in the NBM creates a self-perpetuating immune response. Even if ferroptosis stops, immune memory persists. B cell class switching (IgM \u2192 IgG) creates permanent autoimmune potential.",
      keyPaper: "Kurien & Scofield, Autoimmun Rev, 2008",
    },
    {
      step: 7,
      title: "Cholinergic neurons regulate their own clearance system",
      body: "NBM cholinergic neurons regulate glymphatic waste clearance via neurovascular mechanisms. When these neurons die, the clearance system that was supposed to protect them fails. Acetylcholine also regulates sleep architecture, and sleep is required for glymphatic clearance.",
      detail:
        "Chuang et al. (2025, Nature Communications) demonstrated that cholinergic basal forebrain neurons directly regulate glymphatic function, with their loss impairing waste clearance. This creates a unique vulnerability: the NBM is the only region whose neurons regulate the very system meant to protect them. NBM damage \u2192 reduced ACh \u2192 impaired sleep \u2192 reduced glymphatic clearance \u2192 accelerated accumulation.",
      keyPaper: "Chuang et al., Nat Commun, 2025",
    },
    {
      step: 8,
      title: "The NBM vicious cycle: death destroys its own defense",
      body: "Five steps, each feeding the next: (1) NBM receives maximum iron/solute load. (2) Poor efflux \u2192 accumulation \u2192 ferroptosis begins. (3) Dying cholinergic neurons \u2192 impaired glymphatic regulation. (4) Further clearance failure \u2192 accelerated accumulation. (5) More ferroptosis \u2192 faster cholinergic loss \u2192 worse clearance.",
      detail:
        "No other brain region has this self-destructive property. The substantia nigra accumulates iron but doesn\u2019t regulate its own clearance. The hippocampus is vulnerable but has moderate efflux. The NBM combines the worst influx/efflux ratio with neurons that regulate their own protection. PubMed search for \u201Cbasal forebrain cholinergic iron ferroptosis\u201D returns zero results.",
    },
    {
      step: 9,
      title: "Cross-disease: NBM degenerates early in AD, PD, and DLB",
      body: "NBM involvement is not AD-specific. In Parkinson\u2019s disease, Ch4 (NBM) atrophy precedes and predicts dementia conversion. In Lewy body dementia, prominent cholinergic deficits dominate the clinical picture. The same anatomical vulnerability plays out across diseases.",
      detail:
        "Pereira et al. (2020) showed a posterior-to-anterior pattern in PD: Ch4 degenerates first, followed by Ch1/Ch2 (medial septum). This cross-disease convergence supports the FELINES interpretation: it\u2019s not about which protein aggregates (A\u03B2, \u03B1-synuclein, tau) but about which regions face the worst iron/clearance dynamics.",
      keyPaper: "Pereira et al., Neurobiol Dis, 2020",
    },
    {
      step: 10,
      title: "Anticholinergic drugs as epidemiological signal",
      body: "Drugs that block muscarinic acetylcholine receptors increase dementia risk. The largest study found a 1.49\u00D7 risk at highest anticholinergic exposure, with approximately 10% of dementia cases attributable to anticholinergic drug use. This confirms cholinergic loss as a causal contributor, not just a downstream marker.",
      detail:
        "Coupland et al. (2019) analyzed 284,343 patients in the UK and found dose-dependent dementia risk from anticholinergic drugs. Pieper et al. (2020) estimated the population-attributable fraction. BZ/QNB studies (Sudo 2007) showed acute muscarinic blockade reproduces AD-like cognitive symptoms, confirming that cholinergic loss alone can mimic AD phenotype.",
      keyPaper: "Coupland et al., JAMA Intern Med, 2019",
    },
  ],
  stats: [
    { value: "10\u00D7", label: "Blood\u2013CSF iron gradient", source: "Moos & Morgan 2000" },
    { value: "Large", label: "CSF tracer influx via ventral perforating arteries", source: "Iliff 2012" },
    { value: "1,447", label: "ADNI participants showing NBM-first degeneration", source: "Shafiee 2024" },
    { value: "60\u201380%", label: "ChAT loss in AD nucleus basalis", source: "Whitehouse 1981" },
    { value: "1.49\u00D7", label: "Dementia risk from anticholinergics", source: "Coupland 2019" },
    { value: "~10%", label: "AD cases attributable to anticholinergics", source: "Pieper 2020" },
    { value: "0", label: "PubMed results for \u201Cbasal forebrain cholinergic iron ferroptosis\u201D", source: "January 2026" },
  ],
};

/* ── Regional Vulnerability Hierarchy ──────────────────────────────── */

export const regionalVulnerabilityTable: RegionalVulnerabilityRow[] = [
  {
    rank: "#1 (WORST)",
    region: "NBM / Anterior Perforated Substance",
    influx: "MAXIMUM",
    efflux: "Poor",
    selfRegulates: "YES (cholinergic)",
    firstAffected: "AD, PD, DLB",
  },
  {
    rank: "#2",
    region: "Entorhinal Cortex",
    influx: "High",
    efflux: "Poor",
    selfRegulates: "No",
    firstAffected: "AD",
  },
  {
    rank: "#3",
    region: "Hippocampus",
    influx: "Moderate",
    efflux: "Moderate-poor",
    selfRegulates: "No",
    firstAffected: "AD",
  },
  {
    rank: "#4",
    region: "Substantia Nigra",
    influx: "Moderate",
    efflux: "Moderate",
    selfRegulates: "No",
    firstAffected: "PD",
  },
  {
    rank: "#5",
    region: "Association Cortices",
    influx: "Variable",
    efflux: "Variable",
    selfRegulates: "No",
    firstAffected: "Later AD stages",
  },
];

/* ── Cross-Disease NBM Table ───────────────────────────────────────── */

export const crossDiseaseNBMTable: CrossDiseaseNBMRow[] = [
  {
    disease: "Alzheimer\u2019s",
    nbmStatus: "Earliest degeneration (before entorhinal cortex)",
    felineLayer: "Fe (iron accumulation) + I (myelin in cholinergic tracts)",
  },
  {
    disease: "Parkinson\u2019s",
    nbmStatus: "Predicts dementia conversion",
    felineLayer: "Fe + N (NVU compromise from \u03B1-synuclein)",
  },
  {
    disease: "Lewy Body Dementia",
    nbmStatus: "Prominent cholinergic deficits",
    felineLayer: "Fe + L (lysosomal \u03B1-synuclein accumulation)",
  },
];

/* ── Iron Concentration Table ────────────────────────────────────────── */

export interface IronConcentrationRow {
  cellType: string;
  concentration: string;
  note: string;
}

export const ironConcentrations: IronConcentrationRow[] = [
  { cellType: "Oligodendrocytes", concentration: "3.05 mM", note: "Highest; essential for myelination" },
  { cellType: "Microglia", concentration: "1.76 mM", note: "Iron-laden in disease (LDAM phenotype)" },
  { cellType: "Astrocytes", concentration: "1.29 mM", note: "Hub for iron redistribution" },
  { cellType: "Neurons", concentration: "0.57 mM", note: "Lowest; protected by glial buffering" },
];

/* ── OL Vulnerability Trade-off Table ──────────────────────────────── */

export const olVulnerabilityTable: OlVulnerabilityRow[] = [
  {
    property: "Highest iron content (3.05 mM)",
    function: "Supports cholesterol/fatty acid synthesis for myelin",
    vulnerability: "More substrate for Fenton chemistry",
  },
  {
    property: "Highest metabolic rate per volume",
    function: "Powers membrane synthesis for up to 50 axon segments",
    vulnerability: "More oxidative stress generation",
  },
  {
    property: "Lowest antioxidant capacity (~\u2153 GSH of astrocytes)",
    function: "Evolutionary trade-off (unknown benefit)",
    vulnerability: "Less protection against lipid peroxidation",
  },
  {
    property: "High PUFA content in myelin",
    function: "Enables membrane fluidity and electrical insulation",
    vulnerability: "More substrate for lipid peroxidation",
  },
];

/* ── OPC Differentiation Factors ──────────────────────────────────── */

export const opcDifferentiationTable: OpcDifferentiationRow[] = [
  {
    factor: "Demyelination",
    effect: "No change in differentiation rate",
    felineNote: "OPCs can\u2019t \u201Csense\u201D demyelination; they try constantly",
  },
  {
    factor: "Aging",
    effect: "Decreased differentiation rate",
    felineNote: "Age-related decline in OPC baseline function",
  },
  {
    factor: "Inflammation",
    effect: "Suppressed differentiation rate",
    felineNote: "Debris clearance response prevents repair",
  },
  {
    factor: "OPC proliferation",
    effect: "Suppresses differentiation",
    felineNote: "Proliferating OPCs don\u2019t differentiate",
  },
];

/* ── Research Findings ───────────────────────────────────────────────── */

export const researchFindings: ResearchFinding[] = [
  // Amyloid
  {
    paper: "Rogers et al. 2002",
    journal: "Journal of Biological Chemistry",
    finding:
      "Identified a functional iron-responsive element (IRE) in the 5\u2019 UTR of APP mRNA. Iron directly controls APP translation through the same IRP1/IRP2 system that regulates ferritin.",
    tag: "amyloid",
  },
  {
    paper: "Telling et al. 2017",
    journal: "Cell Chemical Biology",
    finding:
      "A\u03B2 converts ferrihydrite (safe iron storage) to magnetite and zero-valent iron nanoparticles. Synchrotron X-ray spectromicroscopy confirmed A\u03B2 directly reduces Fe\u00B3\u207A to Fe\u00B2\u207A and Fe\u2070.",
    tag: "amyloid",
  },
  {
    paper: "Wong et al. 2014",
    journal: "Journal of Biological Chemistry",
    finding:
      "Corrected the earlier claim (Duce 2010) that APP has ferroxidase activity. APP\u2019s putative ferroxidase site does not oxidize Fe\u00B2\u207A. APP instead stabilizes ferroportin for iron export.",
    tag: "amyloid",
  },
  {
    paper: "Ayton et al. 2015",
    journal: "Nature Communications",
    finding:
      "Brain iron (CSF ferritin) correlates with A\u03B2 PET signal (R\u00B2 = 0.80 in MCI) and predicts cognitive decline. Iron explains amyloid deposition better than any other single variable.",
    tag: "amyloid",
  },
  {
    paper: "Ott et al. 2015",
    journal: "Disease Models & Mechanisms",
    finding:
      "Iron is a specific cofactor for A\u03B2 toxicity in Drosophila. Not seen for other aggregation-prone polypeptides. His\u2192Ala substitutions show both aggregation-dependent and Fenton-mediated pathways, both requiring iron. Iron is necessary for A\u03B2 dimerization itself.",
    tag: "amyloid",
  },
  {
    paper: "Istrate et al. 2012",
    journal: "Biophysical Journal",
    finding:
      "NMR structure of rat A\u03B2(1-16) reveals Arg13 (vs human His13) prevents oligomeric assembly. With only two metal-binding histidines, rodent A\u03B2 forms dimers that block further aggregation. Explains why mice never develop spontaneous AD.",
    tag: "amyloid",
  },
  {
    paper: "S\u00F6derberg et al. 2024",
    journal: "Scientific Reports",
    finding:
      "ARIA rates correlate with A\u03B2 antibody binding to CAA fibrils, not parenchymal plaque clearance. Antibodies with negligible CAA binding (solanezumab, crenezumab) show 0% ARIA. High CAA binders (aducanumab, gantenerumab) show ~35% ARIA.",
    tag: "amyloid",
  },
  {
    paper: "Chourrout et al. 2023",
    journal: "Acta Biomaterialia",
    finding:
      "Different transgenic AD mouse constructs produce plaques with dramatically different metal profiles. J20 and TgF344 show greater metal accumulation than APPPS1 and ArcA\u03B2. Metal accumulation, not A\u03B2 alone, drives plaque pathology.",
    tag: "amyloid",
  },
  {
    paper: "Everett et al. 2020",
    journal: "Scientific Reports",
    finding:
      "Iron stored in ferritin is chemically reduced in the presence of aggregating A\u03B2(1-42). A\u03B2 creates a reducing environment that converts safe ferric ferritin core to reactive ferrous iron and magnetite. No reduction observed without A\u03B2.",
    tag: "amyloid",
  },
  // Tau
  {
    paper: "Lei et al. 2012",
    journal: "Nature Medicine",
    finding:
      "Tau knockout mice develop brain iron accumulation. Tau normally facilitates APP trafficking to the cell surface for ferroportin stabilization. Without tau, iron export fails.",
    tag: "tau",
  },
  {
    paper: "Yamamoto et al. 2002",
    journal: "Journal of Neurochemistry",
    finding:
      "Fe\u00B3\u207A directly promotes paired helical filament assembly from hyperphosphorylated tau via phosphate-dependent binding. Fe\u00B2\u207A reverses the aggregation. Iron is not a passenger but an active structural participant in tangle formation.",
    tag: "tau",
  },
  {
    paper: "Fichou et al. 2018",
    journal: "PNAS",
    finding:
      "Heparin- and RNA-induced tau fibrils spontaneously depolymerize when the cofactor is removed. Brain-derived seeds lose propagation capacity after one generation without cofactor supplementation. Tau aggregation is cofactor-dependent, not self-sustaining.",
    tag: "tau",
  },
  {
    paper: "Ahmadi et al. 2019",
    journal: "Journal of Inorganic Biochemistry",
    finding:
      "Both Fe\u00B2\u207A and Fe\u00B3\u207A induce conformational changes in full-length tau promoting aggregation. Phosphorylation by GSK3\u03B2 reduced metal binding affinity, suggesting a feedback loop where hyperphosphorylation modulates iron coordination.",
    tag: "tau",
  },
  {
    paper: "N\u00FCbling et al. 2012",
    journal: "Molecular Neurodegeneration",
    finding:
      "Fe\u00B3\u207A promotes tau\u2013\u03B1-synuclein co-aggregation. Phosphorylated tau produces oligomers averaging 53 tau + 10 \u03B1-synuclein monomers per particle. Iron-enhanced cross-seeding may explain frequent co-occurrence of tau and \u03B1-syn pathology.",
    tag: "tau",
  },
  {
    paper: "Shulman et al. 2023",
    journal: "Nature Aging",
    finding:
      "TANGO trial: gosuranemab achieved 98% reduction in CSF unbound N-terminal tau, yet patients showed no cognitive benefit and some worsened. Under a prion model, this degree of seed interception should slow disease. It didn\u2019t.",
    tag: "tau",
  },
  {
    paper: "Mummery et al. 2023",
    journal: "Nature Medicine",
    finding:
      "BIIB080 antisense oligonucleotide reduced CSF total tau ~50\u201360%, slowed tau PET accumulation, and showed favorable cognitive trends. Reducing tau production addresses the problem at a more fundamental level than intercepting extracellular seeds.",
    tag: "tau",
  },
  {
    paper: "Guo et al. 2013",
    finding:
      "Iron treatment activates GSK-3\u03B2 and CDK5 kinases, driving tau phosphorylation at AD-relevant epitopes (Thr205, Thr231, Ser396). Chelation reverses the effect.",
    tag: "tau",
  },
  // Myelin
  {
    paper: "Reinert et al. 2019",
    finding:
      "Calibrated synchrotron X-ray fluorescence measured intracellular iron: OLs 3.05 mM, microglia 1.76 mM, astrocytes 1.29 mM, neurons 0.57 mM. Oligodendrocytes carry 5.4\u00D7 more iron than neurons.",
    tag: "myelin",
  },
  {
    paper: "Mukherjee et al. 2020",
    finding:
      "Oligodendrocytes secrete FTH1 (ferritin heavy chain) via extracellular vesicles with 20\u00D7 enrichment vs neurons. FTH1 has 17-day turnover. OLs provide iron insulation alongside electrical insulation.",
    tag: "myelin",
  },
  {
    paper: "Absinta et al. 2019",
    finding:
      "Iron rim lesions in MS (paramagnetic rim on 7T MRI) predict worse clinical outcomes. Iron-laden microglia at the lesion edge drive slow, centrifugal expansion at 2.2% per year.",
    tag: "myelin",
  },
  {
    paper: "Cheli et al. 2023",
    finding:
      "Transferrin receptor is critical for OPC differentiation but dispensable for mature oligodendrocytes. Stage-specific iron requirements explain why remyelination fails when iron homeostasis is disrupted.",
    tag: "myelin",
  },
  {
    paper: "Saverio et al. 2024",
    journal: "Redox Biology",
    finding:
      "AKR1C1 normally counters maturation-dependent iron accumulation as a pro-ferroptotic signal in OLs. In MS, neuroinflammation downregulates AKR1C1 through miRNA mechanisms, stripping mature oligodendrocytes of their last anti-ferroptotic defense.",
    tag: "myelin",
  },
  {
    paper: "Jhelum et al. 2020",
    journal: "Journal of Neuroscience",
    finding:
      "Ferroptosis mediates cuprizone-induced loss of oligodendrocytes and demyelination. Confirms ferroptosis as the mechanism of OL death in the standard chemical demyelination model.",
    tag: "myelin",
  },
  {
    paper: "Mironova et al. 2026",
    journal: "Science",
    finding:
      "OPCs attempt to differentiate constitutively throughout the adult CNS, independent of myelin demand. Demyelination does NOT increase differentiation rate. Inflammation from debris clearance actively suppresses OPC differentiation, creating a vicious cycle.",
    tag: "myelin",
  },
  {
    paper: "DeVries et al. 2024",
    journal: "Frontiers in Immunology",
    finding:
      "C1q-MBP colocalization increases with age in rhesus monkeys (R\u00B2 = 0.31). OL CD47 mRNA decreases 38.7% in old animals. Microglial C1qA mRNA increases 125.5%. Complement targets myelin directly as part of age-related demyelination.",
    tag: "myelin",
  },
  {
    paper: "Fischer et al. 2025",
    journal: "Journal of Neuroinflammation",
    finding:
      "DMF and DRF, approved MS drugs, upregulate anti-ferroptotic enzymes in oligodendrocytes via Nrf2 activation. Their efficacy in progressive MS may be due to direct anti-ferroptotic effects on OLs, not immunomodulation.",
    tag: "myelin",
  },
  // Cholinergic
  {
    paper: "Shafiee et al. 2024",
    journal: "Neurobiology of Aging",
    finding:
      "Deformation-based morphometry on 1,447 ADNI participants: NBM volume differences detected between cognitively normal and early MCI, before entorhinal or hippocampal changes. The textbook AD progression narrative requires revision.",
    tag: "cholinergic",
  },
  {
    paper: "Chuang et al. 2025",
    journal: "Nature Communications",
    finding:
      "Cholinergic basal forebrain neurons regulate glymphatic waste clearance via neurovascular mechanisms. When these neurons die, the clearance system meant to protect them fails, creating a self-destructive vicious cycle.",
    tag: "cholinergic",
  },
  {
    paper: "Mark et al. 1997",
    journal: "Journal of Molecular Neuroscience",
    finding:
      "4-hydroxynonenal (HNE), a lipid peroxidation product, selectively kills cholinergic neurons. This provides the direct causal chain: iron \u2192 lipid peroxidation \u2192 HNE \u2192 cholinergic neuron death.",
    tag: "cholinergic",
  },
  {
    paper: "Kurien & Scofield 2008",
    journal: "Autoimmunity Reviews",
    finding:
      "4-HNE-modified proteins are highly immunogenic and trigger epitope spreading. Once the immune system recognizes ferroptosis byproducts, it progressively expands to target native myelin, creating permanent autoimmune potential.",
    tag: "cholinergic",
  },
  {
    paper: "Pereira et al. 2020",
    journal: "Neurobiology of Disease",
    finding:
      "Ch4 (NBM) atrophy precedes and predicts dementia conversion in Parkinson\u2019s disease. Posterior-to-anterior pattern: Ch4 degenerates first, then Ch1/Ch2. Cross-disease NBM vulnerability supports iron-driven mechanism.",
    tag: "cholinergic",
  },
  {
    paper: "Coupland et al. 2019",
    journal: "JAMA Internal Medicine",
    finding:
      "284,343-patient UK study: anticholinergic drugs increase dementia risk (OR 1.49 at highest exposure). Dose-response relationship across multiple anticholinergic drug classes.",
    tag: "cholinergic",
  },
  {
    paper: "Ariza et al. 2015",
    journal: "Brain Research",
    finding:
      "FXTAS choroid plexus shows decreased ferroportin and ceruloplasmin with increased iron deposits. The brain\u2019s iron gatekeeper fails, flooding CSF with unregulated iron.",
    tag: "cholinergic",
  },
];

/* ── All sections for page navigation ────────────────────────────────── */

export const allSections: CascadeSection[] = [
  amyloidSection,
  tauSection,
  demyelinationSection,
  cholinergicSection,
];
