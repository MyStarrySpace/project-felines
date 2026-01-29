"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/container";

const navLinks = [
  { label: "Framework", href: "#framework" },
  { label: "Evidence", href: "#evidence" },
  { label: "Kinetics", href: "#kinetics" },
  { label: "Showcase", href: "/showcase" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-[var(--duration-base)] ${scrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"}`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="font-serif text-xl text-navy-900">
            PLIG Framework
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-navy-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-navy-900" />
            ) : (
              <Menu className="h-5 w-5 text-navy-900" />
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
            className="overflow-hidden border-t border-gray-200 bg-white md:hidden"
          >
            <Container>
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-gray-100 hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
