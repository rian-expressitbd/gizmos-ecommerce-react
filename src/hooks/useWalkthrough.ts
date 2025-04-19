import {
  endWalkthrough,
  goToStep,
  nextStep,
  prevStep,
  startWalkthrough as startWalkthroughAction,
  updateConfig,
} from "../lib/features/walkthrough/walkthroughSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

export const useWalkthrough = () => {
  const dispatch = useAppDispatch();
  const { activeWalkthrough, currentStep, completedWalkthroughs, highlightedElement, config } = useAppSelector(
    (state) => state.walkthrough
  );

  const start = (
    walkthroughId: string,
    options?: {
      config?: {
        overlayOpacity?: number;
        highlightColor?: string;
      };
      resetStep?: boolean;
    }
  ) => {
    dispatch(
      startWalkthroughAction({
        id: walkthroughId,
        config: options?.config,
      })
    );
    if (options?.resetStep) {
      dispatch(goToStep(0));
    }
  };

  const end = (completed: boolean = false) => {
    dispatch(endWalkthrough({ completed }));
  };

  const next = () => {
    dispatch(nextStep());
  };

  const prev = () => {
    dispatch(prevStep());
  };

  const goTo = (step: number) => {
    dispatch(goToStep(step));
  };

  const updateWalkthroughConfig = (newConfig: { overlayOpacity?: number; highlightColor?: string }) => {
    dispatch(updateConfig(newConfig));
  };

  const isActive = (walkthroughId: string) => {
    return activeWalkthrough === walkthroughId;
  };

  const isCompleted = (walkthroughId: string) => {
    return completedWalkthroughs.includes(walkthroughId);
  };

  return {
    activeWalkthrough,
    currentStep,
    highlightedElement,
    completedWalkthroughs,
    config,
    start,
    end,
    next,
    prev,
    goTo,
    updateConfig: updateWalkthroughConfig,
    isActive,
    isCompleted,
  };
};
