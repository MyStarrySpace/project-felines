"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

type FullPageContextType = {
  currentIndex: number;
  totalSlides: number;
  currentStep: number;
  totalSteps: number;
  isTransitioning: boolean;
  goToSlide: (index: number) => void;
  goToSlideById: (id: string) => void;
  navigateUp: () => void;
  navigateDown: () => void;
  sectionIds: string[];
  setScrollLocked: (locked: boolean) => void;
};

const FullPageContext = createContext<FullPageContextType | null>(null);

export function useFullPage(): FullPageContextType {
  const ctx = useContext(FullPageContext);
  if (!ctx) {
    // Return a no-op fallback so components work outside FullPageScroll (e.g. /showcase)
    return {
      currentIndex: 0,
      totalSlides: 0,
      currentStep: 0,
      totalSteps: 1,
      isTransitioning: false,
      goToSlide: () => {},
      goToSlideById: () => {},
      navigateUp: () => {},
      navigateDown: () => {},
      sectionIds: [],
      setScrollLocked: () => {},
    };
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Section config
// ---------------------------------------------------------------------------

export type SlideConfig = {
  id: string;
  bg: string;
  content: ReactNode;
  steps?: number;
};

// ---------------------------------------------------------------------------
// Transition configs – one per boundary between adjacent slides
// ---------------------------------------------------------------------------

type TransitionData = {
  initial: Record<string, string | number>;
  exit: Record<string, string | number>;
  duration: number;
};

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const BOUNDARY_TRANSITIONS: {
  forward: { exit: Record<string, string | number>; initial: Record<string, string | number> };
  backward: { exit: Record<string, string | number>; initial: Record<string, string | number> };
  duration: number;
}[] = [
  // -----------------------------------------------------------------------
  // 0  Hero → Iron  — "Dissolve Rise"
  //    Soft continuation — same dark bg, gentle blur + y shift.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { scale: 0.95, filter: "blur(8px)", opacity: 0 },
      initial: { y: 30, filter: "blur(10px)", opacity: 0 },
    },
    backward: {
      exit: { y: 30, filter: "blur(10px)", opacity: 0 },
      initial: { scale: 0.95, filter: "blur(8px)", opacity: 0 },
    },
    duration: 0.7,
  },

  // -----------------------------------------------------------------------
  // 1  Iron → Ferroptosis — "Cross Dissolve"
  //    Pure opacity, no motion — seamless diagram continuation.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { opacity: 0, filter: "blur(4px)" },
      initial: { opacity: 0, filter: "blur(4px)" },
    },
    backward: {
      exit: { opacity: 0, filter: "blur(4px)" },
      initial: { opacity: 0, filter: "blur(4px)" },
    },
    duration: 0.6,
  },

  // -----------------------------------------------------------------------
  // 2  Ferroptosis → Problem — "Deep Zoom"
  //    Dramatic break — ferroptosis "zooms into" the problem.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { scale: 3, filter: "blur(20px)", opacity: 0 },
      initial: { scale: 0.8, filter: "blur(24px)", opacity: 0 },
    },
    backward: {
      exit: { scale: 0.8, filter: "blur(24px)", opacity: 0 },
      initial: { scale: 3, filter: "blur(20px)", opacity: 0 },
    },
    duration: 1.0,
  },

  // -----------------------------------------------------------------------
  // 3  Problem → Findings — "Vertical Slide"
  //    Classic full-screen slide; old section exits upward, new enters
  //    from below.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { y: "-100%", opacity: 0 },
      initial: { y: "100%", opacity: 0 },
    },
    backward: {
      exit: { y: "100%", opacity: 0 },
      initial: { y: "-100%", opacity: 0 },
    },
    duration: 0.8,
  },

  // -----------------------------------------------------------------------
  // 4  Findings → Evidence — "Scale Punch"
  //    Findings compresses and blurs away; Evidence punches in from a
  //    large, blurred state.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { scale: 0.5, filter: "blur(12px)", opacity: 0 },
      initial: { scale: 1.5, filter: "blur(16px)", opacity: 0 },
    },
    backward: {
      exit: { scale: 1.5, filter: "blur(16px)", opacity: 0 },
      initial: { scale: 0.5, filter: "blur(12px)", opacity: 0 },
    },
    duration: 0.9,
  },

  // -----------------------------------------------------------------------
  // 5  Evidence → CTA — "Dissolve Rise"
  //    Evidence shrinks and dissolves; CTA rises from slight offset with
  //    a clearing blur.
  // -----------------------------------------------------------------------
  {
    forward: {
      exit: { scale: 0.9, filter: "blur(12px)", opacity: 0 },
      initial: { y: 40, filter: "blur(16px)", opacity: 0 },
    },
    backward: {
      exit: { y: 40, filter: "blur(16px)", opacity: 0 },
      initial: { scale: 0.9, filter: "blur(12px)", opacity: 0 },
    },
    duration: 0.8,
  },
];

