import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck, FaTimes } from "react-icons/fa";
import {
  endWalkthrough,
  goToStep,
  highlightElement,
  nextStep,
  prevStep,
  updateConfig,
} from "../../lib/features/walkthrough/walkthroughSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { debounce } from "../../utils/debounce";
import HighlightBox from "./HighlightBox";

interface WalkthroughStep {
  element?: string;
  title?: string;
  content: React.ReactNode | string;
  position?: Position;
  elementPadding?: number;
  elementBorderRadius?: number;
  disableBackdrop?: boolean;
  allowClickThrough?: boolean;
  beforeStep?: () => Promise<void> | void;
  afterStep?: () => Promise<void> | void;
  scrollOffset?: number;
  scrollBehavior?: ScrollBehavior;
  scrollAdjustForSticky?: boolean;
}

type Position = "top" | "bottom" | "left" | "right" | "auto";
type ScrollBehavior = "auto" | "smooth";

const scrollToElement = (
  selector: string,
  offset = 50,
  behavior: ScrollBehavior = "smooth",
  adjustForSticky = true
) => {
  const element = document.querySelector(selector);
  if (!element) return;

  let stickyOffset = 0;
  if (adjustForSticky) {
    const header = document.querySelector("header, [data-sticky-header]");
    if (header) {
      stickyOffset = header.getBoundingClientRect().height;
    }
  }

  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const top = absoluteElementTop - offset - stickyOffset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
};

interface WalkthroughProps {
  id: string;
  steps: WalkthroughStep[];
  skipButtonText?: string;
  nextButtonText?: string;
  backButtonText?: string;
  completeButtonText?: string;
  overlayOpacity?: number;
  highlightColor?: string;
  onStart?: () => void;
  onEnd?: (completed: boolean) => void;
  onStepChange?: (step: number) => void;
  defaultScrollOffset?: number;
  defaultScrollBehavior?: ScrollBehavior;
  adjustForStickyHeader?: boolean;
}

