export type Position = "top" | "bottom" | "left" | "right" | "auto";
export type Alignment = "start" | "center" | "end";

export interface WalkthroughStep {
  title?: string;
  content: React.ReactNode;
  element?: string;
  elementPadding?: number;
  elementBorderRadius?: number;
  position?: Position;
  alignment?: Alignment;
  beforeStep?: () => Promise<void> | void;
  afterStep?: () => Promise<void> | void;
  required?: boolean;
  disableBackdrop?: boolean;
  allowClickThrough?: boolean;
}

export interface WalkthroughState {
  activeWalkthrough: string | null;
  currentStep: number;
  completedWalkthroughs: string[];
  highlightedElement: {
    selector: string;
    padding: number;
    borderRadius: number;
    disableBackdrop: boolean;
    allowClickThrough: boolean;
  } | null;
  config: {
    overlayOpacity: number;
    highlightColor: string;
  };
}
