"use client";

import { motion } from "framer-motion";

const bars = [
  { label: "400+", sublabel: "drugs failed", width: "85%", shade: "bg-teal-800" },
  { label: "$42.5B", sublabel: "spent", width: "70%", shade: "bg-teal-600" },
  { label: "5", sublabel: "BACE inhibitors worsened cognition", width: "45%", shade: "bg-teal-400" },
];

export function ProblemBars() {
  return (
    <div className="flex flex-col gap-6">
      {bars.map((bar, i) => (
        <div key={bar.label} className="relative overflow-hidden">
          <motion.div
            className={`${bar.shade} relative flex min-h-[80px] items-center px-6 py-4`}
            initial={{ x: i % 2 === 0 ? "-100vw" : "100vw", width: bar.width }}
            whileInView={{ x: 0, width: bar.width }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3 + i * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="relative z-10">
              <span className="text-3xl font-bold text-navy-900 sm:text-4xl">
                {bar.label}
              </span>
              <span className="ml-2 text-base font-medium text-navy-900/70">
                {bar.sublabel}
              </span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
