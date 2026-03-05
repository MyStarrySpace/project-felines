"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

const layers = [
  { label: "Overview", href: "/explore/biology" },
  { label: "Iron (Fe)", href: "/explore/biology/fe" },
  { label: "Lysosome", href: "/explore/biology/lysosome" },
  { label: "Insulation", href: "/explore/biology/insulation" },
  { label: "Neurovascular", href: "/explore/biology/neurovascular" },
  { label: "Export", href: "/explore/biology/export" },
  { label: "Ferroptosis as Defense", href: "/explore/biology/ferroptosis-defense" },
];

export default function BiologyLayout({
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
            {layers.map((layer) => {
              const active =
                layer.href === "/explore/biology"
                  ? pathname === "/explore/biology"
                  : pathname === layer.href;
              return (
                <Link
                  key={layer.href}
                  href={layer.href}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-400 border-b-2 border-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {layer.label}
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
