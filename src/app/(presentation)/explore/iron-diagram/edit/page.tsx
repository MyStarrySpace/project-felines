"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface TextNode {
  id: string;
  label: string;
  section: string;
  x: number;
  y: number;
  el: SVGGElement;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Parse matrix(a,b,c,d,e,f) → {e, f} (translation only) */
function parseTranslation(transform: string): { x: number; y: number } | null {
  const m = transform.match(
    /matrix\(\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*\)/
  );
  if (!m) return null;
  return { x: parseFloat(m[5]), y: parseFloat(m[6]) };
}

/** Set translation on a matrix transform, preserving a/b/c/d */
function setTranslation(el: SVGGElement, x: number, y: number) {
  const t = el.getAttribute("transform") || "";
  const m = t.match(
    /matrix\(\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*,\s*([\d.e+-]+)\s*\)/
  );
  if (m) {
    el.setAttribute(
      "transform",
      `matrix(${m[1]},${m[2]},${m[3]},${m[4]},${x},${y})`
    );
  }
}

/** Get all text content from a group */
function getTextContent(g: SVGGElement): string {
  const texts = g.querySelectorAll("text");
  return Array.from(texts)
    .map((t) => t.textContent?.trim() || "")
    .filter(Boolean)
    .join(" / ");
}

