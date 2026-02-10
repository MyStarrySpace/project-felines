"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/container";
import { useFullPage } from "../ui/full-page-scroll";

const navLinks = [
  { label: "Problem", sectionId: "problem" },
  { label: "Findings", sectionId: "findings" },
  { label: "Evidence", sectionId: "evidence" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { goToSlideById, currentIndex, sectionIds } = useFullPage();
  const scrolled = currentIndex > 0;

  const handleNav = (sectionId: string) => {
    goToSlideById(sectionId);
    setMobileOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-base)] ${scrolled ? "bg-navy-900/80 shadow-sm backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
    >
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => goToSlideById("hero")}
            className="font-serif text-xl text-white transition-colors"
            aria-label="Project FELINE, navigate to start"
          >
            Project FELINE
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Presentation sections">
            {navLinks.map((link) => {
              const isCurrent = sectionIds[currentIndex] === link.sectionId;
              return (
                <button
                  key={link.sectionId}
                  onClick={() => handleNav(link.sectionId)}
                  className={`text-sm font-medium transition-colors ${isCurrent ? "text-teal-400" : "text-gray-300 hover:text-white"}`}
                  aria-current={isCurrent ? "true" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="/kinetics"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Kinetics
            </a>
            <a
              href="/showcase"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              Showcase
            </a>
          </nav>

          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="header-mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="header-mobile-nav"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 bg-navy-800 md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => handleNav(link.sectionId)}
                    className="px-3 py-2 text-left text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/kinetics"
                  className="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Kinetics
                </a>
                <a
                  href="/showcase"
                  className="px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  Showcase
                </a>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