// Fallback for non‑adjacent jumps (clicking a dot far away)
const FALLBACK_TRANSITION = {
  exit: { opacity: 0, filter: "blur(8px)" },
  initial: { opacity: 0, filter: "blur(8px)" },
  duration: 0.5,
};

// ---------------------------------------------------------------------------
// Variant factory — uses `custom` (TransitionData) provided by AnimatePresence
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sectionVariants: Record<string, (data: any) => any> = {
  enter: (data: TransitionData) => ({
    ...data.initial,
  }),
  center: (data: TransitionData) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: data.duration, ease: EASE },
  }),
  exit: (data: TransitionData) => ({
    ...data.exit,
    transition: { duration: data.duration, ease: EASE },
  }),
};

// ---------------------------------------------------------------------------
// FullPageScroll component
// ---------------------------------------------------------------------------

export type FullPageScrollProps = {
  sections: SlideConfig[];
  children?: ReactNode;
  /** When false, disables wheel/touch/keyboard listeners (used during morph transitions) */
  active?: boolean;
  /** Restore slide index on remount */
  initialIndex?: number;
  /** Restore step within slide on remount */
  initialStep?: number;
  /** Called whenever current slide or step changes */
  onSlideChange?: (index: number, step: number) => void;
};

export function FullPageScroll({
  sections,
  children,
  active = true,
  initialIndex = 0,
  initialStep = 0,
  onSlideChange,
}: FullPageScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isAnimating = useRef(false);
  const isStepAnimating = useRef(false);
  const accumulatedDelta = useRef(0);
  const scrollLocked = useRef(false);

  const setScrollLocked = useCallback((locked: boolean) => {
    scrollLocked.current = locked;
  }, []);

  // Track transition data for AnimatePresence custom prop
  const [transitionData, setTransitionData] = useState<TransitionData>({
    initial: {},
    exit: {},
    duration: 0.8,
  });

  const getSteps = useCallback(
    (index: number) => sections[index]?.steps ?? 1,
    [sections]
  );

  // Notify parent of slide/step changes
  useEffect(() => {
    onSlideChange?.(currentIndex, currentStep);
  }, [currentIndex, currentStep, onSlideChange]);

  // ------- Navigation helpers -------

  const computeTransition = useCallback(
    (from: number, to: number): TransitionData => {
      const diff = to - from;
      const isForward = diff > 0;

      // Adjacent slides → use per‑boundary config
      if (Math.abs(diff) === 1) {
        const boundaryIdx = Math.min(from, to);
        const boundary = BOUNDARY_TRANSITIONS[boundaryIdx];
        if (boundary) {
          const dir = isForward ? boundary.forward : boundary.backward;
          return { initial: dir.initial, exit: dir.exit, duration: boundary.duration };
        }
      }

      // Non‑adjacent → fallback
      return { ...FALLBACK_TRANSITION };
    },
    []
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (
        index < 0 ||
        index >= sections.length ||
        index === currentIndex ||
        isAnimating.current
      )
        return;

      isAnimating.current = true;
      setIsTransitioning(true);
      setTransitionData(computeTransition(currentIndex, index));
      setCurrentIndex(index);
      setCurrentStep(0);
    },
    [currentIndex, sections.length, computeTransition]
  );

  const goToSlideById = useCallback(
    (id: string) => {
      const idx = sections.findIndex((s) => s.id === id);
      if (idx !== -1) goToSlide(idx);
    },
    [sections, goToSlide]
  );

  // Step-aware navigation: scroll down
  const navigateDown = useCallback(() => {
    if (scrollLocked.current || isAnimating.current || isStepAnimating.current) return;

    const maxStep = getSteps(currentIndex) - 1;
    if (currentStep < maxStep) {
      // Advance step within current slide
      isStepAnimating.current = true;
      setCurrentStep((s) => s + 1);
      setTimeout(() => {
        isStepAnimating.current = false;
      }, 400);
    } else {
      // Advance to next slide
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, currentStep, getSteps, goToSlide]);

  // Step-aware navigation: scroll up
  const navigateUp = useCallback(() => {
    if (scrollLocked.current || isAnimating.current || isStepAnimating.current) return;

    if (currentStep > 0) {
      // Go back one step within current slide
      isStepAnimating.current = true;
      setCurrentStep((s) => s - 1);
      setTimeout(() => {
        isStepAnimating.current = false;
      }, 400);
    } else {
      // Go to previous slide at its max step
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) return;
      isAnimating.current = true;
      setIsTransitioning(true);
      setTransitionData(computeTransition(currentIndex, prevIndex));
      setCurrentIndex(prevIndex);
      setCurrentStep(getSteps(prevIndex) - 1);
    }
  }, [currentIndex, currentStep, getSteps, computeTransition]);

  // ------- Wheel / Touch / Keyboard -------

  useEffect(() => {
    if (!active) return;

    const THRESHOLD = 50;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating.current || isStepAnimating.current) return;

      accumulatedDelta.current += e.deltaY;
      if (Math.abs(accumulatedDelta.current) < THRESHOLD) return;

      const dir = accumulatedDelta.current > 0 ? 1 : -1;
      accumulatedDelta.current = 0;

      if (dir > 0) {
        navigateDown();
      } else {
        navigateUp();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating.current || isStepAnimating.current) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          navigateDown();
        } else {
          navigateUp();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        navigateDown();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigateUp();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, navigateDown, navigateUp]);

  // ------- Hash on load -------

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const idx = sections.findIndex((s) => s.id === hash);
      if (idx > 0) setCurrentIndex(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ------- Render -------

  const current = sections[currentIndex];

  const ctxValue: FullPageContextType = {
    currentIndex,
    totalSlides: sections.length,
    currentStep,
    totalSteps: getSteps(currentIndex),
    isTransitioning,
    goToSlide,
    goToSlideById,
    navigateUp,
    navigateDown,
    sectionIds: sections.map((s) => s.id),
    setScrollLocked,
  };

  return (
    <FullPageContext.Provider value={ctxValue}>
      {/* Viewport for slides — absolute so parent can control positioning */}
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-[#110B07]"
        role="region"
        aria-label="Presentation slides, use arrow keys to navigate"
        aria-roledescription="presentation"
      >
        {/* Background layer — crossfade only, no scale/blur */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionData.duration, ease: EASE }}
            className={`absolute inset-0 ${current.bg}`}
          />
        </AnimatePresence>

        {/* Content layer — scale/blur/position transitions */}
        <AnimatePresence
          custom={transitionData}
          initial={false}
          onExitComplete={() => {
            isAnimating.current = false;
            accumulatedDelta.current = 0;
            setIsTransitioning(false);
          }}
        >
          <motion.div
            key={currentIndex}
            custom={transitionData}
            variants={sectionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="h-full w-full" id={current.id}>
              {current.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay UI (Header, SectionIndicator) rendered above the viewport */}
      {children}
    </FullPageContext.Provider>
  );
}
