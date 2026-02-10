"use client";

import { useFullPage } from "./full-page-scroll";

const UP_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M16 8L6 22h20z' fill='white' stroke='%23111' stroke-width='1.5'/%3E%3C/svg%3E") 16 16, n-resize`;
const DOWN_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M16 24L6 10h20z' fill='white' stroke='%23111' stroke-width='1.5'/%3E%3C/svg%3E") 16 16, s-resize`;

export function SlideEdgeNav() {
  const {
    navigateUp,
    navigateDown,
    currentIndex,
    totalSlides,
    currentStep,
    totalSteps,
  } = useFullPage();

  const canGoUp = currentIndex > 0 || currentStep > 0;
  const canGoDown =
    currentIndex < totalSlides - 1 || currentStep < totalSteps - 1;

  return (
    <>
      {canGoUp && (
        <button
          type="button"
          className="fixed top-0 left-0 right-0 h-[12vh] z-30 bg-transparent border-0 p-0"
          style={{ cursor: UP_CURSOR }}
          onClick={navigateUp}
          aria-label="Previous slide"
          tabIndex={-1}
        />
      )}
      {canGoDown && (
        <button
          type="button"
          className="fixed bottom-0 left-0 right-0 h-[12vh] z-30 bg-transparent border-0 p-0"
          style={{ cursor: DOWN_CURSOR }}
          onClick={navigateDown}
          aria-label="Next slide"
          tabIndex={-1}
        />
      )}
    </>
  );
}
