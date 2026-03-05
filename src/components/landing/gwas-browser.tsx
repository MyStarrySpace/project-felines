"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  gwasGenes,
  layerLabels,
  subcategoriesForLayer,
  genesBySubcategory,
  type GwasGene,
  type FelineLayerId,
} from "@/data/landing/gwas-genes";
import { defenseLayers } from "@/data/landing/entry-points";

/* ------------------------------------------------------------------ */
/*  Gene tooltip (portal-based, same pattern as drug/citation tooltips) */
/* ------------------------------------------------------------------ */

function GeneTooltip({
  gene,
  anchorRect,
  visible,
  pinned,
  id,
  onClose,
}: {
  gene: GwasGene;
  anchorRect: DOMRect | null;
  visible: boolean;
  pinned?: boolean;
  id?: string;
  onClose?: () => void;
}) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect || (anchorRect.width === 0 && anchorRect.height === 0))
    return null;

  const tooltipWidth = 340;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 8;

  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

  const layerColor: Record<string, string> = {
    Fe: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    L: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    I: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    N: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    E: "text-rose-400 bg-rose-400/10 border-rose-400/30",
  };

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          id={id}
          className={`fixed z-[101] ${pinned ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{ left, top, width: tooltipWidth, transform: "translateY(-100%)" }}
        >
          {/* Invisible bridge to prevent hover gap */}
          <div className="absolute left-0 right-0 h-3 -bottom-3" />
          <div className="bg-navy-900/95 px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div>
                <p className="text-white font-medium">{gene.id}</p>
                <p className="text-xs text-gray-500">{gene.fullName}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.5 border ${layerColor[gene.primaryLayer] ?? "text-gray-400 bg-gray-400/10 border-gray-400/30"}`}
                >
                  {gene.primaryLayer}
                </span>
                {onClose && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                    }}
                    className="md:hidden text-gray-500 hover:text-gray-300 p-0.5 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
            <div className="text-xs text-gray-300">
              {gene.ironConnection}
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              Chr {gene.chromosome}
              {gene.secondaryLayers && gene.secondaryLayers.length > 0 && (
                <>
                  {" "}&middot; Also: {gene.secondaryLayers.join(", ")}
                </>
              )}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget,
  );
}

/* ------------------------------------------------------------------ */
/*  Gene chip                                                          */
/* ------------------------------------------------------------------ */

