"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const LABEL_MAP: Record<string, string> = {
  explore: "Explore",
  trials: "Trials",
  biology: "Biology",
  viral: "Viral",
  diseases: "Diseases",
  fe: "Iron",
  lysosome: "Lysosome",
  insulation: "Insulation",
  neurovascular: "Neurovascular",
  export: "Export",
  "ebv-ms": "EBV & MS",
  covid: "COVID",
  "latent-proteins": "Latent Proteins",
  alzheimers: "Alzheimer's",
  parkinsons: "Parkinson's",
  als: "ALS",
  ms: "MS",
  "long-covid": "Long COVID",
  prion: "Prion",
  placenta: "Placenta",
  pattern: "Barrier Pattern",
  barrier: "Barrier Pattern",
  retinal: "Blood-Retinal",
  nerve: "Blood-Nerve",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((segment, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = LABEL_MAP[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    const isLast = i === segments.length - 1;

    return { href, label, isLast };
  });

  return (
    <nav className="flex items-center gap-1 text-sm text-gray-400">
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-3 w-3 text-gray-500" />}
          {crumb.isLast ? (
            <span className="text-gray-300">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-white transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
