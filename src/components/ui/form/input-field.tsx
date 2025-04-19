
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { FormFieldWrapper } from "./FormFieldWrapper";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: IconType;
  rightElement?: React.ReactNode;
  labelRightElement?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  preserveErrorSpace?: boolean;
  error?: string; // Explicitly define error prop
}

export const InputField = ({
  id,
  label,
  value,
  onChange,
  icon,
  rightElement,
  labelRightElement,
  className,
  inputClassName,
  preserveErrorSpace = true,
  error, // Destructure error from props
  ...props
}: InputFieldProps) => {
  return (
    <FormFieldWrapper
      id={id}
      label={label}
      error={error} // Pass error to FormFieldWrapper
      required={props.required}
      labelRightElement={labelRightElement}
      preserveErrorSpace={preserveErrorSpace}
      className={className}
    >
      <div className='relative'>
        {icon && (
          <div
            className={twMerge(
              "absolute left-3 top-1/2 transform -translate-y-1/2",
              error ? "text-red-500" : value?.length ? "text-green-500" : "text-gray-400 dark:text-gray-500"
            )}
          >
            {React.createElement(icon, { className: "w-4 h-4" })}
          </div>
        )}
        <input
          id={id}
          value={value}
          onChange={onChange}
          className={twMerge(
            "w-full h-10 px-3 py-2 rounded border text-sm",
            "focus:outline-none focus:ring-2 focus:border-transparent",
            "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100",
            "placeholder-gray-400 dark:placeholder-gray-500",
            "disabled:bg-gray-50 dark:disabled:bg-gray-800/50 disabled:opacity-75",
            error
              ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-500/30"
              : "border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-500/30",
            icon ? "pl-10" : "pl-3",
            rightElement ? "pr-10" : "pr-3",
            inputClassName
          )}
          {...props} // This now only spreads valid input props
        />
        {rightElement && <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>{rightElement}</div>}
      </div>
    </FormFieldWrapper>
  );
};
