"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  dimColor?: string;
  brightColor?: string;
}

export function ScrollRevealText({
  text,
  className,
  dimColor = "rgba(107,114,128,1)",
  brightColor = "rgba(209,213,219,1)",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let interval: ReturnType<typeof setInterval>;

    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
      observer.disconnect();
      clearInterval(interval);
    };

    const isVisible = () =>
      el.checkVisibility?.({ opacityProperty: true }) ?? true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isVisible()) reveal();
      },
      { threshold: 0.1 },
    );
    observer.observe(el);

    // Poll for visibility changes that IO can't detect (e.g. parent opacity
    // animating from 0 → 1 in a stacked full-page scroll layout).
    interval = setInterval(() => {
      if (isVisible()) reveal();
    }, 150);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block transition-colors"
          style={{
            color: revealed ? brightColor : dimColor,
            transitionDuration: "350ms",
            transitionDelay: revealed ? `${400 + i * 25}ms` : "0ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
