"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { exploreNav } from "@/data/landing/explore-nav";
import { useExploreSections } from "@/components/providers/explore-sections-context";

export function ExploreSectionIndicator() {
  const pathname = usePathname();
  const { sections } = useExploreSections();
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // IntersectionObserver for page sections
  useEffect(() => {
    if (sections.length === 0) {
      setActiveSection(null);
      return;
    }

    setActiveSection(sections[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  // Close on outside click
  useEffect(() => {
    if (!expanded) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [expanded]);

  // Close on route change
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  // Body scroll lock when expanded
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  // Current route label for the pill
  const currentLabel = (() => {
    if (sections.length > 0 && activeSection) {
      return sections.find((s) => s.id === activeSection)?.label ?? sections[0].label;
    }
    // Fall back to matching the current route in exploreNav
    for (const item of exploreNav) {
      if (pathname === item.href) return item.label;
      if (item.children) {
        for (const child of item.children) {
          if (pathname === child.href) return child.label;
        }
      }
    }
    return "Explore";
  })();

  const activeSectionIdx = sections.findIndex((s) => s.id === activeSection);

  return (
    <div className="md:hidden" ref={ref}>
      <div className="fixed left-1/2 top-5 z-40 -translate-x-1/2">
        <nav role="navigation" aria-label="Explore section navigator">
          <AnimatePresence mode="wait" initial={false}>
            {expanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="overflow-hidden bg-navy-900/95 border border-white/10 backdrop-blur-md min-w-[220px]"
              >
                <div className="max-h-[70vh] overflow-y-auto py-1">
                  {/* Group 1: Page sections */}
                  {sections.length > 0 && (
                    <>
                      <p className="px-4 pt-2 pb-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                        On this page
                      </p>
                      <ul role="list">
                        {sections.map((s) => {
                          const isCurrent = s.id === activeSection;
                          return (
                            <li key={s.id}>
                              <button
                                onClick={() => {
                                  document
                                    .getElementById(s.id)
                                    ?.scrollIntoView({ behavior: "smooth" });
                                  setExpanded(false);
                                }}
                                className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-colors ${
                                  isCurrent
                                    ? "text-teal-400 font-medium"
                                    : "text-gray-400 hover:text-white"
                                }`}
                              >
                                <span>{s.label}</span>
                                {isCurrent && (
                                  <span className="ml-3 h-1.5 w-1.5 rounded-full bg-teal-400" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mx-4 my-1.5 border-t border-white/5" />
                    </>
                  )}

                  {/* Group 2: Explore nav */}
                  <p className="px-4 pt-1 pb-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    Explore
                  </p>

                  <Link
                    href="/"
                    onClick={() => setExpanded(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    Back to FELINES
                  </Link>

                  <ul role="list">
                    {exploreNav.map((item) => {
                      const isActiveSection = pathname.startsWith(item.href);
                      const hasChildren = item.children && item.children.length > 0;
                      const showChildren = hasChildren && isActiveSection;

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setExpanded(false)}
                            className={`block px-4 py-2 text-sm font-medium transition-colors ${
                              isActiveSection
                                ? "text-teal-400"
                                : "text-gray-400 hover:text-white"
                            }`}
                            aria-current={isActiveSection ? "true" : undefined}
                          >
                            {item.label}
                          </Link>

                          {showChildren && (
                            <ul className="ml-4 border-l border-white/5 pl-3" role="list">
                              {item.children!.map((child) => {
                                const childActive = pathname === child.href;
                                const enabled = child.enabled !== false;

                                return (
                                  <li key={child.href}>
                                    {enabled ? (
                                      <Link
                                        href={child.href}
                                        onClick={() => setExpanded(false)}
                                        className={`block px-3 py-1.5 text-sm transition-colors ${
                                          childActive
                                            ? "text-teal-400 font-medium"
                                            : "text-gray-500 hover:text-gray-300"
                                        }`}
                                        aria-current={childActive ? "page" : undefined}
                                      >
                                        {child.label}
                                      </Link>
                                    ) : (
                                      <span className="block px-3 py-1.5 text-sm text-gray-600 cursor-not-allowed">
                                        {child.label}
                                      </span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.button
                key="collapsed"
                type="button"
                onClick={() => setExpanded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-3 bg-navy-900/80 px-4 py-2 backdrop-blur-md border border-white/10"
                aria-expanded={false}
                aria-haspopup="true"
              >
                <span className="text-xs font-medium text-white">
                  {currentLabel}
                </span>
                {sections.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    {sections.map((s, i) => (
                      <span key={s.id}>
                        {i === activeSectionIdx ? (
                          <span className="block h-1.5 w-3 rounded-sm bg-teal-400" />
                        ) : (
                          <span className="block h-1.5 w-1.5 rounded-full bg-white/30" />
                        )}
                      </span>
                    ))}
                  </div>
                )}
                <ChevronDown className="h-3 w-3 text-gray-500" />
              </motion.button>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
