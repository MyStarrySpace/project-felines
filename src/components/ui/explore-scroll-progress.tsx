"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ExploreScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed right-3 top-0 z-40 hidden h-screen w-3 md:flex items-center sm:right-4"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="relative h-[60vh] w-[3px] rounded-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 w-full origin-top rounded-full bg-teal-400"
          style={{ boxShadow: "0 0 8px rgba(251,191,36,0.5)" }}
          initial={false}
          animate={{ scaleY: progress }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          layout={false}
        >
          <div className="h-[60vh] w-full rounded-full bg-teal-400" />
        </motion.div>
      </div>
    </div>
  );
}
