// src/walkthroughs/index.ts
import { WalkthroughStep } from "../types/walkthrough";

export const dashboardSteps: WalkthroughStep[] = [
  {
    title: "Welcome to Dashboard",
    content: "This is your main dashboard...",
    element: "#dashboard-header",
  },
  // ... other steps
];

export const settingsSteps: WalkthroughStep[] = [
  {
    title: "Settings Guide",
    content: "Configure your preferences here...",
    element: "#settings-form",
  },
  // ... other steps
];

export const WALKTHROUGHS = {
  dashboard: {
    id: "dashboard-tour",
    steps: dashboardSteps,
    requiredSteps: [], // Optional dependencies
  },
  settings: {
    id: "settings-tour",
    steps: settingsSteps,
    condition: true, // Optional condition
  },
};
