import React, { useEffect } from "react";
import { startWalkthrough } from "../../lib/features/walkthrough/walkthroughSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

interface WalkthroughTriggerProps {
  walkthroughId: string;
  requiredSteps?: string[];
  condition?: boolean;
  delay?: number;
  config?: {
    overlayOpacity?: number;
    highlightColor?: string;
  };
}

const WalkthroughTrigger: React.FC<WalkthroughTriggerProps> = ({
  walkthroughId,
  requiredSteps = [],
  condition = true,
  delay = 1000,
  config,
}) => {
  const dispatch = useAppDispatch();
  const { activeWalkthrough, completedWalkthroughs } = useAppSelector((state) => state.walkthrough);

  useEffect(() => {
    const shouldTrigger =
      condition &&
      !activeWalkthrough &&
      !completedWalkthroughs.includes(walkthroughId) &&
      requiredSteps.every((step) => completedWalkthroughs.includes(step));

    if (shouldTrigger) {
      const timer = setTimeout(() => {
        dispatch(startWalkthrough({ id: walkthroughId, config }));
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [activeWalkthrough, completedWalkthroughs, walkthroughId, dispatch, requiredSteps, condition, delay, config]);

  return null;
};

export default WalkthroughTrigger;
