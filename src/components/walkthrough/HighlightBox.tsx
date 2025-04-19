import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../lib/hooks";
import { debounce } from "../../utils/debounce";

interface HighlightBoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ className = "", style = {} }) => {
  const { highlightedElement, config } = useAppSelector((state) => state.walkthrough);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  // Fixed debounce implementation
  const updateDimensions = useMemo(
    () =>
      debounce(() => {
        if (!highlightedElement) {
          setDimensions(null);
          setIsVisible(false);
          return;
        }

        const element = document.querySelector(highlightedElement.selector);
        if (!element) {
          setDimensions(null);
          setIsVisible(false);
          return;
        }

        const rect = element.getBoundingClientRect();

        // Check if element is actually visible
        const isActuallyVisible = rect.width > 0 && rect.height > 0 && rect.top < window.innerHeight && rect.bottom > 0;

        if (isActuallyVisible) {
          setDimensions(rect);
          setIsVisible(true);
        } else {
          setDimensions(null);
          setIsVisible(false);
        }
      }, 100),
    [highlightedElement]
  );

  useEffect(() => {
    if (!highlightedElement) {
      setIsVisible(false);
      setIsInViewport(false);
      return;
    }

    const element = document.querySelector(highlightedElement.selector);
    if (!element) {
      setIsVisible(false);
      setIsInViewport(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        setIsInViewport(isIntersecting);
        if (isIntersecting) {
          updateDimensions();
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "20px",
      }
    );

    const resizeObserver = new ResizeObserver(updateDimensions);
    const mutationObserver = new MutationObserver(updateDimensions);

    observer.observe(element);
    resizeObserver.observe(element);
    mutationObserver.observe(element, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateDimensions, { passive: true });

    updateDimensions();

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateDimensions);
    };
  }, [highlightedElement, updateDimensions]);

  if (!highlightedElement || !dimensions || !isVisible || !isInViewport) return null;

  // Calculate pulse animation duration based on element size
  const pulseDuration = 2 + Math.min(dimensions.width, dimensions.height) / 500;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: [
          `0 0 0 0 ${config.highlightColor}50`,
          `0 0 0 ${dimensions.width * 0.2}px ${config.highlightColor}20`,
          `0 0 0 0 ${config.highlightColor}00`,
        ],
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        boxShadow: {
          duration: pulseDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      className={`fixed pointer-events-none z-40 ${className}`}
      style={{
        top: `${dimensions.top - highlightedElement.padding}px`,
        left: `${dimensions.left - highlightedElement.padding}px`,
        width: `${dimensions.width + highlightedElement.padding * 2}px`,
        height: `${dimensions.height + highlightedElement.padding * 2}px`,
        borderRadius: `${highlightedElement.borderRadius}px`,
        boxShadow: highlightedElement.disableBackdrop ? "none" : `0 0 0 9999px ${config.highlightColor}`,
        pointerEvents: highlightedElement.allowClickThrough ? "none" : "auto",
        transformOrigin: "center",
        ...style,
      }}
      aria-hidden='true'
    >
      {!highlightedElement.disableBackdrop && (
        <motion.div
          className='absolute inset-0 border-2 border-current rounded-[inherit]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          style={{
            boxShadow: `0 0 10px 2px ${config.highlightColor}`,
          }}
        />
      )}
    </motion.div>
  );
};

export default HighlightBox;
