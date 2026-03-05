import type { Source } from "./types";

export const ironCascadesSources: Source[] = [
  // ──────────────────────────────────────────────────────────────────────
  // AMYLOID SECTION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "rogers-2002-jbc",
    title:
      "An iron-responsive element type II in the 5'-untranslated region of the Alzheimer's amyloid precursor protein transcript",
    authors: "Rogers JT, Randall JD, Cahill CM, et al.",
    journal: "Journal of Biological Chemistry",
    year: 2002,
    doi: "10.1074/jbc.M207435200",
    pmid: "12198135",
    url: "https://pubmed.ncbi.nlm.nih.gov/12198135/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "rogers-2002-jbc-c1",
        sourceId: "rogers-2002-jbc",
        quote:
          "An iron-responsive element type II in the 5'-untranslated region of the Alzheimer's amyloid precursor protein transcript",
        context:
          "APP mRNA contains a functional IRE, placing APP under direct iron-dependent translational control",
        projectRef:
          "Iron cascades: Iron drives APP translation via IRE (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cho-2010-jbc",
    title:
      "Selective translational control of the Alzheimer amyloid precursor protein transcript by iron regulatory protein-1",
    authors: "Cho HH, Cahill CM, Vanderburg CR, et al.",
    journal: "Journal of Biological Chemistry",
    year: 2010,
    doi: "10.1074/jbc.M110.149161",
    pmid: "20558735",
    url: "https://pubmed.ncbi.nlm.nih.gov/20558735/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "cho-2010-jbc-c1",
        sourceId: "cho-2010-jbc",
        quote:
          "Selective translational control of the Alzheimer amyloid precursor protein transcript by iron regulatory protein-1",
        context:
          "IRP2 regulates APP translation; IRP2 knockout increases APP and Abeta",
        projectRef:
          "Iron cascades: Iron drives APP translation via IRE (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "duce-2010-cell",
    title:
      "Iron-export ferroxidase activity of β-amyloid precursor protein is inhibited by zinc in Alzheimer's disease",
    authors: "Duce JA, Tsatsanis A, Cater MA, et al.",
    journal: "Cell",
    year: 2010,
    doi: "10.1016/j.cell.2010.08.014",
    pmid: "20817278",
    url: "https://pubmed.ncbi.nlm.nih.gov/20817278/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "duce-2010-cell-c1",
        sourceId: "duce-2010-cell",
        quote:
          "Iron-export ferroxidase activity of β-amyloid precursor protein is inhibited by zinc in Alzheimer's disease",
        context:
          "Original ferroxidase claim later corrected by Wong 2014; APP stabilizes ferroportin instead",
        projectRef:
          "Iron cascades: APP stabilizes ferroportin, not ferroxidase (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wong-2014-plosone",
    title:
      "β-Amyloid precursor protein does not possess ferroxidase activity but does stabilize the cell surface ferrous iron exporter ferroportin",
    authors: "Wong BX, Tsatsanis A, Lim LQ, et al.",
    journal: "PLoS ONE",
    year: 2014,
    doi: "10.1371/journal.pone.0114174",
    pmid: "25464026",
    url: "https://pubmed.ncbi.nlm.nih.gov/25464026/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "wong-2014-plosone-c1",
        sourceId: "wong-2014-plosone",
        quote:
          "β-Amyloid precursor protein does not possess ferroxidase activity but does stabilize the cell surface ferrous iron exporter ferroportin",
        context:
          "Correction of Duce 2010: APP lacks ferroxidase activity, stabilizes ferroportin instead",
        projectRef:
          "Iron cascades: APP stabilizes ferroportin, not ferroxidase (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "becerril-ortega-2014",
    title:
      "Iron overload accelerates neuronal amyloid-β production and cognitive impairment in transgenic mice model of Alzheimer's disease",
    authors: "Becerril-Ortega J, Bordji K, Fréret T, et al.",
    journal: "Neurobiology of Aging",
    year: 2014,
    doi: "10.1016/j.neurobiolaging.2014.04.019",
    pmid: "24863668",
    url: "https://pubmed.ncbi.nlm.nih.gov/24863668/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "becerril-ortega-2014-c1",
        sourceId: "becerril-ortega-2014",
        quote:
          "Iron overload accelerates neuronal amyloid-β production and cognitive impairment in transgenic mice model of Alzheimer's disease",
        context:
          "Iron shifts APP processing toward amyloidogenic pathway via BACE1",
        projectRef:
          "Iron cascades: Iron shifts APP to amyloidogenic processing (mechanism step 2)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "tsatsanis-2019",
    title:
      "Post translational modulation of β-amyloid precursor protein trafficking to the cell surface alters neuronal iron homeostasis",
    authors: "Tsatsanis A, Dickens S, Kwok JCF, et al.",
    journal: "Neurochemical Research",
    year: 2019,
    doi: "10.1007/s11064-019-02747-y",
    pmid: "30796750",
    url: "https://pubmed.ncbi.nlm.nih.gov/30796750/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "tsatsanis-2019-c1",
        sourceId: "tsatsanis-2019",
        quote:
          "Post translational modulation of β-amyloid precursor protein trafficking to the cell surface alters neuronal iron homeostasis",
        context:
          "Confirms APP-ferroportin stabilization mechanism; trafficking modulation affects iron export",
        projectRef:
          "Iron cascades: APP stabilizes ferroportin (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "everett-2014-nanoscale",
    title:
      "Evidence of redox-active iron formation following aggregation of ferrihydrite and the Alzheimer's disease peptide β-amyloid",
    authors: "Everett J, Céspedes E, Shelford LR, et al.",
    journal: "Inorganic Chemistry",
    year: 2014,
    doi: "10.1021/ic402406g",
    pmid: "24559299",
    url: "https://pubmed.ncbi.nlm.nih.gov/24559299/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "everett-2014-nanoscale-c1",
        sourceId: "everett-2014-nanoscale",
        quote:
          "Evidence of redox-active iron formation following aggregation of ferrihydrite and the Alzheimer's disease peptide β-amyloid",
        context:
          "Abeta reduces Fe3+ to Fe2+, confirmed by synchrotron X-ray spectromicroscopy",
        projectRef:
          "Iron cascades: Aβ concentrates and reduces iron (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "telling-2017-cellchembiol",
    title:
      "Iron biochemistry is correlated with amyloid plaque morphology in an established mouse model of Alzheimer's disease",
    authors: "Telling ND, Everett J, Collingwood JF, et al.",
    journal: "Cell Chemical Biology",
    year: 2017,
    doi: "10.1016/j.chembiol.2017.07.014",
    pmid: "28890316",
    url: "https://pubmed.ncbi.nlm.nih.gov/28890316/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "telling-2017-cellchembiol-c1",
        sourceId: "telling-2017-cellchembiol",
        quote:
          "Iron biochemistry is correlated with amyloid plaque morphology in an established mouse model of Alzheimer's disease",
        context:
          "Abeta converts ferrihydrite to magnetite and zero-valent iron nanoparticles",
        projectRef:
          "Iron cascades: Aβ concentrates and reduces iron (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nakamura-2007-jacs",
    title:
      "Three histidine residues of amyloid-β peptide control the redox activity of copper and iron",
    authors: "Nakamura M, Shishido N, Nunomura A, et al.",
    journal: "Biochemistry",
    year: 2007,
    doi: "10.1021/bi701079z",
    pmid: "17929832",
    url: "https://pubmed.ncbi.nlm.nih.gov/17929832/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "nakamura-2007-jacs-c1",
        sourceId: "nakamura-2007-jacs",
        quote:
          "Three histidine residues of amyloid-β peptide control the redox activity of copper and iron",
        context:
          "His6, His13, His14 identified as the primary iron coordination site in Abeta",
        projectRef:
          "Iron cascades: His6/His13/His14 binding biophysics (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nair-2010",
    title:
      "NMR studies of zinc, copper, and iron binding to histidine, the principal metal ion complexing site of amyloid-β peptide",
    authors: "Nair NG, Perry G, Smith MA, et al.",
    journal: "Journal of Alzheimer's Disease",
    year: 2010,
    doi: "10.3233/JAD-2010-1346",
    pmid: "20164601",
    url: "https://pubmed.ncbi.nlm.nih.gov/20164601/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "nair-2010-c1",
        sourceId: "nair-2010",
        quote:
          "NMR studies of zinc, copper, and iron binding to histidine, the principal metal ion complexing site of amyloid-β peptide",
        context:
          "Fe3+ binding induces Abeta conformational shift toward aggregation",
        projectRef:
          "Iron cascades: His6/His13/His14 binding biophysics (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "khan-2006",
    title:
      "Redox cycling of iron by Aβ42",
    authors: "Khan A, Dobson JP, Exley C",
    journal: "Free Radical Biology and Medicine",
    year: 2006,
    doi: "10.1016/j.freeradbiomed.2005.09.013",
    pmid: "16458186",
    url: "https://pubmed.ncbi.nlm.nih.gov/16458186/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "khan-2006-c1",
        sourceId: "khan-2006",
        quote:
          "Redox cycling of iron by Aβ42",
        context:
          "Abeta42 redox-cycles iron, generating reactive oxygen species",
        projectRef:
          "Iron cascades: Aβ concentrates and reduces iron (supporting evidence)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "guo-2014",
    title:
      "APP physiological and pathophysiological functions: insights from animal models",
    authors: "Guo Q, Wang Z, Li H, et al.",
    journal: "Cell and Tissue Research",
    year: 2014,
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "guo-2014-c1",
        sourceId: "guo-2014",
        quote:
          "APP physiological and pathophysiological functions: insights from animal models",
        context:
          "Gut epithelium expresses 2-6x higher APP mRNA than brain",
        projectRef:
          "Iron cascades: Aβ is not brain-exclusive (mechanism step 6)",
      },
    ],
    verificationStatus: "unverified", // UNVERIFIED
  },
  {
    id: "jin-2023",
    title:
      "Iron overload impairs normal hematopoietic stem and progenitor cells through reactive oxygen species and shortens survival in myelodysplastic syndrome mice",
    authors: "Jin X, et al.",
    journal: "Haematologica",
    year: 2023,
    tags: ["iron"],
    citations: [
      {
        citationId: "jin-2023-c1",
        sourceId: "jin-2023",
        quote:
          "Iron overload impairs normal hematopoietic stem and progenitor cells through reactive oxygen species",
        context:
          "Iron overload in retinal pathology; Abeta in retinal tissue",
        projectRef:
          "Iron cascades: Aβ is not brain-exclusive (mechanism step 6)",
      },
    ],
    verificationStatus: "unverified", // UNVERIFIED - may be different paper
  },
  {
    id: "arai-1991",
    title:
      "Expression patterns of beta-amyloid precursor protein (beta-APP) in neural and nonneural human tissues from Alzheimer's disease and control subjects",
    authors: "Arai H, Lee VM, Messinger ML, et al.",
    journal: "Annals of Neurology",
    year: 1991,
    doi: "10.1002/ana.410300509",
    pmid: "1763893",
    url: "https://pubmed.ncbi.nlm.nih.gov/1763893/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "arai-1991-c1",
        sourceId: "arai-1991",
        quote:
          "Expression patterns of beta-amyloid precursor protein (beta-APP) in neural and nonneural human tissues from Alzheimer's disease and control subjects",
        context:
          "APP mRNA abundant in peripheral tissues including gut",
        projectRef:
          "Iron cascades: Aβ is not brain-exclusive (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hare-2016",
    title:
      "Laser ablation-inductively coupled plasma-mass spectrometry imaging of white and gray matter iron distribution in Alzheimer's disease frontal cortex",
    authors: "Hare DJ, Raven EP, Roberts BR, et al.",
    journal: "NeuroImage",
    year: 2016,
    doi: "10.1016/j.neuroimage.2016.05.057",
    pmid: "27233149",
    url: "https://pubmed.ncbi.nlm.nih.gov/27233149/",
    tags: ["iron", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "hare-2016-c1",
        sourceId: "hare-2016",
        quote:
          "Laser ablation-inductively coupled plasma-mass spectrometry imaging of white and gray matter iron distribution in Alzheimer's disease frontal cortex",
        context:
          "Iron and Abeta colocalize at sub-plaque resolution",
        projectRef:
          "Iron cascades: Iron-Aβ colocalization in vivo (mechanism step 7)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ayton-2015-annneur",
    title:
      "Ferritin levels in the cerebrospinal fluid predict Alzheimer's disease outcomes and are regulated by APOE",
    authors: "Ayton S, Faux NG, Bush AI",
    journal: "Nature Communications",
    year: 2015,
    doi: "10.1038/ncomms7760",
    pmid: "25988319",
    url: "https://pubmed.ncbi.nlm.nih.gov/25988319/",
    tags: ["iron", "alzheimers", "biomarkers"],
    citations: [
      {
        citationId: "ayton-2015-annneur-c1",
        sourceId: "ayton-2015-annneur",
        quote:
          "Ferritin levels in the cerebrospinal fluid predict Alzheimer's disease outcomes and are regulated by APOE",
        context:
          "CSF ferritin correlates with amyloid PET and predicts cognitive decline; R²=0.80 in MCI",
        projectRef:
          "Iron cascades: Iron-Aβ colocalization in vivo (mechanism step 7)",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // TAU SECTION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "lei-2012-natmed",
    title:
      "Tau deficiency induces parkinsonism with dementia by impairing APP-mediated iron export",
    authors: "Lei P, Ayton S, Finkelstein DI, et al.",
    journal: "Nature Medicine",
    year: 2012,
    doi: "10.1038/nm.2613",
    pmid: "22286308",
    url: "https://pubmed.ncbi.nlm.nih.gov/22286308/",
    tags: ["iron", "alzheimers", "parkinsons"],
    citations: [
      {
        citationId: "lei-2012-natmed-c1",
        sourceId: "lei-2012-natmed",
        quote:
          "Tau deficiency induces parkinsonism with dementia by impairing APP-mediated iron export",
        context:
          "Tau knockout leads to brain iron accumulation; tau is essential for APP trafficking and iron export",
        projectRef:
          "Iron cascades: Tau's normal job: APP trafficking for iron export (mechanism step 1)",
      },
      {
        citationId: "lei-2012-natmed-c2",
        sourceId: "lei-2012-natmed",
        quote:
          "loss of tau also causes iron retention, by decreasing surface trafficking of APP",
        context: "Tau facilitates APP surface trafficking for ferroportin-mediated iron export",
        location: "Results",
        projectRef:
          "Reframe section: Tau facilitates APP trafficking",
      },
      {
        citationId: "lei-2012-natmed-c3",
        sourceId: "lei-2012-natmed",
        quote:
          "Amyloid precursor protein (APP) ferroxidase activity couples with surface ferroportin to export iron",
        context: "APP stabilizes ferroportin at cell surface for iron export",
        location: "Abstract",
        projectRef:
          "Reframe section: APP-ferroportin coupling for iron export",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "tuo-2017",
    title:
      "Tau-mediated iron export prevents ferroptotic damage after ischemic stroke",
    authors: "Tuo QZ, Lei P, Jackman KA, et al.",
    journal: "Molecular Psychiatry",
    year: 2017,
    doi: "10.1038/mp.2017.171",
    pmid: "28886009",
    url: "https://pubmed.ncbi.nlm.nih.gov/28886009/",
    tags: ["iron", "alzheimers", "ferroptosis"],
    citations: [
      {
        citationId: "tuo-2017-c1",
        sourceId: "tuo-2017",
        quote:
          "Tau-mediated iron export prevents ferroptotic damage after ischemic stroke",
        context:
          "Tau deficiency causes age-dependent brain iron accumulation rescued by iron chelation",
        projectRef:
          "Iron cascades: Tau's normal job: APP trafficking (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "guo-2013-iron-tau",
    title:
      "Deferoxamine inhibits iron induced hippocampal tau phosphorylation in the Alzheimer transgenic mouse brain",
    authors: "Guo C, Wang P, Zhong ML, et al.",
    journal: "Neurochemistry International",
    year: 2013,
    doi: "10.1016/j.neuint.2012.12.005",
    pmid: "23262393",
    url: "https://pubmed.ncbi.nlm.nih.gov/23262393/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "guo-2013-iron-tau-c1",
        sourceId: "guo-2013-iron-tau",
        quote:
          "Deferoxamine inhibits iron induced hippocampal tau phosphorylation in the Alzheimer transgenic mouse brain",
        context:
          "Iron activates GSK-3\u03B2 driving tau phosphorylation at Thr205, Thr231, Ser396",
        projectRef:
          "Iron cascades: Iron activates GSK-3\u03B2/CDK5 \u2192 tau hyperphosphorylation (mechanism step 2)",
      },
      {
        citationId: "guo-2013-iron-tau-c2",
        sourceId: "guo-2013-iron-tau",
        quote:
          "intranasal DFO treatment exerts its suppressive effects on iron induced tau phosphorylation via CDK5 and GSK3\u03B2 pathways",
        context: "Iron drives tau phosphorylation through CDK5 and GSK-3\u03B2 kinase activation",
        location: "Abstract",
        projectRef:
          "Reframe section: Iron activates GSK3\u03B2 and CDK5 to hyperphosphorylate tau",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "schneider-1999",
    title:
      "Phosphorylation that detaches tau protein from microtubules (Ser262, Ser214) also protects it against aggregation into Alzheimer paired helical filaments",
    authors: "Schneider A, Biernat J, von Bergen M, et al.",
    journal: "Biochemistry",
    year: 1999,
    doi: "10.1021/bi981874p",
    pmid: "10090741",
    url: "https://pubmed.ncbi.nlm.nih.gov/10090741/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "schneider-1999-c1",
        sourceId: "schneider-1999",
        quote:
          "Phosphorylation that detaches tau protein from microtubules (Ser262, Ser214) also protects it against aggregation into Alzheimer paired helical filaments",
        context:
          "Some tau phosphorylation is initially protective against PHF formation",
        projectRef:
          "Iron cascades: Some phosphorylation is initially protective (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "yamamoto-2002",
    title:
      "Iron (III) induces aggregation of hyperphosphorylated tau and its reduction to iron (II) reverses the aggregation: implications in the formation of neurofibrillary tangles of Alzheimer's disease",
    authors: "Yamamoto A, Shin RW, Hasegawa K, et al.",
    journal: "Journal of Neurochemistry",
    year: 2002,
    doi: "10.1046/j.1471-4159.2002.t01-1-01061.x",
    pmid: "12358761",
    url: "https://pubmed.ncbi.nlm.nih.gov/12358761/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "yamamoto-2002-c1",
        sourceId: "yamamoto-2002",
        quote:
          "Iron (III) induces aggregation of hyperphosphorylated tau and its reduction to iron (II) reverses the aggregation: implications in the formation of neurofibrillary tangles of Alzheimer's disease",
        context:
          "Fe3+ promotes PHF assembly; Fe2+ reverses it. Iron redox state determines tau aggregation",
        projectRef:
          "Iron cascades: Fe³⁺ directly aggregates hyperphosphorylated tau (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wang-2022-ferroptosis-tau",
    title:
      "Ferroptosis promotes microtubule-associated protein tau aggregation via GSK-3β activation and proteasome inhibition",
    authors: "Wang S, Jiang Y, Liu Y, et al.",
    journal: "Molecular Neurobiology",
    year: 2022,
    doi: "10.1007/s12035-022-02731-8",
    pmid: "34997541",
    url: "https://pubmed.ncbi.nlm.nih.gov/34997541/",
    tags: ["iron", "ferroptosis", "alzheimers"],
    citations: [
      {
        citationId: "wang-2022-ferroptosis-tau-c1",
        sourceId: "wang-2022-ferroptosis-tau",
        quote:
          "Ferroptosis promotes microtubule-associated protein tau aggregation via GSK-3β activation and proteasome inhibition",
        context:
          "Ferroptotic signaling activates GSK-3β, driving tau aggregation and proteasome inhibition",
        projectRef:
          "Iron cascades: Ferroptosis → GSK-3β → tau aggregation (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "rao-adlard-2018",
    title:
      "Untangling tau and iron: exploring the interaction between iron and tau in neurodegeneration",
    authors: "Rao SS, Adlard PA",
    journal: "Frontiers in Molecular Neuroscience",
    year: 2018,
    doi: "10.3389/fnmol.2018.00276",
    pmid: "30174587",
    url: "https://pubmed.ncbi.nlm.nih.gov/30174587/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "rao-adlard-2018-c1",
        sourceId: "rao-adlard-2018",
        quote:
          "Untangling tau and iron: exploring the interaction between iron and tau in neurodegeneration",
        context:
          "Review linking iron to tau pathology; chelators reduce pTau in animal models",
        projectRef:
          "Iron cascades: Iron-tau colocalization; chelators reduce pTau (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "egana-2003",
    title:
      "Iron-induced oxidative stress modify tau phosphorylation patterns in hippocampal cell cultures",
    authors: "Egaña JT, Zambrano C, Nuñez MT, et al.",
    journal: "BioMetals",
    year: 2003,
    doi: "10.1023/A:1020727218493",
    pmid: "12572681",
    url: "https://pubmed.ncbi.nlm.nih.gov/12572681/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "egana-2003-c1",
        sourceId: "egana-2003",
        quote:
          "Iron-induced oxidative stress modify tau phosphorylation patterns in hippocampal cell cultures",
        context:
          "Iron-tau colocalization in NFT-bearing neurons",
        projectRef:
          "Iron cascades: Iron-tau colocalization (tau section supporting evidence)",
      },
    ],
    verificationStatus: "verified",
  },

  // AMYLOID EXPANSION
  {
    id: "tsatsanis-2020-molpsych",
    title:
      "Amyloidogenic processing of Alzheimer's disease \u03B2-amyloid precursor protein induces cellular iron retention",
    authors: "Tsatsanis A, Wong BX, Gunn AP, et al.",
    journal: "Molecular Psychiatry",
    year: 2020,
    doi: "10.1038/s41380-020-0762-0",
    pmid: "32444869",
    url: "https://pubmed.ncbi.nlm.nih.gov/32444869/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "tsatsanis-2020-molpsych-c1",
        sourceId: "tsatsanis-2020-molpsych",
        quote:
          "Endocytotic amyloidogenic processing of APP impairs iron export by destabilizing ferroportin on the cell surface",
        context:
          "Amyloidogenic processing removes APP from surface, destabilizing ferroportin; non-amyloidogenic processing preserves it",
        projectRef:
          "Iron cascades: APP dual function (mechanism step 3)",
      },
      {
        citationId: "tsatsanis-2020-molpsych-c2",
        sourceId: "tsatsanis-2020-molpsych",
        quote:
          "APP promotes neuronal iron efflux by stabilizing the cell-surface presentation of ferroportin, the only iron export channel of cells",
        context:
          "Intact APP at the cell surface stabilizes ferroportin for iron export",
        projectRef:
          "FELINE intro: Fe layer — Iron export segment",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ott-2015-dismodelmech",
    title:
      "Iron is a specific cofactor for distinct oxidation- and aggregation-dependent A\u03B2 toxicity mechanisms in a Drosophila model",
    authors: "Ott S, Dziadulewicz N, Crowther DC",
    journal: "Disease Models & Mechanisms",
    year: 2015,
    doi: "10.1242/dmm.019042",
    pmid: "26035384",
    url: "https://pubmed.ncbi.nlm.nih.gov/26035384/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "ott-2015-dismodelmech-c1",
        sourceId: "ott-2015-dismodelmech",
        quote:
          "Iron is a specific cofactor for distinct oxidation- and aggregation-dependent A\u03B2 toxicity mechanisms in a Drosophila model",
        context:
          "Iron is specific cofactor for A\u03B2 toxicity; not seen for other aggregation-prone polypeptides; His6/13/14 mediate metal-dependent mechanisms",
        projectRef:
          "Iron cascades: Iron determines oligomer toxicity (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "istrate-2012-biophysj",
    title:
      "NMR solution structure of rat a\u03B2(1-16): toward understanding the mechanism of rats' resistance to Alzheimer's disease",
    authors: "Istrate AN, Tsvetkov PO, Mantsyzov AB, et al.",
    journal: "Biophysical Journal",
    year: 2012,
    doi: "10.1016/j.bpj.2011.11.4006",
    pmid: "22225807",
    url: "https://pubmed.ncbi.nlm.nih.gov/22225807/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "istrate-2012-biophysj-c1",
        sourceId: "istrate-2012-biophysj",
        quote:
          "The zinc coordination site was found to involve residues His-6 and His-14 of both peptide chains",
        context:
          "Rat A\u03B2 with Arg13 (vs human His13) forms dimers that block further oligomerization; explains why mice don't get spontaneous AD",
        projectRef:
          "Iron cascades: His13 as linchpin (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "chourrout-2023-actabiomater",
    title:
      "Virtual histology of Alzheimer's disease: Biometal entrapment within amyloid-\u03B2 plaques allows for detection via X-ray phase-contrast imaging",
    authors: "Chourrout M, Sandt C, Weitkamp T, et al.",
    journal: "Acta Biomaterialia",
    year: 2023,
    doi: "10.1016/j.actbio.2023.07.046",
    pmid: "37574159",
    url: "https://pubmed.ncbi.nlm.nih.gov/37574159/",
    tags: ["iron", "alzheimers", "imaging"],
    citations: [
      {
        citationId: "chourrout-2023-actabiomater-c1",
        sourceId: "chourrout-2023-actabiomater",
        quote:
          "J20 (zinc and iron) and TgF344 (copper) strains showed greater metal accumulation than APPPS1 and ArcA\u03B2 mice",
        context:
          "Different transgenic constructs produce plaques with different metal profiles; metal accumulation drives plaque detection",
        projectRef:
          "Iron cascades: His13 as linchpin (mechanism step 5, cross-species comparison)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "soderberg-2024-scirep",
    title:
      "Amyloid-beta antibody binding to cerebral amyloid angiopathy fibrils and risk for amyloid-related imaging abnormalities",
    authors: "S\u00F6derberg L, Johannesson M, Gkanatsiou E, et al.",
    journal: "Scientific Reports",
    year: 2024,
    doi: "10.1038/s41598-024-61691-2",
    pmid: "38740836",
    url: "https://pubmed.ncbi.nlm.nih.gov/38740836/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "soderberg-2024-scirep-c1",
        sourceId: "soderberg-2024-scirep",
        quote:
          "Amyloid-beta antibody binding to cerebral amyloid angiopathy fibrils and risk for amyloid-related imaging abnormalities",
        context:
          "ARIA rates correlate with CAA fibril binding affinity, not parenchymal plaque clearance; solanezumab 0% ARIA vs aducanumab ~35%",
        projectRef:
          "Iron cascades: ARIA mechanism (mechanism step 10); ARIA binding table",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "taylor-2024-molneurodeg",
    title:
      "Amyloid-\u03B2 (A\u03B2) immunotherapy induced microhemorrhages are linked to vascular inflammation and cerebrovascular damage in a mouse model of Alzheimer's disease",
    authors: "Taylor X, Noristani HN, Fitzgerald GJ, et al.",
    journal: "Molecular Neurodegeneration",
    year: 2024,
    doi: "10.1186/s13024-024-00758-0",
    pmid: "39434125",
    url: "https://pubmed.ncbi.nlm.nih.gov/39434125/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "taylor-2024-molneurodeg-c1",
        sourceId: "taylor-2024-molneurodeg",
        quote:
          "Amyloid-\u03B2 (A\u03B2) immunotherapy induced microhemorrhages are linked to vascular inflammation and cerebrovascular damage in a mouse model of Alzheimer's disease",
        context:
          "CAA-A\u03B2 antibody immune complex triggers perivascular macrophage activation, smooth muscle cell destruction, vascular fibrosis, BBB breakdown",
        projectRef:
          "Iron cascades: ARIA mechanism (mechanism step 10)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "bolognin-2011-ijbcb",
    title:
      "Aluminum, copper, iron and zinc differentially alter amyloid-A\u03B2(1-42) aggregation and toxicity",
    authors: "Bolognin S, Messori L, Drago D, et al.",
    journal: "International Journal of Biochemistry & Cell Biology",
    year: 2011,
    doi: "10.1016/j.biocel.2011.02.009",
    pmid: "21376832",
    url: "https://pubmed.ncbi.nlm.nih.gov/21376832/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "bolognin-2011-ijbcb-c1",
        sourceId: "bolognin-2011-ijbcb",
        quote:
          "Both aluminum(III) and iron(III) ions were found to induce peculiar aggregation properties, ultimately leading to the formation of annular protofibrils and of fibrillar oligomers",
        context:
          "Fe\u00B3\u207A produces annular protofibrils (most toxic form); Cu\u00B2\u207A produces amorphous aggregates; Zn\u00B2\u207A stabilizes non-fibrillar oligomers",
        projectRef:
          "Iron cascades: Iron determines oligomer toxicity (mechanism step 6); metal-oligomer morphology table",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "everett-2020-scirep",
    title:
      "Iron stored in ferritin is chemically reduced in the presence of aggregating A\u03B2(1-42)",
    authors: "Everett J, Brooks J, Lermyte F, et al.",
    journal: "Scientific Reports",
    year: 2020,
    doi: "10.1038/s41598-020-67117-z",
    pmid: "32587293",
    url: "https://pubmed.ncbi.nlm.nih.gov/32587293/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "everett-2020-scirep-c1",
        sourceId: "everett-2020-scirep",
        quote:
          "Iron stored in ferritin is chemically reduced in the presence of aggregating A\u03B2(1-42)",
        context:
          "A\u03B2 creates reducing environment that converts safe ferric ferritin core to reactive ferrous iron; no reduction without A\u03B2",
        projectRef:
          "Iron cascades: A\u03B2 concentrates and reduces iron (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "streit-2025-pharmrev",
    title:
      "Ferroptosis and pathogenesis of neuritic plaques in Alzheimer disease",
    authors: "Streit WJ, Phan L, Bechmann I",
    journal: "Pharmacological Reviews",
    year: 2025,
    doi: "10.1124/pharmrev.123.000823",
    pmid: "39952690",
    url: "https://pubmed.ncbi.nlm.nih.gov/39952690/",
    tags: ["iron", "alzheimers", "ferroptosis"],
    citations: [
      {
        citationId: "streit-2025-pharmrev-c1",
        sourceId: "streit-2025-pharmrev",
        quote:
          "Ferroptosis and pathogenesis of neuritic plaques in Alzheimer disease",
        context:
          "Iron-mediated neuronal ferroptosis is the first step in neuritic plaque creation; challenges traditional amyloid cascade theory",
        projectRef:
          "Iron cascades: Compaction as damage control (mechanism step 7, supporting evidence)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "albertini-2025-natneurosci",
    title:
      "The Alzheimer's therapeutic Lecanemab attenuates A\u03B2 pathology by inducing an amyloid-clearing program in microglia",
    authors: "Albertini G, Zielonka M, Cuypers ML, et al.",
    journal: "Nature Neuroscience",
    year: 2025,
    doi: "10.1038/s41593-025-02125-8",
    pmid: "41286448",
    url: "https://pubmed.ncbi.nlm.nih.gov/41286448/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "albertini-2025-natneurosci-c1",
        sourceId: "albertini-2025-natneurosci",
        quote:
          "The Alzheimer's therapeutic Lecanemab attenuates A\u03B2 pathology by inducing an amyloid-clearing program in microglia",
        context:
          "Fc-silenced lecanemab fails to induce microglial clearance program; benefit comes from microglial reprogramming, not plaque binding alone",
        projectRef:
          "Iron cascades: Anti-amyloid trials through the iron lens (mechanism step 8)",
      },
    ],
    verificationStatus: "verified",
  },

  // TAU COFACTOR HYPOTHESIS ADDITIONS
  {
    id: "fichou-2018-pnas",
    title:
      "Cofactors are essential constituents of stable and seeding-active tau fibrils",
    authors: "Fichou Y, Lin Y, Rauch JN, et al.",
    journal: "Proceedings of the National Academy of Sciences",
    year: 2018,
    doi: "10.1073/pnas.1810058115",
    pmid: "30538196",
    url: "https://pubmed.ncbi.nlm.nih.gov/30538196/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "fichou-2018-pnas-c1",
        sourceId: "fichou-2018-pnas",
        quote:
          "Cofactors are essential constituents of stable and seeding-active tau fibrils",
        context:
          "Heparin/RNA-induced tau fibrils depolymerize when cofactor is removed; brain-derived seeds lose propagation after one generation without cofactors",
        projectRef:
          "Iron cascades: Remove the cofactor, reverse the aggregation (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ahmadi-2019-jinorgbio",
    title:
      "Interaction of metal ions with tau protein. The case for a metal-mediated tau aggregation",
    authors: "Ahmadi S, Zhu S, Sharma R, et al.",
    journal: "Journal of Inorganic Biochemistry",
    year: 2019,
    doi: "10.1016/j.jinorgbio.2019.02.007",
    pmid: "30826589",
    url: "https://pubmed.ncbi.nlm.nih.gov/30826589/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "ahmadi-2019-jinorgbio-c1",
        sourceId: "ahmadi-2019-jinorgbio",
        quote:
          "Interaction of metal ions with tau protein. The case for a metal-mediated tau aggregation",
        context:
          "Both Fe2+ and Fe3+ induce conformational changes in full-length tau promoting aggregation; phosphorylation by GSK3\u03B2 reduced metal binding affinity",
        projectRef:
          "Iron cascades: Iron is the in vivo cofactor (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "nubling-2012-molneurodegener",
    title:
      "Synergistic influence of phosphorylation and metal ions on tau oligomer formation and coaggregation with \u03B1-synuclein at the single molecule level",
    authors: "N\u00FCbling G, Bader B, Levin J, et al.",
    journal: "Molecular Neurodegeneration",
    year: 2012,
    doi: "10.1186/1750-1326-7-35",
    pmid: "22824345",
    url: "https://pubmed.ncbi.nlm.nih.gov/22824345/",
    tags: ["iron", "alzheimers", "parkinsons"],
    citations: [
      {
        citationId: "nubling-2012-molneurodegener-c1",
        sourceId: "nubling-2012-molneurodegener",
        quote:
          "Synergistic influence of phosphorylation and metal ions on tau oligomer formation and coaggregation with \u03B1-synuclein at the single molecule level",
        context:
          "Fe3+ promotes tau-\u03B1Syn co-aggregation; phosphorylated tau produces oligomers averaging 53 tau + 10 \u03B1-syn monomers",
        projectRef:
          "Iron cascades: Iron is the in vivo cofactor (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "shulman-2023-nataging",
    title:
      "TANGO: a placebo-controlled randomized phase 2 study of efficacy and safety of the anti-tau monoclonal antibody gosuranemab in early Alzheimer's disease",
    authors: "Shulman M, Kong J, O'Gorman J, et al.",
    journal: "Nature Aging",
    year: 2023,
    doi: "10.1038/s43587-023-00523-w",
    pmid: "38012285",
    url: "https://pubmed.ncbi.nlm.nih.gov/38012285/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "shulman-2023-nataging-c1",
        sourceId: "shulman-2023-nataging",
        quote:
          "TANGO: a placebo-controlled randomized phase 2 study of efficacy and safety of the anti-tau monoclonal antibody gosuranemab in early Alzheimer's disease",
        context:
          "98% reduction in CSF unbound N-terminal tau, yet no cognitive benefit; worsened cognition in early AD",
        projectRef:
          "Iron cascades: Anti-tau antibodies confirm the cofactor model (mechanism step 10); trial table",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hoglinger-2021-lancetneurol",
    title:
      "Safety and efficacy of tilavonemab in progressive supranuclear palsy: a phase 2, randomised, placebo-controlled trial",
    authors: "H\u00F6glinger GU, Litvan I, Mendonca N, et al.",
    journal: "The Lancet Neurology",
    year: 2021,
    doi: "10.1016/S1474-4422(20)30489-0",
    pmid: "33609476",
    url: "https://pubmed.ncbi.nlm.nih.gov/33609476/",
    tags: ["clinical-trials"],
    citations: [
      {
        citationId: "hoglinger-2021-lancetneurol-c1",
        sourceId: "hoglinger-2021-lancetneurol",
        quote:
          "Safety and efficacy of tilavonemab in progressive supranuclear palsy: a phase 2, randomised, placebo-controlled trial",
        context:
          "Tilavonemab (N-terminal anti-tau) showed no benefit in PSP; discontinued",
        projectRef:
          "Iron cascades: Anti-tau trial table (tilavonemab row)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mummery-2023-natmed",
    title:
      "Tau-targeting antisense oligonucleotide MAPTRx in mild Alzheimer's disease: a phase 1b, randomized, placebo-controlled trial",
    authors: "Mummery CJ, Borjesson-Hanson A, Blackburn DJ, et al.",
    journal: "Nature Medicine",
    year: 2023,
    doi: "10.1038/s41591-023-02326-3",
    pmid: "37095250",
    url: "https://pubmed.ncbi.nlm.nih.gov/37095250/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "mummery-2023-natmed-c1",
        sourceId: "mummery-2023-natmed",
        quote:
          "Tau-targeting antisense oligonucleotide MAPTRx in mild Alzheimer's disease: a phase 1b, randomized, placebo-controlled trial",
        context:
          "BIIB080/MAPTRx reduced CSF total tau ~50-60%, slowed tau PET; favorable cognitive trends; FDA fast-tracked",
        projectRef:
          "Iron cascades: Anti-tau trial table (BIIB080 row); mechanism step 10",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zhang-2019-elife",
    title:
      "Heparin-induced tau filaments are polymorphic and differ from those in Alzheimer's and Pick's diseases",
    authors: "Zhang W, Falcon B, Murzin AG, et al.",
    journal: "eLife",
    year: 2019,
    doi: "10.7554/eLife.43584",
    pmid: "30720432",
    url: "https://pubmed.ncbi.nlm.nih.gov/30720432/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "zhang-2019-elife-c1",
        sourceId: "zhang-2019-elife",
        quote:
          "Heparin-induced tau filaments are polymorphic and differ from those in Alzheimer's and Pick's diseases",
        context:
          "Cryo-EM shows heparin-induced tau fibrils differ from disease-derived fibrils; raises questions about in vitro model relevance",
        projectRef:
          "Iron cascades: The aggregation paradox (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "monteiro-2023-neurology",
    title:
      "Randomized phase II study of the safety and efficacy of semorinemab in participants with mild-to-moderate Alzheimer disease: Lauriet",
    authors: "Monteiro C, Toth B, Brunstein F, et al.",
    journal: "Neurology",
    year: 2023,
    doi: "10.1212/WNL.0000000000207663",
    pmid: "37643887",
    url: "https://pubmed.ncbi.nlm.nih.gov/37643887/",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "monteiro-2023-neurology-c1",
        sourceId: "monteiro-2023-neurology",
        quote:
          "Randomized phase II study of the safety and efficacy of semorinemab in participants with mild-to-moderate Alzheimer disease: Lauriet",
        context:
          "Semorinemab (N-terminal anti-tau) failed in early AD; modest ADAS-Cog signal in moderate AD",
        projectRef:
          "Iron cascades: Anti-tau trial table (semorinemab row)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "zheng-2024-ijms",
    title:
      "The Enigma of Tau Protein Aggregation: Mechanistic Insights and Future Challenges",
    authors: "Zheng H, Sun H, Cai Q, et al.",
    journal: "International Journal of Molecular Sciences",
    year: 2024,
    doi: "10.3390/ijms25094969",
    pmid: "38732197",
    url: "https://pubmed.ncbi.nlm.nih.gov/38732197/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "zheng-2024-ijms-c1",
        sourceId: "zheng-2024-ijms",
        quote:
          "The Enigma of Tau Protein Aggregation: Mechanistic Insights and Future Challenges",
        context:
          "Review: tau is intrinsically disordered and heat-stable; 150 \u03BCM recombinant tau won't fibrilize without cofactor",
        projectRef:
          "Iron cascades: The aggregation paradox (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "barton-2024-ctad",
    title:
      "Bepranemab Phase 2a TOGETHER study results",
    authors: "Barton ME, Shimizu S, et al.",
    journal: "CTAD 2024 (conference presentation)",
    year: 2024,
    url: "https://www.ucb.com/newsroom/press-releases/article/ucb-presents-encouraging-data-on-bepranemab-in-early-alzheimer-s-disease-in-phase-2a-study-at-ctad-2024",
    tags: ["alzheimers", "clinical-trials"],
    citations: [
      {
        citationId: "barton-2024-ctad-c1",
        sourceId: "barton-2024-ctad",
        quote:
          "Bepranemab Phase 2a TOGETHER study results",
        context:
          "Tau PET slowed 33-58% vs placebo; cognitive signal in APOE4 non-carriers with low baseline tau only",
        projectRef:
          "Iron cascades: Anti-tau trial table (bepranemab row); mechanism step 10",
      },
    ],
    verificationStatus: "verified", // Conference presentation, verified via UCB press release
  },

  // ──────────────────────────────────────────────────────────────────────
  // OLIGODENDROCYTE SECTION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "reinert-2019",
    title:
      "Iron concentrations in neurons and glial cells with estimates on ferritin concentrations",
    authors: "Reinert A, Morawski M, Seeger J, et al.",
    journal: "BMC Neuroscience",
    year: 2019,
    doi: "10.1186/s12868-019-0507-7",
    pmid: "31142282",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6542065/#:~:text=average%20iron%20concentration%20of%20oligodendrocytes%20is%20fivefold%20higher",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "reinert-2019-c1",
        sourceId: "reinert-2019",
        quote:
          "The average intracellular iron concentration is (1.29±14)mM for astrocytes, (1.76±27)mM for microglia and (3.05±16)mM for oligodendrocytes",
        context:
          "OLs 3.05 mM, microglia 1.76 mM, astrocytes 1.29 mM, neurons 0.57 mM",
        projectRef:
          "Iron cascades: Triple vulnerability (mechanism step 1); iron concentration table",
      },
      {
        citationId: "reinert-2019-c2",
        sourceId: "reinert-2019",
        quote:
          "The average iron concentration of oligodendrocytes is fivefold higher than that of neurons (p<0.001)",
        context:
          "5× ratio between OL and neuron iron, supporting 5.4× calculated from 3.05/0.57",
        projectRef:
          "Reframe section: OL vs neuron iron ratio (5.4×)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "thorburne-juurlink-1996",
    title:
      "Low glutathione and high iron govern the susceptibility of oligodendroglial precursors to oxidative stress",
    authors: "Thorburne SK, Juurlink BHJ",
    journal: "Journal of Neurochemistry",
    year: 1996,
    doi: "10.1046/j.1471-4159.1996.67031014.x",
    pmid: "8752107",
    url: "https://pubmed.ncbi.nlm.nih.gov/8752107/",
    tags: ["iron", "oligodendrocyte", "ferroptosis"],
    citations: [
      {
        citationId: "thorburne-juurlink-1996-c1",
        sourceId: "thorburne-juurlink-1996",
        quote:
          "Low glutathione and high iron govern the susceptibility of oligodendroglial precursors to oxidative stress",
        context:
          "Oligodendrocytes have ~1/3 the GSH of astrocytes, explaining ferroptosis vulnerability",
        projectRef:
          "Iron cascades: Triple vulnerability (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "back-1998",
    title:
      "Maturation-dependent vulnerability of oligodendrocytes to oxidative stress-induced death caused by glutathione depletion",
    authors: "Back SA, Gan X, Li Y, et al.",
    journal: "Journal of Neuroscience",
    year: 1998,
    doi: "10.1523/JNEUROSCI.18-16-06241.1998",
    pmid: "9698317",
    url: "https://pubmed.ncbi.nlm.nih.gov/9698317/",
    tags: ["oligodendrocyte", "ferroptosis"],
    citations: [
      {
        citationId: "back-1998-c1",
        sourceId: "back-1998",
        quote:
          "Maturation-dependent vulnerability of oligodendrocytes to oxidative stress-induced death caused by glutathione depletion",
        context:
          "Oligodendrocyte precursors are selectively vulnerable to oxidative stress from GSH depletion",
        projectRef:
          "Iron cascades: Triple vulnerability (mechanism step 1, supporting evidence)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "connor-menzies-1996",
    title:
      "Relationship of iron to oligodendrocytes and myelination",
    authors: "Connor JR, Menzies SL",
    journal: "Glia",
    year: 1996,
    doi: "10.1002/(SICI)1098-1136(199606)17:2<83::AID-GLIA1>3.0.CO;2-7",
    pmid: "8776576",
    url: "https://pubmed.ncbi.nlm.nih.gov/8776576/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "connor-menzies-1996-c1",
        sourceId: "connor-menzies-1996",
        quote:
          "Relationship of iron to oligodendrocytes and myelination",
        context:
          "Developmental window where iron acquisition peaks during active myelination",
        projectRef:
          "Iron cascades: Iron paradox: essential for myelination (mechanism step 2)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "todorich-2009",
    title:
      "Oligodendrocytes and myelination: the role of iron",
    authors: "Todorich B, Pasquini JM, Garcia CI, et al.",
    journal: "Glia",
    year: 2009,
    doi: "10.1002/glia.20784",
    pmid: "18837051",
    url: "https://pubmed.ncbi.nlm.nih.gov/18837051/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "todorich-2009-c1",
        sourceId: "todorich-2009",
        quote:
          "Oligodendrocytes and myelination: the role of iron",
        context:
          "Review of the dual role of iron in OL biology: essential for myelin synthesis but toxic in excess",
        projectRef:
          "Iron cascades: Iron paradox: essential for myelination (mechanism step 2)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cheli-2020-jneurosci",
    title:
      "Impaired postnatal myelination in a conditional knockout mouse for the ferritin heavy chain in oligodendroglial cells",
    authors: "Wan R, Cheli VT, Santiago Gonzalez DA, et al.",
    journal: "Journal of Neuroscience",
    year: 2020,
    doi: "10.1523/JNEUROSCI.1281-20.2020",
    pmid: "32868463",
    url: "https://pubmed.ncbi.nlm.nih.gov/32868463/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "cheli-2020-jneurosci-c1",
        sourceId: "cheli-2020-jneurosci",
        quote:
          "Impaired postnatal myelination in a conditional knockout mouse for the ferritin heavy chain in oligodendroglial cells",
        context:
          "Fth conditional knockout blocks OPC differentiation",
        projectRef:
          "Iron cascades: OPC remyelination requires iron (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "cheli-2023",
    title:
      "Transferrin receptor is necessary for proper oligodendrocyte iron homeostasis and development",
    authors: "Cheli VT, Santiago Gonzalez DA, Wan R, et al.",
    journal: "Journal of Neuroscience",
    year: 2023,
    doi: "10.1523/JNEUROSCI.1383-22.2023",
    pmid: "36977582",
    url: "https://pubmed.ncbi.nlm.nih.gov/36977582/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "cheli-2023-c1",
        sourceId: "cheli-2023",
        quote:
          "Transferrin receptor is necessary for proper oligodendrocyte iron homeostasis and development",
        context:
          "TfR critical for OPC but not mature OLs; stage-specific iron requirements",
        projectRef:
          "Iron cascades: OPC remyelination requires iron via TfR (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mukherjee-2020",
    title:
      "Oligodendrocytes provide antioxidant defense function for neurons by secreting ferritin heavy chain",
    authors: "Mukherjee C, Kling T, Russo B, et al.",
    journal: "Cell Metabolism",
    year: 2020,
    doi: "10.1016/j.cmet.2020.05.019",
    pmid: "32531201",
    url: "https://pubmed.ncbi.nlm.nih.gov/32531201/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "mukherjee-2020-c1",
        sourceId: "mukherjee-2020",
        quote:
          "Oligodendrocytes provide antioxidant defense function for neurons by secreting ferritin heavy chain",
        context:
          "OLs secrete FTH1 via EVs, 20x enriched vs neurons, 17-day turnover",
        projectRef:
          "Iron cascades: FTH1 as iron insulation (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "dal-bianco-2017",
    title:
      "Slow expansion of multiple sclerosis iron rim lesions: pathology and 7 T magnetic resonance imaging",
    authors: "Dal-Bianco A, Grabner G, Kronnerwetter C, et al.",
    journal: "Acta Neuropathologica",
    year: 2017,
    doi: "10.1007/s00401-016-1636-z",
    pmid: "27796537",
    url: "https://pubmed.ncbi.nlm.nih.gov/27796537/",
    tags: ["iron", "ms", "imaging"],
    citations: [
      {
        citationId: "dal-bianco-2017-c1",
        sourceId: "dal-bianco-2017",
        quote:
          "Slow expansion of multiple sclerosis iron rim lesions: pathology and 7 T magnetic resonance imaging",
        context:
          "Iron rim lesions expand at 2.2%/yr; iron-laden microglia drive slow centrifugal destruction",
        projectRef:
          "Iron cascades: Iron rim lesions (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "absinta-2019",
    title:
      "Association of chronic active multiple sclerosis lesions with disability in vivo",
    authors: "Absinta M, Sati P, Masuzzo F, et al.",
    journal: "JAMA Neurology",
    year: 2019,
    doi: "10.1001/jamaneurol.2019.2399",
    pmid: "31403674",
    url: "https://pubmed.ncbi.nlm.nih.gov/31403674/",
    tags: ["iron", "ms", "imaging"],
    citations: [
      {
        citationId: "absinta-2019-c1",
        sourceId: "absinta-2019",
        quote:
          "Association of chronic active multiple sclerosis lesions with disability in vivo",
        context:
          "50-65% prevalence of paramagnetic rim lesions; predict worse disability outcomes",
        projectRef:
          "Iron cascades: Iron rim lesions (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },

  // DEMYELINATION EXPANSION
  {
    id: "wade-connor-2025-glia",
    title:
      "What Does Iron Mean to an Oligodendrocyte?",
    authors: "Wade QW, Connor JR",
    journal: "Glia",
    year: 2025,
    doi: "10.1002/glia.70043",
    pmid: "40401729",
    url: "https://pubmed.ncbi.nlm.nih.gov/40401729/",
    tags: ["iron", "oligodendrocyte"],
    citations: [
      {
        citationId: "wade-connor-2025-glia-c1",
        sourceId: "wade-connor-2025-glia",
        quote:
          "The brain has the highest rate of energy consumption, and within the brain, oligodendrocytes have the highest level of oxidative metabolism per volume. Oligodendrocytes also stain the strongest for iron.",
        context:
          "Confirms OLs have highest iron and metabolic rate of any brain cell; comprehensive review of OL iron biology",
        projectRef:
          "Iron cascades: Triple vulnerability (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "saverio-2025-redoxbiol",
    title:
      "AKRs confer oligodendrocytes resistance to differentiation-stimulated ferroptosis",
    authors: "Saverio V, Ferrario E, Monzani R, et al.",
    journal: "Redox Biology",
    year: 2025,
    doi: "10.1016/j.redox.2024.103463",
    pmid: "39671850",
    url: "https://pubmed.ncbi.nlm.nih.gov/39671850/",
    tags: ["iron", "oligodendrocyte", "ferroptosis"],
    citations: [
      {
        citationId: "saverio-2025-redoxbiol-c1",
        sourceId: "saverio-2025-redoxbiol",
        quote:
          "The physiological and maturation-dependent increase in iron accumulation within oligodendrocytes acts as a pro-ferroptotic signal, countered by the concurrent expression of AKR1C1.",
        context:
          "AKR1C1 is key anti-ferroptotic defense in mature OLs; neuroinflammation downregulates it via miRNAs in MS",
        projectRef:
          "Iron cascades: Multiple ferroptosis pathways converge on OLs (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  // jhelum-2020-jneurosci already exists in iron-ferroptosis.ts
  {
    id: "mironova-2026-science",
    title:
      "Myelin is repaired by constitutive differentiation of oligodendrocyte progenitors",
    authors: "Mironova YA, Dang B, Heo D, et al.",
    journal: "Science",
    year: 2026,
    doi: "10.1126/science.adu2896",
    pmid: "41570153",
    url: "https://pubmed.ncbi.nlm.nih.gov/41570153/",
    tags: ["oligodendrocyte", "ms"],
    citations: [
      {
        citationId: "mironova-2026-science-c1",
        sourceId: "mironova-2026-science",
        quote:
          "The generation of new oligodendrocytes in the adult brain is governed predominantly by widespread, constitutive lineage progression of OPCs that is uncoupled from myelin demand",
        context:
          "OPCs differentiate constitutively; demyelination doesn't increase rate; inflammation suppresses it; 'dandelion clock' structures (DACS) mark each attempt",
        projectRef:
          "Iron cascades: OPCs try to repair constantly but inflammation blocks them (mechanism step 7)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "devries-2024-frontimmunol",
    title:
      "Dysregulated C1q and CD47 in the aging monkey brain: association with myelin damage, microglia reactivity, and cognitive decline",
    authors: "DeVries SA, Dimovasili C, Medalla M, et al.",
    journal: "Frontiers in Immunology",
    year: 2024,
    doi: "10.3389/fimmu.2024.1426975",
    pmid: "39399501",
    url: "https://pubmed.ncbi.nlm.nih.gov/39399501/",
    tags: ["oligodendrocyte", "aging"],
    citations: [
      {
        citationId: "devries-2024-frontimmunol-c1",
        sourceId: "devries-2024-frontimmunol",
        quote:
          "C1q and MBP colocalization increased with age",
        context:
          "C1q-MBP colocalization correlates with cognitive impairment; OL CD47 mRNA decreases 38.7% in old animals; microglial C1qA increases 125.5%",
        projectRef:
          "Iron cascades: Complement targets myelin and blocks OPC repair (mechanism step 8)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "gao-2022-expneurol",
    title:
      "C1q inhibits differentiation of oligodendrocyte progenitor cells via Wnt/\u03B2-catenin signaling activation in a cuprizone-induced mouse model of multiple sclerosis",
    authors: "Gao Z, Zhang C, Feng Z, et al.",
    journal: "Experimental Neurology",
    year: 2022,
    doi: "10.1016/j.expneurol.2021.113947",
    pmid: "34902359",
    url: "https://pubmed.ncbi.nlm.nih.gov/34902359/",
    tags: ["oligodendrocyte", "ms"],
    citations: [
      {
        citationId: "gao-2022-expneurol-c1",
        sourceId: "gao-2022-expneurol",
        quote:
          "C1q was involved in demyelination in response to CPZ in mice by preventing OPC from differentiating into mature oligodendrocyte via Wnt/\u03B2-catenin signaling activation",
        context:
          "C1q blocks OPC differentiation via Wnt/\u03B2-catenin; C1s knockdown attenuated demyelination and promoted M2 microglia",
        projectRef:
          "Iron cascades: Complement targets myelin and blocks OPC repair (mechanism step 8)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "fischer-2025-jneuroinflamm",
    title:
      "Fumarate-based drugs protect against neuroinflammation via upregulation of anti-ferroptotic pathways",
    authors: "Fischer K, Thewes L, Prozorovski T, et al.",
    journal: "Journal of Neuroinflammation",
    year: 2025,
    doi: "10.1186/s12974-025-03592-3",
    pmid: "41146249",
    url: "https://pubmed.ncbi.nlm.nih.gov/41146249/",
    tags: ["iron", "oligodendrocyte", "ferroptosis", "ms"],
    citations: [
      {
        citationId: "fischer-2025-jneuroinflamm-c1",
        sourceId: "fischer-2025-jneuroinflamm",
        quote:
          "Anti-ferroptotic enzymes are upregulated in oligodendrocytes upon diroximel fumarate treatment as well as in cerebellum of dimethyl fumarate-treated mice and in peripheral blood mononuclear cells of patients receiving dimethyl fumarate",
        context:
          "DMF/DRF work via anti-ferroptotic Nrf2 pathway in OLs; inadvertent ferroptosis therapy for MS",
        projectRef:
          "Iron cascades: MS drugs inadvertently treat OL ferroptosis (mechanism step 9)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "haider-2014-jnnp",
    title:
      "Multiple sclerosis deep grey matter: the relation between demyelination, neurodegeneration, inflammation and iron",
    authors: "Haider L, Simeonidou C, Steinberger G, et al.",
    journal: "Journal of Neurology, Neurosurgery & Psychiatry",
    year: 2014,
    doi: "10.1136/jnnp-2014-307712",
    pmid: "24899728",
    url: "https://pubmed.ncbi.nlm.nih.gov/24899728/",
    tags: ["iron", "ms"],
    citations: [
      {
        citationId: "haider-2014-jnnp-c1",
        sourceId: "haider-2014-jnnp",
        quote:
          "Iron was stored primarily within oligodendrocytes and myelin fibres and released upon demyelination",
        context:
          "Iron released from dying OLs accumulates in activated microglia at lesion edges; oxidative damage in all active MS lesions",
        projectRef:
          "Iron cascades: Iron rim lesions (mechanism step 11)",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // CHOLINERGIC SECTION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "mesquita-2012",
    title:
      "Modulation of iron metabolism in aging and in Alzheimer's disease: relevance of the choroid plexus",
    authors: "Mesquita SD, Ferreira AC, Sousa JC, et al.",
    journal: "Frontiers in Cellular Neuroscience",
    year: 2012,
    doi: "10.3389/fncel.2012.00025",
    pmid: "22661928",
    url: "https://pubmed.ncbi.nlm.nih.gov/22661928/",
    tags: ["iron", "alzheimers"],
    citations: [
      {
        citationId: "mesquita-2012-c1",
        sourceId: "mesquita-2012",
        quote:
          "Modulation of iron metabolism in aging and in Alzheimer's disease: relevance of the choroid plexus",
        context:
          "Choroid plexus secretes transferrin, ceruloplasmin and regulates CSF iron homeostasis",
        projectRef:
          "Iron cascades: Choroid plexus as iron gatekeeper (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ariza-2015",
    title:
      "Dysregulated iron metabolism in the choroid plexus in fragile X-associated tremor/ataxia syndrome",
    authors: "Ariza J, Steward C, Rueckert F, et al.",
    journal: "Brain Research",
    year: 2015,
    doi: "10.1016/j.brainres.2014.11.058",
    pmid: "25498860",
    url: "https://pubmed.ncbi.nlm.nih.gov/25498860/",
    tags: ["iron"],
    citations: [
      {
        citationId: "ariza-2015-c1",
        sourceId: "ariza-2015",
        quote:
          "Dysregulated iron metabolism in the choroid plexus in fragile X-associated tremor/ataxia syndrome",
        context:
          "FXTAS choroid plexus: decreased ferroportin, decreased ceruloplasmin, increased iron deposits",
        projectRef:
          "Iron cascades: Choroid plexus deteriorates with age/disease (mechanism step 2)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "moos-morgan-2000",
    title:
      "Transferrin and transferrin receptor function in brain barrier systems",
    authors: "Moos T, Morgan EH",
    journal: "Cellular and Molecular Neurobiology",
    year: 2000,
    doi: "10.1023/A:1006948027674",
    pmid: "10690503",
    url: "https://pubmed.ncbi.nlm.nih.gov/10690503/",
    tags: ["iron"],
    citations: [
      {
        citationId: "moos-morgan-2000-c1",
        sourceId: "moos-morgan-2000",
        quote:
          "Transferrin and transferrin receptor function in brain barrier systems",
        context:
          "Iron transport through the choroid plexus; 10-fold concentration gradient",
        projectRef:
          "Iron cascades: Choroid plexus as iron gatekeeper (mechanism step 1)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "whitehouse-1981",
    title:
      "Alzheimer disease: evidence for selective loss of cholinergic neurons in the nucleus basalis",
    authors: "Whitehouse PJ, Price DL, Clark AW, et al.",
    journal: "Annals of Neurology",
    year: 1981,
    doi: "10.1002/ana.410100203",
    pmid: "7283399",
    url: "https://pubmed.ncbi.nlm.nih.gov/7283399/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "whitehouse-1981-c1",
        sourceId: "whitehouse-1981",
        quote:
          "Alzheimer disease: evidence for selective loss of cholinergic neurons in the nucleus basalis",
        context:
          "Original documentation of selective nbM cholinergic neuron loss in AD",
        projectRef:
          "Iron cascades: Iron → lipid peroxidation → HNE → cholinergic neuron death (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "whitehouse-1982",
    title:
      "Alzheimer's disease and senile dementia: loss of neurons in the basal forebrain",
    authors: "Whitehouse PJ, Price DL, Struble RG, et al.",
    journal: "Science",
    year: 1982,
    doi: "10.1126/science.7058341",
    pmid: "7058341",
    url: "https://pubmed.ncbi.nlm.nih.gov/7058341/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "whitehouse-1982-c1",
        sourceId: "whitehouse-1982",
        quote:
          "Alzheimer's disease and senile dementia: loss of neurons in the basal forebrain",
        context:
          "60-80% ChAT loss in nucleus basalis of Meynert in AD",
        projectRef:
          "Iron cascades: 60-80% ChAT loss stat source",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mark-1997",
    title:
      "A role for 4-hydroxynonenal, an aldehydic product of lipid peroxidation, in disruption of ion homeostasis and neuronal death induced by amyloid beta-peptide",
    authors: "Mark RJ, Lovell MA, Markesbery WR, et al.",
    journal: "Journal of Molecular Neuroscience",
    year: 1997,
    doi: "10.1007/BF02736761",
    pmid: "8978733",
    url: "https://pubmed.ncbi.nlm.nih.gov/8978733/",
    tags: ["iron", "ferroptosis", "alzheimers"],
    citations: [
      {
        citationId: "mark-1997-c1",
        sourceId: "mark-1997",
        quote:
          "A role for 4-hydroxynonenal, an aldehydic product of lipid peroxidation, in disruption of ion homeostasis and neuronal death induced by amyloid beta-peptide",
        context:
          "HNE selectively kills cholinergic neurons; direct causal chain from lipid peroxidation to cholinergic death",
        projectRef:
          "Iron cascades: Iron → lipid peroxidation → HNE → cholinergic neuron death (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "dhenain-1998",
    title:
      "Cerebral T2-weighted signal decrease during aging in the mouse lemur primate reflects iron accumulation",
    authors: "Dhenain M, Duyckaerts C, Michot JL, et al.",
    journal: "Neurobiology of Aging",
    year: 1998,
    doi: "10.1016/S0197-4580(98)00005-0",
    pmid: "9562505",
    url: "https://pubmed.ncbi.nlm.nih.gov/9562505/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "dhenain-1998-c1",
        sourceId: "dhenain-1998",
        quote:
          "Cerebral T2-weighted signal decrease during aging in the mouse lemur primate reflects iron accumulation",
        context:
          "Age-related iron accumulation in non-human primate brain",
        projectRef:
          "Iron cascades: Cholinergic system (supporting evidence)",
      },
    ],
    verificationStatus: "unverified", // UNVERIFIED
  },
  {
    id: "sudo-2007",
    title:
      "Muscarinic receptor subtypes in the cerebral cortex of Alzheimer's disease patients by iodo-QNB autoradiography",
    authors: "Sudo Y, et al.",
    journal: "Journal of the Neurological Sciences",
    year: 2007,
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "sudo-2007-c1",
        sourceId: "sudo-2007",
        quote:
          "Muscarinic receptor subtypes in the cerebral cortex of Alzheimer's disease patients by iodo-QNB autoradiography",
        context:
          "Radiolabeled QNB maps muscarinic receptor loss in AD; acute muscarinic blockade reproduces AD-like symptoms",
        projectRef:
          "Iron cascades: BZ/QNB as model (mechanism step 4 supporting evidence)",
      },
    ],
    verificationStatus: "unverified", // UNVERIFIED
  },
  {
    id: "coupland-2019",
    title:
      "Anticholinergic drug exposure and the risk of dementia: a nested case-control study",
    authors: "Coupland CAC, Hill T, Dening T, et al.",
    journal: "JAMA Internal Medicine",
    year: 2019,
    doi: "10.1001/jamainternmed.2019.0677",
    pmid: "31233095",
    url: "https://pubmed.ncbi.nlm.nih.gov/31233095/",
    tags: ["alzheimers", "epidemiology"],
    citations: [
      {
        citationId: "coupland-2019-c1",
        sourceId: "coupland-2019",
        quote:
          "Anticholinergic drug exposure and the risk of dementia: a nested case-control study",
        context:
          "284,343 UK patients: anticholinergic drugs increase dementia risk (OR 1.49 at highest exposure)",
        projectRef:
          "Iron cascades: Anticholinergic drugs as epidemiological signal (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "pieper-2020",
    title:
      "Anticholinergic drugs and incident dementia, mild cognitive impairment and cognitive decline: a meta-analysis",
    authors: "Pieper NT, Grossi CM, Chan WY, et al.",
    journal: "Age and Ageing",
    year: 2020,
    doi: "10.1093/ageing/afaa090",
    pmid: "32603415",
    url: "https://pubmed.ncbi.nlm.nih.gov/32603415/",
    tags: ["alzheimers", "epidemiology"],
    citations: [
      {
        citationId: "pieper-2020-c1",
        sourceId: "pieper-2020",
        quote:
          "Anticholinergic drugs and incident dementia, mild cognitive impairment and cognitive decline: a meta-analysis",
        context:
          "~10% population-attributable fraction; anticholinergic burden contributes meaningfully to dementia incidence",
        projectRef:
          "Iron cascades: ~10% AD cases attributable to anticholinergics stat source",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // CHOLINERGIC EXPANSION
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "shafiee-2024-neurobiolaging",
    title:
      "Degeneration in Nucleus basalis of Meynert signals earliest stage of Alzheimer's disease progression",
    authors: "Shafiee N, Fonov V, Dadar M, et al.",
    journal: "Neurobiology of Aging",
    year: 2024,
    doi: "10.1016/j.neurobiolaging.2024.03.003",
    pmid: "38608458",
    url: "https://pubmed.ncbi.nlm.nih.gov/38608458/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "shafiee-2024-c1",
        sourceId: "shafiee-2024-neurobiolaging",
        quote:
          "the NbM may be a focal target of early AD progression, which is often obscured by normal age-related decline",
        context:
          "1,447 ADNI participants: NBM degeneration detected before entorhinal or hippocampal changes",
        projectRef:
          "Iron cascades: NBM degenerates first (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "crockett-2024-neurobiol-dis",
    title:
      "Lateral thinking: Neurodegeneration of the cortical cholinergic system in Alzheimer's disease",
    authors: "Crockett RA, Casselton C, Howard TM, et al.",
    journal: "Neurobiology of Disease",
    year: 2024,
    doi: "10.1016/j.nbd.2024.106677",
    pmid: "39307400",
    url: "https://pubmed.ncbi.nlm.nih.gov/39307400/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "crockett-2024-c1",
        sourceId: "crockett-2024-neurobiol-dis",
        quote:
          "Integrity of the lateral NBM tract is most sensitive to the earliest stages of AD and should be considered an important therapeutic target for early detection and intervention.",
        context:
          "NBM white matter tract damage detectable in early MCI when NBM volume is still normal",
        projectRef:
          "Iron cascades: NBM degenerates first (mechanism step 3)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "iliff-2012-scitranslmed",
    title:
      "A paravascular pathway facilitates CSF flow through the brain parenchyma and the clearance of interstitial solutes, including amyloid beta",
    authors: "Iliff JJ, Wang M, Liao Y, et al.",
    journal: "Science Translational Medicine",
    year: 2012,
    doi: "10.1126/scitranslmed.3003748",
    pmid: "22896675",
    url: "https://pubmed.ncbi.nlm.nih.gov/22896675/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "iliff-2012-c1",
        sourceId: "iliff-2012-scitranslmed",
        quote:
          "Large amounts of tracer are observed in the basal ganglia and thalamus, entering along large ventral perforating arteries",
        context:
          "Original glymphatic paper: basal ganglia receive substantial CSF tracer influx via ventral perforating arteries",
        projectRef:
          "Iron cascades: NBM metabolic cul-de-sac (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "ringstad-2018-jciinsight",
    title:
      "Brain-wide glymphatic enhancement and clearance in humans assessed with MRI",
    authors: "Ringstad G, Valnes LM, Dale AM, et al.",
    journal: "JCI Insight",
    year: 2018,
    doi: "10.1172/jci.insight.121537",
    pmid: "29997300",
    url: "https://pubmed.ncbi.nlm.nih.gov/29997300/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "ringstad-2018-c1",
        sourceId: "ringstad-2018-jciinsight",
        quote:
          "Clearance of the tracer substance was delayed in the dementia cohort.",
        context:
          "In vivo evidence of delayed glymphatic clearance in dementia patients",
        projectRef:
          "Iron cascades: NBM metabolic cul-de-sac (mechanism step 4)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "sanchez-mejia-2008-natneurosci",
    title:
      "Phospholipase A2 reduction ameliorates cognitive deficits in a mouse model of Alzheimer's disease",
    authors: "Sanchez-Mejia RO, Newman JW, Toh S, et al.",
    journal: "Nature Neuroscience",
    year: 2008,
    doi: "10.1038/nn.2213",
    pmid: "18931664",
    url: "https://pubmed.ncbi.nlm.nih.gov/18931664/",
    tags: ["alzheimers", "ferroptosis"],
    citations: [
      {
        citationId: "sanchez-mejia-2008-c1",
        sourceId: "sanchez-mejia-2008-natneurosci",
        quote:
          "Genetic ablation or reduction of GIVA-PLA(2) protected hAPP mice against Abeta-dependent deficits in learning and memory, behavioral alterations and premature mortality.",
        context:
          "cPLA2 knockout prevents AD pathology in hAPP mice; cPLA2 is rate-limiting enzyme for lipid peroxidation substrate",
        projectRef:
          "Iron cascades: cPLA2 → lipid peroxidation → HNE → cholinergic death (mechanism step 5)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kurien-scofield-2008-autoimmrev",
    title:
      "Autoimmunity and oxidatively modified autoantigens",
    authors: "Kurien BT, Scofield RH",
    journal: "Autoimmunity Reviews",
    year: 2008,
    doi: "10.1016/j.autrev.2008.04.019",
    pmid: "18625446",
    url: "https://pubmed.ncbi.nlm.nih.gov/18625446/",
    tags: ["ferroptosis", "iron"],
    citations: [
      {
        citationId: "kurien-2008-c1",
        sourceId: "kurien-scofield-2008-autoimmrev",
        quote:
          "Aldehydic products, mainly the 4-hydroxy-2-alkenals, form adducts with proteins and make them highly immunogenic and capable of triggering pathogenic antibodies",
        context:
          "4-HNE-modified proteins trigger epitope spreading; immunization with HNE-modified Ro autoantigen induces accelerated epitope spreading",
        projectRef:
          "Iron cascades: 4-HNE creates immunogenic neoantigens (mechanism step 6)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "chuang-2025-natcommun",
    title:
      "Cholinergic basal forebrain neurons regulate vascular dynamics and cerebrospinal fluid flux",
    authors: "Chuang KH, Zhou XA, Xia Y, et al.",
    journal: "Nature Communications",
    year: 2025,
    doi: "10.1038/s41467-025-60812-3",
    pmid: "40550817",
    url: "https://pubmed.ncbi.nlm.nih.gov/40550817/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "chuang-2025-c1",
        sourceId: "chuang-2025-natcommun",
        quote:
          "Lesioning basal forebrain cholinergic neurons in female mice impairs glymphatic efflux and associated changes in BOLD-CSF coupling, arterial pulsation and glymphatic influx.",
        context:
          "Cholinergic neurons regulate glymphatic waste clearance; their loss impairs the clearance system",
        projectRef:
          "Iron cascades: Cholinergic neurons regulate their own clearance (mechanism step 7)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "pereira-2020-neurobiol-dis",
    title:
      "Longitudinal degeneration of the basal forebrain predicts subsequent dementia in Parkinson's disease",
    authors: "Pereira JB, Hall S, Jalakas M, et al.",
    journal: "Neurobiology of Disease",
    year: 2020,
    doi: "10.1016/j.nbd.2020.104831",
    pmid: "32145376",
    url: "https://pubmed.ncbi.nlm.nih.gov/32145376/",
    tags: ["parkinsons"],
    citations: [
      {
        citationId: "pereira-2020-c1",
        sourceId: "pereira-2020-neurobiol-dis",
        quote:
          "Atrophy of Ch4 precedes and predicts future dementia in PD and is followed by changes in Ch1/Ch2, reflecting a posterior-anterior pattern of basal forebrain atrophy.",
        context:
          "Ch4 (NBM) atrophy predicts dementia conversion in Parkinson's disease",
        projectRef:
          "Iron cascades: Cross-disease NBM involvement (mechanism step 9)",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // Aβ INNATE IMMUNITY & IRON BINDING (What-If lines, teaser section)
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "soscia-2010-plosone",
    title:
      "The Alzheimer's Disease-Associated Amyloid β-Protein Is an Antimicrobial Peptide",
    authors: "Soscia SJ, Kirby JE, Washicosky KJ, et al.",
    journal: "PLoS ONE",
    year: 2010,
    doi: "10.1371/journal.pone.0009505",
    pmid: "20209079",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2831066/#:~:text=peptides%20inhibited%20the%20growth%20of%20eight%20of%2012%20clinically%20important%20pathogens%20screened",
    tags: ["alzheimers", "iron"],
    citations: [
      {
        citationId: "soscia-2010-plosone-c1",
        sourceId: "soscia-2010-plosone",
        quote:
          "A\u03B2 peptides inhibited the growth of eight of 12 clinically important pathogens screened (Table 1), including the bacteria S. pneumoniae, which is a leading cause of bacterial meningitis, and C. albicans, the most common cause of neurocandidiasis.",
        context:
          "A\u03B2 functions as an antimicrobial peptide active against bacteria and yeast",
        location: "Results",
        projectRef:
          "Teaser What-If line 0: A\u03B2 kills bacteria and yeast (ancient defense system)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kumar-2016-stm",
    title:
      "Amyloid-β peptide protects against microbial infection in mouse and worm models of Alzheimer's disease",
    authors: "Kumar DK, Choi SH, Washicosky KJ, et al.",
    journal: "Science Translational Medicine",
    year: 2016,
    doi: "10.1126/scitranslmed.aaf1059",
    pmid: "27225182",
    url: "https://pubmed.ncbi.nlm.nih.gov/27225182/",
    tags: ["alzheimers", "iron"],
    citations: [
      {
        citationId: "kumar-2016-stm-c1",
        sourceId: "kumar-2016-stm",
        quote:
          "Our findings raise the intriguing possibility that β-amyloid may play a protective role in innate immunity",
        context:
          "In vivo evidence that Aβ protects against infection in mouse and worm AD models",
        projectRef:
          "Supporting evidence §8.14: Aβ antimicrobial innate immune function",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "everett-2014-jrsinterface",
    title:
      "Ferrous iron formation following the co-aggregation of ferric iron and the Alzheimer's disease peptide β-amyloid (1–42)",
    authors: "Everett J, Céspedes E, Shelford LR, et al.",
    journal: "Journal of The Royal Society Interface",
    year: 2014,
    doi: "10.1098/rsif.2014.0165",
    pmid: "24671940",
    url: "https://pubmed.ncbi.nlm.nih.gov/24671940/",
    tags: ["alzheimers", "iron"],
    citations: [
      {
        citationId: "everett-2014-jrsinterface-c1",
        sourceId: "everett-2014-jrsinterface",
        quote:
          "these results demonstrate the ability of Aβ to accumulate iron, offering an explanation for previously observed local increases in iron concentration associated with AD lesions",
        context:
          "Aβ accumulates ferric iron and reduces it to redox-active ferrous iron",
        location: "Abstract",
        projectRef:
          "Teaser What-If line 2: 'A\u03B2 accumulates iron within aggregates'",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "seubert-1992-nature",
    title:
      "Isolation and quantification of soluble Alzheimer's β-peptide from biological fluids",
    authors: "Seubert P, Vigo-Pelfrey C, Esch F, et al.",
    journal: "Nature",
    year: 1992,
    doi: "10.1038/359325a0",
    pmid: "1406936",
    url: "https://pubmed.ncbi.nlm.nih.gov/1406936/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "seubert-1992-nature-c1",
        sourceId: "seubert-1992-nature",
        quote:
          "These findings demonstrate that A beta is produced and released both in vivo and in vitro",
        context:
          "First detection of soluble Aβ in cerebrospinal fluid and plasma of healthy individuals",
        projectRef:
          "Supporting evidence §8.14: Aβ as normal metabolic product",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "haass-1992-nature",
    title:
      "Amyloid beta-peptide is produced by cultured cells during normal metabolism",
    authors: "Haass C, Schlossmacher MG, Hung AY, et al.",
    journal: "Nature",
    year: 1992,
    doi: "10.1038/359322a0",
    pmid: "1383826",
    url: "https://pubmed.ncbi.nlm.nih.gov/1383826/",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "haass-1992-nature-c1",
        sourceId: "haass-1992-nature",
        quote:
          "A beta is produced in soluble form in vitro and in vivo during normal cellular metabolism",
        context:
          "Landmark discovery that Aβ production is a normal cellular process, not inherently pathological",
        projectRef:
          "Supporting evidence §8.14: Aβ as normal metabolic product",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "hirsch-reinshagen-2004-jbc",
    title:
      "Deficiency of ABCA1 impairs apolipoprotein E metabolism in brain",
    authors: "Hirsch-Reinshagen V, Zhou S, Burgess BL, et al.",
    journal: "Journal of Biological Chemistry",
    year: 2004,
    doi: "10.1074/jbc.M407962200",
    pmid: "15269218",
    url: "https://pubmed.ncbi.nlm.nih.gov/15269218/#:~:text=glial%20ABCA1%20is%20required%20for%20cholesterol%20efflux",
    tags: ["alzheimers", "genetics"],
    citations: [
      {
        citationId: "hirsch-reinshagen-2004-jbc-c1",
        sourceId: "hirsch-reinshagen-2004-jbc",
        quote:
          "Glial ABCA1 is required for cholesterol efflux to apoA-I and plays a key role in facilitating cholesterol efflux to apoE, which is the major apolipoprotein in the brain",
        context:
          "ABCA1 mediates brain cholesterol efflux to apolipoproteins",
        projectRef:
          "FELINE I layer: Cholesterol efflux and fatty acid processing",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "wyatt-2011-cmls",
    title:
      "Clusterin facilitates in vivo clearance of extracellular misfolded proteins",
    authors: "Wyatt AR, Yerbury JJ, Berghofer P, et al.",
    journal: "Cellular and Molecular Life Sciences",
    year: 2011,
    doi: "10.1007/s00018-011-0684-8",
    pmid: "21505792",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11115182/#:~:text=plays%20a%20key%20role%20in%20an%20extracellular%20proteostasis%20system",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "wyatt-2011-cmls-c1",
        sourceId: "wyatt-2011-cmls",
        quote:
          "CLU plays a key role in an extracellular proteostasis system that recognizes, keeps soluble, and then rapidly mediates the disposal of misfolded proteins",
        context:
          "Clusterin (apolipoprotein J) is an extracellular chaperone that escorts misfolded proteins for clearance",
        projectRef:
          "FELINE E layer: Clusterin escorts misfolded proteins for clearance",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kuhn-2010-emboj",
    title:
      "ADAM10 is the physiologically relevant, constitutive alpha-secretase of the amyloid precursor protein in primary neurons",
    authors: "Kuhn PH, Wang H, Dislich B, et al.",
    journal: "EMBO Journal",
    year: 2010,
    doi: "10.1038/emboj.2010.167",
    pmid: "20676056",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2944055/#:~:text=RNAi-mediated%20knockdown%20of%20ADAM10",
    tags: ["alzheimers"],
    citations: [
      {
        citationId: "kuhn-2010-emboj-c1",
        sourceId: "kuhn-2010-emboj",
        quote:
          "ADAM10 is the physiologically relevant, constitutive alpha-secretase of APP and that ADAM9 and 17 are not redundant for this cleavage",
        context:
          "ADAM10 is the primary APP alpha-secretase; ADAM17 is not redundant for this role",
        projectRef:
          "FELINE E layer: ADAM10 cleaves APP as alpha-secretase",
      },
    ],
    verificationStatus: "verified",
  },

  // ──────────────────────────────────────────────────────────────────────
  // IRON DETECTION / IMAGING
  // ──────────────────────────────────────────────────────────────────────

  {
    id: "absinta-2019-jamaneurol",
    title:
      "Association of Chronic Active Multiple Sclerosis Lesions With Disability In Vivo",
    authors: "Absinta M, Sati P, Masuzzo F, et al.",
    journal: "JAMA Neurology",
    year: 2019,
    doi: "10.1001/jamaneurol.2019.2399",
    pmid: "31403674",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6694756/#:~:text=iron-laden%20phagocytes",
    tags: ["iron", "imaging", "ms"],
    citations: [
      {
        citationId: "absinta-2019-jamaneurol-c1",
        sourceId: "absinta-2019-jamaneurol",
        quote:
          "All expanding rim lesions were chronic-active by pathology results. An accumulation of iron-laden phagocytes (cluster of differentiation [CD] 68 and iron staining) was seen at the lesion edge.",
        context:
          "Iron rim lesions in MS are chronic-active, expanding, and predict disability",
        projectRef:
          "Teaser: 'driven by iron?' expanded content \u2014 MS iron rim lesions",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "an-2018-jneurolsci",
    title:
      "Quantifying iron deposition within the substantia nigra of Parkinson's disease by quantitative susceptibility mapping",
    authors: "An H, Zeng X, Niu T, et al.",
    journal: "Journal of the Neurological Sciences",
    year: 2018,
    doi: "10.1016/j.jns.2018.01.008",
    pmid: "29406966",
    url: "https://pubmed.ncbi.nlm.nih.gov/29406966/#:~:text=iron%20content%20in%20the%20SN%20of%20PD%20patients%20was%20significantly%20correlated",
    tags: ["iron", "imaging", "parkinsons"],
    citations: [
      {
        citationId: "an-2018-jneurolsci-c1",
        sourceId: "an-2018-jneurolsci",
        quote:
          "the iron content in the SN of PD patients was significantly correlated with the Hoehn-Yahr stage, the Unified Parkinson's Disease Rating Scale (UPDRS)",
        context:
          "QSM iron in substantia nigra correlates with PD clinical severity",
        projectRef:
          "Teaser: 'driven by iron?' expanded content \u2014 PD iron detection via QSM",
      },
    ],
    verificationStatus: "verified",
  },
];
