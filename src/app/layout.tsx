import type { Metadata } from "next";
import { Instrument_Serif, Arimo } from "next/font/google";
import { ClientProviders } from "@/components/providers/client-providers";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Project FELINE",
  description:
    "Investigating ferroptosis in neurodegeneration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
        <div id="citation-portal" className="fixed z-[100]" />
      </body>
    </html>
  );
}
