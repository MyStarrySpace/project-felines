import type { CascadeMode } from "@/lib/kinetics/types";

/** Interpretive text displayed above and below each chart, keyed by chart + mode */

interface ChartContent {
  /** Alert or explanation shown above the chart */
  above: {
    title?: string;
    text: string;
    variant?: "info" | "warning" | "neutral";
  };
  /** InsightCard shown below the chart */
  below: {
    title: string;
    text: string;
    badge?: string;
  };
}

type ChartContentMap = Record<CascadeMode, ChartContent>;

export const ironContent: ChartContentMap = {
  post_injury: {
    above: {
      title: "Reading this chart",
      text: 'Y-axis shows iron levels relative to normal (1.0 = healthy baseline). "Total brain iron" is what an MRI (QSM) scan would detect. Free labile iron is the dangerous form that drives ferroptosis, but it gets partially hidden by ferritin storage.',
      variant: "info",
    },
    below: {
      title: "They tried chelating iron out of the brain. It made patients worse.",
      text: "FAIRPARK-II (NEJM 2022) gave Parkinson's patients deferiprone, an iron chelator. Brain iron dropped on MRI. But patients declined faster. Why? The chelator grabbed the small pool of functional iron that cells actually need. The trapped iron in ferritin and lysosomes stayed put. Iron maldistribution predicts this: the problem isn't too much iron, it's iron in the wrong places.",
      badge: "FAIRPARK-II trial",
    },
  },
  spontaneous: {
    above: {
      title: "Reading this chart",
      text: 'In spontaneous AD, iron levels stay near normal for decades. The Y-axis shows iron relative to baseline (1.0 = healthy). Iron rises only late, when dying neurons release their stores. The real action is in the defense layers below.',
      variant: "info",
    },
    below: {
      title: "Brain iron is elevated. But cells are iron-starved. Both are true.",
      text: "AD brains show high total iron on MRI. Yet individual cells upregulate transferrin receptors and iron-response proteins, signals of iron deficiency. This paradox dissolves once you see it as maldistribution: iron is trapped in ferritin and lysosomes where cells can't use it. They're starving while surrounded by iron. This is why chelation fails and why the field's 'iron overload' framing misses the point.",
      badge: "The iron paradox",
    },
  },
};

export const amyloidContent: ChartContentMap = {
  post_injury: {
    above: {
      title: "What is SUVR?",
      text: "SUVR (Standardized Uptake Value Ratio) is a PET scan measurement of protein buildup. 0.8-1.0 is normal. Above 1.2, amyloid starts clumping into self-growing plaques. Above 2.0 is severe Alzheimer's-level accumulation. This chart shows why clearance failure, not overproduction, drives the buildup.",
      variant: "info",
    },
    below: {
      title: "Gantenerumab removed plaques. Reduced tau. Zero clinical benefit.",
      text: "This drug did everything the amyloid hypothesis asked for: significant plaque reduction, lower CSF tau, lower phospho-tau. Patients showed no improvement. Iron maldistribution explains why: removing plaques doesn't fix the upstream clearance failure that produced them. New amyloid keeps accumulating because the defense layers are still damaged.",
      badge: "Gantenerumab trial",
    },
  },
  spontaneous: {
    above: {
      title: "What is SUVR?",
      text: "SUVR (Standardized Uptake Value Ratio) is a PET scan measurement of protein buildup. 0.8-1.0 is normal. Above 1.2, amyloid starts clumping into self-growing plaques. APOE4 carriers reach this threshold faster because their defense layers clear amyloid more slowly.",
      variant: "info",
    },
    below: {
      title: "APOE4 weakens the same defenses iron attacks",
      text: "APOE4 reduces clearance by ~35% and slows defense layer recovery. Over decades, this compounds into earlier threshold crossing. The same layers that iron damages acutely in post-injury mode, APOE4 erodes gradually. Different triggers, same five vulnerabilities.",
      badge: "Same defenses, different attackers",
    },
  },
};

export const tauContent: ChartContentMap = {
  post_injury: {
    above: {
      title: "The last domino",
      text: "Tau is a structural protein inside neurons. It becomes pathological only after amyloid crosses 1.2 SUVR, triggering tau to misfold and spread. Tau above ~1.4 SUVR correlates with cognitive symptoms. This is step 4 of the cascade: iron → defense failure → amyloid → tau.",
      variant: "info",
    },
    below: {
      title: "Most drug trials target this step. The damage started years earlier.",
      text: "Tau PET tracks cognitive decline more closely than amyloid PET. But tau is the result of a chain that started with iron maldistribution. By the time tau is elevated, defense layers are already degraded, clearance is already impaired, and amyloid plaques are already self-sustaining.",
      badge: "Too late?",
    },
  },
  spontaneous: {
    above: {
      title: "The last domino",
      text: "Tau rises only after decades of gradual clearance decline push amyloid past 1.2 SUVR. Tau above ~1.4 correlates with symptom onset. The long delay between defense layer erosion and tau symptoms is why this disease hides for so long.",
      variant: "info",
    },
    below: {
      title: "The 20-year silent window",
      text: "Defense layers start declining in midlife. Amyloid crosses the threshold 10-20 years later. Tau rises after that. Symptoms appear last. Each step in the cascade buys time for intervention, but only if you know the cascade exists. Most trials begin after symptoms, at step 4.",
      badge: "Hidden timeline",
    },
  },
};

