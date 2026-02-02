"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/container";
import { useFullPage } from "../ui/full-page-scroll";

const navLinks = [
  { label: "Problem", sectionId: "problem" },
  { label: "Framework", sectionId: "framework" },
  { label: "Evidence", sectionId: "evidence" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { goToSlideById, currentIndex } = useFullPage();
  const scrolled = currentIndex > 0;

  const handleNav = (sectionId: string) => {
    goToSlideById(sectionId);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--duration-base)] ${scrolled ? "bg-navy-900/80 shadow-sm backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => goToSlideById("hero")}
            className="font-serif text-xl text-white transition-colors"
          >
            FELINE Framework
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleNav(link.sectionId)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
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
