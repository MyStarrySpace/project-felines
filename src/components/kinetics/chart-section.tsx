"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Heading, Body } from "@/components/ui/typography";
import { Alert } from "@/components/ui/alert";
import { InsightCard } from "@/components/ui/cards/insight-card";
import { fadeInUp } from "@/lib/animations";

interface ChartSectionProps {
  title: string;
  description: string;
  above?: {
    title?: string;
    text: string;
    variant?: "info" | "warning" | "neutral";
  };
  below?: {
    title: string;
    text: string;
    badge?: string;
  };
  children: ReactNode;
}

/**
 * Consistent wrapper for kinetics chart sections.
 * Enforces: heading + description, optional above-alert, chart, optional below-insight layout.
 */
export function ChartSection({
  title,
  description,
  above,
  below,
  children,
}: ChartSectionProps) {
  return (
    <motion.section variants={fadeInUp}>
      <Heading level={2} className="mb-2 text-white">
        {title}
      </Heading>
      <Body className="mb-4 max-w-[var(--width-reading)] text-gray-300">{description}</Body>

      {above && (
        <Alert
          variant={above.variant ?? "info"}
          title={above.title}
          className="mb-4"
        >
          {above.text}
        </Alert>
      )}

      {children}

      {below && (
        <InsightCard
          title={below.title}
          badge={below.badge}
          className="mt-4"
        >
          {below.text}
        </InsightCard>
      )}
    </motion.section>
  );
}
