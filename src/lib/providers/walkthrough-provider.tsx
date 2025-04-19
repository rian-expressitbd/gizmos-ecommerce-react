// src/providers/WalkthroughProvider.tsx
import { ReactNode } from "react";
import WalkthroughTrigger from "../../components/walkthrough/WalkthroughTrigger";
import { WalkthroughStep } from "../../types/walkthrough";

interface WalkthroughConfig {
  id: string;
  steps: WalkthroughStep[];
  condition?: boolean;
  requiredSteps?: string[];
}

export const WalkthroughProvider = ({
  children,
  walkthroughs,
}: {
  children: ReactNode;
  walkthroughs: WalkthroughConfig[];
}) => {
  return (
    <>
      {walkthroughs.map((walkthrough) => (
        <WalkthroughTrigger
          key={walkthrough.id}
          walkthroughId={walkthrough.id}
          condition={walkthrough.condition ?? true}
          requiredSteps={walkthrough.requiredSteps}
        />
      ))}
      {children}
    </>
  );
};
