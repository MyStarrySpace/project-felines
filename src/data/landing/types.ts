export interface HeroData {
  kicker: string;
  statValue: string;
  statLabel: string;
  headline: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ProblemStat {
  value: string;
  label: string;
  description: string;
}

export interface PillarData {
  letter: string;
  title: string;
  description: string;
}

export interface PathwayStep {
  step: number;
  title: string;
  description: string;
  timing?: string;
  tags?: string[];
}

export interface DiseaseCard {
  name: string;
  stat: string;
  statLabel: string;
  explanation: string;
}

export interface FailedTrial {
  trial: string;
  target: string;
  result: string;
  felineExplanation: string;
}