const Walkthrough: React.FC<WalkthroughProps> = ({
  id,
  steps,
  skipButtonText = "Skip",
  nextButtonText = "Next",
  backButtonText = "Back",
  completeButtonText = "Done",
  overlayOpacity,
  highlightColor,
  onStart,
  onEnd,
  onStepChange,
  defaultScrollOffset = 20,
  defaultScrollBehavior = "smooth",
  adjustForStickyHeader = true,
}) => {
  const dispatch = useAppDispatch();
  const { activeWalkthrough, currentStep, config } = useAppSelector((state) => state.walkthrough);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayOpacity !== undefined || highlightColor !== undefined) {
      dispatch(
        updateConfig({
          overlayOpacity,
          highlightColor: highlightColor || config.highlightColor,
        })
      );
    }
  }, [overlayOpacity, highlightColor, dispatch, config.highlightColor]);

  useEffect(() => {
    if (activeWalkthrough === id && onStart) {
      onStart();
    }
  }, [activeWalkthrough, id, onStart]);

  useEffect(() => {
    if (activeWalkthrough === id && onStepChange) {
      onStepChange(currentStep);
    }
  }, [currentStep, activeWalkthrough, id, onStepChange]);

  const handleEnd = useCallback(
    (completed: boolean) => {
      dispatch(endWalkthrough({ completed }));
      if (onEnd) {
        onEnd(completed);
      }
    },
    [dispatch, onEnd]
  );

  const handleNext = useCallback(async () => {
    const currentStepData = steps[currentStep];
    if (currentStepData.afterStep) {
      await currentStepData.afterStep();
    }

    if (currentStep < steps.length - 1) {
      dispatch(nextStep());
    } else {
      handleEnd(true);
    }
  }, [currentStep, steps, dispatch, handleEnd]);

  const handleBack = useCallback(async () => {
    const currentStepData = steps[currentStep];
    if (currentStepData.beforeStep) {
      await currentStepData.beforeStep();
    }
    dispatch(prevStep());
  }, [currentStep, steps, dispatch]);

  const debouncedHighlight = useMemo(
    () =>
      debounce(() => {
        if (activeWalkthrough === id && steps[currentStep]?.element) {
          const step = steps[currentStep];
          dispatch(
            highlightElement({
              selector: step.element!,
              padding: step.elementPadding || 8,
              borderRadius: step.elementBorderRadius || 8,
              disableBackdrop: step.disableBackdrop,
              allowClickThrough: step.allowClickThrough,
            })
          );

          scrollToElement(
            step.element!,
            step.scrollOffset ?? defaultScrollOffset,
            step.scrollBehavior ?? defaultScrollBehavior,
            step.scrollAdjustForSticky ?? adjustForStickyHeader
          );
        } else if (activeWalkthrough !== id) {
          dispatch(highlightElement(null));
        }
      }, 100),
    [
      activeWalkthrough,
      currentStep,
      id,
      steps,
      dispatch,
      defaultScrollOffset,
      defaultScrollBehavior,
      adjustForStickyHeader,
    ]
  );

  useEffect(() => {
    debouncedHighlight();
    return () => debouncedHighlight.cancel();
  }, [debouncedHighlight]);

  useEffect(() => {
    if (activeWalkthrough !== id) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleEnd(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeWalkthrough, id, handleEnd, handleNext, handleBack]);

  useEffect(() => {
    if (activeWalkthrough === id && tooltipRef.current) {
      tooltipRef.current.focus();
    }
  }, [activeWalkthrough, currentStep, id]);

  if (activeWalkthrough !== id) return null;

  const currentStepData = steps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const calculateBestPosition = (rect: DOMRect): Position => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const header = document.querySelector("header, [data-sticky-header]");
    const headerHeight = header?.getBoundingClientRect().height || 0;

    const space = {
      top: rect.top - headerHeight,
      bottom: viewportHeight - rect.bottom,
      left: rect.left,
      right: viewportWidth - rect.right,
    };

    const positions = Object.entries(space)
      .filter(([pos]) => pos === "top" || pos === "bottom" || pos === "left" || pos === "right")
      .sort((a, b) => b[1] - a[1]);

    return (positions[0]?.[0] as Position) ?? "bottom";
  };

  const getTooltipStyle = (): React.CSSProperties => {
    if (!currentStepData.element) {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    }

    const element = document.querySelector(currentStepData.element);
    if (!element) return { position: "fixed", inset: 0 };

    const rect = element.getBoundingClientRect();
    const position =
      currentStepData.position === "auto" || !currentStepData.position
        ? calculateBestPosition(rect)
        : currentStepData.position;

    const style: React.CSSProperties = {
      position: "fixed",
      maxWidth: "min(90vw, 320px)",
      zIndex: 9999,
    };

    // Reduced from 12px to 8px for tighter spacing
    const TOOLTIP_OFFSET = 8;
    const TOOLTIP_MARGIN = 8;

    switch (position) {
      case "top":
        style.bottom = `${window.innerHeight - rect.top + TOOLTIP_OFFSET}px`;
        style.left = `${rect.left + rect.width / 2}px`;
        style.transform = "translateX(-50%)";
        break;
      case "bottom":
        style.top = `${rect.bottom + TOOLTIP_OFFSET}px`;
        style.left = `${rect.left + rect.width / 2}px`;
        style.transform = "translateX(-50%)";
        break;
      case "left":
        style.top = `${rect.top + rect.height / 2}px`;
        style.right = `${window.innerWidth - rect.left + TOOLTIP_OFFSET}px`;
        style.transform = "translateY(-50%)";
        break;
      case "right":
        style.top = `${rect.top + rect.height / 2}px`;
        style.left = `${rect.right + TOOLTIP_OFFSET}px`;
        style.transform = "translateY(-50%)";
        break;
    }

    if (style.left !== undefined) {
      const leftValue = Number(style.left.toString().replace("px", ""));
      const maxWidth = style.maxWidth ? parseInt(style.maxWidth.toString()) : 0;
      style.left = Math.max(TOOLTIP_MARGIN, Math.min(leftValue, window.innerWidth - TOOLTIP_MARGIN - maxWidth));
    }

    if (style.top !== undefined) {
      const topValue = Number(style.top.toString().replace("px", ""));
      style.top = Math.max(TOOLTIP_MARGIN, Math.min(topValue, window.innerHeight - TOOLTIP_MARGIN - 120)); // Reduced from 150
    }

    return style;
  };

  return (
    <>
      <HighlightBox />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-[9998]'
          aria-modal='true'
          role='dialog'
        >
          <motion.div
            ref={tooltipRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 6 }} // Reduced from 8
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 6 }} // Reduced from 8
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 relative border border-gray-200 dark:border-gray-700 max-w-[320px] text-sm'
            style={getTooltipStyle()}
          >
            {currentStepData.title && (
              <h3
                id={`walkthrough-title-${id}-${currentStep}`}
                className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'
              >
                {currentStepData.title}
              </h3>
            )}

            <div
              id={`walkthrough-content-${id}-${currentStep}`}
              className='mb-3 text-gray-700 dark:text-gray-300 leading-snug' // Reduced mb from 4 to 3
            >
              {typeof currentStepData.content === "string" ? <p>{currentStepData.content}</p> : currentStepData.content}
            </div>

            <div className='flex justify-between items-center gap-2'>
              {" "}
              {/* Reduced gap from 3 to 2 */}
              <div>
                {!isFirstStep && (
                  <button
                    onClick={handleBack}
                    className='px-2.5 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center gap-1 transition-colors duration-200 text-sm' // Reduced padding
                    aria-label={backButtonText}
                  >
                    <FaArrowLeft aria-hidden='true' size={13} /> {/* Reduced size */}
                    <span className='hidden sm:inline'>{backButtonText}</span>
                  </button>
                )}
              </div>
              <div className='flex items-center gap-1'>
                {" "}
                {/* Reduced gap from 1.5 to 1 */}
                <button
                  onClick={() => handleEnd(false)}
                  className='px-2.5 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center gap-1 transition-colors duration-200 text-sm' // Reduced padding
                  aria-label={skipButtonText}
                >
                  <FaTimes aria-hidden='true' size={13} /> {/* Reduced size */}
                  <span className='hidden sm:inline'>{skipButtonText}</span>
                </button>
                <button
                  onClick={handleNext}
                  className='px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-1 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm' // Reduced padding
                  aria-label={isLastStep ? completeButtonText : nextButtonText}
                >
                  {isLastStep ? (
                    <>
                      <FaCheck aria-hidden='true' size={13} /> {/* Reduced size */}
                      <span>{completeButtonText}</span>
                    </>
                  ) : (
                    <>
                      <span className='hidden sm:inline'>{nextButtonText}</span>
                      <FaArrowRight aria-hidden='true' size={13} /> {/* Reduced size */}
                    </>
                  )}
                </button>
              </div>
            </div>

            {steps.length > 1 && (
              <div className='flex justify-center mt-2 gap-1'>
                {" "}
                {/* Reduced mt from 3 to 2 and gap from 1.5 to 1 */}
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => dispatch(goToStep(index))}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentStep
                        ? "bg-blue-600 scale-100" // Reduced scale from 110 to 100
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`} // Reduced size from w-2 to w-1.5
                    aria-label={`Go to step ${index + 1}`}
                    aria-current={index === currentStep ? "step" : undefined}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Walkthrough;
