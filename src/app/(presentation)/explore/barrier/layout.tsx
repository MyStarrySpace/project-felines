"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { exploreNav } from "@/data/landing/explore-nav";

const barrierSection = exploreNav.find((item) => item.href === "/explore/barrier");
const barrierChildren = barrierSection?.children ?? [];
const sectionLinks = exploreNav.filter((item) => item.href !== "/explore/barrier");

export default function BarrierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative">
      {/* Left floating nav — barrier sub-items (desktop only) */}
      <nav
        className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30"
        aria-label="Barrier pattern sections"
      >
        <ul className="space-y-3" role="list">
          {barrierChildren.map((item) => {
            const active = pathname === item.href;
            const enabled = item.enabled !== false;

            return (
              <li key={item.href}>
                {enabled ? (
                  <Link
                    href={item.href}
                    className={`block text-sm transition-colors ${
                      active
                        ? "text-teal-400 font-medium"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="block text-sm text-gray-600 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Right floating nav — explore sections (desktop only) */}
      <nav
        className="hidden lg:block fixed right-12 top-1/2 -translate-y-1/2 z-30"
        aria-label="Explore sections"
      >
        <ul className="space-y-3 text-right" role="list">
          {sectionLinks.map((item) => {
            const active = pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-sm transition-colors ${
                    active
                      ? "text-teal-400 font-medium"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          {/* Current section highlighted */}
          <li>
            <span className="block text-sm font-medium text-teal-400">
              {barrierSection?.label}
            </span>
          </li>
        </ul>
      </nav>

      {/* Centered content */}
      <div className="mx-auto max-w-4xl">{children}</div>
    </div>
  );
}
