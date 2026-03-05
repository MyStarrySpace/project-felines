import type { ReactNode } from "react";
import { Cite } from "@/components/citation/cite";
import { defenseLayers } from "./entry-points";
import type { DiseaseTarget } from "./types";

export type FelineLayerId = (typeof defenseLayers)[number];

export interface GwasGene {
  id: string;
  fullName: string;
  chromosome: string;
  disease: DiseaseTarget;
  primaryLayer: FelineLayerId;
  subcategory: string;
  secondaryLayers?: FelineLayerId[];
  function: string;
  ironConnection: ReactNode;
}

// ---------------------------------------------------------------------------
// AD: 74 Bellenguez et al. (2022) risk loci + APP, mapped to FELINE layers.
// PD: 140 GP2 Consortium (Leonard et al. 2025) risk loci + monogenic genes.
// 3 genes shared (CTSB, GRN, SPPL2A) are marked disease: "multi".
// Total: 217 gene entries across AD + PD.
// ---------------------------------------------------------------------------

export const gwasGenes: GwasGene[] = [
  // --- Locus 1 ---
  {
    id: "CR1",
    fullName: "Complement C3b/C4b Receptor 1 (Knops Blood Group)",
    chromosome: "1",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Complement",
    secondaryLayers: ["I"],
    function:
      "This gene is a member of the receptors of complement activation (RCA) family and is located in the 'cluster RCA' region of chromosome 1.",
    ironConnection: (
      <>
        This gene is a member of the receptors of complement activation (RCA) family and is located in the 'cluster RCA' region of chromosome 1.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cr1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 2 ---
  {
    id: "BIN1",
    fullName: "Bridging Integrator 1",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["E", "I"],
    function:
      "This gene encodes several isoforms of a nucleocytoplasmic adaptor protein, one of which was initially identified as a MYC-interacting protein with features of a tumor suppressor.",
    ironConnection: (
      <>
        &ldquo;The large majority of BIN1 is expressed in mature
        oligodendrocytes.&rdquo;
        <Cite id="derossi-2016-molneurodegen" /> Oligodendrocytes are the most
        iron-rich cells in the brain. BIN1 regulates endosomal processing where
        transferrin-bound iron is liberated.
      </>
    ),
  },
  // --- Locus 3 ---
  {
    id: "INPP5D",
    fullName: "Inositol Polyphosphate-5-phosphatase D",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    secondaryLayers: ["I"],
    function:
      "This gene is a member of the inositol polyphosphate-5-phosphatase (INPP5) family and encodes a protein with an N-terminal SH2 domain, an inositol phosphatase domain, and two C-terminal protein interaction domains.",
    ironConnection: (
      <>
        This gene is a member of the inositol polyphosphate-5-phosphatase (INPP5) family and encodes a protein with an N-terminal SH2 domain, an inositol phosphatase domain, and two C-terminal protein interaction domains.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-inpp5d"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 4 ---
  {
    id: "CLNK/HS3ST1",
    fullName: "Cytokine Dependent Hematopoietic Cell Linker / Heparan Sulfate-glucosamine 3-sulfotransferase 1",
    chromosome: "4",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "MIST is a member of the SLP76 family of adaptors (see LCP2, MIM 601603; BLNK, MIM 604515).",
    ironConnection: (
      <>
        MIST is a member of the SLP76 family of adaptors (see LCP2, MIM 601603; BLNK, MIM 604515).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-clnk-hs3st1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 5 ---
  {
    id: "HLA-DQA1",
    fullName: "Major Histocompatibility Complex, Class II, DQ Alpha 1",
    chromosome: "6",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    secondaryLayers: ["I"],
    function:
      "HLA-DQA1 belongs to the HLA class II alpha chain paralogues.  The class II molecule is a heterodimer consisting of an alpha (DQA) and a beta chain (DQB), both anchored in the membrane.",
    ironConnection: (
      <>
        HLA-DQA1 belongs to the HLA class II alpha chain paralogues.  The class II molecule is a heterodimer consisting of an alpha (DQA) and a beta chain (DQB), both anchored in the membrane.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-hla-dqa1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 6 ---
  {
    id: "TREM2",
    fullName: "Triggering Receptor Expressed On Myeloid Cells 2",
    chromosome: "6",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    secondaryLayers: ["E", "Fe"],
    function:
      "This gene encodes a membrane protein that forms a receptor signaling complex with the TYRO protein tyrosine kinase binding protein.",
    ironConnection: (
      <>
        TREM2 knockout mice show &ldquo;defective clearance of myelin debris
        and more axonal pathology.&rdquo;
        <Cite id="cantoni-2015-actaneuropathol" /> Myelin debris is iron-loaded.
        TREM2 variants affect ferritinophagy regulation, providing a direct
        Fe-layer connection.
      </>
    ),
  },
  // --- Locus 7 ---
  {
    id: "CD2AP",
    fullName: "CD2 Associated Protein",
    chromosome: "6",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Cytoskeletal",
    function:
      "This gene encodes a scaffolding molecule that regulates the actin cytoskeleton.",
    ironConnection: (
      <>
        This gene encodes a scaffolding molecule that regulates the actin cytoskeleton.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cd2ap"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 8 ---
  {
    id: "NME8",
    fullName: "NME/NM23 Family Member 8",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Cytoskeletal",
    function:
      "This gene encodes a protein with an N-terminal thioredoxin domain and three C-terminal nucleoside diphosphate kinase (NDK) domains, but the NDK domains are thought to be catalytically inactive.",
    ironConnection: (
      <>
        This gene encodes a protein with an N-terminal thioredoxin domain and three C-terminal nucleoside diphosphate kinase (NDK) domains, but the NDK domains are thought to be catalytically inactive.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-nme8"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 9 ---
  {
    id: "ZCWPW1/NYAP1",
    fullName: "Zinc Finger CW-type And PWWP Domain Containing 1 / Neuronal Tyrosine Phosphorylated Phosphoinositide-3-kinase Adaptor 1",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Enables methyl-CpG binding activity and methylated histone binding activity.  Predicted to be involved in meiosis I; positive regulation of DNA metabolic process; and spermatogenesis.",
    ironConnection: (
      <>
        Enables methyl-CpG binding activity and methylated histone binding activity.  Predicted to be involved in meiosis I; positive regulation of DNA metabolic process; and spermatogenesis.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-zcwpw1-nyap1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 10 ---
  {
    id: "EPHA1",
    fullName: "EPH Receptor A1",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    function:
      "This gene belongs to the ephrin receptor subfamily of the protein-tyrosine kinase family.  EPH and EPH-related receptors have been implicated in mediating developmental events, particularly in the nervous system.",
    ironConnection: (
      <>
        This gene belongs to the ephrin receptor subfamily of the protein-tyrosine kinase family.  EPH and EPH-related receptors have been implicated in mediating developmental events, particularly in the nervous system.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-epha1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 11 ---
  {
    id: "PTK2B",
    fullName: "Protein Tyrosine Kinase 2 Beta",
    chromosome: "8",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a cytoplasmic protein tyrosine kinase which is involved in calcium-induced regulation of ion channels and activation of the map kinase signaling pathway.",
    ironConnection: (
      <>
        This gene encodes a cytoplasmic protein tyrosine kinase which is involved in calcium-induced regulation of ion channels and activation of the map kinase signaling pathway.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ptk2b"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 12 ---
  {
    id: "CLU",
    fullName: "Clusterin",
    chromosome: "8",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Molecular chaperones",
    function:
      "The protein encoded by this gene is a secreted chaperone that can under some stress conditions also be found in the cell cytosol.",
    ironConnection: (
      <>
        The protein encoded by this gene is a secreted chaperone that can under some stress conditions also be found in the cell cytosol.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-clu"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 13 ---
  {
    id: "ECHDC3",
    fullName: "Enoyl-CoA Hydratase Domain Containing 3",
    chromosome: "10",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Predicted to enable enoyl-CoA hydratase activity.  Involved in positive regulation of cellular response to insulin stimulus.",
    ironConnection: (
      <>
        Predicted to enable enoyl-CoA hydratase activity.  Involved in positive regulation of cellular response to insulin stimulus.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-echdc3"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 14 ---
  {
    id: "CELF1",
    fullName: "CUGBP Elav-like Family Member 1",
    chromosome: "11",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Members of the CELF/BRUNOL protein family contain two N-terminal RNA recognition motif (RRM) domains, one C-terminal RRM domain, and a divergent segment of 160-230 aa between the second and third RRM domains.",
    ironConnection: (
      <>
        Members of the CELF/BRUNOL protein family contain two N-terminal RNA recognition motif (RRM) domains, one C-terminal RRM domain, and a divergent segment of 160-230 aa between the second and third RRM domains.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-celf1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 15 ---
  {
    id: "SPI1",
    fullName: "Spi-1 Proto-oncogene",
    chromosome: "11",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene encodes an ETS-domain transcription factor that activates gene expression during myeloid and B-lymphoid cell development.",
    ironConnection: (
      <>
        &ldquo;Lower SPI1 expression reduces AD risk by regulating myeloid
        gene expression.&rdquo;
        <Cite id="huang-2017-natneurosci" /> PU.1 controls ferritin
        transcription and the entire microglial iron management program.
      </>
    ),
  },
  // --- Locus 16 ---
  {
    id: "MS4A",
    fullName: "MS4A",
    chromosome: "?",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "MS4A gene product.",
    ironConnection: (
      <>
        MS4A gene product.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 17 ---
  {
    id: "PICALM",
    fullName: "Phosphatidylinositol Binding Clathrin Assembly Protein",
    chromosome: "11",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["Fe"],
    function:
      "This gene encodes a clathrin assembly protein, which recruits clathrin and adaptor protein complex 2 (AP2) to cell membranes at sites of coated-pit formation and clathrin-vesicle assembly.",
    ironConnection: (
      <>
        &ldquo;PICALM plays a critical role in iron homeostasis.&rdquo;
        <Cite id="scotland-2012-plosone" /> Controls transferrin receptor
        endocytosis &mdash; literally the iron import mechanism.
      </>
    ),
  },
  // --- Locus 18 ---
  {
    id: "SORL1",
    fullName: "Sortilin Related Receptor 1",
    chromosome: "11",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene encodes a mosaic protein that belongs to at least two families: the vacuolar protein sorting 10 (VPS10) domain-containing receptor family, and the low density lipoprotein receptor (LDLR) family.",
    ironConnection: (
      <>
        This gene encodes a mosaic protein that belongs to at least two families: the vacuolar protein sorting 10 (VPS10) domain-containing receptor family, and the low density lipoprotein receptor (LDLR) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sorl1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 19 ---
  {
    id: "FERMT2",
    fullName: "FERM Domain Containing Kindlin 2",
    chromosome: "14",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    secondaryLayers: ["I"],
    function:
      "Enables several functions, including actin binding activity; phosphatidylinositol-3,4,5-trisphosphate binding activity; and type I transforming growth factor beta receptor binding activity.",
    ironConnection: (
      <>
        Enables several functions, including actin binding activity; phosphatidylinositol-3,4,5-trisphosphate binding activity; and type I transforming growth factor beta receptor binding activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-fermt2"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 20 ---
  {
    id: "SLC24A4/RIN3",
    fullName: "Solute Carrier Family 24 Member 4 / Ras And Rab Interactor 3",
    chromosome: "14",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a sodium/potassium/calcium exchange protein.  The encoded antiporter transports one calcium and one potassium ion in exchange for four sodium ions and has been implicated in amelogenesis and enamel maturation.",
    ironConnection: (
      <>
        This gene encodes a sodium/potassium/calcium exchange protein.  The encoded antiporter transports one calcium and one potassium ion in exchange for four sodium ions and has been implicated in amelogenesis and enamel maturation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-slc24a4-rin3"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 21 ---
  {
    id: "ADAM10",
    fullName: "ADAM Metallopeptidase Domain 10",
    chromosome: "15",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    function:
      "Members of the ADAM family are cell surface proteins with a unique structure possessing both potential adhesion and protease domains.  This gene encodes and ADAM family member that cleaves many proteins including TNF-alpha and E-cadherin.",
    ironConnection: (
      <>
        Members of the ADAM family are cell surface proteins with a unique structure possessing both potential adhesion and protease domains.  This gene encodes and ADAM family member that cleaves many proteins including TNF-alpha and E-cadherin.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-adam10"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 22 ---
  {
    id: "APH1B",
    fullName: "Aph-1B Gamma-secretase Subunit",
    chromosome: "15",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Proteolysis",
    function:
      "This gene encodes a multi-pass transmembrane protein that is a functional component of the gamma-secretase complex, which also contains presenilin and nicastrin.",
    ironConnection: (
      <>
        This gene encodes a multi-pass transmembrane protein that is a functional component of the gamma-secretase complex, which also contains presenilin and nicastrin.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-aph1b"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 23 ---
  {
    id: "KAT8",
    fullName: "Lysine Acetyltransferase 8",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a member of the MYST histone acetylase protein family.  The encoded protein has a characteristic MYST domain containing an acetyl-CoA-binding site, a chromodomain typical of proteins which bind histones, and a C2HC-type zinc finger.",
    ironConnection: (
      <>
        This gene encodes a member of the MYST histone acetylase protein family.  The encoded protein has a characteristic MYST domain containing an acetyl-CoA-binding site, a chromodomain typical of proteins which bind histones, and a C2HC-type zinc finger.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kat8"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 24 ---
  {
    id: "IL34",
    fullName: "Interleukin 34",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "Interleukin-34 is a cytokine that promotes the differentiation and viability of monocytes and macrophages through the colony-stimulating factor-1 receptor (CSF1R; MIM 164770) (Lin et al. , 2008 [PubMed 18467591]).",
    ironConnection: (
      <>
        Interleukin-34 is a cytokine that promotes the differentiation and viability of monocytes and macrophages through the colony-stimulating factor-1 receptor (CSF1R; MIM 164770) (Lin et al. , 2008 [PubMed 18467591]).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-il34"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 25 ---
  {
    id: "PLCG2",
    fullName: "Phospholipase C Gamma 2",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    secondaryLayers: ["I"],
    function:
      "The protein encoded by this gene is a transmembrane signaling enzyme that catalyzes the conversion of 1-phosphatidyl-1D-myo-inositol 4,5-bisphosphate to 1D-myo-inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) using calcium as a cofactor.",
    ironConnection: (
      <>
        The protein encoded by this gene is a transmembrane signaling enzyme that catalyzes the conversion of 1-phosphatidyl-1D-myo-inositol 4,5-bisphosphate to 1D-myo-inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) using calcium as a cofactor.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-plcg2"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 26 ---
  {
    id: "SCIMP/RABEP1",
    fullName: "SLP Adaptor And CSK Interacting Membrane Protein / Rabaptin, RAB GTPase Binding Effector Protein 1",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene encodes a transmembrane adaptor protein that is expressed in antigen-presenting cells and is localized in the immunologic synapse.",
    ironConnection: (
      <>
        This gene encodes a transmembrane adaptor protein that is expressed in antigen-presenting cells and is localized in the immunologic synapse.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-scimp-rabep1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 27 ---
  {
    id: "MAPT",
    fullName: "Microtubule Associated Protein Tau",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes the microtubule-associated protein tau (MAPT) whose transcript undergoes complex, regulated alternative splicing, giving rise to several mRNA species.",
    ironConnection: (
      <>
        This gene encodes the microtubule-associated protein tau (MAPT) whose transcript undergoes complex, regulated alternative splicing, giving rise to several mRNA species.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mapt"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 28 ---
  {
    id: "ABI3",
    fullName: "ABI Family Member 3",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a member of an adaptor protein family.",
    ironConnection: (
      <>
        This gene encodes a member of an adaptor protein family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-abi3"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 29 ---
  {
    id: "TSPOAP1",
    fullName: "TSPO Associated Protein 1",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    function:
      "Enables benzodiazepine receptor binding activity.  Predicted to be involved in regulation of presynaptic cytosolic calcium ion concentration.",
    ironConnection: (
      <>
        Enables benzodiazepine receptor binding activity.  Predicted to be involved in regulation of presynaptic cytosolic calcium ion concentration.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tspoap1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 30 ---
  {
    id: "ACE",
    fullName: "Angiotensin I Converting Enzyme",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    secondaryLayers: ["I"],
    function:
      "This gene encodes an enzyme involved in blood pressure regulation and electrolyte balance.  It catalyzes the conversion of angiotensin I into a physiologically active peptide angiotensin II.",
    ironConnection: (
      <>
        This gene encodes an enzyme involved in blood pressure regulation and electrolyte balance.  It catalyzes the conversion of angiotensin I into a physiologically active peptide angiotensin II.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ace"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 31 ---
  {
    id: "ABCA7",
    fullName: "ATP Binding Cassette Subfamily A Member 7",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Lipid transport",
    function:
      "The protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intra-cellular membranes.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intra-cellular membranes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-abca7"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 32 ---
  {
    id: "CASS4",
    fullName: "Cas Scaffold Protein Family Member 4",
    chromosome: "20",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    function:
      "Enables protein tyrosine kinase binding activity.",
    ironConnection: (
      <>
        Enables protein tyrosine kinase binding activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cass4"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 33 ---
  {
    id: "ADAMTS1",
    fullName: "ADAM Metallopeptidase With Thrombospondin Type 1 Motif 1",
    chromosome: "21",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene encodes a member of the ADAMTS (a disintegrin and metalloproteinase with thrombospondin motif) protein family.",
    ironConnection: (
      <>
        This gene encodes a member of the ADAMTS (a disintegrin and metalloproteinase with thrombospondin motif) protein family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-adamts1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 34 ---
  {
    id: "SORT1",
    fullName: "Sortilin 1",
    chromosome: "1",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene encodes a member of the VPS10-related sortilin family of proteins.  The encoded preproprotein is proteolytically processed by furin to generate the mature receptor.",
    ironConnection: (
      <>
        This gene encodes a member of the VPS10-related sortilin family of proteins.  The encoded preproprotein is proteolytically processed by furin to generate the mature receptor.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sort1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 35 ---
  {
    id: "ADAM17",
    fullName: "ADAM Metallopeptidase Domain 17",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the ADAM (a disintegrin and metalloprotease domain) family.",
    ironConnection: (
      <>
        This gene encodes a member of the ADAM (a disintegrin and metalloprotease domain) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-adam17"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 36 ---
  {
    id: "TSPAN14",
    fullName: "Tetraspanin 14",
    chromosome: "10",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    secondaryLayers: ["I"],
    function:
      "Enables enzyme binding activity.  Involved in positive regulation of Notch signaling pathway; protein localization to plasma membrane; and protein maturation.",
    ironConnection: (
      <>
        Enables enzyme binding activity.  Involved in positive regulation of Notch signaling pathway; protein localization to plasma membrane; and protein maturation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tspan14"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 37 ---
  {
    id: "ABCA1",
    fullName: "ATP Binding Cassette Subfamily A Member 1",
    chromosome: "9",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Lipid transport",
    secondaryLayers: ["E"],
    function:
      "The membrane-associated protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intracellular membranes.",
    ironConnection: (
      <>
        The membrane-associated protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intracellular membranes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-abca1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 38 ---
  {
    id: "NCK2",
    fullName: "NCK Adaptor Protein 2",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    function:
      "This gene encodes a member of the NCK family of adaptor proteins.  The protein contains three SH3 domains and one SH2 domain.",
    ironConnection: (
      <>
        This gene encodes a member of the NCK family of adaptor proteins.  The protein contains three SH3 domains and one SH2 domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-nck2"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 39 ---
  {
    id: "TMEM106B",
    fullName: "Transmembrane Protein 106B",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Enables ATPase binding activity.  Involved in dendrite morphogenesis and lysosome localization.",
    ironConnection: (
      <>
        Enables ATPase binding activity.  Involved in dendrite morphogenesis and lysosome localization.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tmem106b"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 40 ---
  {
    id: "SEC61G/EGFR",
    fullName: "SEC61 Translocon Subunit Gamma / Epidermal Growth Factor Receptor",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    secondaryLayers: ["I"],
    function:
      "The Sec61 complex is the central component of the protein translocation apparatus of the endoplasmic reticulum (ER) membrane.",
    ironConnection: (
      <>
        The Sec61 complex is the central component of the protein translocation apparatus of the endoplasmic reticulum (ER) membrane.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sec61g-egfr"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 41 ---
  {
    id: "BLNK",
    fullName: "B Cell Linker",
    chromosome: "10",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a cytoplasmic linker or adaptor protein that plays a critical role in B cell development.",
    ironConnection: (
      <>
        This gene encodes a cytoplasmic linker or adaptor protein that plays a critical role in B cell development.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-blnk"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 42 ---
  {
    id: "TNIP1",
    fullName: "TNFAIP3 Interacting Protein 1",
    chromosome: "5",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "This gene encodes an A20-binding protein which plays a role in autoimmunity and tissue homeostasis through the regulation of nuclear factor kappa-B activation.",
    ironConnection: (
      <>
        This gene encodes an A20-binding protein which plays a role in autoimmunity and tissue homeostasis through the regulation of nuclear factor kappa-B activation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tnip1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 43 ---
  {
    id: "ANK3",
    fullName: "Ankyrin 3",
    chromosome: "10",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Ankyrins are a family of proteins that are believed to link the integral membrane proteins to the underlying spectrin-actin cytoskeleton and play key roles in activities such as cell motility, activation, proliferation, contact, and the maintenance of specialized membrane domains.",
    ironConnection: (
      <>
        Ankyrins are a family of proteins that are believed to link the integral membrane proteins to the underlying spectrin-actin cytoskeleton and play key roles in activities such as cell motility, activation, proliferation, contact, and the maintenance of specialized membrane domains.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ank3"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 44 ---
  {
    id: "SHARPIN",
    fullName: "SHANK Associated RH Domain Interactor",
    chromosome: "8",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "Enables polyubiquitin modification-dependent protein binding activity.  Involved in protein linear polyubiquitination and regulation of signal transduction.",
    ironConnection: (
      <>
        Enables polyubiquitin modification-dependent protein binding activity.  Involved in protein linear polyubiquitination and regulation of signal transduction.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sharpin"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 45 ---
  {
    id: "HS3ST5",
    fullName: "Heparan Sulfate-glucosamine 3-sulfotransferase 5",
    chromosome: "6",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "HS3ST5 belongs to a group of heparan sulfate 3-O-sulfotransferases (EC 2. 8.",
    ironConnection: (
      <>
        HS3ST5 belongs to a group of heparan sulfate 3-O-sulfotransferases (EC 2. 8.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-hs3st5"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 46 ---
  {
    id: "OTULIN",
    fullName: "OTU Deubiquitinase With Linear Linkage Specificity",
    chromosome: "5",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes a member of the peptidase C65 family of ubiquitin isopeptidases.  Members of this family remove ubiquitin from proteins.",
    ironConnection: (
      <>
        This gene encodes a member of the peptidase C65 family of ubiquitin isopeptidases.  Members of this family remove ubiquitin from proteins.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-otulin"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 47 ---
  {
    id: "WDR12",
    fullName: "WD Repeat Domain 12",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a member of the WD repeat protein family.",
    ironConnection: (
      <>
        This gene encodes a member of the WD repeat protein family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-wdr12"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 48 ---
  {
    id: "RASGEF1C",
    fullName: "RasGEF Domain Family Member 1C",
    chromosome: "5",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "Predicted to enable guanyl-nucleotide exchange factor activity.  Predicted to be involved in regulation of catalytic activity and small GTPase mediated signal transduction.",
    ironConnection: (
      <>
        Predicted to enable guanyl-nucleotide exchange factor activity.  Predicted to be involved in regulation of catalytic activity and small GTPase mediated signal transduction.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rasgef1c"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 49 ---
  {
    id: "PRKD3",
    fullName: "Protein Kinase D3",
    chromosome: "2",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["N"],
    function:
      "This gene belongs to the multigene protein kinase D family of serine/threonine kinases, which bind diacylglycerol and phorbol esters.",
    ironConnection: (
      <>
        This gene belongs to the multigene protein kinase D family of serine/threonine kinases, which bind diacylglycerol and phorbol esters.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-prkd3"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 50 ---
  {
    id: "ICA1",
    fullName: "Islet Cell Autoantigen 1",
    chromosome: "7",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a protein with an arfaptin homology domain that is found both in the cytosol and as membrane-bound form on the Golgi complex and immature secretory granules.",
    ironConnection: (
      <>
        This gene encodes a protein with an arfaptin homology domain that is found both in the cytosol and as membrane-bound form on the Golgi complex and immature secretory granules.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ica1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 51 ---
  {
    id: "DGKQ",
    fullName: "Diacylglycerol Kinase Theta",
    chromosome: "4",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "The protein encoded by this gene contains three cysteine-rich domains, a proline-rich region, and a pleckstrin homology domain with an overlapping Ras-associating domain.",
    ironConnection: (
      <>
        The protein encoded by this gene contains three cysteine-rich domains, a proline-rich region, and a pleckstrin homology domain with an overlapping Ras-associating domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dgkq"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 52 ---
  {
    id: "APOE",
    fullName: "Apolipoprotein E",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    secondaryLayers: ["Fe", "I"],
    function:
      "The protein encoded by this gene is a major apoprotein of the chylomicron.  It binds to a specific liver and peripheral cell receptor, and is essential for the normal catabolism of triglyceride-rich lipoprotein constituents.",
    ironConnection: (
      <>
        Potently inhibits ferroptosis (EC50 ~10 nM).
        <Cite id="belaidi-2024-molpsychiatry" /> CSF ferritin is strongly
        associated with APOE levels and elevated by the APOE4 allele.
        <Cite id="belaidi-2024-molpsychiatry" citationIds={["belaidi-2024-molpsychiatry-c2"]} />
      </>
    ),
  },
  // --- Locus 53 ---
  {
    id: "CD33",
    fullName: "CD33 Molecule",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    secondaryLayers: ["I"],
    function:
      "Enables protein phosphatase binding activity and sialic acid binding activity.",
    ironConnection: (
      <>
        Enables protein phosphatase binding activity and sialic acid binding activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cd33"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 54 ---
  {
    id: "DOC2A",
    fullName: "Double C2 Domain Alpha",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    function:
      "There are at least two protein isoforms of the Double C2 protein, namely alpha (DOC2A) and beta (DOC2B), which contain two C2-like domains.",
    ironConnection: (
      <>
        There are at least two protein isoforms of the Double C2 protein, namely alpha (DOC2A) and beta (DOC2B), which contain two C2-like domains.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-doc2a"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 55 ---
  {
    id: "MME",
    fullName: "Membrane Metalloendopeptidase",
    chromosome: "3",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    function:
      "The protein encoded by this gene is a type II transmembrane glycoprotein and a common acute lymphocytic leukemia antigen that is an important cell surface marker in the diagnosis of human acute lymphocytic leukemia (ALL).",
    ironConnection: (
      <>
        The protein encoded by this gene is a type II transmembrane glycoprotein and a common acute lymphocytic leukemia antigen that is an important cell surface marker in the diagnosis of human acute lymphocytic leukemia (ALL).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mme"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 56 ---
  {
    id: "IDUA",
    fullName: "Alpha-L-iduronidase",
    chromosome: "4",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes an enzyme that hydrolyzes the terminal alpha-L-iduronic acid residues of two glycosaminoglycans, dermatan sulfate and heparan sulfate.  This hydrolysis is required for the lysosomal degradation of these glycosaminoglycans.",
    ironConnection: (
      <>
        This gene encodes an enzyme that hydrolyzes the terminal alpha-L-iduronic acid residues of two glycosaminoglycans, dermatan sulfate and heparan sulfate.  This hydrolysis is required for the lysosomal degradation of these glycosaminoglycans.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-idua"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 57 ---
  {
    id: "RHOH",
    fullName: "Ras Homolog Family Member H",
    chromosome: "4",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "The protein encoded by this gene is a member of the Ras superfamily of guanosine triphosphate (GTP)-metabolizing enzymes.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the Ras superfamily of guanosine triphosphate (GTP)-metabolizing enzymes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rhoh"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 58 ---
  {
    id: "ANKH",
    fullName: "ANKH Inorganic Pyrophosphate Transport Regulator",
    chromosome: "5",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "This gene encodes a multipass transmembrane protein that is expressed in joints and other tissues and controls pyrophosphate levels in cultured cells.",
    ironConnection: (
      <>
        This gene encodes a multipass transmembrane protein that is expressed in joints and other tissues and controls pyrophosphate levels in cultured cells.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ankh"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 59 ---
  {
    id: "COX7C",
    fullName: "Cytochrome C Oxidase Subunit 7C",
    chromosome: "5",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    function:
      "Cytochrome c oxidase (COX), the terminal component of the mitochondrial respiratory chain, catalyzes the electron transfer from reduced cytochrome c to oxygen.",
    ironConnection: (
      <>
        Cytochrome c oxidase (COX), the terminal component of the mitochondrial respiratory chain, catalyzes the electron transfer from reduced cytochrome c to oxygen.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cox7c"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 60 ---
  {
    id: "TPCN1",
    fullName: "Two Pore Segment Channel 1",
    chromosome: "12",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "Voltage-gated Ca(2+) and Na+ channels have 4 homologous domains, each containing 6 transmembrane segments, S1 to S6.  TPCN1 is similar to these channels, but it has only 2 domains containing S1 to S6 (Ishibashi et al.",
    ironConnection: (
      <>
        Voltage-gated Ca(2+) and Na+ channels have 4 homologous domains, each containing 6 transmembrane segments, S1 to S6.  TPCN1 is similar to these channels, but it has only 2 domains containing S1 to S6 (Ishibashi et al.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tpcn1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 61 ---
  {
    id: "IGH",
    fullName: "Immunoglobulin Heavy Locus",
    chromosome: "?",
    disease: "AD",
    primaryLayer: "E",
    subcategory: "Complement",
    secondaryLayers: ["L"],
    function:
      "Immunoglobulins recognize foreign antigens and initiate immune responses such as phagocytosis and the complement system.  Each immunoglobulin molecule consists of two identical heavy chains and two identical light chains.",
    ironConnection: (
      <>
        Immunoglobulins recognize foreign antigens and initiate immune responses such as phagocytosis and the complement system.  Each immunoglobulin molecule consists of two identical heavy chains and two identical light chains.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-igh"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 62 ---
  {
    id: "SNX1",
    fullName: "Sorting Nexin 1",
    chromosome: "15",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene encodes a member of the sorting nexin family.  Members of this family contain a phox (PX) domain, which is a phosphoinositide binding domain, and are involved in intracellular trafficking.",
    ironConnection: (
      <>
        This gene encodes a member of the sorting nexin family.  Members of this family contain a phox (PX) domain, which is a phosphoinositide binding domain, and are involved in intracellular trafficking.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-snx1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 63 ---
  {
    id: "CTSH",
    fullName: "Cathepsin H",
    chromosome: "15",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "The protein encoded by this gene is a lysosomal cysteine proteinase important in the overall degradation of lysosomal proteins.  It is composed of a dimer of disulfide-linked heavy and light chains, both produced from a single protein precursor.",
    ironConnection: (
      <>
        The protein encoded by this gene is a lysosomal cysteine proteinase important in the overall degradation of lysosomal proteins.  It is composed of a dimer of disulfide-linked heavy and light chains, both produced from a single protein precursor.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ctsh"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 64 ---
  {
    id: "MAF",
    fullName: "MAF BZIP Transcription Factor",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "The protein encoded by this gene is a DNA-binding, leucine zipper-containing transcription factor that acts as a homodimer or as a heterodimer.",
    ironConnection: (
      <>
        The protein encoded by this gene is a DNA-binding, leucine zipper-containing transcription factor that acts as a homodimer or as a heterodimer.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-maf"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 65 ---
  {
    id: "FOXF1",
    fullName: "Forkhead Box F1",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene belongs to the forkhead family of transcription factors which is characterized by a distinct forkhead domain.",
    ironConnection: (
      <>
        This gene belongs to the forkhead family of transcription factors which is characterized by a distinct forkhead domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-foxf1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 66 ---
  {
    id: "PRDM7",
    fullName: "PR/SET Domain 7",
    chromosome: "16",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a member of a family of proteins that may have roles in transcription and other nuclear processes.",
    ironConnection: (
      <>
        This gene encodes a member of a family of proteins that may have roles in transcription and other nuclear processes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-prdm7"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 67 ---
  {
    id: "WDR81",
    fullName: "WD Repeat Domain 81",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "This gene encodes a multi-domain transmembrane protein which is predominantly expressed in the brain and is thought to play a role in endolysosomal trafficking.",
    ironConnection: (
      <>
        This gene encodes a multi-domain transmembrane protein which is predominantly expressed in the brain and is thought to play a role in endolysosomal trafficking.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-wdr81"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 68 ---
  {
    id: "MYO15A",
    fullName: "Myosin XVA",
    chromosome: "17",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "This gene encodes an unconventional myosin.  This protein differs from other myosins in that it has a long N-terminal extension preceding the conserved motor domain.",
    ironConnection: (
      <>
        This gene encodes an unconventional myosin.  This protein differs from other myosins in that it has a long N-terminal extension preceding the conserved motor domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-myo15a"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 69 ---
  {
    id: "KLF16",
    fullName: "KLF Transcription Factor 16",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Enables sequence-specific double-stranded DNA binding activity.  Predicted to be involved in regulation of transcription by RNA polymerase II.",
    ironConnection: (
      <>
        Enables sequence-specific double-stranded DNA binding activity.  Predicted to be involved in regulation of transcription by RNA polymerase II.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-klf16"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 70 ---
  {
    id: "SIGLEC11",
    fullName: "Sialic Acid Binding Ig Like Lectin 11",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene encodes a member of the sialic acid-binding immunoglobulin-like lectin family.",
    ironConnection: (
      <>
        This gene encodes a member of the sialic acid-binding immunoglobulin-like lectin family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-siglec11"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 71 ---
  {
    id: "LILRB2",
    fullName: "Leukocyte Immunoglobulin Like Receptor B2",
    chromosome: "19",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene is a member of the leukocyte immunoglobulin-like receptor (LIR) family, which is found in a gene cluster at chromosomal region 19q13. 4.",
    ironConnection: (
      <>
        This gene is a member of the leukocyte immunoglobulin-like receptor (LIR) family, which is found in a gene cluster at chromosomal region 19q13. 4.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-lilrb2"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 72 ---
  {
    id: "RBCK1",
    fullName: "RANBP2-type And C3HC4-type Zinc Finger Containing 1",
    chromosome: "20",
    disease: "AD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "The protein encoded by this gene is similar to mouse UIP28/UbcM4 interacting protein.  Alternative splicing has been observed at this locus, resulting in distinct isoforms.",
    ironConnection: (
      <>
        The protein encoded by this gene is similar to mouse UIP28/UbcM4 interacting protein.  Alternative splicing has been observed at this locus, resulting in distinct isoforms.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rbck1"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 73 ---
  {
    id: "SLC2A4RG",
    fullName: "SLC2A4 Regulator",
    chromosome: "20",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "The protein encoded by this gene is a nuclear transcription factor involved in the activation of the solute carrier family 2 member 4 gene.",
    ironConnection: (
      <>
        The protein encoded by this gene is a nuclear transcription factor involved in the activation of the solute carrier family 2 member 4 gene.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-slc2a4rg"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 74 ---
  {
    id: "APP",
    fullName: "Amyloid Beta Precursor Protein",
    chromosome: "21",
    disease: "AD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a cell surface receptor and transmembrane precursor protein that is cleaved by secretases to form a number of peptides.",
    ironConnection: (
      <>
        This gene encodes a cell surface receptor and transmembrane precursor protein that is cleaved by secretases to form a number of peptides.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-app"]} />
        {" "}AD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 75 ---
  {
    id: "CTSB",
    fullName: "Cathepsin B",
    chromosome: "8",
    disease: "multi",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes a member of the C1 family of peptidases.  Alternative splicing of this gene results in multiple transcript variants.",
    ironConnection: (
      <>
        This gene encodes a member of the C1 family of peptidases.  Alternative splicing of this gene results in multiple transcript variants.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ctsb"]} />
        {" "}AD and PD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 76 ---
  {
    id: "GRN",
    fullName: "Granulin Precursor",
    chromosome: "17",
    disease: "multi",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "Granulins are a family of secreted, glycosylated peptides that are cleaved from a single precursor protein with 7. 5 repeats of a highly conserved 12-cysteine granulin/epithelin motif.",
    ironConnection: (
      <>
        Granulins are a family of secreted, glycosylated peptides that are cleaved from a single precursor protein with 7. 5 repeats of a highly conserved 12-cysteine granulin/epithelin motif.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-grn"]} />
        {" "}AD and PD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 77 ---
  {
    id: "SPPL2A",
    fullName: "Signal Peptide Peptidase Like 2A",
    chromosome: "15",
    disease: "multi",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the GXGD family of aspartic proteases, which are transmembrane proteins with two conserved catalytic motifs localized within the membrane-spanning regions, as well as a member of the signal peptide peptidase-like protease (SPPL) family.",
    ironConnection: (
      <>
        This gene encodes a member of the GXGD family of aspartic proteases, which are transmembrane proteins with two conserved catalytic motifs localized within the membrane-spanning regions, as well as a member of the signal peptide peptidase-like protease (SPPL) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sppl2a"]} />
        {" "}AD and PD risk locus.
        <Cite id="bellenguez-2022-natgenet" />
      </>
    ),
  },
  // --- Locus 78 ---
  {
    id: "ZYG11B",
    fullName: "Zyg-11 Family Member B, Cell Cycle Regulator",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "Involved in positive regulation of proteasomal ubiquitin-dependent protein catabolic process and protein quality control for misfolded or incompletely synthesized proteins.  Part of Cul2-RING ubiquitin ligase complex.",
    ironConnection: (
      <>
        Involved in positive regulation of proteasomal ubiquitin-dependent protein catabolic process and protein quality control for misfolded or incompletely synthesized proteins.  Part of Cul2-RING ubiquitin ligase complex.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-zyg11b"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 79 ---
  {
    id: "KCND3",
    fullName: "Potassium Voltage-gated Channel Subfamily D Member 3",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Ion channels",
    secondaryLayers: ["E"],
    function:
      "Voltage-gated potassium (Kv) channels represent the most complex class of voltage-gated ion channels from both functional and structural standpoints.",
    ironConnection: (
      <>
        Voltage-gated potassium (Kv) channels represent the most complex class of voltage-gated ion channels from both functional and structural standpoints.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kcnd3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 80 ---
  {
    id: "GBA1",
    fullName: "Glucosylceramidase Beta 1",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a lysosomal membrane protein that cleaves the beta-glucosidic linkage of glycosylceramide, an intermediate in glycolipid metabolism.",
    ironConnection: (
      <>
        This gene encodes a lysosomal membrane protein that cleaves the beta-glucosidic linkage of glycosylceramide, an intermediate in glycolipid metabolism.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-gba1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 81 ---
  {
    id: "F11R",
    fullName: "F11 Receptor",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "BBB & tight junctions",
    function:
      "Tight junctions represent one mode of cell-to-cell adhesion in epithelial or endothelial cell sheets, forming continuous seals around cells and serving as a physical barrier to prevent solutes and water from passing freely through the paracellular space.",
    ironConnection: (
      <>
        Tight junctions represent one mode of cell-to-cell adhesion in epithelial or endothelial cell sheets, forming continuous seals around cells and serving as a physical barrier to prevent solutes and water from passing freely through the paracellular space.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-f11r"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 82 ---
  {
    id: "SDHC",
    fullName: "Succinate Dehydrogenase Complex Subunit C",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    secondaryLayers: ["I"],
    function:
      "This gene encodes one of four nuclear-encoded subunits that comprise succinate dehydrogenase, also known as mitochondrial complex II, a key enzyme complex of the tricarboxylic acid cycle and aerobic respiratory chains of mitochondria.",
    ironConnection: (
      <>
        This gene encodes one of four nuclear-encoded subunits that comprise succinate dehydrogenase, also known as mitochondrial complex II, a key enzyme complex of the tricarboxylic acid cycle and aerobic respiratory chains of mitochondria.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sdhc"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 83 ---
  {
    id: "VAMP4",
    fullName: "Vesicle Associated Membrane Protein 4",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Synaptobrevins/VAMPs, syntaxins, and the 25-kD synaptosomal-associated protein SNAP25 are the main components of a protein complex involved in the docking and/or fusion of synaptic vesicles with the presynaptic membrane.",
    ironConnection: (
      <>
        Synaptobrevins/VAMPs, syntaxins, and the 25-kD synaptosomal-associated protein SNAP25 are the main components of a protein complex involved in the docking and/or fusion of synaptic vesicles with the presynaptic membrane.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-vamp4"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 84 ---
  {
    id: "RAB29",
    fullName: "RAB29, Member RAS Oncogene Family",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "Enables several functions, including dynein complex binding activity; guanyl ribonucleotide binding activity; and kinesin binding activity.",
    ironConnection: (
      <>
        Enables several functions, including dynein complex binding activity; guanyl ribonucleotide binding activity; and kinesin binding activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rab29"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 85 ---
  {
    id: "ITPKB",
    fullName: "Inositol-trisphosphate 3-kinase B",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lipid signaling",
    function:
      "The protein encoded by this protein regulates inositol phosphate metabolism by phosphorylation of second messenger inositol 1,4,5-trisphosphate to Ins(1,3,4,5)P4.",
    ironConnection: (
      <>
        The protein encoded by this protein regulates inositol phosphate metabolism by phosphorylation of second messenger inositol 1,4,5-trisphosphate to Ins(1,3,4,5)P4.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-itpkb"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 86 ---
  {
    id: "SIPA1L2",
    fullName: "Signal Induced Proliferation Associated 1 Like 2",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a member of the signal-induced proliferation-associated 1 like family.  Members of this family contain a GTPase activating domain, a PDZ domain and a C-terminal coiled-coil domain with a leucine zipper.",
    ironConnection: (
      <>
        This gene encodes a member of the signal-induced proliferation-associated 1 like family.  Members of this family contain a GTPase activating domain, a PDZ domain and a C-terminal coiled-coil domain with a leucine zipper.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sipa1l2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 87 ---
  {
    id: "AKT3",
    fullName: "AKT Serine/threonine Kinase 3",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "The protein encoded by this gene is a member of the AKT, also called PKB,  serine/threonine protein kinase family.  AKT kinases are known to be regulators of cell signaling in response to insulin and growth factors.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the AKT, also called PKB,  serine/threonine protein kinase family.  AKT kinases are known to be regulators of cell signaling in response to insulin and growth factors.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-akt3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 88 ---
  {
    id: "KCNS3",
    fullName: "Potassium Voltage-gated Channel Modifier Subfamily S Member 3",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Ion channels",
    function:
      "Voltage-gated potassium channels form the largest and most diversified class of ion channels and are present in both excitable and nonexcitable cells.",
    ironConnection: (
      <>
        Voltage-gated potassium channels form the largest and most diversified class of ion channels and are present in both excitable and nonexcitable cells.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kcns3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 89 ---
  {
    id: "KLHL29",
    fullName: "Kelch Like Family Member 29",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "KLHL29 gene product.",
    ironConnection: (
      <>
        KLHL29 gene product.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 90 ---
  {
    id: "SRD5A2",
    fullName: "Steroid 5 Alpha-reductase 2",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "This gene encodes a microsomal protein expressed at high levels in androgen-sensitive tissues such as the prostate.  The encoded protein is active at acidic pH and is sensitive to the 4-azasteroid inhibitor finasteride.",
    ironConnection: (
      <>
        This gene encodes a microsomal protein expressed at high levels in androgen-sensitive tissues such as the prostate.  The encoded protein is active at acidic pH and is sensitive to the 4-azasteroid inhibitor finasteride.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-srd5a2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 91 ---
  {
    id: "BIRC6",
    fullName: "Baculoviral IAP Repeat Containing 6",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes a protein with a BIR (baculoviral inhibition of apoptosis protein repeat) domain and a UBCc (ubiquitin-conjugating enzyme E2, catalytic) domain.",
    ironConnection: (
      <>
        This gene encodes a protein with a BIR (baculoviral inhibition of apoptosis protein repeat) domain and a UBCc (ubiquitin-conjugating enzyme E2, catalytic) domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-birc6"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 92 ---
  {
    id: "XPO1",
    fullName: "Exportin 1",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    secondaryLayers: ["E"],
    function:
      "This cell-cycle-regulated gene encodes a protein that mediates leucine-rich nuclear export signal (NES)-dependent protein transport.  The protein specifically inhibits the nuclear export of Rev and U snRNAs.",
    ironConnection: (
      <>
        This cell-cycle-regulated gene encodes a protein that mediates leucine-rich nuclear export signal (NES)-dependent protein transport.  The protein specifically inhibits the nuclear export of Rev and U snRNAs.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-xpo1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 93 ---
  {
    id: "AAK1",
    fullName: "AP2 Associated Kinase 1",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the SNF1 subfamily of serine/threonine protein kinases.",
    ironConnection: (
      <>
        This gene encodes a member of the SNF1 subfamily of serine/threonine protein kinases.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-aak1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 94 ---
  {
    id: "KCNIP3",
    fullName: "Potassium Voltage-gated Channel Interacting Protein 3",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Ion channels",
    function:
      "This gene encodes a member of the family of voltage-gated potassium (Kv) channel-interacting proteins, which belong to the recoverin branch of the EF-hand superfamily.",
    ironConnection: (
      <>
        This gene encodes a member of the family of voltage-gated potassium (Kv) channel-interacting proteins, which belong to the recoverin branch of the EF-hand superfamily.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kcnip3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 95 ---
  {
    id: "TBC1D8",
    fullName: "TBC1 Domain Family Member 8",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "Predicted to enable GTPase activator activity.  Predicted to be involved in activation of GTPase activity and intracellular protein transport.",
    ironConnection: (
      <>
        Predicted to enable GTPase activator activity.  Predicted to be involved in activation of GTPase activity and intracellular protein transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tbc1d8"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 96 ---
  {
    id: "ACMSD",
    fullName: "Aminocarboxymuconate Semialdehyde Decarboxylase",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Cofactor synthesis",
    function:
      "The neuronal excitotoxin quinolinate is an intermediate in the de novo synthesis pathway of NAD from tryptophan, and has been implicated in the pathogenesis of several neurodegenerative disorders.",
    ironConnection: (
      <>
        The neuronal excitotoxin quinolinate is an intermediate in the de novo synthesis pathway of NAD from tryptophan, and has been implicated in the pathogenesis of several neurodegenerative disorders.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-acmsd"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 97 ---
  {
    id: "ACVR2A",
    fullName: "Activin A Receptor Type 2A",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene encodes a receptor that mediates the functions of activins, which are members of the transforming growth factor-beta (TGF-beta) superfamily involved in diverse biological processes.",
    ironConnection: (
      <>
        This gene encodes a receptor that mediates the functions of activins, which are members of the transforming growth factor-beta (TGF-beta) superfamily involved in diverse biological processes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-acvr2a"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 98 ---
  {
    id: "ACVR1",
    fullName: "Activin A Receptor Type 1",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "Activins are dimeric growth and differentiation factors which belong to the transforming growth factor-beta (TGF-beta) superfamily of structurally related signaling proteins.",
    ironConnection: (
      <>
        Activins are dimeric growth and differentiation factors which belong to the transforming growth factor-beta (TGF-beta) superfamily of structurally related signaling proteins.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-acvr1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 99 ---
  {
    id: "TANK",
    fullName: "TRAF Family Member Associated NFKB Activator",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "The TRAF (tumor necrosis factor receptor-associated factor) family of proteins associate with and transduce signals from members of the tumor necrosis factor receptor superfamily.",
    ironConnection: (
      <>
        The TRAF (tumor necrosis factor receptor-associated factor) family of proteins associate with and transduce signals from members of the tumor necrosis factor receptor superfamily.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tank"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 100 ---
  {
    id: "STK39",
    fullName: "Serine/threonine Kinase 39",
    chromosome: "2",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene encodes a serine/threonine kinase that is thought to function in the cellular stress response pathway.  The kinase is activated in response to hypotonic stress, leading to phosphorylation of several cation-chloride-coupled cotransporters.",
    ironConnection: (
      <>
        This gene encodes a serine/threonine kinase that is thought to function in the cellular stress response pathway.  The kinase is activated in response to hypotonic stress, leading to phosphorylation of several cation-chloride-coupled cotransporters.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-stk39"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 101 ---
  {
    id: "GRM7",
    fullName: "Glutamate Metabotropic Receptor 7",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "L-glutamate is the major excitatory neurotransmitter in the central nervous system, and it activates both ionotropic and metabotropic glutamate receptors.",
    ironConnection: (
      <>
        L-glutamate is the major excitatory neurotransmitter in the central nervous system, and it activates both ionotropic and metabotropic glutamate receptors.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-grm7"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 102 ---
  {
    id: "TBC1D5",
    fullName: "TBC1 Domain Family Member 5",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Enables AP-2 adaptor complex binding activity and retromer complex binding activity.  Involved in several processes, including macroautophagy; positive regulation of receptor internalization; and retrograde transport, endosome to Golgi.",
    ironConnection: (
      <>
        Enables AP-2 adaptor complex binding activity and retromer complex binding activity.  Involved in several processes, including macroautophagy; positive regulation of receptor internalization; and retrograde transport, endosome to Golgi.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tbc1d5"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 103 ---
  {
    id: "RBMS3",
    fullName: "RNA Binding Motif Single Stranded Interacting Protein 3",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes an RNA-binding protein that belongs to the c-myc gene single-strand binding protein family.",
    ironConnection: (
      <>
        This gene encodes an RNA-binding protein that belongs to the c-myc gene single-strand binding protein family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rbms3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 104 ---
  {
    id: "MOBP",
    fullName: "Myelin Associated Oligodendrocyte Basic Protein",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Myelin & structural",
    function:
      "Predicted to enable actin binding activity and myosin binding activity.  Predicted to be a structural constituent of myelin sheath.",
    ironConnection: (
      <>
        Predicted to enable actin binding activity and myosin binding activity.  Predicted to be a structural constituent of myelin sheath.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mobp"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 105 ---
  {
    id: "PXK",
    fullName: "PX Domain Containing Serine/threonine Kinase Like",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene encodes a phox (PX) domain-containing protein which may be involved in synaptic transmission and the ligand-induced internalization and degradation of epidermal growth factors.",
    ironConnection: (
      <>
        This gene encodes a phox (PX) domain-containing protein which may be involved in synaptic transmission and the ligand-induced internalization and degradation of epidermal growth factors.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-pxk"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 106 ---
  {
    id: "ADCY5",
    fullName: "Adenylate Cyclase 5",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a member of the membrane-bound adenylyl cyclase enzymes.  Adenylyl cyclases mediate G protein-coupled receptor signaling through the synthesis of the second messenger cAMP.",
    ironConnection: (
      <>
        This gene encodes a member of the membrane-bound adenylyl cyclase enzymes.  Adenylyl cyclases mediate G protein-coupled receptor signaling through the synthesis of the second messenger cAMP.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-adcy5"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 107 ---
  {
    id: "MED12L",
    fullName: "Mediator Complex Subunit 12L",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "The protein encoded by this gene is part of the Mediator complex, which is involved in transcriptional coactivation of nearly all RNA polymerase II-dependent genes.",
    ironConnection: (
      <>
        The protein encoded by this gene is part of the Mediator complex, which is involved in transcriptional coactivation of nearly all RNA polymerase II-dependent genes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-med12l"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 108 ---
  {
    id: "SUCNR1",
    fullName: "Succinate Receptor 1",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    function:
      "This gene encodes a G-protein-coupled receptor for succinate, an intermediate molecule of the citric acid cycle.",
    ironConnection: (
      <>
        This gene encodes a G-protein-coupled receptor for succinate, an intermediate molecule of the citric acid cycle.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sucnr1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 109 ---
  {
    id: "PLCH1",
    fullName: "Phospholipase C Eta 1",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "PLCH1 is a member of the PLC-eta family of the phosphoinositide-specific phospholipase C (PLC) superfamily of enzymes that cleave phosphatidylinositol 4,5-bisphosphate (PtdIns(4,5)P2) to generate second messengers inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) (Hwang et al.",
    ironConnection: (
      <>
        PLCH1 is a member of the PLC-eta family of the phosphoinositide-specific phospholipase C (PLC) superfamily of enzymes that cleave phosphatidylinositol 4,5-bisphosphate (PtdIns(4,5)P2) to generate second messengers inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG) (Hwang et al.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-plch1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 110 ---
  {
    id: "SPTSSB",
    fullName: "Serine Palmitoyltransferase Small Subunit B",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Serine palmitoyltransferase (SPT; EC 2. 3.",
    ironConnection: (
      <>
        Serine palmitoyltransferase (SPT; EC 2. 3.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sptssb"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 111 ---
  {
    id: "PIK3CA",
    fullName: "Phosphatidylinositol-4,5-bisphosphate 3-kinase Catalytic Subunit Alpha",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lipid signaling",
    function:
      "Phosphatidylinositol 3-kinase is composed of an 85 kDa regulatory subunit and a 110 kDa catalytic subunit.  The protein encoded by this gene represents the catalytic subunit, which uses ATP to phosphorylate PtdIns, PtdIns4P and PtdIns(4,5)P2.",
    ironConnection: (
      <>
        Phosphatidylinositol 3-kinase is composed of an 85 kDa regulatory subunit and a 110 kDa catalytic subunit.  The protein encoded by this gene represents the catalytic subunit, which uses ATP to phosphorylate PtdIns, PtdIns4P and PtdIns(4,5)P2.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-pik3ca"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 112 ---
  {
    id: "MCCC1",
    fullName: "Methylcrotonyl-CoA Carboxylase Subunit 1",
    chromosome: "3",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "This gene encodes the large subunit of 3-methylcrotonyl-CoA carboxylase.  This enzyme functions as a heterodimer and catalyzes the carboxylation of 3-methylcrotonyl-CoA to form 3-methylglutaconyl-CoA.",
    ironConnection: (
      <>
        This gene encodes the large subunit of 3-methylcrotonyl-CoA carboxylase.  This enzyme functions as a heterodimer and catalyzes the carboxylation of 3-methylcrotonyl-CoA to form 3-methylglutaconyl-CoA.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mccc1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 113 ---
  {
    id: "TMEM175",
    fullName: "Transmembrane Protein 175",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Enables potassium ion leak channel activity.  Involved in potassium ion transmembrane transport.",
    ironConnection: (
      <>
        Enables potassium ion leak channel activity.  Involved in potassium ion transmembrane transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tmem175"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 114 ---
  {
    id: "MFSD10",
    fullName: "MFSD10",
    chromosome: "?",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "MFSD10 gene product.",
    ironConnection: (
      <>
        MFSD10 gene product.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 115 ---
  {
    id: "BST1",
    fullName: "Bone Marrow Stromal Cell Antigen 1",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "Bone marrow stromal cell antigen-1 is a stromal cell line-derived glycosylphosphatidylinositol-anchored molecule that facilitates pre-B-cell growth.  The deduced amino acid sequence exhibits 33% similarity with CD38.",
    ironConnection: (
      <>
        Bone marrow stromal cell antigen-1 is a stromal cell line-derived glycosylphosphatidylinositol-anchored molecule that facilitates pre-B-cell growth.  The deduced amino acid sequence exhibits 33% similarity with CD38.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-bst1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 116 ---
  {
    id: "LCORL",
    fullName: "Ligand Dependent Nuclear Receptor Corepressor Like",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a transcription factor that appears to function in spermatogenesis.  Polymorphisms in this gene are associated with measures of skeletal frame size and adult height.",
    ironConnection: (
      <>
        This gene encodes a transcription factor that appears to function in spermatogenesis.  Polymorphisms in this gene are associated with measures of skeletal frame size and adult height.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-lcorl"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 117 ---
  {
    id: "STBD1",
    fullName: "Starch Binding Domain 1",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    secondaryLayers: ["I"],
    function:
      "Enables enzyme binding activity and glycogen binding activity.  Involved in glycophagy and intracellular transport.",
    ironConnection: (
      <>
        Enables enzyme binding activity and glycogen binding activity.  Involved in glycophagy and intracellular transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-stbd1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 118 ---
  {
    id: "SNCA",
    fullName: "Synuclein Alpha",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    secondaryLayers: ["I"],
    function:
      "Alpha-synuclein is a member of the synuclein family, which also includes beta- and gamma-synuclein.  Synucleins are abundantly expressed in the brain and alpha- and beta-synuclein inhibit phospholipase D2 selectively.",
    ironConnection: (
      <>
        Alpha-synuclein is a member of the synuclein family, which also includes beta- and gamma-synuclein.  Synucleins are abundantly expressed in the brain and alpha- and beta-synuclein inhibit phospholipase D2 selectively.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-snca"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 119 ---
  {
    id: "CAMK2D",
    fullName: "Calcium/calmodulin Dependent Protein Kinase II Delta",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "The product of this gene belongs to the serine/threonine protein kinase family and to the Ca(2+)/calmodulin-dependent protein kinase subfamily.  Calcium signaling is crucial for several aspects of plasticity at glutamatergic synapses.",
    ironConnection: (
      <>
        The product of this gene belongs to the serine/threonine protein kinase family and to the Ca(2+)/calmodulin-dependent protein kinase subfamily.  Calcium signaling is crucial for several aspects of plasticity at glutamatergic synapses.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-camk2d"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 120 ---
  {
    id: "CLCN3",
    fullName: "Chloride Voltage-gated Channel 3",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the voltage-gated chloride channel (ClC) family.  The encoded protein is present in all cell types and localized in plasma membranes and in intracellular vesicles.",
    ironConnection: (
      <>
        This gene encodes a member of the voltage-gated chloride channel (ClC) family.  The encoded protein is present in all cell types and localized in plasma membranes and in intracellular vesicles.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-clcn3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 121 ---
  {
    id: "SLC6A3",
    fullName: "Solute Carrier Family 6 Member 3",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "This gene encodes a dopamine transporter which is a member of the sodium- and chloride-dependent neurotransmitter transporter family.",
    ironConnection: (
      <>
        This gene encodes a dopamine transporter which is a member of the sodium- and chloride-dependent neurotransmitter transporter family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-slc6a3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 122 ---
  {
    id: "ELOVL7",
    fullName: "ELOVL Fatty Acid Elongase 7",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Enables fatty acid elongase activity.  Involved in fatty acid elongation, polyunsaturated fatty acid; fatty acid elongation, saturated fatty acid; and very long-chain fatty acid biosynthetic process.",
    ironConnection: (
      <>
        Enables fatty acid elongase activity.  Involved in fatty acid elongation, polyunsaturated fatty acid; fatty acid elongation, saturated fatty acid; and very long-chain fatty acid biosynthetic process.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-elovl7"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 123 ---
  {
    id: "SV2C",
    fullName: "Synaptic Vesicle Glycoprotein 2C",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Predicted to enable transmembrane transporter activity.  Predicted to be involved in chemical synaptic transmission; neurotransmitter transport; and transmembrane transport.",
    ironConnection: (
      <>
        Predicted to enable transmembrane transporter activity.  Predicted to be involved in chemical synaptic transmission; neurotransmitter transport; and transmembrane transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sv2c"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 124 ---
  {
    id: "FAM151B",
    fullName: "Family With Sequence Similarity 151 Member B",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Predicted to be active in extracellular space.",
    ironConnection: (
      <>
        Predicted to be active in extracellular space.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-fam151b"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 125 ---
  {
    id: "ZNF608",
    fullName: "Zinc Finger Protein 608",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Predicted to enable metal ion binding activity.  Predicted to be involved in negative regulation of transcription by RNA polymerase II.",
    ironConnection: (
      <>
        Predicted to enable metal ion binding activity.  Predicted to be involved in negative regulation of transcription by RNA polymerase II.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-znf608"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 126 ---
  {
    id: "REEP2",
    fullName: "Receptor Accessory Protein 2",
    chromosome: "5",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a member of the receptor expression enhancing protein family.  Studies of a related gene in mouse suggest that the encoded protein is found in the cell membrane and enhances the function of sweet taste receptors.",
    ironConnection: (
      <>
        This gene encodes a member of the receptor expression enhancing protein family.  Studies of a related gene in mouse suggest that the encoded protein is found in the cell membrane and enhances the function of sweet taste receptors.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-reep2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 127 ---
  {
    id: "RANBP9",
    fullName: "RAN Binding Protein 9",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a protein that binds RAN, a small GTP binding protein belonging to the RAS superfamily that is essential for the translocation of RNA and proteins through the nuclear pore complex.",
    ironConnection: (
      <>
        This gene encodes a protein that binds RAN, a small GTP binding protein belonging to the RAS superfamily that is essential for the translocation of RNA and proteins through the nuclear pore complex.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ranbp9"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 128 ---
  {
    id: "MBOAT1",
    fullName: "Membrane Bound Glycerophospholipid O-acyltransferase 1",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene belongs to the membrane-bound O-acetyltransferase superfamily.  The encoded transmembrane protein is an enzyme that transfers organic compounds, preferably from oleoyl-CoA, to hydroxyl groups of protein targets in membranes.",
    ironConnection: (
      <>
        This gene belongs to the membrane-bound O-acetyltransferase superfamily.  The encoded transmembrane protein is an enzyme that transfers organic compounds, preferably from oleoyl-CoA, to hydroxyl groups of protein targets in membranes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mboat1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 129 ---
  {
    id: "POM121L2",
    fullName: "POM121 Transmembrane Nucleoporin Like 2",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    secondaryLayers: ["E"],
    function:
      "Predicted to enable nuclear localization sequence binding activity.  Predicted to be a structural constituent of nuclear pore.",
    ironConnection: (
      <>
        Predicted to enable nuclear localization sequence binding activity.  Predicted to be a structural constituent of nuclear pore.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-pom121l2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 130 ---
  {
    id: "ZNF311",
    fullName: "Zinc Finger Protein 311",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Predicted to enable DNA-binding transcription factor activity, RNA polymerase II-specific and RNA polymerase II cis-regulatory region sequence-specific DNA binding activity.",
    ironConnection: (
      <>
        Predicted to enable DNA-binding transcription factor activity, RNA polymerase II-specific and RNA polymerase II cis-regulatory region sequence-specific DNA binding activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-znf311"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 131 ---
  {
    id: "HLA-DRB1",
    fullName: "Major Histocompatibility Complex, Class II, DR Beta 1",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    secondaryLayers: ["I"],
    function:
      "HLA-DRB1 belongs to the HLA class II beta chain paralogs.  The class II molecule is a heterodimer consisting of an alpha (DRA) and a beta chain (DRB), both anchored in the membrane.",
    ironConnection: (
      <>
        HLA-DRB1 belongs to the HLA class II beta chain paralogs.  The class II molecule is a heterodimer consisting of an alpha (DRA) and a beta chain (DRB), both anchored in the membrane.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-hla-drb1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 132 ---
  {
    id: "LMBRD1",
    fullName: "LMBR1 Domain Containing 1",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    secondaryLayers: ["L", "I"],
    function:
      "This gene encodes a lysosomal membrane protein that may be involved in the transport and metabolism of cobalamin.",
    ironConnection: (
      <>
        This gene encodes a lysosomal membrane protein that may be involved in the transport and metabolism of cobalamin.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-lmbrd1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 133 ---
  {
    id: "RIMS1",
    fullName: "Regulating Synaptic Membrane Exocytosis 1",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "The protein encoded by this gene is a RAS gene superfamily member that regulates synaptic vesicle exocytosis.  This gene also plays a role in the regulation of voltage-gated calcium channels during neurotransmitter and insulin release.",
    ironConnection: (
      <>
        The protein encoded by this gene is a RAS gene superfamily member that regulates synaptic vesicle exocytosis.  This gene also plays a role in the regulation of voltage-gated calcium channels during neurotransmitter and insulin release.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rims1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 134 ---
  {
    id: "FYN",
    fullName: "FYN Proto-oncogene, Src Family Tyrosine Kinase",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Receptor kinases",
    secondaryLayers: ["I"],
    function:
      "This gene is a member of the protein-tyrosine kinase oncogene family.  It encodes a membrane-associated tyrosine kinase that has been implicated in the control of cell growth.",
    ironConnection: (
      <>
        This gene is a member of the protein-tyrosine kinase oncogene family.  It encodes a membrane-associated tyrosine kinase that has been implicated in the control of cell growth.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-fyn"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 135 ---
  {
    id: "STX7",
    fullName: "Syntaxin 7",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "The protein encoded by this gene is a syntaxin family membrane receptor involved in vesicle transport.  The encoded protein binds alpha-SNAP, an important regulator of transport vesicle fusion.",
    ironConnection: (
      <>
        The protein encoded by this gene is a syntaxin family membrane receptor involved in vesicle transport.  The encoded protein binds alpha-SNAP, an important regulator of transport vesicle fusion.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-stx7"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 136 ---
  {
    id: "KLHL7",
    fullName: "Kelch Like Family Member 7",
    chromosome: "7",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes a BTB-Kelch-related protein.  The encoded protein may be involved in protein degradation.",
    ironConnection: (
      <>
        This gene encodes a BTB-Kelch-related protein.  The encoded protein may be involved in protein degradation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-klhl7"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 137 ---
  {
    id: "DYNC1I1",
    fullName: "Dynein Cytoplasmic 1 Intermediate Chain 1",
    chromosome: "7",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Cytoskeletal",
    secondaryLayers: ["L"],
    function:
      "Enables spectrin binding activity.  Involved in vesicle transport along microtubule.",
    ironConnection: (
      <>
        Enables spectrin binding activity.  Involved in vesicle transport along microtubule.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dync1i1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 138 ---
  {
    id: "NYAP1",
    fullName: "Neuronal Tyrosine Phosphorylated Phosphoinositide-3-kinase Adaptor 1",
    chromosome: "7",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Growth & signaling",
    function:
      "Predicted to be involved in neuron projection morphogenesis and phosphatidylinositol 3-kinase signaling.",
    ironConnection: (
      <>
        Predicted to be involved in neuron projection morphogenesis and phosphatidylinositol 3-kinase signaling.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-nyap1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 139 ---
  {
    id: "PTPRN2",
    fullName: "Protein Tyrosine Phosphatase Receptor Type N2",
    chromosome: "7",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lipid signaling",
    secondaryLayers: ["E"],
    function:
      "This gene encodes a protein with sequence similarity to receptor-like protein tyrosine phosphatases.  However, tyrosine phosphatase activity has not been experimentally validated for this protein.",
    ironConnection: (
      <>
        This gene encodes a protein with sequence similarity to receptor-like protein tyrosine phosphatases.  However, tyrosine phosphatase activity has not been experimentally validated for this protein.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ptprn2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 140 ---
  {
    id: "CLN8",
    fullName: "CLN8 Transmembrane ER And ERGIC Protein",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a transmembrane protein belonging to a family of proteins containing TLC domains, which are postulated to function in lipid synthesis, transport, or sensing.",
    ironConnection: (
      <>
        This gene encodes a transmembrane protein belonging to a family of proteins containing TLC domains, which are postulated to function in lipid synthesis, transport, or sensing.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cln8"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 141 ---
  {
    id: "PRAG1",
    fullName: "PEAK1 Related, Kinase-activating Pseudokinase 1",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene encodes an enzyme that belongs to the tyrosine protein kinase family.  A similar protein in rat binds to Rho family GTPase 2 (Rnd2) and regulates neurite outgrowth via activation of Ras homolog gene family, member A (RhoA)..",
    ironConnection: (
      <>
        This gene encodes an enzyme that belongs to the tyrosine protein kinase family.  A similar protein in rat binds to Rho family GTPase 2 (Rnd2) and regulates neurite outgrowth via activation of Ras homolog gene family, member A (RhoA)..
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-prag1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 142 ---
  {
    id: "FGF20",
    fullName: "Fibroblast Growth Factor 20",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Growth & signaling",
    function:
      "The protein encoded by this gene is a member of the fibroblast growth factor family.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the fibroblast growth factor family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-fgf20"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 143 ---
  {
    id: "BIN3",
    fullName: "Bridging Integrator 3",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "The product of this gene is a member of the BAR domain protein family.",
    ironConnection: (
      <>
        The product of this gene is a member of the BAR domain protein family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-bin3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 144 ---
  {
    id: "SYBU",
    fullName: "Syntabulin",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "Syntabulin/GOLSYN is part of a kinesin motor-adaptor complex that is critical for the anterograde axonal transport of active zone components and contributes to activity-dependent presynaptic assembly during neuronal development (Cai et al.",
    ironConnection: (
      <>
        Syntabulin/GOLSYN is part of a kinesin motor-adaptor complex that is critical for the anterograde axonal transport of active zone components and contributes to activity-dependent presynaptic assembly during neuronal development (Cai et al.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sybu"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 145 ---
  {
    id: "CYRIB",
    fullName: "CYFIP Related Rac1 Interactor B",
    chromosome: "8",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "Enables small GTPase binding activity.  Involved in several processes, including cellular response to molecule of bacterial origin; negative regulation of small GTPase mediated signal transduction; and regulation of organelle organization.",
    ironConnection: (
      <>
        Enables small GTPase binding activity.  Involved in several processes, including cellular response to molecule of bacterial origin; negative regulation of small GTPase mediated signal transduction; and regulation of organelle organization.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cyrib"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 146 ---
  {
    id: "SH3GL2",
    fullName: "SH3 Domain Containing GRB2 Like 2, Endophilin A1",
    chromosome: "9",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["N"],
    function:
      "Enables identical protein binding activity.  Involved in negative regulation of blood-brain barrier permeability; negative regulation of gene expression; and negative regulation of protein phosphorylation.",
    ironConnection: (
      <>
        Enables identical protein binding activity.  Involved in negative regulation of blood-brain barrier permeability; negative regulation of gene expression; and negative regulation of protein phosphorylation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sh3gl2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 147 ---
  {
    id: "UBAP1",
    fullName: "Ubiquitin Associated Protein 1",
    chromosome: "9",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene is a member of the UBA domain family, whose members include proteins having connections to ubiquitin and the ubiquitination pathway.",
    ironConnection: (
      <>
        This gene is a member of the UBA domain family, whose members include proteins having connections to ubiquitin and the ubiquitination pathway.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ubap1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 148 ---
  {
    id: "ITGA8",
    fullName: "Integrin Subunit Alpha 8",
    chromosome: "10",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    secondaryLayers: ["I"],
    function:
      "Integrins are heterodimeric transmembrane receptor proteins that mediate numerous cellular processes including cell adhesion, cytoskeletal rearrangement, and activation of cell signaling pathways.  Integrins are composed of alpha and beta subunits.",
    ironConnection: (
      <>
        Integrins are heterodimeric transmembrane receptor proteins that mediate numerous cellular processes including cell adhesion, cytoskeletal rearrangement, and activation of cell signaling pathways.  Integrins are composed of alpha and beta subunits.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-itga8"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 149 ---
  {
    id: "PSD",
    fullName: "Pleckstrin And Sec7 Domain Containing",
    chromosome: "10",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a Plekstrin homology and SEC7 domains-containing protein that functions as a guanine nucleotide exchange factor.  The encoded protein regulates signal transduction by activating ADP-ribosylation factor 6.",
    ironConnection: (
      <>
        This gene encodes a Plekstrin homology and SEC7 domains-containing protein that functions as a guanine nucleotide exchange factor.  The encoded protein regulates signal transduction by activating ADP-ribosylation factor 6.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-psd"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 150 ---
  {
    id: "AS3MT",
    fullName: "Arsenite Methyltransferase",
    chromosome: "10",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "AS3MT catalyzes the transfer of a methyl group from S-adenosyl-L-methionine (AdoMet) to trivalent arsenical and may play a role in arsenic metabolism (Lin et al. , 2002 [PubMed 11790780]).",
    ironConnection: (
      <>
        AS3MT catalyzes the transfer of a methyl group from S-adenosyl-L-methionine (AdoMet) to trivalent arsenical and may play a role in arsenic metabolism (Lin et al. , 2002 [PubMed 11790780]).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-as3mt"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 151 ---
  {
    id: "BAG3",
    fullName: "BAG Cochaperone 3",
    chromosome: "10",
    disease: "PD",
    primaryLayer: "E",
    subcategory: "Molecular chaperones",
    function:
      "BAG proteins compete with Hip for binding to the Hsc70/Hsp70 ATPase domain and promote substrate release.  All the BAG proteins have an approximately 45-amino acid BAG domain near the C terminus but differ markedly in their N-terminal regions.",
    ironConnection: (
      <>
        BAG proteins compete with Hip for binding to the Hsc70/Hsp70 ATPase domain and promote substrate release.  All the BAG proteins have an approximately 45-amino acid BAG domain near the C terminus but differ markedly in their N-terminal regions.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-bag3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 152 ---
  {
    id: "DLG2",
    fullName: "Discs Large MAGUK Scaffold Protein 2",
    chromosome: "11",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Ion channels",
    function:
      "This gene encodes a member of the membrane-associated guanylate kinase (MAGUK) family.",
    ironConnection: (
      <>
        This gene encodes a member of the membrane-associated guanylate kinase (MAGUK) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dlg2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 153 ---
  {
    id: "ZW10",
    fullName: "Zw10 Kinetochore Protein",
    chromosome: "11",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "This gene encodes a protein that is one of many involved in mechanisms to ensure proper chromosome segregation during cell division.",
    ironConnection: (
      <>
        This gene encodes a protein that is one of many involved in mechanisms to ensure proper chromosome segregation during cell division.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-zw10"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 154 ---
  {
    id: "IGSF9B",
    fullName: "Immunoglobulin Superfamily Member 9B",
    chromosome: "11",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Predicted to enable kinase binding activity.  Predicted to be involved in synaptic membrane adhesion.",
    ironConnection: (
      <>
        Predicted to enable kinase binding activity.  Predicted to be involved in synaptic membrane adhesion.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-igsf9b"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 155 ---
  {
    id: "WNK1",
    fullName: "WNK Lysine Deficient Protein Kinase 1",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    function:
      "This gene encodes a member of the WNK subfamily of serine/threonine protein kinases.  The encoded protein may be a key regulator of blood pressure by controlling the transport of sodium and chloride ions.",
    ironConnection: (
      <>
        This gene encodes a member of the WNK subfamily of serine/threonine protein kinases.  The encoded protein may be a key regulator of blood pressure by controlling the transport of sodium and chloride ions.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-wnk1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 156 ---
  {
    id: "LRRK2",
    fullName: "Leucine Rich Repeat Kinase 2",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    secondaryLayers: ["I"],
    function:
      "This gene is a member of the leucine-rich repeat kinase family and encodes a protein with an ankryin repeat region, a leucine-rich repeat (LRR) domain, a kinase domain, a DFG-like motif, a RAS domain, a GTPase domain, a MLK-like domain, and a WD40 domain.",
    ironConnection: (
      <>
        This gene is a member of the leucine-rich repeat kinase family and encodes a protein with an ankryin repeat region, a leucine-rich repeat (LRR) domain, a kinase domain, a DFG-like motif, a RAS domain, a GTPase domain, a MLK-like domain, and a WD40 domain.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-lrrk2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 157 ---
  {
    id: "SLC38A2",
    fullName: "Solute Carrier Family 38 Member 2",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    secondaryLayers: ["I"],
    function:
      "Enables neutral amino acid:sodium symporter activity.  Involved in several processes, including amino acid transport; cellular response to arsenite(3-); and positive regulation of RNA splicing.",
    ironConnection: (
      <>
        Enables neutral amino acid:sodium symporter activity.  Involved in several processes, including amino acid transport; cellular response to arsenite(3-); and positive regulation of RNA splicing.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-slc38a2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 158 ---
  {
    id: "KCNH3",
    fullName: "Potassium Voltage-gated Channel Subfamily H Member 3",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Ion channels",
    function:
      "The protein encoded by this gene is a voltage-gated potassium channel alpha subunit predominantly expressed in the forebrain.  Studies in mice have found that cognitive function increases when this gene is knocked out.",
    ironConnection: (
      <>
        The protein encoded by this gene is a voltage-gated potassium channel alpha subunit predominantly expressed in the forebrain.  Studies in mice have found that cognitive function increases when this gene is knocked out.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kcnh3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 159 ---
  {
    id: "RAB21",
    fullName: "RAB21, Member RAS Oncogene Family",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene belongs to the Rab family of monomeric GTPases, which are involved in the control of cellular membrane traffic.  The encoded protein plays a role in the targeted trafficking of integrins via its association with integrin alpha tails.",
    ironConnection: (
      <>
        This gene belongs to the Rab family of monomeric GTPases, which are involved in the control of cellular membrane traffic.  The encoded protein plays a role in the targeted trafficking of integrins via its association with integrin alpha tails.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rab21"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 160 ---
  {
    id: "ANO4",
    fullName: "Anoctamin 4",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "Enables intracellular calcium activated chloride channel activity.  Involved in chloride transport.",
    ironConnection: (
      <>
        Enables intracellular calcium activated chloride channel activity.  Involved in chloride transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ano4"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 161 ---
  {
    id: "BTBD11",
    fullName: "BTBD11",
    chromosome: "?",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "BTBD11 gene product.",
    ironConnection: (
      <>
        BTBD11 gene product.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 162 ---
  {
    id: "MVK",
    fullName: "Mevalonate Kinase",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes the peroxisomal enzyme mevalonate kinase.  Mevalonate is a key intermediate, and mevalonate kinase a key early enzyme, in isoprenoid and sterol synthesis.",
    ironConnection: (
      <>
        This gene encodes the peroxisomal enzyme mevalonate kinase.  Mevalonate is a key intermediate, and mevalonate kinase a key early enzyme, in isoprenoid and sterol synthesis.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mvk"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 163 ---
  {
    id: "HIP1R",
    fullName: "Huntingtin Interacting Protein 1 Related",
    chromosome: "12",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Enables several functions, including phosphatidylinositol phosphate binding activity; phosphatidylinositol-3,4-bisphosphate binding activity; and protein homodimerization activity.",
    ironConnection: (
      <>
        Enables several functions, including phosphatidylinositol phosphate binding activity; phosphatidylinositol-3,4-bisphosphate binding activity; and protein homodimerization activity.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-hip1r"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 164 ---
  {
    id: "CAB39L",
    fullName: "Calcium Binding Protein 39 Like",
    chromosome: "13",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "Predicted to enable protein serine/threonine kinase activator activity.  Predicted to be involved in intracellular signal transduction.",
    ironConnection: (
      <>
        Predicted to enable protein serine/threonine kinase activator activity.  Predicted to be involved in intracellular signal transduction.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cab39l"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 165 ---
  {
    id: "MBNL2",
    fullName: "Muscleblind Like Splicing Regulator 2",
    chromosome: "13",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene is a member of the muscleblind protein family which was initially described in Drosophila melanogaster.  This gene encodes a C3H-type zinc finger protein that modulates alternative splicing of pre-mRNAs.",
    ironConnection: (
      <>
        This gene is a member of the muscleblind protein family which was initially described in Drosophila melanogaster.  This gene encodes a C3H-type zinc finger protein that modulates alternative splicing of pre-mRNAs.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mbnl2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 166 ---
  {
    id: "IRS2",
    fullName: "Insulin Receptor Substrate 2",
    chromosome: "13",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene encodes the insulin receptor substrate 2, a cytoplasmic signaling molecule that mediates effects of insulin, insulin-like growth factor 1, and other cytokines by acting as a molecular adaptor between diverse receptor tyrosine kinases and downstream effectors.",
    ironConnection: (
      <>
        This gene encodes the insulin receptor substrate 2, a cytoplasmic signaling molecule that mediates effects of insulin, insulin-like growth factor 1, and other cytokines by acting as a molecular adaptor between diverse receptor tyrosine kinases and downstream effectors.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-irs2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 167 ---
  {
    id: "RALGAPA1",
    fullName: "Ral GTPase Activating Protein Catalytic Subunit Alpha 1",
    chromosome: "14",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "This gene encodes a major subunit of the RAL-GTPase activating protein.  A similar protein in mouse binds E12, a transcriptional regulator of immunoglobulin genes.",
    ironConnection: (
      <>
        This gene encodes a major subunit of the RAL-GTPase activating protein.  A similar protein in mouse binds E12, a transcriptional regulator of immunoglobulin genes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ralgapa1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 168 ---
  {
    id: "GCH1",
    fullName: "GTP Cyclohydrolase 1",
    chromosome: "14",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Cofactor synthesis",
    function:
      "This gene encodes a member of the GTP cyclohydrolase family.  The encoded protein is the first and rate-limiting enzyme in tetrahydrobiopterin (BH4) biosynthesis, catalyzing the conversion of GTP into 7,8-dihydroneopterin triphosphate.",
    ironConnection: (
      <>
        This gene encodes a member of the GTP cyclohydrolase family.  The encoded protein is the first and rate-limiting enzyme in tetrahydrobiopterin (BH4) biosynthesis, catalyzing the conversion of GTP into 7,8-dihydroneopterin triphosphate.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-gch1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 169 ---
  {
    id: "GALC",
    fullName: "Galactosylceramidase",
    chromosome: "14",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Myelin & structural",
    secondaryLayers: ["L"],
    function:
      "This gene encodes a lysosomal protein which hydrolyzes the galactose ester bonds of galactosylceramide, galactosylsphingosine, lactosylceramide, and monogalactosyldiglyceride.",
    ironConnection: (
      <>
        This gene encodes a lysosomal protein which hydrolyzes the galactose ester bonds of galactosylceramide, galactosylsphingosine, lactosylceramide, and monogalactosyldiglyceride.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-galc"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 170 ---
  {
    id: "DLK1",
    fullName: "Delta Like Non-canonical Notch Ligand 1",
    chromosome: "14",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Growth & signaling",
    function:
      "This gene encodes a transmembrane protein that contains multiple epidermal growth factor repeats that functions as a regulator of cell growth.  The encoded protein is involved in the differentiation of several cell types including adipocytes.",
    ironConnection: (
      <>
        This gene encodes a transmembrane protein that contains multiple epidermal growth factor repeats that functions as a regulator of cell growth.  The encoded protein is involved in the differentiation of several cell types including adipocytes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dlk1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 171 ---
  {
    id: "VPS13C",
    fullName: "Vacuolar Protein Sorting 13 Homolog C",
    chromosome: "15",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene encodes a member of the vacuolar protein sorting-associated 13 gene family.  Alternate splicing results in multiple transcript variants.",
    ironConnection: (
      <>
        This gene encodes a member of the vacuolar protein sorting-associated 13 gene family.  Alternate splicing results in multiple transcript variants.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-vps13c"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 172 ---
  {
    id: "HERC1",
    fullName: "HECT And RLD Domain Containing E3 Ubiquitin Protein Ligase Family Member 1",
    chromosome: "15",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "This gen encodes a member of the HERC protein family.  This protein stimulates guanine nucleotide exchange on ARF1 and Rab proteins.",
    ironConnection: (
      <>
        This gen encodes a member of the HERC protein family.  This protein stimulates guanine nucleotide exchange on ARF1 and Rab proteins.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-herc1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 173 ---
  {
    id: "MFGE8",
    fullName: "Milk Fat Globule EGF And Factor V/VIII Domain Containing",
    chromosome: "15",
    disease: "PD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    secondaryLayers: ["L", "I"],
    function:
      "This gene encodes a preproprotein that is proteolytically processed to form multiple protein products.  The major encoded protein product, lactadherin, is a membrane glycoprotein that promotes phagocytosis of apoptotic cells.",
    ironConnection: (
      <>
        This gene encodes a preproprotein that is proteolytically processed to form multiple protein products.  The major encoded protein product, lactadherin, is a membrane glycoprotein that promotes phagocytosis of apoptotic cells.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mfge8"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 174 ---
  {
    id: "CRAMP1",
    fullName: "Cramped Chromatin Regulator 1",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Predicted to enable chromatin binding activity.  Predicted to be involved in pattern specification process.",
    ironConnection: (
      <>
        Predicted to enable chromatin binding activity.  Predicted to be involved in pattern specification process.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cramp1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 175 ---
  {
    id: "SYT17",
    fullName: "Synaptotagmin 17",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "Predicted to enable several functions, including calcium ion binding activity; phospholipid binding activity; and syntaxin binding activity.  Involved in positive regulation of dendrite extension.",
    ironConnection: (
      <>
        Predicted to enable several functions, including calcium ion binding activity; phospholipid binding activity; and syntaxin binding activity.  Involved in positive regulation of dendrite extension.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-syt17"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 176 ---
  {
    id: "ATP2A1",
    fullName: "ATPase Sarcoplasmic/endoplasmic Reticulum Ca2+ Transporting 1",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes one of the SERCA Ca(2+)-ATPases, which are intracellular pumps located in the sarcoplasmic or endoplasmic reticula of muscle cells.",
    ironConnection: (
      <>
        This gene encodes one of the SERCA Ca(2+)-ATPases, which are intracellular pumps located in the sarcoplasmic or endoplasmic reticula of muscle cells.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-atp2a1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 177 ---
  {
    id: "STX4",
    fullName: "Syntaxin 4",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "Enables sphingomyelin phosphodiesterase activator activity.  Involved in several processes, including cornified envelope assembly; positive regulation of immune effector process; and positive regulation of protein localization.",
    ironConnection: (
      <>
        Enables sphingomyelin phosphodiesterase activator activity.  Involved in several processes, including cornified envelope assembly; positive regulation of immune effector process; and positive regulation of protein localization.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-stx4"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 178 ---
  {
    id: "CYLD",
    fullName: "CYLD Lysine 63 Deubiquitinase",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "This gene is encodes a cytoplasmic protein with three cytoskeletal-associated protein-glycine-conserved (CAP-GLY) domains that functions as a deubiquitinating enzyme.",
    ironConnection: (
      <>
        This gene is encodes a cytoplasmic protein with three cytoskeletal-associated protein-glycine-conserved (CAP-GLY) domains that functions as a deubiquitinating enzyme.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-cyld"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 179 ---
  {
    id: "TOX3",
    fullName: "TOX High Mobility Group Box Family Member 3",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "The protein encoded by this gene contains an HMG-box, indicating that it may be involved in bending and unwinding of DNA and alteration of chromatin structure.",
    ironConnection: (
      <>
        The protein encoded by this gene contains an HMG-box, indicating that it may be involved in bending and unwinding of DNA and alteration of chromatin structure.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tox3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 180 ---
  {
    id: "CHD9",
    fullName: "Chromodomain Helicase DNA Binding Protein 9",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Predicted to enable ATP binding activity; ATP-dependent activity, acting on DNA; and DNA binding activity.  Predicted to be involved in DNA duplex unwinding and chromatin organization.",
    ironConnection: (
      <>
        Predicted to enable ATP binding activity; ATP-dependent activity, acting on DNA; and DNA binding activity.  Predicted to be involved in DNA duplex unwinding and chromatin organization.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-chd9"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 181 ---
  {
    id: "GP1BA",
    fullName: "Glycoprotein Ib Platelet Subunit Alpha",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "N",
    subcategory: "Endothelial & vascular",
    secondaryLayers: ["I"],
    function:
      "Glycoprotein Ib (GP Ib) is a platelet surface membrane glycoprotein composed of a heterodimer, an alpha chain and a beta chain, that is linked by disulfide bonds.  The Gp Ib functions as a receptor for von Willebrand factor (VWF).",
    ironConnection: (
      <>
        Glycoprotein Ib (GP Ib) is a platelet surface membrane glycoprotein composed of a heterodimer, an alpha chain and a beta chain, that is linked by disulfide bonds.  The Gp Ib functions as a receptor for von Willebrand factor (VWF).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-gp1ba"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 182 ---
  {
    id: "PHF23",
    fullName: "PHD Finger Protein 23",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "Predicted to enable metal ion binding activity.  Involved in negative regulation of autophagosome assembly; negative regulation of autophagosome maturation; and positive regulation of protein ubiquitination.",
    ironConnection: (
      <>
        Predicted to enable metal ion binding activity.  Involved in negative regulation of autophagosome assembly; negative regulation of autophagosome maturation; and positive regulation of protein ubiquitination.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-phf23"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 183 ---
  {
    id: "NCOR1",
    fullName: "Nuclear Receptor Corepressor 1",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a protein that mediates ligand-independent transcription repression of thyroid-hormone and retinoic-acid receptors by promoting chromatin condensation and preventing access of the transcription machinery.",
    ironConnection: (
      <>
        This gene encodes a protein that mediates ligand-independent transcription repression of thyroid-hormone and retinoic-acid receptors by promoting chromatin condensation and preventing access of the transcription machinery.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ncor1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 184 ---
  {
    id: "SREBF1",
    fullName: "Sterol Regulatory Element Binding Transcription Factor 1",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a basic helix-loop-helix-leucine zipper (bHLH-Zip) transcription factor that binds to the sterol regulatory element-1 (SRE1), which is a motif that is found in the promoter of the low density lipoprotein receptor gene and other genes involved in sterol biosynthesis.",
    ironConnection: (
      <>
        This gene encodes a basic helix-loop-helix-leucine zipper (bHLH-Zip) transcription factor that binds to the sterol regulatory element-1 (SRE1), which is a motif that is found in the promoter of the low density lipoprotein receptor gene and other genes involved in sterol biosynthesis.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-srebf1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 185 ---
  {
    id: "OMG",
    fullName: "Oligodendrocyte Myelin Glycoprotein",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Myelin & structural",
    function:
      "Predicted to enable identical protein binding activity.  Predicted to be involved in neuron projection regeneration.",
    ironConnection: (
      <>
        Predicted to enable identical protein binding activity.  Predicted to be involved in neuron projection regeneration.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-omg"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 186 ---
  {
    id: "TUBG1",
    fullName: "Tubulin Gamma 1",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Cytoskeletal",
    function:
      "This gene encodes a member of the tubulin superfamily.  The encoded protein localizes to the centrosome where it binds to microtubules as part of a complex referred to as the gamma-tubulin ring complex.",
    ironConnection: (
      <>
        This gene encodes a member of the tubulin superfamily.  The encoded protein localizes to the centrosome where it binds to microtubules as part of a complex referred to as the gamma-tubulin ring complex.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tubg1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 187 ---
  {
    id: "KANSL1",
    fullName: "KAT8 Regulatory NSL Complex Subunit 1",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a nuclear protein that is a subunit of two protein complexes involved with histone acetylation, the MLL1 complex and the NSL1 complex.",
    ironConnection: (
      <>
        This gene encodes a nuclear protein that is a subunit of two protein complexes involved with histone acetylation, the MLL1 complex and the NSL1 complex.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-kansl1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 188 ---
  {
    id: "NPEPPS",
    fullName: "Aminopeptidase Puromycin Sensitive",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Proteolysis",
    secondaryLayers: ["I"],
    function:
      "This gene encodes the puromycin-sensitive aminopeptidase, a zinc metallopeptidase which hydrolyzes amino acids from the N-terminus of its substrate.  The protein has been localized to both the cytoplasm and to cellular membranes.",
    ironConnection: (
      <>
        This gene encodes the puromycin-sensitive aminopeptidase, a zinc metallopeptidase which hydrolyzes amino acids from the N-terminus of its substrate.  The protein has been localized to both the cytoplasm and to cellular membranes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-npepps"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 189 ---
  {
    id: "PPP1R9B",
    fullName: "Protein Phosphatase 1 Regulatory Subunit 9B",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Structural & other",
    function:
      "This gene encodes a scaffold protein that functions as a regulatory subunit of protein phosphatase 1a.",
    ironConnection: (
      <>
        This gene encodes a scaffold protein that functions as a regulatory subunit of protein phosphatase 1a.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ppp1r9b"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 190 ---
  {
    id: "STRADA",
    fullName: "STE20 Related Adaptor Alpha",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "The protein encoded by this gene contains a STE20-like kinase domain, but lacks several residues that are critical for catalytic activity, so it is termed a 'pseudokinase'.",
    ironConnection: (
      <>
        The protein encoded by this gene contains a STE20-like kinase domain, but lacks several residues that are critical for catalytic activity, so it is termed a 'pseudokinase'.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-strada"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 191 ---
  {
    id: "SLC16A6",
    fullName: "Solute Carrier Family 16 Member 6",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    secondaryLayers: ["I"],
    function:
      "Predicted to enable monocarboxylic acid transmembrane transporter activity.  Predicted to be involved in monocarboxylic acid transport.",
    ironConnection: (
      <>
        Predicted to enable monocarboxylic acid transmembrane transporter activity.  Predicted to be involved in monocarboxylic acid transport.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-slc16a6"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 192 ---
  {
    id: "RPTOR",
    fullName: "Regulatory Associated Protein Of MTOR Complex 1",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "This gene encodes a component of a signaling pathway that regulates cell growth in response to nutrient and insulin levels.",
    ironConnection: (
      <>
        This gene encodes a component of a signaling pathway that regulates cell growth in response to nutrient and insulin levels.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rptor"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 193 ---
  {
    id: "ASPSCR1",
    fullName: "ASPSCR1 Tether For SLC2A4, UBX Domain Containing",
    chromosome: "17",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    secondaryLayers: ["I"],
    function:
      "The protein encoded by this gene contains a UBX domain and interacts with glucose transporter type 4 (GLUT4).",
    ironConnection: (
      <>
        The protein encoded by this gene contains a UBX domain and interacts with glucose transporter type 4 (GLUT4).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-aspscr1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 194 ---
  {
    id: "MAPRE2",
    fullName: "Microtubule Associated Protein RP/EB Family Member 2",
    chromosome: "18",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "The protein encoded by this gene shares significant homology to the adenomatous polyposis coli (APC) protein-binding EB1 gene family.  This protein is a microtubule-associated protein that is necessary for spindle symmetry during mitosis.",
    ironConnection: (
      <>
        The protein encoded by this gene shares significant homology to the adenomatous polyposis coli (APC) protein-binding EB1 gene family.  This protein is a microtubule-associated protein that is necessary for spindle symmetry during mitosis.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-mapre2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 195 ---
  {
    id: "RIT2",
    fullName: "Ras Like Without CAAX 2",
    chromosome: "18",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "RIN belongs to the RAS (HRAS; MIM 190020) superfamily of small GTPases (Shao et al. , 1999 [PubMed 10545207]).",
    ironConnection: (
      <>
        RIN belongs to the RAS (HRAS; MIM 190020) superfamily of small GTPases (Shao et al. , 1999 [PubMed 10545207]).
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-rit2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 196 ---
  {
    id: "SPPL2B",
    fullName: "Signal Peptide Peptidase Like 2B",
    chromosome: "19",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the GXGD family of aspartic proteases.  The GXGD proteases are transmembrane proteins with two conserved catalytic motifs localized within the membrane-spanning regions.",
    ironConnection: (
      <>
        This gene encodes a member of the GXGD family of aspartic proteases.  The GXGD proteases are transmembrane proteins with two conserved catalytic motifs localized within the membrane-spanning regions.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-sppl2b"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 197 ---
  {
    id: "ISYNA1",
    fullName: "Inositol-3-phosphate Synthase 1",
    chromosome: "19",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes an inositol-3-phosphate synthase enzyme.  The encoded protein plays a critical role in the myo-inositol biosynthesis pathway by catalyzing the rate-limiting conversion of glucose 6-phosphate to myoinositol 1-phosphate.",
    ironConnection: (
      <>
        This gene encodes an inositol-3-phosphate synthase enzyme.  The encoded protein plays a critical role in the myo-inositol biosynthesis pathway by catalyzing the rate-limiting conversion of glucose 6-phosphate to myoinositol 1-phosphate.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-isyna1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 198 ---
  {
    id: "PDCD5",
    fullName: "Programmed Cell Death 5",
    chromosome: "19",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "This gene encodes a protein that is upregulated during apoptosis where it translocates rapidly from the cytoplasm to the nucleus.",
    ironConnection: (
      <>
        This gene encodes a protein that is upregulated during apoptosis where it translocates rapidly from the cytoplasm to the nucleus.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-pdcd5"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 199 ---
  {
    id: "PPFIA3",
    fullName: "PPFI Scaffold Protein A3",
    chromosome: "19",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Growth & signaling",
    function:
      "The protein encoded by this gene is a member of the LAR protein-tyrosine phosphatase-interacting protein (liprin) family.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the LAR protein-tyrosine phosphatase-interacting protein (liprin) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ppfia3"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 200 ---
  {
    id: "DDRGK1",
    fullName: "DDRGK Domain Containing 1",
    chromosome: "20",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "The protein encoded by this gene interacts with components of the ubiquitin fold modifier 1 conjugation pathway and helps prevent apoptosis in ER-stressed secretory tissues.",
    ironConnection: (
      <>
        The protein encoded by this gene interacts with components of the ubiquitin fold modifier 1 conjugation pathway and helps prevent apoptosis in ER-stressed secretory tissues.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ddrgk1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 201 ---
  {
    id: "CRLS1",
    fullName: "Cardiolipin Synthase 1",
    chromosome: "20",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a member of the CDP-alcohol phosphatidyltransferase class-I family of proteins.",
    ironConnection: (
      <>
        This gene encodes a member of the CDP-alcohol phosphatidyltransferase class-I family of proteins.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-crls1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 202 ---
  {
    id: "TPX2",
    fullName: "TPX2 Microtubule Nucleation Factor",
    chromosome: "20",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Cytoskeletal",
    function:
      "Enables importin-alpha family protein binding activity and protein kinase binding activity.  Involved in activation of protein kinase activity; microtubule cytoskeleton organization; and negative regulation of microtubule depolymerization.",
    ironConnection: (
      <>
        Enables importin-alpha family protein binding activity and protein kinase binding activity.  Involved in activation of protein kinase activity; microtubule cytoskeleton organization; and negative regulation of microtubule depolymerization.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-tpx2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 203 ---
  {
    id: "PTPN1",
    fullName: "Protein Tyrosine Phosphatase Non-receptor Type 1",
    chromosome: "20",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Innate immunity",
    function:
      "The protein encoded by this gene is the founding member of the protein tyrosine phosphatase (PTP) family, which was isolated and identified based on its enzymatic activity and amino acid sequence.",
    ironConnection: (
      <>
        The protein encoded by this gene is the founding member of the protein tyrosine phosphatase (PTP) family, which was isolated and identified based on its enzymatic activity and amino acid sequence.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-ptpn1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 204 ---
  {
    id: "DYRK1A",
    fullName: "Dual Specificity Tyrosine Phosphorylation Regulated Kinase 1A",
    chromosome: "21",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes a member of the Dual-specificity tyrosine phosphorylation-regulated kinase (DYRK) family.",
    ironConnection: (
      <>
        This gene encodes a member of the Dual-specificity tyrosine phosphorylation-regulated kinase (DYRK) family.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dyrk1a"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 205 ---
  {
    id: "DSCAM",
    fullName: "DS Cell Adhesion Molecule",
    chromosome: "21",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene is a member of the immunoglobulin superfamily of cell adhesion molecules (Ig-CAMs), and is involved in human central and peripheral nervous system development.",
    ironConnection: (
      <>
        This gene is a member of the immunoglobulin superfamily of cell adhesion molecules (Ig-CAMs), and is involved in human central and peripheral nervous system development.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-dscam"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 206 ---
  {
    id: "ABCG1",
    fullName: "ATP Binding Cassette Subfamily G Member 1",
    chromosome: "21",
    disease: "PD",
    primaryLayer: "E",
    subcategory: "Lipid export",
    secondaryLayers: ["I"],
    function:
      "The protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intra-cellular membranes.",
    ironConnection: (
      <>
        The protein encoded by this gene is a member of the superfamily of ATP-binding cassette (ABC) transporters.  ABC proteins transport various molecules across extra- and intra-cellular membranes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-abcg1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 207 ---
  {
    id: "TRPM2",
    fullName: "Transient Receptor Potential Cation Channel Subfamily M Member 2",
    chromosome: "21",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Signaling & regulation",
    function:
      "The protein encoded by this gene forms a tetrameric cation channel that is permeable to calcium, sodium, and potassium and is regulated by free intracellular ADP-ribose.",
    ironConnection: (
      <>
        The protein encoded by this gene forms a tetrameric cation channel that is permeable to calcium, sodium, and potassium and is regulated by free intracellular ADP-ribose.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-trpm2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 208 ---
  {
    id: "ADARB1",
    fullName: "Adenosine Deaminase RNA Specific B1",
    chromosome: "21",
    disease: "PD",
    primaryLayer: "I",
    subcategory: "Chromatin & transcription",
    function:
      "This gene encodes the enzyme responsible for pre-mRNA editing of the glutamate receptor subunit B by site-specific deamination of adenosines.",
    ironConnection: (
      <>
        This gene encodes the enzyme responsible for pre-mRNA editing of the glutamate receptor subunit B by site-specific deamination of adenosines.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-adarb1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 209 ---
  {
    id: "SNCA-AS1",
    fullName: "SNCA Antisense RNA 1",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Iron transport & metabolism",
    function:
      "SNCA-AS1 gene product.",
    ironConnection: (
      <>
        SNCA-AS1 gene product.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 210 ---
  {
    id: "PINK1",
    fullName: "PTEN Induced Kinase 1",
    chromosome: "1",
    disease: "PD",
    primaryLayer: "Fe",
    subcategory: "Mitochondrial",
    function:
      "This gene encodes a serine/threonine protein kinase that localizes to mitochondria.  It is thought to protect cells from stress-induced mitochondrial dysfunction.",
    ironConnection: (
      <>
        This gene encodes a serine/threonine protein kinase that localizes to mitochondria.  It is thought to protect cells from stress-induced mitochondrial dysfunction.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-pink1"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 211 ---
  {
    id: "PRKN",
    fullName: "Parkin RBR E3 Ubiquitin Protein Ligase",
    chromosome: "6",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Autophagy & degradation",
    function:
      "The precise function of this gene is unknown; however, the encoded protein is a component of a multiprotein E3 ubiquitin ligase complex that mediates the targeting of substrate proteins for proteasomal degradation.",
    ironConnection: (
      <>
        The precise function of this gene is unknown; however, the encoded protein is a component of a multiprotein E3 ubiquitin ligase complex that mediates the targeting of substrate proteins for proteasomal degradation.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-prkn"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 212 ---
  {
    id: "VPS35",
    fullName: "VPS35 Retromer Complex Component",
    chromosome: "16",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    function:
      "This gene belongs to a group of vacuolar protein sorting (VPS) genes.",
    ironConnection: (
      <>
        This gene belongs to a group of vacuolar protein sorting (VPS) genes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-vps35"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 213 ---
  {
    id: "GAK",
    fullName: "Cyclin G Associated Kinase",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Signaling & regulation",
    function:
      "In all eukaryotes, the cell cycle is governed by cyclin-dependent protein kinases (CDKs), whose activities are regulated by cyclins and CDK inhibitors in a diverse array of mechanisms that involve the control of phosphorylation and dephosphorylation of Ser, Thr or Tyr residues.",
    ironConnection: (
      <>
        In all eukaryotes, the cell cycle is governed by cyclin-dependent protein kinases (CDKs), whose activities are regulated by cyclins and CDK inhibitors in a diverse array of mechanisms that involve the control of phosphorylation and dephosphorylation of Ser, Thr or Tyr residues.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-gak"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 214 ---
  {
    id: "INPP5F",
    fullName: "Inositol Polyphosphate-5-phosphatase F",
    chromosome: "10",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lipid signaling",
    function:
      "The protein encoded by this gene is an inositol 1,4,5-trisphosphate (InsP3) 5-phosphatase and contains a Sac domain.  The activity of this protein is specific for phosphatidylinositol 4,5-bisphosphate and phosphatidylinositol 3,4,5-trisphosphate.",
    ironConnection: (
      <>
        The protein encoded by this gene is an inositol 1,4,5-trisphosphate (InsP3) 5-phosphatase and contains a Sac domain.  The activity of this protein is specific for phosphatidylinositol 4,5-bisphosphate and phosphatidylinositol 3,4,5-trisphosphate.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-inpp5f"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 215 ---
  {
    id: "GPNMB",
    fullName: "Glycoprotein Nmb",
    chromosome: "7",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Lysosomal regulation",
    function:
      "The protein encoded by this gene is a type I transmembrane glycoprotein which shows homology to the pMEL17 precursor, a melanocyte-specific protein.",
    ironConnection: (
      <>
        The protein encoded by this gene is a type I transmembrane glycoprotein which shows homology to the pMEL17 precursor, a melanocyte-specific protein.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-gpnmb"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 216 ---
  {
    id: "USP8",
    fullName: "Ubiquitin Specific Peptidase 8",
    chromosome: "15",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "This gene encodes a protein that belongs to the ubiquitin-specific processing protease family of proteins.",
    ironConnection: (
      <>
        This gene encodes a protein that belongs to the ubiquitin-specific processing protease family of proteins.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-usp8"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
  // --- Locus 217 ---
  {
    id: "SCARB2",
    fullName: "Scavenger Receptor Class B Member 2",
    chromosome: "4",
    disease: "PD",
    primaryLayer: "L",
    subcategory: "Endosomal trafficking",
    secondaryLayers: ["I"],
    function:
      "The protein encoded by this gene is a type III glycoprotein that is located primarily in limiting membranes of lysosomes and endosomes.",
    ironConnection: (
      <>
        The protein encoded by this gene is a type III glycoprotein that is located primarily in limiting membranes of lysosomes and endosomes.
        <Cite id="ncbi-gene-refseq" citationIds={["ncbi-gene-scarb2"]} />
        {" "}PD risk locus.
        <Cite id="leonard-2025-medrxiv" />
      </>
    ),
  },
];

export const gwasStats = {
  riskLoci: { value: "217", label: "risk loci", description: "identified by GWAS" },
  felineMapping: {
    value: "~90%",
    label: "map to FELINE",
    description: "defense layer genes",
  },
};

export const survivorshipBias = {
  headline: "Survivorship bias",
  body: "GWAS studies elderly cohorts. Severe iron gene mutations (HFE, TFR2, HAMP, SLC40A1) cause organ failure decades earlier. These individuals never reach enrollment age. The genetics we see in AD encodes the defense against iron, not iron itself.",
};

export const layerLabels: Record<FelineLayerId, string> = {
  Fe: "Iron homeostasis",
  L: "Lysosome / antioxidant",
  I: "Insulation / buffering",
  N: "Neurovascular",
  E: "Export",
};

/** Group genes by their primary FELINE layer */
export function genesByLayer(): Record<FelineLayerId, GwasGene[]> {
  const result = Object.fromEntries(
    defenseLayers.map((l) => [l, [] as GwasGene[]])
  ) as Record<FelineLayerId, GwasGene[]>;
  for (const gene of gwasGenes) {
    result[gene.primaryLayer].push(gene);
  }
  return result;
}

/** Return unique subcategories for a layer, in order of first appearance */
export function subcategoriesForLayer(layer: FelineLayerId): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const gene of gwasGenes) {
    if (gene.primaryLayer === layer && !seen.has(gene.subcategory)) {
      seen.add(gene.subcategory);
      result.push(gene.subcategory);
    }
  }
  return result;
}

/** Group genes within a layer by subcategory */
export function genesBySubcategory(layer: FelineLayerId): Record<string, GwasGene[]> {
  const result: Record<string, GwasGene[]> = {};
  for (const gene of gwasGenes) {
    if (gene.primaryLayer !== layer) continue;
    if (!result[gene.subcategory]) result[gene.subcategory] = [];
    result[gene.subcategory].push(gene);
  }
  return result;
}