export const layersContent: ChartContentMap = {
  post_injury: {
    above: {
      title: "The six iron vulnerabilities",
      text: "Each line tracks one of the FELINES defense layers. 1.0 = fully intact, 0 = completely failed. GPX4 is the enzyme that directly blocks ferroptosis. The other five are structural or functional barriers. When multiple lines drop below 0.3, the brain loses its ability to contain iron-driven damage.",
      variant: "info",
    },
    below: {
      title: "Oligodendrocytes: highest iron in the brain, lowest antioxidant defense",
      text: "Oligodendrocytes need more iron than any other brain cell to produce myelin. They also have the lowest GPX4 (anti-ferroptosis enzyme) baseline and the highest PUFA content in their membranes, the exact lipids ferroptosis attacks. They are the first cells to die when iron defenses fail. This is why white matter damage precedes gray matter damage across neurodegenerative diseases.",
      badge: "The canary in the coal mine",
    },
  },
  spontaneous: {
    above: {
      title: "The five iron vulnerabilities",
      text: "Each line tracks one of the FELINES defense layers. 1.0 = intact, 0 = failed. In spontaneous AD, all layers decline gradually with age. APOE4 slows recovery, accelerating the decline. The question is which layer fails first, because that determines how the cascade unfolds.",
      variant: "info",
    },
    below: {
      title: "Single layer failure: compensated. Multiple layer failure: catastrophic.",
      text: "This is why some people with amyloid plaques never develop dementia: their other layers compensate. It's also why single-target drugs keep failing. Fix one layer, the others are still broken. The iron maldistribution model predicts that combination therapies targeting multiple FELINES layers will outperform any single-target approach.",
      badge: "Swiss cheese model",
    },
  },
};

export const windowsContent: ChartContentMap = {
  post_injury: {
    above: {
      title: "Reading the intervention windows",
      text: "Colored bands show when each intervention has the most leverage in the iron cascade. Darker colors = stronger evidence. The black line shows amyloid trajectory, purple shows tau. Earlier intervention works better because it prevents downstream steps from starting.",
      variant: "info",
    },
    below: {
      title: "The first weeks target iron. Everything after targets consequences.",
      text: "Prevention and acute intervention (first 7 days) can block the iron surge that initiates the cascade. The subacute window (weeks 2-12) can still reduce trapped iron. After that, interventions shift from preventing iron damage to managing its downstream effects: amyloid clearance, tau spread, symptom management.",
      badge: "Iron-first timing",
    },
  },
  spontaneous: {
    above: {
      title: "Reading the intervention windows",
      text: "Colored bands show intervention timing for spontaneous AD. Darker colors = stronger evidence. Lifestyle prevention maintains iron defenses during the decades-long silent phase. By the time symptoms appear, the most effective windows have already closed.",
      variant: "info",
    },
    below: {
      title: "Maintaining defenses beats repairing damage",
      text: "The lifestyle prevention window spans decades and has the strongest evidence base. Exercise, sleep, and vascular health directly support the FELINES layers that iron attacks. Anti-amyloid drugs target a narrower mid-stage window, after clearance has already declined.",
      badge: "Prevention > treatment",
    },
  },
};

/** Model methodology explanation for the expandable section */
export const methodologyText = {
  title: "Model methodology",
  paragraphs: [
    "This model uses ordinary differential equations (ODEs) to simulate how 10 biological variables change over time. The central chain: iron damages defense layers, damaged layers reduce clearance, reduced clearance allows amyloid to accumulate, accumulated amyloid triggers tau propagation.",
    "The ODEs are solved numerically using fourth-order Runge-Kutta integration (RK4), a standard method that gives accurate results by taking many small time steps. The model runs 10,000 steps per simulated year.",
    "Parameters are based on published rates where available (iron kinetics, amyloid clearance rates, APOE4 effect sizes) and estimated where direct data is limited (recovery rates, inter-layer coupling). See the companion paper for detailed parameter justification.",
    "This is a mechanistic model, not a predictive tool. It demonstrates how iron maldistribution cascades through defense layer failure to produce the amyloid and tau pathology seen in neurodegeneration. The qualitative patterns (threshold effects, recovery ceilings, cascade order) are more reliable than specific numerical values.",
  ],
};
