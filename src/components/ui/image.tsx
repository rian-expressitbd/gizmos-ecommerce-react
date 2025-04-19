import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  lazy?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  decoding?: "sync" | "async" | "auto";
}

export const Image = ({
  src,
  alt,
  className,
  width,
  height,
  lazy = true,
  rounded = "none",
  objectFit = "cover",
  onClick,
  role,
  tabIndex,
  decoding = "async",
}: ImageProps) => {
  // Map rounded prop to Tailwind classes
  const roundedClass = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  }[rounded];

  // Map objectFit prop to Tailwind classes
  const objectFitClass = {
    contain: "object-contain",
    cover: "object-cover",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  // Handle keyboard events for interactive images
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick?.();
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${roundedClass} ${objectFitClass} ${className} ${
        onClick
          ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          : ""
      }`}
      style={{ width, height }}
      loading={lazy ? "lazy" : "eager"}
      decoding={decoding}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={role}
      tabIndex={tabIndex}
      aria-label={alt}
    />
  );
};
