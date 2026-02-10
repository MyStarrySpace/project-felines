"use client";

import { useState, useId, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ExpandableProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  variant?: "light" | "dark";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Expandable({
  title,
  children,
  defaultOpen = false,
  className = "",
  variant = "light",
  open: controlledOpen,
  onOpenChange,
}: ExpandableProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const regionId = useId();

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const toggle = () => {
    const next = !open;
    if (isControlled) {
      onOpenChange?.(next);
    } else {
      setInternalOpen(next);
    }
  };

  const dark = variant === "dark";

  return (
    <div
      className={`rounded-lg border ${dark ? "border-white/10" : "border-gray-200"} ${className}`}
    >
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium transition-colors ${
          dark
            ? "text-gray-400 hover:text-white"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-expanded={open}
        aria-controls={regionId}
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={regionId}
            role="region"
            aria-label={title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className={`border-t px-4 py-3 text-sm leading-relaxed ${
                dark
                  ? "border-white/10 text-gray-400"
                  : "border-gray-200 text-text-secondary"
              }`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
