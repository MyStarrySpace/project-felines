"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "./breadcrumbs";

const sectionLinks = [
  { label: "Drugs", href: "/explore/drugs" },
  { label: "Trials", href: "/explore/trials" },
  { label: "Biology", href: "/explore/biology" },
  { label: "Viral", href: "/explore/viral" },
  { label: "Diseases", href: "/explore/diseases" },
  { label: "Barriers", href: "/explore/barrier" },
  { label: "Clearance", href: "/explore/clearance" },
  { label: "Biosensor", href: "/explore/biosensor" },
];

export function ExploreHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/80 backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-serif text-lg text-white transition-colors hover:text-teal-400"
            >
              Project FELINE
            </Link>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <div className="hidden sm:block">
              <Breadcrumbs />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 md:flex">
              {sectionLinks.map((link) => {
                const active = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      active
                        ? "text-teal-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Presentation</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
