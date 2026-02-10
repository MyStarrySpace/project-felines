import { compressedTimescale } from "@/data/landing/placenta";

export function TimescaleCascade() {
  // Skip first row ("Timescale") — it becomes the stat headline
  const events = compressedTimescale.slice(1);

  return (
    <div
      className="relative max-w-3xl mx-auto"
      role="figure"
      aria-label="Timescale comparison: Alzheimer's disease (decades) vs Preeclampsia (weeks)"
    >
      {/* Center spine */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-teal-400/20 to-white/10" />

      <div className="space-y-6">
        {events.map((ev, i) => (
          <div key={i}>
            {/* Feature label */}
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500 text-center mb-2">
              {ev.feature}
            </p>

            {/* Brain | dot | Placenta */}
            <div className="grid grid-cols-[1fr_40px_1fr] items-center">
              <p className="text-sm text-gray-300 text-right pr-4">
                {ev.adBrain}
              </p>
              <div className="flex justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-teal-400/30 border border-teal-400/50" />
              </div>
              <p className="text-sm text-teal-300/80 pl-4">
                {ev.pePlacenta}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Terminal arrow */}
      <div className="flex justify-center mt-4">
        <svg width="12" height="18" viewBox="0 0 12 18" className="text-teal-400/40">
          <path d="M6 0 V14 M1 10 L6 16 L11 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
