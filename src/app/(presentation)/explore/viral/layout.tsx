"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";

const topics = [
  { label: "Overview", href: "/explore/viral" },
  { label: "EBV & MS", href: "/explore/viral/ebv-ms" },
  { label: "COVID", href: "/explore/viral/covid" },
  { label: "Latent Proteins", href: "/explore/viral/latent-proteins" },
  { label: "Iron & Reactivation", href: "/explore/viral/iron-reactivation" },
];

export default function ViralLayout({
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
            {topics.map((topic) => {
              const active =
                topic.href === "/explore/viral"
                  ? pathname === "/explore/viral"
                  : pathname === topic.href;
              return (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-400 border-b-2 border-teal-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {topic.label}
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
