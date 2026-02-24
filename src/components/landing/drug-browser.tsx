"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  drugs,
  drugCategories,
  diseaseRows,
  phaseColumns,
  phaseToColumn,
  outcomeColor,
  outcomeLabel,
  getMoleculeType,
  moleculeDotSize,
  moleculeTypeLabel,
  getDrugMW,
  type Drug,
  type DrugCategory,
  type MoleculeType,
} from "@/data/landing/drug-browser";

type ViewMode = "chart" | "grid" | "list";
type GridMode = "dots" | "names";

/* ------------------------------------------------------------------ */
/*  Drug tooltip (portal-based, same pattern as citation tooltips)     */
/* ------------------------------------------------------------------ */

function DrugTooltip({
  drug,
  anchorRect,
  visible,
  pinned,
  id,
}: {
  drug: Drug;
  anchorRect: DOMRect | null;
  visible: boolean;
  pinned?: boolean;
  id?: string;
}) {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalTarget(document.getElementById("citation-portal"));
  }, []);

  if (!portalTarget || !anchorRect) return null;

  const tooltipWidth = 300;
  let left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
  const top = anchorRect.top - 8;

  if (left < 8) left = 8;
  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

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
          <div className="rounded bg-navy-900/95 px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur-sm border border-white/10">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <p className="text-white font-medium">{drug.name}</p>
              <span
                className="text-xs font-medium px-1.5 py-0.5 rounded"
                style={{ color: outcomeColor(drug.outcome), backgroundColor: `${outcomeColor(drug.outcome)}15` }}
              >
                {outcomeLabel(drug.outcome)}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-1.5">{drug.company}</p>
            <p className="text-xs text-gray-300">{drug.detail ?? drug.note}</p>
            {drug.attribution && (
              <p className="text-[10px] text-gray-500 italic mt-1.5">{drug.attribution}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    portalTarget,
  );
}

/* ------------------------------------------------------------------ */
/*  Molecule shapes by type                                            */
/* ------------------------------------------------------------------ */

