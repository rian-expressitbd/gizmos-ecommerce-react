import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalkthroughState } from "../../../types/walkthrough";

const initialState: WalkthroughState = {
  activeWalkthrough: null,
  currentStep: 0,
  completedWalkthroughs: [],
  highlightedElement: null,
  config: {
    overlayOpacity: 0.5,
    highlightColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const walkthroughSlice = createSlice({
  name: "walkthrough",
  initialState,
  reducers: {
    startWalkthrough: (state, action: PayloadAction<{ id: string; config?: Partial<WalkthroughState["config"]> }>) => {
      state.activeWalkthrough = action.payload.id;
      state.currentStep = 0;
      if (action.payload.config) {
        state.config = { ...state.config, ...action.payload.config };
      }
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep = Math.max(0, state.currentStep - 1);
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    endWalkthrough: (state, action: PayloadAction<{ completed: boolean }>) => {
      if (state.activeWalkthrough && action.payload.completed) {
        state.completedWalkthroughs.push(state.activeWalkthrough);
      }
      state.activeWalkthrough = null;
      state.highlightedElement = null;
    },
    highlightElement: (
      state,
      action: PayloadAction<{
        selector: string;
        padding?: number;
        borderRadius?: number;
        disableBackdrop?: boolean;
        allowClickThrough?: boolean;
      } | null>
    ) => {
      state.highlightedElement = action.payload
        ? {
            selector: action.payload.selector,
            padding: action.payload.padding ?? 8,
            borderRadius: action.payload.borderRadius ?? 6,
            disableBackdrop: action.payload.disableBackdrop ?? false,
            allowClickThrough: action.payload.allowClickThrough ?? false,
          }
        : null;
    },
    updateConfig: (state, action: PayloadAction<Partial<WalkthroughState["config"]>>) => {
      state.config = { ...state.config, ...action.payload };
    },
    resetWalkthrough: () => initialState,
  },
});

export const {
  startWalkthrough,
  nextStep,
  prevStep,
  goToStep,
  endWalkthrough,
  highlightElement,
  updateConfig,
  resetWalkthrough,
} = walkthroughSlice.actions;

export default walkthroughSlice.reducer;
