"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

const diseaseLinks = [
  { label: "Overview", href: "/explore/diseases" },
  { label: "Alzheimer's", href: "/explore/diseases/alzheimers" },
  { label: "Parkinson's", href: "/explore/diseases/parkinsons" },
  { label: "ALS", href: "/explore/diseases/als" },
  { label: "MS", href: "/explore/diseases/ms" },
  { label: "Long COVID", href: "/explore/diseases/long-covid" },
  { label: "Prion", href: "/explore/diseases/prion" },
];

export default function DiseasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className="border-b border-white/5">
        <Container>
          <nav className="flex gap-1 overflow-x-auto py-2 -mb-px">
            {diseaseLinks.map((link) => {
              const active =
                link.href === "/explore/diseases"
                  ? pathname === "/explore/diseases"
                  : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-400 border-b-2 border-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>
      {children}
    </div>
  );
}