function GeneChip({ gene }: { gene: GwasGene }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const updateRect = useCallback(() => {
    if (ref.current) setRect(ref.current.getBoundingClientRect());
  }, []);

  const handleMouseEnter = () => {
    updateRect();
    setHovered(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateRect();
    setPinned((p) => !p);
  };

  // Dismiss pinned tooltip on outside click
  const tooltipId = `gene-tip-${gene.id}`;
  useEffect(() => {
    if (!pinned) return;
    const dismiss = (e: Event) => {
      const target = e.target as Node;
      if (ref.current?.contains(target)) return;
      const tip = document.getElementById(tooltipId);
      if (tip?.contains(target)) return;
      setPinned(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [pinned, tooltipId]);

  return (
    <>
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onFocus={handleMouseEnter}
        onBlur={() => {
          if (!pinned) setHovered(false);
        }}
        className={`text-xs px-2 py-1 border transition-colors duration-150 cursor-help ${
          hovered || pinned
            ? "border-white/15 text-white"
            : "border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300"
        }`}
      >
        {gene.id}
      </button>
      <GeneTooltip
        gene={gene}
        anchorRect={rect}
        visible={hovered || pinned}
        pinned={pinned}
        id={tooltipId}
        onClose={() => setPinned(false)}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Layer pills                                                        */
/* ------------------------------------------------------------------ */

function LayerPills({
  active,
  onSelect,
  counts,
}: {
  active: FelineLayerId;
  onSelect: (id: FelineLayerId) => void;
  counts: Record<FelineLayerId, number>;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {defenseLayers.map((layer) => (
        <button
          key={layer}
          type="button"
          onClick={() => onSelect(layer)}
          className={`px-3 py-1.5 text-sm transition-all duration-200 cursor-pointer border ${
            active === layer
              ? "border-teal-400/50 text-teal-400 bg-teal-400/10"
              : "border-white/10 text-gray-400 hover:text-gray-300 hover:border-white/20"
          }`}
        >
          {layer}
          <span className="ml-1.5 text-xs opacity-60">{counts[layer]}</span>
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Subcategory descriptions                                           */
/* ------------------------------------------------------------------ */

const subcategoryDescriptions: Record<string, string> = {
  // Fe
  "Iron transport & metabolism": "Genes that move, store, or regulate iron directly.",
  "Mitochondrial": "Iron-sulfur clusters and heme synthesis depend on mitochondrial iron handling.",
  "Cofactor synthesis": "NAD+, GSH, and other cofactors that protect against iron-catalyzed damage.",
  "Signaling & regulation": "Calcium and kinase signaling that modulates iron-responsive pathways.",
  // L
  "Endosomal trafficking": "Vesicle sorting and recycling, including transferrin receptor endocytosis.",
  "Autophagy & degradation": "Lysosomal clearance of damaged organelles and iron-loaded proteins.",
  "Innate immunity": "Microglial activation and phagocytosis of iron-loaded myelin debris.",
  "Lipid signaling": "Phospholipid metabolism that influences membrane susceptibility to peroxidation.",
  "Proteolysis": "Proteases that process APP, clear aggregates, or regulate iron-binding proteins.",
  "Lysosomal regulation": "Lysosomal ion channels, pH control, and membrane integrity.",
  // I
  "Myelin & structural": "Myelin sheath components that insulate axons and sequester iron in oligodendrocytes.",
  "Ion channels": "Voltage-gated channels whose function is sensitive to iron-driven lipid peroxidation.",
  "Chromatin & transcription": "Transcriptional regulators of iron-responsive or myelination genes.",
  "Growth & signaling": "Growth factors and morphogens involved in oligodendrocyte survival.",
  "Lipid transport": "Cholesterol and phospholipid efflux critical for myelin maintenance.",
  "Cytoskeletal": "Structural proteins that maintain axonal integrity under oxidative stress.",
  "Structural & other": "Membrane and structural proteins with roles in insulation layer integrity.",
  // N
  "BBB & tight junctions": "Blood-brain barrier components that restrict peripheral iron entry.",
  "Receptor kinases": "Kinases at endothelial junctions that regulate barrier permeability.",
  "Endothelial & vascular": "Vascular and pericyte genes that maintain neurovascular iron filtering.",
  // E
  "Complement": "Complement-mediated clearance of iron-loaded debris from the extracellular space.",
  "Molecular chaperones": "Chaperones that bind iron-damaged proteins and facilitate their export.",
  "Lipid export": "Apolipoprotein-mediated lipid and iron export from the brain.",
};

/* ------------------------------------------------------------------ */
/*  Subcategory group                                                  */
/* ------------------------------------------------------------------ */

function SubcategoryGroup({
  label,
  genes,
}: {
  label: string;
  genes: GwasGene[];
}) {
  const description = subcategoryDescriptions[label];
  return (
    <div className="py-5 border-t border-white/5">
      <p className="text-sm font-medium text-gray-300 mb-0.5">
        {label}
      </p>
      {description && (
        <p className="text-xs text-gray-500 mb-3">{description}</p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {genes.map((gene) => (
          <GeneChip key={gene.id} gene={gene} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main browser export                                                */
/* ------------------------------------------------------------------ */

export function GwasBrowser() {
  const [activeLayer, setActiveLayer] = useState<FelineLayerId>("L");

  // Pre-compute counts
  const counts = {} as Record<FelineLayerId, number>;
  for (const layer of defenseLayers) {
    counts[layer] = gwasGenes.filter((g) => g.primaryLayer === layer).length;
  }

  const subcats = subcategoriesForLayer(activeLayer);
  const grouped = genesBySubcategory(activeLayer);

  return (
    <div>
      <LayerPills active={activeLayer} onSelect={setActiveLayer} counts={counts} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeLayer}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-base text-gray-400 mb-2">
            <span className="text-white font-medium">{layerLabels[activeLayer]}</span>
            {" "}&middot; {counts[activeLayer]} gene{counts[activeLayer] !== 1 ? "s" : ""}
          </p>

          {subcats.map((subcat) => (
            <SubcategoryGroup
              key={subcat}
              label={subcat}
              genes={grouped[subcat] ?? []}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
