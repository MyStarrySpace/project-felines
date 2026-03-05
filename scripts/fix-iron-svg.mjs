import { readFileSync, writeFileSync } from 'fs';

let svg = readFileSync('public/diagrams/feline-iron.svg', 'utf8');
const original = svg;
let mergeCount = 0;

// Helper: find and replace exact blocks
function replaceBlock(label, oldBlock, newBlock) {
  if (svg.includes(oldBlock)) {
    svg = svg.replace(oldBlock, newBlock);
    mergeCount++;
    console.log(`  Merged: ${label}`);
    return;
  }
  // Try with normalized line endings
  const normalized = oldBlock.replace(/\r\n/g, '\n');
  if (svg.includes(normalized)) {
    svg = svg.replace(normalized, newBlock);
    mergeCount++;
    console.log(`  Merged: ${label} (normalized)`);
    return;
  }
  console.warn(`  FAILED: ${label}`);
}

// ============================================================
// Step 1: Merge fragmented text groups (BEFORE adding fill:white)
// ============================================================
console.log('Step 1: Merging fragmented text...');

// --- "T" + "ranssulfuration" + "pathway" ---
replaceBlock('Transsulfuration pathway',
`        <g transform="matrix(1,0,0,1,48,320.438)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">T</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,54.891,320.438)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">ranssulfuration</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,48,336.438)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">pathway</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,48,320.438)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">Transsulfuration</text>
                <text x="0px" y="16px" style="font-family:'Helvetica';font-size:12px;">pathway</text>
            </g>
        </g>`);

// --- "RSL3," + "ML210" ---
replaceBlock('RSL3, ML210',
`        <g transform="matrix(1,0,0,1,282.307,535.325)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">RSL3,</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,282.307,552.325)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">ML210</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,282.307,535.325)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">RSL3,</text>
                <text x="0px" y="17px" style="font-family:'Helvetica';font-size:12px;">ML210</text>
            </g>
        </g>`);

// --- "BH4/" + "α-T" + "OH" ---
replaceBlock('BH4/α-TOH',
`        <g transform="matrix(1,0,0,1,867.028,381.319)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">BH4/</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,861.33,399.319)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">α-T</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,882.85,399.319)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">OH</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,861.33,381.319)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">BH4/</text>
                <text x="0px" y="18px" style="font-family:'Helvetica';font-size:14px;">α-TOH</text>
            </g>
        </g>`);

// --- "BH2/" + "α-T" + "OH·" ---
replaceBlock('BH2/α-TOH·',
`        <g transform="matrix(1,0,0,1,948.406,453.113)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:13px;">BH2/</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,948.406,471.113)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:13px;">α-T</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,968.388,471.113)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:13px;">OH·</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,948.406,453.113)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:13px;">BH2/</text>
                <text x="0px" y="18px" style="font-family:'Helvetica';font-size:13px;">α-TOH·</text>
            </g>
        </g>`);

// --- "PUF" + "A" → "PUFA" ---
replaceBlock('PUFA',
`        <g transform="matrix(1,0,0,1,130,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PUF</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,157.234,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">A</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,130,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PUFA</text>
            </g>
        </g>`);

// --- "PE-PUF" + "A-OOH" → "PE-PUFA-OOH" (at x=301) ---
replaceBlock('PE-PUFA-OOH',
`        <g transform="matrix(1,0,0,1,301.769,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PE-PUF</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,352.341,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">A-OOH</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,301.769,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PE-PUFA-OOH</text>
            </g>
        </g>`);

// --- "ACSL4 inhibitor" + ", D-" + "PUF" + "A, MUF" + "A" ---
replaceBlock('ACSL4 inhibitor, D-PUFA, MUFA',
`        <g transform="matrix(1,0,0,1,132.279,714.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">ACSL4 inhibitor</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,208.108,714.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">, D-</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,132.279,730.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">PUF</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,153.677,730.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">A, MUF</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,190.351,730.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">A</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,132.279,714.749)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:11px;">ACSL4 inhibitor, D-</text>
                <text x="0px" y="16px" style="font-family:'Helvetica';font-size:11px;">PUFA, MUFA</text>
            </g>
        </g>`);

// --- "PE-PUF" + "A-OO·" → "PE-PUFA-OO·" (at x=714) ---
replaceBlock('PE-PUFA-OO·',
`        <g transform="matrix(1,0,0,1,714.879,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PE-PUF</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,765.452,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">A-OO·</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,714.879,657.315)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:14px;">PE-PUFA-OO·</text>
            </g>
        </g>`);

// --- "R" + "T" + "A (e.g. α-T" + "OH," + "Fer-1, Lip-1)" ---
replaceBlock('RTA (e.g. α-TOH, Fer-1, Lip-1)',
`        <g transform="matrix(1,0,0,1,920.603,648.95)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">R</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,929.058,648.95)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">T</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,929.058,648.95)">
            <g transform="matrix(1,0,0,1,6.445,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">A<tspan x="7.348px " y="0px "> </tspan>(e.g. α-T</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,991.976,648.95)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">OH,</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,920.603,664.95)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">Fer-1, Lip-1)</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,920.603,648.95)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">RTA (e.g. α-TOH,</text>
                <text x="0px" y="16px" style="font-family:'Helvetica';font-size:12px;">Fer-1, Lip-1)</text>
            </g>
        </g>`);

// --- "FINO2," + "nanoparticles" ---
replaceBlock('FINO2, nanoparticles',
`        <g transform="matrix(1,0,0,1,657.418,728.354)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">FINO2,</text>
            </g>
        </g>
        <g transform="matrix(1,0,0,1,657.418,744.354)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">nanoparticles</text>
            </g>
        </g>`,
`        <g transform="matrix(1,0,0,1,657.418,728.354)">
            <g transform="matrix(1,0,0,1,0,-32.9815)">
                <text x="0px" y="0px" style="font-family:'Helvetica';font-size:12px;">FINO2,</text>
                <text x="0px" y="16px" style="font-family:'Helvetica';font-size:12px;">nanoparticles</text>
            </g>
        </g>`);

console.log(`  Total merges: ${mergeCount}/10`);

// ============================================================
// Step 2: Add fill:white to arrowhead paths (closed paths without style)
// ============================================================
console.log('\nStep 2: Fixing arrowhead colors...');
let arrowCount = 0;
svg = svg.replace(/<path d="(M[^"]*Z)"\/>/g, (match, d) => {
  arrowCount++;
  return `<path d="${d}" style="fill:white;"/>`;
});
console.log(`  Fixed ${arrowCount} arrowhead paths`);

// ============================================================
// Step 3: Add fill:white to all text inline styles
// ============================================================
console.log('\nStep 3: Adding fill:white to text styles...');
let textCount = 0;
svg = svg.replace(/<text ([^>]*)style="(font-family:'Helvetica';font-size:\d+px;)">/g, (match, before, style) => {
  textCount++;
  return `<text ${before}style="${style}fill:white;">`;
});
console.log(`  Updated ${textCount} text elements`);

// ============================================================
// Write result
// ============================================================
if (svg === original) {
  console.log('\nNo changes made!');
} else {
  writeFileSync('public/diagrams/feline-iron.svg', svg, 'utf8');
  const removed = original.split('\n').length - svg.split('\n').length;
  console.log(`\nSVG updated! (${removed} lines removed from merges)`);
}
