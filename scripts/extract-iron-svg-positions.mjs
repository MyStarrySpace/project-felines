#!/usr/bin/env node
/**
 * Extract node positions from feline-iron.svg for seeding CANIS graph.
 *
 * Uses jsdom to parse SVG and extract bounding boxes of named elements.
 * Output: JSON mapping element IDs to center-point coordinates.
 *
 * Usage: node scripts/extract-iron-svg-positions.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public/diagrams/feline-iron.svg');

const svgContent = readFileSync(svgPath, 'utf-8');

// Parse transform matrices to extract translation
function parseTransformMatrix(transform) {
  if (!transform) return null;

  const matrixMatch = transform.match(/matrix\(([^)]+)\)/);
  if (matrixMatch) {
    const values = matrixMatch[1].split(/[\s,]+/).map(Number);
    if (values.length >= 6) {
      return { tx: values[4], ty: values[5], scaleX: values[0], scaleY: values[3] };
    }
  }

  const translateMatch = transform.match(/translate\(\s*([^,)]+)\s*[,\s]\s*([^)]+)\s*\)/);
  if (translateMatch) {
    return { tx: parseFloat(translateMatch[1]), ty: parseFloat(translateMatch[2]), scaleX: 1, scaleY: 1 };
  }

  return null;
}

// Accumulate transforms from element up to SVG root
function getAbsoluteTranslation(el) {
  let tx = 0, ty = 0;
  let current = el;

  while (current && current.tagName !== 'svg') {
    const t = parseTransformMatrix(current.getAttribute?.('transform'));
    if (t) {
      tx += t.tx;
      ty += t.ty;
    }
    current = current.parentElement;
  }

  return { x: tx, y: ty };
}

// We'll parse the SVG with a simple regex-based approach since jsdom may not be available
// Extract all group elements with id attributes and their transforms

const positions = {};

// Match <g id="..." transform="matrix(...)"> patterns
// We need to track nesting for absolute positions
const groupPattern = /<g\s+(?:[^>]*?\s)?id="([^"]+)"[^>]*?(?:transform="([^"]*)")?[^>]*>/g;
const groupPattern2 = /<g\s+(?:[^>]*?\s)?transform="([^"]*)"[^>]*?(?:\s+id="([^"]+)")?[^>]*>/g;

// Simpler approach: find all elements with IDs and their nearest transform
const idPattern = /id="([^"]+)"/g;
const elementPattern = /<g\b([^>]*)>/g;

// Build a map of ID → parent chain transforms by finding each id and its ancestor transforms
// For the position extraction, we'll use a targeted approach:
// Find each named entity group, extract its transform chain

const entityIds = [
  // From the diagram steps data
  'Transferrin-complex-1', 'Transferrin-complex-2', 'TfR1-receptor',
  'Fe3--1', 'Fe3--2', 'Fe3--11', 'Fe3--21', 'Fe3--4',
  'Endosome', 'STEAP3', 'DMT1-1', 'Fe2--1',
  'LIP-Ellipse', 'LIP-Label', 'Fe2--2', 'Fe2--3', 'Fe2--4', 'PCBP1-2',
  'Fenton-reaction', 'Hydroxyl-radical', 'Hydroxyl-radical1',
  'H₂O₂', 'H₂O₂1', 'H₂O₂-2',
  'Ferritin', 'Ferritin-2',
  'Mitochondria', 'Mitochondria-Double-Star',
  'O₂⁻', 'O₂⁻-2',
  'LOXs', 'PUFAs-label',
  'Hydroxyl-radical-Double-Star', 'Hydroxyl-radical-Double-Star1',
  'Catalase', 'NOX-Enzyme', 'Regeneration',
  'Autolysosome-', 'Mitochondria-degraded', 'DMT1-2', 'Fe2--5',
];

// For each entity, find its position by searching for the id in the SVG
// and extracting the transform from its parent group chain
for (const id of entityIds) {
  // Find the element with this ID
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const idRegex = new RegExp(`<g[^>]*\\bid="${escapedId}"[^>]*>`, 's');
  const match = svgContent.match(idRegex);

  if (!match) {
    // Try with serif:id as well
    const serifRegex = new RegExp(`<g[^>]*\\bserif:id="${escapedId}"[^>]*>`, 's');
    const serifMatch = svgContent.match(serifRegex);
    if (!serifMatch) {
      console.warn(`  Element not found: ${id}`);
      continue;
    }
  }

  // Extract position from the matched element's context
  // Look at the transform attribute on this element and its parent groups
  const idx = match ? match.index : svgContent.match(new RegExp(`serif:id="${escapedId}"`, 's'))?.index;
  if (idx === undefined) continue;

  // Walk backwards from the match to find ancestor transforms
  let tx = 0, ty = 0;
  const beforeElement = svgContent.substring(0, idx);

  // Find all unclosed <g transform="..."> tags before this element
  const openGroups = [];
  let depth = 0;
  const tagRegex = /<\/?g\b([^>]*)>/g;
  let tagMatch;
  while ((tagMatch = tagRegex.exec(beforeElement)) !== null) {
    if (tagMatch[0].startsWith('</g')) {
      depth--;
      if (openGroups.length > 0) openGroups.pop();
    } else {
      depth++;
      const attrs = tagMatch[1];
      const transformMatch = attrs.match(/transform="([^"]*)"/);
      openGroups.push(transformMatch ? transformMatch[1] : null);
    }
  }

  // Also get the element's own transform
  const ownTransformMatch = (match ?? svgContent.substring(idx, idx + 500)).toString().match(/transform="([^"]*)"/);

  // Accumulate transforms from ancestor chain
  for (const t of openGroups) {
    if (!t) continue;
    const parsed = parseTransformMatrix(t);
    if (parsed) {
      tx += parsed.tx;
      ty += parsed.ty;
    }
  }

  // Add own transform
  if (ownTransformMatch) {
    const parsed = parseTransformMatrix(ownTransformMatch[1]);
    if (parsed) {
      tx += parsed.tx;
      ty += parsed.ty;
    }
  }

  positions[id] = { x: Math.round(tx * 10) / 10, y: Math.round(ty * 10) / 10 };
}

console.log(`Extracted positions for ${Object.keys(positions).length} elements:`);
console.log(JSON.stringify(positions, null, 2));

// Write output
const outputPath = join(root, 'src/data/iron-svg-positions.json');
writeFileSync(outputPath, JSON.stringify(positions, null, 2) + '\n');
console.log(`\nWritten to: ${outputPath}`);
