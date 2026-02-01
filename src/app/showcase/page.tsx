"use client";

import { motion } from "framer-motion";
import { Lightbulb, FlaskConical, Brain, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Display, Heading, Body, Caption, Label } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stat } from "@/components/ui/stat";
import { Alert } from "@/components/ui/alert";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card } from "@/components/ui/cards/card";
import { InsightCard } from "@/components/ui/cards/insight-card";
import { DataCard } from "@/components/ui/cards/data-card";
import { PathwayCard } from "@/components/ui/cards/pathway-card";
import { ComponentSection } from "@/components/showcase/component-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  showcasePathwaySteps,
  showcaseTableData,
  showcaseStats,
} from "@/data/showcase";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ShowcasePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Container width="full" section>
          <Display>Component Showcase</Display>
          <Body size="lg" className="mt-4 max-w-[var(--width-reading)]">
            Visual reference for the FELINE Framework design system. All
            components, tokens, and patterns in one place.
          </Body>
        </Container>

        <Container width="full">
          {/* Colors */}
          <ComponentSection
            title="Colors"
            description="Navy hierarchy for text, teal for accents, neutral grays for structure."
          >
            <div className="space-y-6">
              <div>
                <Label uppercase className="mb-3 block">
                  Navy
                </Label>
                <div className="flex gap-3">
                  <ColorSwatch color="bg-navy-900" label="#0D132D" />
                  <ColorSwatch color="bg-navy-800" label="#141F4D" />
                  <ColorSwatch color="bg-navy-700" label="#1B2951" />
                  <ColorSwatch color="bg-charcoal" label="#293340" />
                </div>
              </div>
              <div>
                <Label uppercase className="mb-3 block">
                  Teal Accent
                </Label>
                <div className="flex gap-3">
                  <ColorSwatch color="bg-teal-800" label="#0E7490" />
                  <ColorSwatch color="bg-teal-600" label="#0891B2" />
                  <ColorSwatch color="bg-teal-400" label="#06B6D4" />
                  <ColorSwatch
                    color="bg-teal-50"
                    label="#CFFAFE"
                    dark={false}
                  />
                </div>
              </div>
              <div>
                <Label uppercase className="mb-3 block">
                  Grays
                </Label>
                <div className="flex gap-3">
                  <ColorSwatch color="bg-gray-700" label="#374151" />
                  <ColorSwatch color="bg-gray-500" label="#6B7280" />
                  <ColorSwatch
                    color="bg-gray-300"
                    label="#D1D5DB"
                    dark={false}
                  />
                  <ColorSwatch
                    color="bg-gray-100"
                    label="#F3F4F6"
                    dark={false}
                  />
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* Typography */}
          <ComponentSection
            title="Typography"
            description="Instrument Serif for headings, Geist Sans for body text."
          >
            <div className="space-y-8">
              <div>
                <Caption>Display — 56px Instrument Serif</Caption>
                <Display>The FELINE Framework</Display>
              </div>
              <div>
                <Caption>Heading 1 — 42px</Caption>
                <Heading level={1}>A Causal Pathway</Heading>
              </div>
              <div>
                <Caption>Heading 2 — 32px</Caption>
                <Heading level={2}>Iron Dysregulation</Heading>
              </div>
              <div>
                <Caption>Heading 3 — 24px</Caption>
                <Heading level={3}>Pericyte Dysfunction</Heading>
              </div>
              <div>
                <Caption>Heading 4 — 20px</Caption>
                <Heading level={4}>Evidence Summary</Heading>
              </div>
              <div className="max-w-[var(--width-reading)] space-y-4">
                <Caption>Body Large</Caption>
                <Body size="lg">
                  The framework connects pericyte and lysosomal dysfunction to
                  neurodegeneration through a mechanistic chain involving iron
                  accumulation and lipid peroxidation.
                </Body>
                <Caption>Body Base</Caption>
                <Body>
                  Astrocyte endfoot depolarization impairs neurovascular
                  coupling, creating conditions for iron dysregulation in
                  vulnerable brain regions.
                </Body>
                <Caption>Body Small</Caption>
                <Body size="sm">
                  Kinetic calculations estimate hydroxyl radical generation
                  rates under pathological iron concentrations.
                </Body>
              </div>
              <div>
                <Caption>Caption — 12px</Caption>
                <div className="mt-1">
                  <Caption>Source: FELINE Framework v1.0</Caption>
                </div>
              </div>
              <div>
                <Caption>Label</Caption>
                <div className="mt-1 flex gap-4">
                  <Label>Default Label</Label>
                  <Label uppercase>Uppercase Label</Label>
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* Buttons */}
          <ComponentSection
            title="Buttons"
            description="Three variants across three sizes."
          >
            <div className="space-y-6">
              <div>
                <Label uppercase className="mb-3 block">
                  Variants
                </Label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              <div>
                <Label uppercase className="mb-3 block">
                  Sizes
                </Label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* Badges */}
          <ComponentSection
            title="Badges"
            description="Inline labels for categorization and status."
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default" size="md">
                  Default MD
                </Badge>
                <Badge variant="accent" size="md">
                  Accent MD
                </Badge>
                <Badge variant="neutral" size="md">
                  Neutral MD
                </Badge>
              </div>
            </div>
          </ComponentSection>

          {/* Stats */}
          <ComponentSection
            title="Stats"
            description="Large numbers with labels for data-forward presentation."
          >
            <div className="grid gap-8 sm:grid-cols-3">
              {showcaseStats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </ComponentSection>

          {/* Alerts */}
          <ComponentSection
            title="Alerts"
            description="Left-bordered callouts for different message types."
          >
            <div className="max-w-[var(--width-reading)] space-y-4">
              <Alert variant="info" title="Mechanistic insight">
                Iron accumulates preferentially in regions with high pericyte
                density, suggesting a vascular gating mechanism.
              </Alert>
              <Alert variant="warning" title="Data limitation">
                Longitudinal biomarker data for long COVID patients remains
                limited to 24-month follow-up periods.
              </Alert>
              <Alert variant="success" title="Prediction confirmed">
                Elevated serum ferritin correlates with white matter lesion
                volume in MS patients (r=0.64, p&lt;0.001).
              </Alert>
              <Alert variant="neutral" title="Note">
                Kinetic model v1 uses simplified compartmental assumptions.
              </Alert>
            </div>
          </ComponentSection>

          {/* Cards */}
          <ComponentSection
            title="Cards"
            description="Content containers with different layouts for different data types."
          >
            <div className="space-y-8">
              <div>
                <Label uppercase className="mb-4 block">
                  Base Card
                </Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <Heading level={4}>Base Card</Heading>
                    <Body size="sm" className="mt-2">
                      White background, subtle shadow, 8px radius. No hover
                      effect.
                    </Body>
                  </Card>
                  <Card hover>
                    <Heading level={4}>Hover Card</Heading>
                    <Body size="sm" className="mt-2">
                      Same as base but lifts on hover with shadow increase.
                    </Body>
                  </Card>
                </div>
              </div>

              <div>
                <Label uppercase className="mb-4 block">
                  Insight Cards
                </Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InsightCard
                    icon={<Lightbulb className="h-5 w-5" />}
                    badge="Hypothesis"
                    title="Iron Gating Mechanism"
                  >
                    Pericyte loss may remove a critical checkpoint that
                    normally prevents excess iron from crossing the BBB
                    into parenchyma.
                  </InsightCard>
                  <InsightCard
                    icon={<FlaskConical className="h-5 w-5" />}
                    badge="Prediction"
                    title="Myelin Vulnerability"
                  >
                    PUFA-rich myelin sheaths are selectively vulnerable to
                    Fenton-generated hydroxyl radicals due to their high
                    polyunsaturated fatty acid content.
                  </InsightCard>
                </div>
              </div>

              <div>
                <Label uppercase className="mb-4 block">
                  Data Cards
                </Label>
                <div className="grid gap-4 sm:grid-cols-3">
                  <DataCard
                    value="99"
                    unit="%"
                    label="Drug failure rate"
                    description="Alzheimer's trials since 2003"
                    trend="up"
                  />
                  <DataCard
                    value="$42.5"
                    unit="B"
                    label="Invested in patented drugs"
                    trend="up"
                  />
                  <DataCard
                    value="85:1"
                    label="Patent vs. generic ratio"
                    description="Investment disparity"
                    trend="neutral"
                  />
                </div>
              </div>

              <div>
                <Label uppercase className="mb-4 block">
                  Pathway Cards
                </Label>
                <div className="grid gap-4 sm:grid-cols-2">
                  {showcasePathwaySteps.map((step) => (
                    <PathwayCard key={step.step} {...step} />
                  ))}
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* Table */}
          <ComponentSection
            title="Table"
            description="Minimal borders, row hover, compact data display."
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Biomarker</TableHead>
                  <TableHead>Brain Region</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Condition</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {showcaseTableData.map((row) => (
                  <TableRow key={row.marker}>
                    <TableCell className="font-medium">{row.marker}</TableCell>
                    <TableCell>{row.region}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.change === "Elevated" ? "accent" : "neutral"
                        }
                      >
                        {row.change}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.condition}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ComponentSection>

          {/* Animations */}
          <ComponentSection
            title="Animations"
            description="Framer Motion fade-in and stagger demos."
          >
            <div className="space-y-8">
              <div>
                <Label uppercase className="mb-4 block">
                  Fade In Up
                </Label>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                >
                  <Card>
                    <Body>
                      This card fades in and slides up when it enters the
                      viewport.
                    </Body>
                  </Card>
                </motion.div>
              </div>

              <div>
                <Label uppercase className="mb-4 block">
                  Staggered Children
                </Label>
                <motion.div
                  className="grid gap-4 sm:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {["First", "Second", "Third"].map((label) => (
                    <motion.div key={label} variants={fadeInUp}>
                      <Card>
                        <Body size="sm">{label} item staggers in.</Body>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </ComponentSection>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function ColorSwatch({
  color,
  label,
  dark = true,
}: {
  color: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`h-16 w-16 rounded-lg ${color} ${!dark ? "border border-gray-200" : ""}`}
      />
      <Caption>{label}</Caption>
    </div>
  );
}
