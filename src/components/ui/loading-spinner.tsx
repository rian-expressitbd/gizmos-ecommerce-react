// LoadingSpinners.tsx
import { twMerge } from "tailwind-merge";

type Size = "xs" | "sm" | "md" | "lg";
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "white"
  | "blue"
  | "red"
  | "green"
  | "gray";

const sizeClasses: Record<Size, string> = {
  xs: "h-3 w-3 border",
  sm: "h-5 w-5 border-2",
  md: "h-7 w-7 border-3",
  lg: "h-10 w-10 border-4",
};

const colorClasses: Record<Color, string> = {
  primary: "--color-primary",
  secondary: "border-secondary",
  accent: "border-accent",
  white: "border-white",
  blue: "border-blue-500",
  red: "border-red-500",
  green: "border-green-500",
  gray: "border-gray-500",
};

// BaseSpinner.tsx

interface BaseSpinnerProps {
  size?: Size;
  color?: Color;
  className?: string;
  "aria-label"?: string;
  children?: React.ReactNode;
}

const BaseSpinner = ({
  size = "md",
  color = "primary",
  className,
  "aria-label": ariaLabel = "Loading...",
  children,
}: BaseSpinnerProps) => (
  <div
    role="status"
    aria-label={ariaLabel}
    className={twMerge(
      "animate-spin rounded-full",
      sizeClasses[size],
      colorClasses[color],
      className
    )}
  >
    {children}
  </div>
);

// Main spinning ring loader
export const LoadingSpinner = ({
  size = "md",
  color = "white",
  className,
  "aria-label": ariaLabel = "Loading...",
}: {
  size?: Size;
  color?: Color;
  className?: string;
  "aria-label"?: string;
}) => (
  <BaseSpinner
    size={size}
    color={color}
    className={twMerge("border-t-transparent", className)}
    aria-label={ariaLabel}
  />
);

const borderColorMap: Record<string, string> = {
  "blue-500": "border-blue-500",
  "red-500": "border-red-500",
  "green-500": "border-green-500",
  "gray-500": "border-gray-500",
};



export const LoadingSpinnerDualColor = ({
  size = "md",
  className,
  primaryColor = "blue-500",
  secondaryColor = "red-500",
  "aria-label": ariaLabel = "Loading...",
}: {
  size?: Size;
  className?: string;
  primaryColor?: keyof typeof borderColorMap;
  secondaryColor?: keyof typeof borderColorMap;
  "aria-label"?: string;
}) => (
  <div
    role="status"
    aria-label={ariaLabel}
    className={twMerge(
      "relative", // Important for absolute positioning of children
      sizeClasses[size], // size with height, width, and border size
      className
    )}
  >
    {/* Secondary ring */}
    <div
      className={twMerge(
        "absolute inset-0 rounded-full border-4 animate-spin",
        borderColorMap[secondaryColor],
        "border-b-transparent"
      )}
    />
    {/* Primary ring */}
    <div
      className={twMerge(
        "absolute inset-0 rounded-full border-4 animate-spin",
        borderColorMap[primaryColor],
        "border-t-transparent"
      )}
    />
  </div>
);


// Bouncing dots loader
export const LoadingSpinnerBounce = ({
  dotColor = "bg-blue-500",
  className,
  "aria-label": ariaLabel = "Loading...",
}: {
  dotColor?: string;
  className?: string;
  "aria-label"?: string;
}) => (
  <div
    role="status"
    aria-label={ariaLabel}
    className={twMerge("flex space-x-1", className)}
  >
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={twMerge(
          "h-2 w-2 rounded-full motion-safe:animate-bounce",
          dotColor
        )}
        style={{ animationDelay: `${i * 200}ms` }}
      />
    ))}
  </div>
);

// Ping/pulse animation loader
export const LoadingSpinnerPulse = ({
  size = "md",
  className,
  "aria-label": ariaLabel = "Loading...",
}: {
  size?: Size;
  className?: string;
  "aria-label"?: string;
}) => (
  <div
    role="status"
    aria-label={ariaLabel}
    className={twMerge(
      "rounded-full bg-blue-500 opacity-75 animate-ping",
      sizeClasses[size],
      className
    )}
  />
);


// Typing indicator style loader
const dotColorMap: Record<string, string> = {
  "gray-900": "bg-gray-900",
  "blue-500": "bg-blue-500",
  "red-500": "bg-red-500",
  "green-500": "bg-green-500",
};

export const LoadingSpinnerTyping = ({
  dotColor = "gray-900",
  className,
  "aria-label": ariaLabel = "Loading...",
}: {
  dotColor?: keyof typeof dotColorMap;
  className?: string;
  "aria-label"?: string;
}) => (
  <div
    role="status"
    aria-label={ariaLabel}
    className={twMerge("flex space-x-1", className)}
  >
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`h-2 w-2 rounded-full animate-pulse ${dotColorMap[dotColor]}`}
        style={{ animationDelay: `${i * 200}ms` }}
      />
    ))}
  </div>
);