/** Determine which section a group belongs to */
function getSection(el: SVGGElement): string {
  let node: Element | null = el;
  while (node) {
    const id = node.getAttribute("id") || "";
    if (id === "section-gsh-gpx4") return "GSH/GPX4 axis";
    if (id === "section-fsp1-coq10") return "FSP1/CoQ10 axis";
    if (id === "section-gch1-bh4") return "GCH1/BH4/DHFR axis";
    if (id === "section-lipid-perox") return "Lipid peroxidation";
    node = node.parentElement;
  }
  return "Top-level";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function IronDiagramEditor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<TextNode[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [dragging, setDragging] = useState<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  /* Load SVG inline */
  useEffect(() => {
    fetch("/diagrams/feline-iron.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = svgText;
        const svg = containerRef.current.querySelector("svg");
        if (!svg) return;

        // Make SVG fill the container
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.removeAttribute("width");
        svg.removeAttribute("height");

        // Find all <g> elements that directly contain <text> or contain
        // a child <g> with <text>. We want the outermost positioned group.
        const textGroups: SVGGElement[] = [];
        const allGs = svg.querySelectorAll("g");

        for (const g of allGs) {
          // Skip groups that are sections or arrows
          const id = g.getAttribute("id") || "";
          if (id.startsWith("arrow-") || id.startsWith("tbar-") || id.startsWith("section-")) continue;

          // Skip containers that hold section groups
          if (g.querySelector('[id^="section-"]')) continue;

          // Check if this g has text descendants
          const hasText = g.querySelector("text");
          if (!hasText) continue;

          // Must have a matrix transform
          const transform = g.getAttribute("transform") || "";
          const pos = parseTranslation(transform);
          if (!pos) continue;

          // Check if parent is also a positioned text group (we want outermost)
          const parent = g.parentElement;
          if (
            parent &&
            parent.tagName === "g" &&
            !parent.getAttribute("id")?.startsWith("section-") &&
            parent.querySelector("text") &&
            parseTranslation(parent.getAttribute("transform") || "")
          ) {
            // Parent also has text and a position — skip inner, parent will be picked
            continue;
          }

          textGroups.push(g);
        }

        // Build node list
        const built: TextNode[] = textGroups.map((g, i) => {
          const pos = parseTranslation(g.getAttribute("transform") || "")!;
          return {
            id: `text-${i}`,
            label: getTextContent(g),
            section: getSection(g),
            x: Math.round(pos.x * 100) / 100,
            y: Math.round(pos.y * 100) / 100,
            el: g,
          };
        });

        // Add drag cursor
        for (const node of built) {
          node.el.style.cursor = "grab";
        }

        setNodes(built);
      });
  }, []);

  /* SVG coordinate conversion */
  const svgPoint = useCallback(
    (clientX: number, clientY: number) => {
      const svg = containerRef.current?.querySelector("svg");
      if (!svg) return { x: 0, y: 0 };
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const ctm = svg.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      const svgPt = pt.matrixTransform(ctm.inverse());
      return { x: svgPt.x, y: svgPt.y };
    },
    []
  );

  /* Mouse handlers */
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Find which text group was clicked
      let target = e.target as Element | null;
      while (target && target.tagName !== "svg") {
        const node = nodes.find((n) => n.el === target || n.el.contains(target!));
        if (node) {
          e.preventDefault();
          const svgPt = svgPoint(e.clientX, e.clientY);
          setDragging({
            id: node.id,
            startX: svgPt.x,
            startY: svgPt.y,
            origX: node.x,
            origY: node.y,
          });
          setSelected(node.id);
          node.el.style.cursor = "grabbing";
          return;
        }
        target = target.parentElement;
      }
    },
    [nodes, svgPoint]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const svgPt = svgPoint(e.clientX, e.clientY);
      const dx = svgPt.x - dragging.startX;
      const dy = svgPt.y - dragging.startY;
      const newX = Math.round((dragging.origX + dx) * 100) / 100;
      const newY = Math.round((dragging.origY + dy) * 100) / 100;

      const node = nodes.find((n) => n.id === dragging.id);
      if (!node) return;

      setTranslation(node.el, newX, newY);
      setNodes((prev) =>
        prev.map((n) =>
          n.id === dragging.id ? { ...n, x: newX, y: newY } : n
        )
      );
    },
    [dragging, nodes, svgPoint]
  );

  const handleMouseUp = useCallback(() => {
    if (dragging) {
      const node = nodes.find((n) => n.id === dragging.id);
      if (node) node.el.style.cursor = "grab";
      setDragging(null);
    }
  }, [dragging, nodes]);

  /* Group by section */
  const sections = nodes.reduce<Record<string, TextNode[]>>((acc, n) => {
    (acc[n.section] ||= []).push(n);
    return acc;
  }, {});

  /* Export */
  const exportPositions = () => {
    const out: Record<string, Array<{ label: string; x: number; y: number }>> = {};
    for (const [section, items] of Object.entries(sections)) {
      out[section] = items.map((n) => ({
        label: n.label,
        x: n.x,
        y: n.y,
      }));
    }
    const json = JSON.stringify(out, null, 2);
    navigator.clipboard.writeText(json);
    alert("Copied to clipboard!");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#1A0F0A",
        color: "white",
      }}
    >
      {/* SVG canvas */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          flex: 1,
          overflow: "auto",
          background: "#111",
          position: "relative",
          userSelect: "none",
        }}
      />

      {/* Side panel */}
      <div
        style={{
          width: 360,
          overflow: "auto",
          padding: 16,
          borderLeft: "1px solid #333",
          fontSize: 13,
          fontFamily: "monospace",
        }}
      >
        <h2 style={{ margin: "0 0 8px", fontSize: 16, fontFamily: "sans-serif" }}>
          Ferroptosis Diagram Positions
        </h2>
        <p style={{ color: "#999", margin: "0 0 12px", fontFamily: "sans-serif", fontSize: 12 }}>
          Drag labels to reposition. Click &quot;Copy JSON&quot; to export.
        </p>
        <button
          onClick={exportPositions}
          style={{
            background: "#FBBF24",
            color: "#000",
            border: "none",
            padding: "6px 14px",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Copy JSON
        </button>

        {Object.entries(sections).map(([section, items]) => (
          <div key={section} style={{ marginBottom: 16 }}>
            <h3
              style={{
                fontSize: 13,
                color: "#FBBF24",
                margin: "0 0 6px",
                fontFamily: "sans-serif",
              }}
            >
              {section}
            </h3>
            {items.map((n) => (
              <div
                key={n.id}
                onClick={() => setSelected(n.id)}
                style={{
                  padding: "3px 6px",
                  background: selected === n.id ? "#333" : "transparent",
                  borderRadius: 3,
                  cursor: "pointer",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: "#ccc" }}>
                  {n.label.length > 24 ? n.label.slice(0, 22) + "…" : n.label}
                </span>
                <span style={{ color: "#888", marginLeft: 6 }}>
                  ({n.x}, {n.y})
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
