export interface NavItem {
  label: string;
  href: string;
  enabled?: boolean;
  children?: NavItem[];
}

export const exploreNav: NavItem[] = [
  { label: "Trials", href: "/explore/trials" },
  { label: "Biology", href: "/explore/biology" },
  { label: "Viral", href: "/explore/viral" },
  { label: "Diseases", href: "/explore/diseases" },
  {
    label: "Barrier Pattern",
    href: "/explore/barrier",
    children: [
      { label: "Overview", href: "/explore/barrier", enabled: true },
      { label: "Placenta", href: "/explore/barrier/placenta", enabled: true },
      { label: "Blood-Retinal Barrier", href: "/explore/barrier/retinal", enabled: true },
      { label: "Blood-Nerve Barrier", href: "/explore/barrier/nerve", enabled: true },
    ],
  },
];
