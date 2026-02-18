import type { Source } from "./types";

export const lysosomalSources: Source[] = [
  {
    id: "hassanin-2025-npjpd",
    title:
      "Penetrance of Parkinson's disease in GBA1 carriers depends on variant severity and polygenic background",
    authors: "Hassanin E, Landoulsi Z, Pachchek S, et al.",
    journal: "npj Parkinson's Disease",
    year: 2025,
    doi: "10.1038/s41531-025-00997-y",
    pmid: "40506446",
    url: "https://pubmed.ncbi.nlm.nih.gov/40506446/",
    tags: ["lysosomal", "parkinsons", "genetics"],
    citations: [
      {
        citationId: "hassanin-2025-npjpd-c1",
        sourceId: "hassanin-2025-npjpd",
        quote:
          "GBA1 penetrance depends on variant severity and polygenic background",
        context:
          "GBA1 mutations have incomplete penetrance; interacts with polygenic risk score",
        projectRef:
          "Framework summary: GBA1 incomplete penetrance and multi-pillar requirement",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "mullin-2020-jamaneurol",
    title:
      "Ambroxol for the Treatment of Patients With Parkinson Disease With and Without Glucocerebrosidase Gene Mutations: A Nonrandomized, Noncontrolled Trial",
    authors: "Mullin S, Smith L, Lee K, et al.",
    journal: "JAMA Neurology",
    year: 2020,
    doi: "10.1001/jamaneurol.2019.4611",
    pmid: "31930374",
    url: "https://pubmed.ncbi.nlm.nih.gov/31930374/",
    tags: ["lysosomal", "parkinsons", "clinical-trials"],
    citations: [
      {
        citationId: "mullin-2020-jamaneurol-c1",
        sourceId: "mullin-2020-jamaneurol",
        quote:
          "Ambroxol increased CSF GCase activity and reduced alpha-synuclein levels",
        context:
          "GCase chaperone therapy showed target engagement but clinical benefit uncertain",
        projectRef:
          "Framework summary: Why every major trial has failed (Ambroxol in PD dementia)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "pang-2022-translneurodegen",
    title:
      "LRRK2, GBA and their interaction in the regulation of autophagy: implications on therapeutics in Parkinson's disease",
    authors: "Pang SY-Y, Lo RCN, Ho PW-L, et al.",
    journal: "Translational Neurodegeneration",
    year: 2022,
    doi: "10.1186/s40035-022-00281-6",
    pmid: "35101134",
    url: "https://pubmed.ncbi.nlm.nih.gov/35101134/",
    tags: ["lysosomal", "parkinsons"],
    citations: [
      {
        citationId: "pang-2022-translneurodegen-c1",
        sourceId: "pang-2022-translneurodegen",
        quote:
          "LRRK2 and GBA interact in the regulation of autophagy with implications for Parkinson's disease therapeutics",
        context:
          "Dual GBA1+LRRK2 carriers have earlier onset than single carriers; supports multi-pillar convergence",
        projectRef:
          "Cross-disease: PD lysosomal pillar, GBA-LRRK2 interaction",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "kim-2018-actaneuropathcomm",
    title:
      "D409H GBA1 mutation accelerates the progression of pathology in A53T α-synuclein transgenic mouse model",
    authors: "Kim D, Hwang H, Choi S, et al.",
    journal: "Acta Neuropathologica Communications",
    year: 2018,
    doi: "10.1186/s40478-018-0538-9",
    pmid: "29703245",
    url: "https://pubmed.ncbi.nlm.nih.gov/29703245/",
    tags: ["lysosomal", "parkinsons", "genetics"],
    citations: [
      {
        citationId: "kim-2018-actaneuropathcomm-c1",
        sourceId: "kim-2018-actaneuropathcomm",
        quote:
          "D409H GBA1 mutation accelerates the progression of pathology in A53T alpha-synuclein transgenic mouse model",
        context:
          "Double-hit mouse model confirms multi-pillar convergence accelerates disease",
        projectRef:
          "Framework summary: Testable prediction #2 (double-hit mouse models)",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "clarke-2021-biomedicines",
    title:
      "Murine Models of Lysosomal Storage Diseases Exhibit Differences in Brain Protein Aggregation and Neuroinflammation",
    authors: "Clarke J, Kayatekin C, Viel C, et al.",
    journal: "Biomedicines",
    year: 2021,
    doi: "10.3390/biomedicines9050446",
    pmid: "33919140",
    url: "https://pubmed.ncbi.nlm.nih.gov/33919140/",
    tags: ["lysosomal"],
    citations: [
      {
        citationId: "clarke-2021-biomedicines-c1",
        sourceId: "clarke-2021-biomedicines",
        quote:
          "Gaucher and Fabry models show protein aggregates but NO neuroinflammation, while Sandhoff and Niemann-Pick show neuroinflammation but NO proteinopathy",
        context:
          "LSD tissue specificity: specific substrate determines which downstream pathways activate",
        projectRef:
          "Framework summary: Step 1 substrate specificity dissociation",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "lieberman-2012-autophagy",
    title: "Autophagy in lysosomal storage disorders",
    authors: "Lieberman AP, Puertollano R, Raben N, et al.",
    journal: "Autophagy",
    year: 2012,
    doi: "10.4161/auto.19469",
    pmid: "22647656",
    url: "https://pubmed.ncbi.nlm.nih.gov/22647656/",
    tags: ["lysosomal"],
    citations: [
      {
        citationId: "lieberman-2012-autophagy-c1",
        sourceId: "lieberman-2012-autophagy",
        quote:
          "Autophagy impairment is a common feature of lysosomal storage disorders",
        context:
          "Not all lysosomal storage diseases cause neurodegeneration; substrate specificity matters",
        projectRef:
          "Framework summary: Step 1 critical nuance on substrate specificity",
      },
    ],
    verificationStatus: "verified",
  },
  {
    id: "shao-2022-science",
    title:
      "Two FTD-ALS genes converge on the endosomal pathway to induce TDP-43 pathology and degeneration",
    authors: "Shao W, Todd TW, Wu Y, et al.",
    journal: "Science",
    year: 2022,
    doi: "10.1126/science.abq7860",
    pmid: "36201573",
    url: "https://pubmed.ncbi.nlm.nih.gov/36201573/",
    tags: ["lysosomal", "als"],
    citations: [
      {
        citationId: "shao-2022-science-c1",
        sourceId: "shao-2022-science",
        quote:
          "Two FTD-ALS genes converge on the endosomal pathway to induce TDP-43 pathology and degeneration",
        context:
          "C9orf72 poly-GA aggregates sequester TBK1, impair endosomal pathway, cause TDP-43 mislocalization",
        projectRef:
          "Cross-disease: ALS/FTD lysosomal pillar, C9orf72 mechanism",
      },
    ],
    verificationStatus: "verified",
  },
];
