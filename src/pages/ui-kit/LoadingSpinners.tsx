import {
  LoadingSpinner,
  LoadingSpinnerBounce,
  LoadingSpinnerDualColor,
  LoadingSpinnerPulse,
  LoadingSpinnerTyping,
} from "@/components/ui/loading-spinner";

export default function LoadingSpinners() {
  const sizes = ["xs", "sm", "md", "lg"] as const;
  const colors = [
    "primary",
    "secondary",
    "accent",
    "white",
    "blue",
    "red",
    "green",
    "gray",
  ] as const;
  return (
    <div>
      <div className="space-y-2">
        {sizes.map((size) => (
          <div key={size} className="space-y-4">
            <h2 className="text-xl font-semibold capitalize border-b">
              {size} Loading Spiners
            </h2>
            <div className="flex flex-wrap gap-4">
              {colors.map((color) => (
                <LoadingSpinner
                  size={size}
                  color={color}
                  className="bg-primary"
                ></LoadingSpinner>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h3 className="text-2xl">Dual Color Loading Spinners</h3>
          <div className="mb-3 mt-3">
            <LoadingSpinnerDualColor />
          </div>
          <h3 className="text-2xl">Loading Spinner Bounce</h3>
          <div className="mb-3 mt-3">
            <LoadingSpinnerBounce />
          </div>
          <h3 className="text-2xl mb-3 mt-3">Loading Spinner Pulse</h3>
          <div>
            <LoadingSpinnerPulse />
          </div>
          <h3 className="text-2xl">Loading Spinner Typing</h3>
          <div>
            <LoadingSpinnerTyping />
          </div>
        </div>
      </div>
    </div>
  );
}
