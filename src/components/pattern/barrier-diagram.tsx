import { cellHomology } from "@/data/landing/placenta";

export function BarrierDiagram() {
  const layers = cellHomology.map((row, i) => ({
    nvu: row.nvuComponent,
    placenta: row.placentalHomolog,
    y: 60 + i * 52,
  }));

  const layerH = 38;
  const leftX = 60;
  const rightX = 460;
  const rectW = 270;

  return (
    <svg
      viewBox="0 0 800 340"
      className="w-full max-w-4xl mx-auto"
      role="img"
      aria-label="Barrier architecture comparison between brain NVU and placental villous unit"
    >
      <title>Barrier architecture comparison: Brain NVU vs Placental villous unit</title>
      {/* Headers */}
      <text
        x={leftX + rectW / 2}
        y={30}
        textAnchor="middle"
        className="fill-white text-[14px] font-semibold"
      >
        Brain NVU
      </text>
      <text
        x={rightX + rectW / 2}
        y={30}
        textAnchor="middle"
        className="fill-teal-400 text-[14px] font-semibold"
      >
        Placental barrier
      </text>

      {layers.map((l, i) => (
        <g key={i}>
          {/* Left rect */}
          <rect
            x={leftX}
            y={l.y}
            width={rectW}
            height={layerH}
            rx={6}
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          <text
            x={leftX + rectW / 2}
            y={l.y + layerH / 2 + 5}
            textAnchor="middle"
            className="fill-white text-[12px]"
          >
            {l.nvu}
          </text>

          {/* Right rect */}
          <rect
            x={rightX}
            y={l.y}
            width={rectW}
            height={layerH}
            rx={6}
            fill="rgba(251,191,36,0.05)"
            stroke="rgba(251,191,36,0.25)"
            strokeWidth={1}
          />
          <text
            x={rightX + rectW / 2}
            y={l.y + layerH / 2 + 5}
            textAnchor="middle"
            className="fill-teal-400 text-[12px]"
          >
            {l.placenta}
          </text>

          {/* Dashed connecting line */}
          <line
            x1={leftX + rectW}
            y1={l.y + layerH / 2}
            x2={rightX}
            y2={l.y + layerH / 2}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
        </g>
      ))}
    </svg>
  );
}
