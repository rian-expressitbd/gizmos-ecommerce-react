// components/form/FormFieldWrapper.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

interface FormFieldWrapperProps {
  id?: string;
  label?: string;
  error?: string;
  required?: boolean;
  labelRightElement?: React.ReactNode;
  preserveErrorSpace?: boolean;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
}

export const FormFieldWrapper = ({
  id,
  label,
  error,
  required = false,
  labelRightElement,
  preserveErrorSpace = true,
  labelClassName,
  children,
  className,
}: FormFieldWrapperProps) => (
  <div className={twMerge("space-y-1.5 w-full", className)}>
    {(label || labelRightElement) && (
      <div className="flex items-center justify-between">
        {label && (
          <label
            htmlFor={id}
            className={twMerge(
              "block text-sm font-medium",
              error
                ? "text-red-600 dark:text-red-500"
                : "text-gray-700 dark:text-gray-200",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        {labelRightElement && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {labelRightElement}
          </div>
        )}
      </div>
    )}
    {children}
    {preserveErrorSpace ? (
      <div className="min-h-5">
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    ) : (
      error && <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);
