import { ReactNode } from "react";
import { WalkthroughProvider } from "../lib/providers/walkthrough-provider";
import { WALKTHROUGHS } from "../walkthroughs";

export const WalkThroughLayout = ({ children }: { children: ReactNode }) => {
  return (
    <WalkthroughProvider
      walkthroughs={[
        WALKTHROUGHS.dashboard,
        WALKTHROUGHS.settings,
        // Add more walkthroughs as needed
      ]}
    >
      {children}
    </WalkthroughProvider>
  );
};