function moleculeShapeStyle(type: MoleculeType): React.CSSProperties {
  switch (type) {
    case "small":
      return { borderRadius: "50%" };
    case "peptide":
      return { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" };
    case "aso":
      return { borderRadius: "2px" };
    case "protein":
      return { clipPath: "polygon(50% 10%, 100% 100%, 0% 100%)" };
    case "antibody":
      return { clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" };
  }
}

/* ------------------------------------------------------------------ */
/*  Drug chip (small pill in the grid)                                 */
/* ------------------------------------------------------------------ */

const MIN_HIT = 16; // minimum tap target in px

function DrugChip({
  drug,
  dimmed,
}: {
  drug: Drug;
  dimmed: boolean;
}) {
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

  // Dismiss pinned tooltip on outside tap/click
  const tooltipId = `drug-tip-${drug.id}`;
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

  const type = getMoleculeType(drug);
  const dotPx = moleculeDotSize(type);
  const hitPx = Math.max(dotPx, MIN_HIT);

  return (
    <>
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        onFocus={handleMouseEnter}
        onBlur={() => { if (!pinned) setHovered(false); }}
        className="inline-flex items-center justify-center cursor-help shrink-0"
        style={{ width: hitPx, height: hitPx }}
        aria-label={`${drug.name}: ${outcomeLabel(drug.outcome)}`}
      >
        <span
          className="block transition-opacity duration-200"
          style={{
            width: dotPx,
            height: dotPx,
            backgroundColor: outcomeColor(drug.outcome),
            opacity: dimmed ? 0.15 : 1,
            ...moleculeShapeStyle(type),
          }}
        />
      </button>
      <DrugTooltip drug={drug} anchorRect={rect} visible={hovered || pinned} pinned={pinned} id={tooltipId} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Category pills                                                     */
/* ------------------------------------------------------------------ */

function CategoryPills({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer border ${
          selected === null
            ? "border-teal-400/50 text-teal-400 bg-teal-400/10"
            : "border-white/10 text-gray-400 hover:text-gray-300 hover:border-white/20"
        }`}
      >
        All drugs
      </button>
      {drugCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer border ${
            selected === cat.id
              ? "border-teal-400/50 text-teal-400 bg-teal-400/10"
              : "border-white/10 text-gray-400 hover:text-gray-300 hover:border-white/20"
          }`}
        >
          {cat.shortLabel}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Legends                                                            */
/* ------------------------------------------------------------------ */

function OutcomeLegend() {
  const items = [
    { color: "#EF4444", label: "Worsened" },
    { color: "#6B7280", label: "Failed / Halted" },
    { color: "#F59E0B", label: "Mixed / Contested" },
    { color: "#10B981", label: "Modest / Approved" },
  ];

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function SizeLegend() {
  const items: { type: MoleculeType; mw: string }[] = [
    { type: "small", mw: "<1 kDa" },
    { type: "peptide", mw: "~4 kDa" },
    { type: "aso", mw: "~7 kDa" },
    { type: "antibody", mw: "~150 kDa" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
      {items.map((item) => {
        const px = moleculeDotSize(item.type);
        return (
          <span key={item.type} className="flex items-center gap-1.5">
            <span
              className="inline-block bg-gray-500"
              style={{ width: px, height: px, ...moleculeShapeStyle(item.type) }}
            />
            {moleculeTypeLabel(item.type)} ({item.mw})
          </span>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  View tabs (chart / grid / list)                                    */
/* ------------------------------------------------------------------ */

const viewTabs: { id: ViewMode; label: string }[] = [
  { id: "chart", label: "Chart" },
  { id: "grid", label: "Grid" },
  { id: "list", label: "List" },
];

function ViewTabs({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (m: ViewMode) => void;
}) {
  return (
    <div className="flex gap-6 mb-6 border-b border-white/10">
      {viewTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`pb-2 text-sm transition-colors duration-200 cursor-pointer border-b-2 ${
            mode === tab.id
              ? "text-white border-white"
              : "text-gray-500 hover:text-gray-300 border-transparent"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Grid mode toggle (combined pill)                                   */
/* ------------------------------------------------------------------ */

function GridModeToggle({
  mode,
  onChange,
}: {
  mode: GridMode;
  onChange: (m: GridMode) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/10 mb-4 overflow-hidden">
      <button
        type="button"
        onClick={() => onChange("dots")}
        className={`px-3 py-1 text-xs transition-colors duration-200 cursor-pointer ${
          mode === "dots"
            ? "bg-white/10 text-white"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        Dots
      </button>
      <button
        type="button"
        onClick={() => onChange("names")}
        className={`px-3 py-1 text-xs transition-colors duration-200 cursor-pointer ${
          mode === "names"
            ? "bg-white/10 text-white"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        Names
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Drug tree list (mobile list view)                                  */
/* ------------------------------------------------------------------ */

function DrugAccordionRow({ drug }: { drug: Drug }) {
  const [open, setOpen] = useState(false);
  const disease = diseaseRows.find((d) => d.id === drug.disease);

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 py-2 px-3 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
      >
        <span
          className="inline-block w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: outcomeColor(drug.outcome) }}
        />
        <span className="text-sm text-gray-200 flex-1 min-w-0 truncate">{drug.name}</span>
        <span className="text-xs text-gray-500 shrink-0">{disease?.shortLabel}</span>
        <ChevronDown
          size={14}
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 ml-4 text-xs space-y-1">
              <p className="text-gray-300">{drug.detail ?? drug.note}</p>
              <p className="text-gray-500">
                <span className="text-gray-400">{outcomeLabel(drug.outcome)}</span>
                {" \u00B7 "}{drug.phase === "approved" ? "Approved" : `Phase ${drug.phase}`}
                {" \u00B7 "}{drug.company}
              </p>
              {drug.attribution && (
                <p className="text-gray-500 italic">{drug.attribution}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryAccordion({
  category,
  selectedCategory,
}: {
  category: DrugCategory;
  selectedCategory: string | null;
}) {
  const [open, setOpen] = useState(false);

  const categoryDrugs = useMemo(
    () => drugs.filter((d) => d.category === category.id),
    [category.id],
  );

  if (categoryDrugs.length === 0) return null;

  const dimmed = selectedCategory !== null && selectedCategory !== category.id;

  return (
    <div className={`border border-white/5 rounded-lg mb-2 transition-opacity duration-200 ${dimmed ? "opacity-20" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer hover:bg-white/[0.02] transition-colors rounded-lg"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-200 font-medium">{category.shortLabel}</span>
          <span className="text-xs text-gray-500">{categoryDrugs.length}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-2">
              {phaseColumns.map((phase) => {
                const phaseDrugs = categoryDrugs.filter(
                  (d) => phaseToColumn(d.phase) === phase.id,
                );
                if (phaseDrugs.length === 0) return null;
                return (
                  <div key={phase.id} className="mb-2 last:mb-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider px-3 py-1">
                      {phase.label}
                    </p>
                    {phaseDrugs.map((drug) => (
                      <DrugAccordionRow key={drug.id} drug={drug} />
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DrugTreeList({ selectedCategory }: { selectedCategory: string | null }) {
  return (
    <div>
      {drugCategories.map((cat) => (
        <CategoryAccordion
          key={cat.id}
          category={cat}
          selectedCategory={selectedCategory}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Molecule scale plot (strip chart on log MW axis)                    */
/* ------------------------------------------------------------------ */

const LOG_MIN = 1.9;  // ~80 Da
const LOG_MAX = 5.35;  // ~220 kDa
const LOG_RANGE = LOG_MAX - LOG_MIN;
const SCALE_DOT = 8;
const SCALE_GAP = 2;
const SCALE_STEP = SCALE_DOT + SCALE_GAP;
const AXIS_H = 24; // space for axis labels

function ScaleDot({
  drug,
  x,
  y,
  dimmed,
}: {
  drug: Drug;
  x: number;
  y: number;
  dimmed: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const updateRect = useCallback(() => {
    if (ref.current) setRect(ref.current.getBoundingClientRect());
  }, []);

  const tooltipId = `scale-tip-${drug.id}`;
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
        onClick={(e) => { e.stopPropagation(); updateRect(); setPinned((p) => !p); }}
        onMouseEnter={() => { updateRect(); setHovered(true); }}
        onMouseLeave={() => setHovered(false)}
        className="absolute cursor-help transition-opacity duration-200"
        style={{
          left: `${x}%`,
          bottom: AXIS_H + y,
          width: SCALE_DOT,
          height: SCALE_DOT,
          transform: "translateX(-50%)",
          backgroundColor: outcomeColor(drug.outcome),
          opacity: dimmed ? 0.15 : 1,
          ...moleculeShapeStyle(getMoleculeType(drug)),
        }}
        aria-label={`${drug.name}: ${outcomeLabel(drug.outcome)}, ${getDrugMW(drug).toLocaleString()} Da`}
      />
      <DrugTooltip drug={drug} anchorRect={rect} visible={hovered || pinned} pinned={pinned} id={tooltipId} />
    </>
  );
}

function MoleculeScalePlot({ selectedCategory }: { selectedCategory: string | null }) {
  const positioned = useMemo(() => {
    // Group by bucket (round log10 to 0.1)
    const buckets = new Map<number, Drug[]>();
    for (const drug of drugs) {
      const mw = getDrugMW(drug);
      const bucket = Math.round(Math.log10(mw) * 10) / 10;
      const arr = buckets.get(bucket) ?? [];
      arr.push(drug);
      buckets.set(bucket, arr);
    }

    const result: { drug: Drug; x: number; y: number }[] = [];
    for (const [bucket, bucketDrugs] of buckets) {
      const xPct = ((bucket - LOG_MIN) / LOG_RANGE) * 100;
      bucketDrugs.forEach((drug, i) => {
        result.push({ drug, x: xPct, y: i * SCALE_STEP });
      });
    }
    return result;
  }, []);

  const maxY = Math.max(...positioned.map((p) => p.y)) + SCALE_DOT;

  const ticks = [
    { mw: 100, label: "100 Da" },
    { mw: 1000, label: "1 kDa" },
    { mw: 10000, label: "10 kDa" },
    { mw: 100000, label: "100 kDa" },
  ];

  // Find iron chelator x range for annotation
  const ironDrugs = positioned.filter((p) => p.drug.category === "iron");
  const ironX = ironDrugs.length > 0 ? ironDrugs[0].x : 0;
  // Find antibody x range
  const abDrugs = positioned.filter((p) => getMoleculeType(p.drug) === "antibody");
  const abX = abDrugs.length > 0 ? abDrugs[0].x : 100;

  return (
    <div>
      <div className="relative" style={{ height: maxY + AXIS_H + 28 }}>
        {/* Axis line */}
        <div
          className="absolute left-0 right-0 bg-white/10"
          style={{ bottom: AXIS_H, height: 1 }}
        />

        {/* Tick marks + labels */}
        {ticks.map((tick) => {
          const x = ((Math.log10(tick.mw) - LOG_MIN) / LOG_RANGE) * 100;
          return (
            <div key={tick.mw} className="absolute" style={{ left: `${x}%`, bottom: 0 }}>
              <div
                className="absolute bg-white/20 -translate-x-1/2"
                style={{ bottom: AXIS_H, width: 1, height: 6 }}
              />
              <span className="absolute bottom-1 text-[10px] text-gray-500 -translate-x-1/2 whitespace-nowrap">
                {tick.label}
              </span>
            </div>
          );
        })}

        {/* Region annotations */}
        <span
          className="absolute text-[10px] text-teal-400/60 -translate-x-1/2 whitespace-nowrap"
          style={{ left: `${ironX}%`, bottom: AXIS_H + maxY + 6 }}
        >
          Iron chelators
        </span>
        <span
          className="absolute text-[10px] text-gray-500 -translate-x-1/2 whitespace-nowrap"
          style={{ left: `${abX}%`, bottom: AXIS_H + maxY + 6 }}
        >
          Antibodies
        </span>

        {/* Dots */}
        {positioned.map(({ drug, x, y }) => (
          <ScaleDot
            key={drug.id}
            drug={drug}
            x={x}
            y={y}
            dimmed={selectedCategory !== null && drug.category !== selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Grid table                                                         */
/* ------------------------------------------------------------------ */

function DrugGrid({
  selectedCategory,
  grid,
  gridMode,
}: {
  selectedCategory: string | null;
  grid: Map<string, Drug[]>;
  gridMode: GridMode;
}) {
  return (
    <div className="overflow-x-auto -mx-6 sm:-mx-8 px-6 sm:px-8">
      <table className="w-full border-collapse min-w-[480px]">
        <thead>
          <tr>
            <th className="text-left text-xs text-gray-500 font-normal pb-3 pr-4 w-[40px] sm:w-[120px]" />
            {phaseColumns.map((col) => (
              <th key={col.id} className="text-left text-xs text-gray-500 font-normal pb-3 px-2">
                <span className="hidden sm:inline">{col.label}</span>
                <span className="sm:hidden">{col.shortLabel}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {diseaseRows.map((disease) => {
            const hasDrugs = phaseColumns.some((col) => grid.has(`${disease.id}-${col.id}`));
            if (!hasDrugs) return null;

            return (
              <tr key={disease.id} className="border-t border-white/5">
                <td className="py-3 pr-4 text-sm text-gray-300 align-top whitespace-nowrap">
                  <span className="hidden sm:inline">{disease.label}</span>
                  <span className="sm:hidden">{disease.shortLabel}</span>
                </td>
                {phaseColumns.map((col) => {
                  const cellDrugs = grid.get(`${disease.id}-${col.id}`) || [];
                  return (
                    <td key={col.id} className="py-3 px-2 align-top">
                      {gridMode === "names" ? (
                        <div className="flex flex-wrap items-end gap-x-1.5 gap-y-0.5">
                          {cellDrugs.map((drug) => (
                            <span
                              key={drug.id}
                              className="text-[10px] leading-tight whitespace-nowrap transition-opacity duration-200"
                              style={{
                                color: outcomeColor(drug.outcome),
                                opacity: selectedCategory !== null && drug.category !== selectedCategory ? 0.15 : 1,
                              }}
                            >
                              {drug.name}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-0.5">
                          {cellDrugs.map((drug) => (
                            <DrugChip
                              key={drug.id}
                              drug={drug}
                              dimmed={selectedCategory !== null && drug.category !== selectedCategory}
                            />
                          ))}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main DrugBrowser                                                   */
/* ------------------------------------------------------------------ */

function GridLegends({ viewMode, gridMode }: { viewMode: ViewMode; gridMode: GridMode }) {
  return (
    <div className="mt-6 space-y-2">
      {viewMode === "grid" && gridMode === "dots" && <SizeLegend />}
      <OutcomeLegend />
    </div>
  );
}

export function DrugBrowser() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("iron");
  const [viewMode, setViewMode] = useState<ViewMode>("chart");
  const [gridMode, setGridMode] = useState<GridMode>("dots");
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // Build lookup: disease × phaseColumn → Drug[]
  const grid = useMemo(() => {
    const map = new Map<string, Drug[]>();
    for (const drug of drugs) {
      const col = phaseToColumn(drug.phase);
      const key = `${drug.disease}-${col}`;
      const arr = map.get(key) || [];
      arr.push(drug);
      map.set(key, arr);
    }
    return map;
  }, []);

  return (
    <div>
      <ViewTabs mode={viewMode} onChange={setViewMode} />

      <div className="relative">
        <div
          className={`overflow-hidden transition-[max-height] duration-500 md:max-h-none ${
            mobileExpanded ? "" : "max-h-[280px]"
          }`}
        >
          {viewMode === "grid" && (
            <GridModeToggle mode={gridMode} onChange={setGridMode} />
          )}
          {viewMode !== "list" && (
            <CategoryPills selected={selectedCategory} onSelect={setSelectedCategory} />
          )}
          {viewMode === "chart" && (
            <MoleculeScalePlot selectedCategory={selectedCategory} />
          )}
          {viewMode === "grid" && (
            <DrugGrid selectedCategory={selectedCategory} grid={grid} gridMode={gridMode} />
          )}
          {viewMode === "list" && (
            <DrugTreeList selectedCategory={null} />
          )}
          <GridLegends viewMode={viewMode} gridMode={gridMode} />
        </div>

        {!mobileExpanded && (
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center md:hidden">
            <div className="h-20 w-full bg-gradient-to-t from-[#1A0F0A] to-transparent" />
            <button
              type="button"
              onClick={() => setMobileExpanded(true)}
              className="relative -mt-4 px-4 py-1.5 rounded-full text-sm text-gray-400 border border-white/10 hover:text-gray-300 hover:border-white/20 transition-colors cursor-pointer bg-[#1A0F0A]"
            >
              Show all {drugs.length} drugs
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
