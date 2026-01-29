"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Display, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Container width="full" section>
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Display className="max-w-3xl">
                Pericyte-Lysosome-Iron-Glia Framework
              </Display>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Body
                size="lg"
                className="mt-6 max-w-[var(--width-reading)] text-center"
              >
                A causal framework connecting pericyte and lysosomal dysfunction
                to neurodegeneration through iron dysregulation and lipid
                peroxidation. Motivated by long COVID neurodegenerative
                biomarkers.
              </Body>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex gap-4"
            >
              <Button variant="primary" size="lg">
                Read the Framework
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg">
                View Evidence
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
