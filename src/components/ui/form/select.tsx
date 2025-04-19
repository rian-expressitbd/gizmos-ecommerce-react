import React, { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { FiCheck, FiChevronDown, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { FormFieldWrapper } from "./FormFieldWrapper";

export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface SelectProps {
  options: Option[];
  value: Option[];
  placeholder?: string;
  onChange: (selectedOptions: Option[]) => void;
  mode?: "single" | "multi";
  className?: string;
  disabled?: boolean;
  searchable?: boolean;
  menuPlacement?: "bottom" | "top";
  dropdownSize?: "sm" | "md" | "lg";
  dropdownWidth?: "xs" | "sm" | "md" | "lg" | "full" | string;
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  labelRightElement?: React.ReactNode;
  preserveErrorSpace?: boolean;
  dropdownIndicator?: React.ComponentType<{ className?: string }>;
  clearAllConfirmation?: string;
  noOptionsMessage?: string;
  searchPlaceholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value = [],
  placeholder = "Select...",
  onChange,
  mode = "single",
  className,
  disabled = false,
  searchable = false,
  menuPlacement = "bottom",
  dropdownSize = "md",
  dropdownWidth = "full",
  id,
  label,
  required = false,
  error,
  labelRightElement,
  preserveErrorSpace = true,
  dropdownIndicator: DropdownIndicator = FiChevronDown,
  clearAllConfirmation = "Are you sure you want to clear all selections?",
  noOptionsMessage = "No options found",
  searchPlaceholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const isSelected = useCallback((option: Option) => value.some((v) => v.value === option.value), [value]);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (!isOpen && searchable) {
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }
  }, [disabled, isOpen, searchable]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
        if (!isOpen) {
          handleToggle();
        } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleOptionClick(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setSearchTerm("");
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          handleToggle();
        } else {
          setFocusedIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedIndex(filteredOptions.length - 1);
        break;
      case "Tab":
      case "Backspace":
        if (!searchTerm && value.length > 0 && mode === "multi") {
          handleRemove(value[value.length - 1]);
        }
        break;
      default:
        if (!isOpen && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
          handleToggle();
          if (searchable) {
            setSearchTerm(e.key);
            setTimeout(() => inputRef.current?.focus(), 0);
          }
        }
    }
  };

  const handleOptionClick = useCallback(
    (option: Option) => {
      if (!disabled && !option.disabled) {
        if (mode === "multi") {
          const exists = value.find((v) => v.value === option.value);
          if (exists) {
            onChange(value.filter((v) => v.value !== option.value));
          } else {
            onChange([...value, option]);
          }
        } else {
          onChange([option]);
          setIsOpen(false);
        }
        setSearchTerm("");
      }
    },
    [disabled, mode, onChange, value]
  );

  const handleRemove = useCallback(
    (option: Option) => {
      if (!disabled) {
        onChange(value.filter((v) => v.value !== option.value));
        setFocusedIndex(-1);
      }
    },
    [disabled, onChange, value]
  );

  const handleClearAll = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!clearAllConfirmation || confirm(clearAllConfirmation)) {
        onChange([]);
        setFocusedIndex(-1);
      }
    },
    [clearAllConfirmation, onChange]
  );

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionsRef.current[focusedIndex]) {
      optionsRef.current[focusedIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownSizeStyles = {
    sm: "max-h-40",
    md: "max-h-60",
    lg: "max-h-80",
  };

  const placementStyles = {
    bottom: "top-full mt-1",
    top: "bottom-full mb-1",
  };

  const dropdownWidthStyles: Record<string, string> = {
    xs: "min-w-[100px]",
    sm: "min-w-[150px]",
    md: "min-w-[200px]",
    lg: "min-w-[300px]",
    full: "w-full",
  };

  return (
    <FormFieldWrapper
      id={id}
      label={label}
      error={error}
      required={required}
      labelRightElement={labelRightElement}
      preserveErrorSpace={preserveErrorSpace}
    >
      <div className='relative' ref={containerRef}>
        <div
          id={id}
          className={twMerge(
            "w-full rounded border",
            "focus:outline-none focus:ring-2 focus:border-transparent",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
            "disabled:bg-gray-50 dark:disabled:bg-gray-800/50 disabled:opacity-75",
            mode === "multi" ? "min-h-10" : "h-10",
            error
              ? "border-red-500 hover:border-red-600 focus:ring-red-200 dark:focus:ring-red-500/30"
              : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 focus:ring-blue-200 dark:focus:ring-blue-500/30",
            isOpen && "ring-2 ring-blue-200 dark:ring-blue-500/30 border-transparent",
            disabled && "cursor-not-allowed",
            className
          )}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          role='combobox'
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          aria-disabled={disabled}
          aria-required={required}
          aria-label={label || placeholder}
          onClick={handleToggle}
        >
          <div className='flex items-center h-full px-3 py-2'>
            <div className='flex-1 flex flex-wrap gap-1.5 items-center overflow-hidden'>
              {mode === "multi" && value.length > 0 ? (
                value.map((selected) => (
                  <div
                    key={selected.value}
                    className='inline-flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 text-xs px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800'
                  >
                    {selected.label}
                    {!disabled && (
                      <FiX
                        className='ml-1 w-3 h-3 cursor-pointer hover:text-red-500'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(selected);
                        }}
                        aria-label={`Remove ${selected.label}`}
                      />
                    )}
                  </div>
                ))
              ) : mode === "single" && value.length > 0 ? (
                <span className='text-gray-900 dark:text-gray-100 text-sm truncate'>{value[0].label}</span>
              ) : (
                <span className='text-gray-400 dark:text-gray-500 text-sm'>{placeholder}</span>
              )}
            </div>

            <div className='flex items-center ml-2'>
              {mode === "multi" && value.length > 0 && !disabled && (
                <FiX
                  className='w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer mr-1'
                  onClick={handleClearAll}
                  aria-label='Clear all selections'
                />
              )}
              <DropdownIndicator
                className={twMerge(
                  "w-4 h-4 transition-transform duration-200 text-gray-400 dark:text-gray-500",
                  isOpen ? "rotate-180" : ""
                )}
                aria-hidden='true'
              />
            </div>
          </div>
        </div>

        {isOpen && !disabled && (
          <div
            className={twMerge(
              "absolute z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
              "rounded shadow-lg overflow-auto",
              "animate-in fade-in-0 zoom-in-95 duration-100",
              placementStyles[menuPlacement],
              dropdownSizeStyles[dropdownSize],
              dropdownWidthStyles[dropdownWidth] || dropdownWidth
            )}
            role='listbox'
          >
            {searchable && (
              <div className='p-2 border-b border-gray-200 dark:border-gray-700'>
                <input
                  ref={inputRef}
                  type='text'
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setFocusedIndex(-1);
                  }}
                  className={twMerge(
                    "w-full h-8 px-2 rounded text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30",
                    "bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600",
                    "placeholder-gray-400 dark:placeholder-gray-500"
                  )}
                  aria-label='Search options'
                />
              </div>
            )}

            {filteredOptions.length === 0 && (
              <div className='px-3 py-2 text-sm text-gray-500 dark:text-gray-400'>{noOptionsMessage}</div>
            )}

            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                ref={(el) => {
                  optionsRef.current[index] = el;
                }}
                className={twMerge(
                  "px-3 py-2 flex items-center cursor-pointer",
                  "text-sm",
                  option.disabled
                    ? "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : isSelected(option)
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                  focusedIndex === index && !option.disabled && "bg-gray-100 dark:bg-gray-700"
                )}
                onClick={() => !option.disabled && handleOptionClick(option)}
                onMouseEnter={() => !option.disabled && setFocusedIndex(index)}
                role='option'
                aria-selected={isSelected(option)}
                aria-disabled={option.disabled}
              >
                {mode === "multi" && (
                  <div
                    className={twMerge(
                      "w-4 h-4 border rounded mr-2 flex items-center justify-center",
                      isSelected(option)
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-300 dark:border-gray-500",
                      option.disabled && "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    {isSelected(option) && <FiCheck className='w-3 h-3' />}
                  </div>
                )}
                {option.label}
                {option.disabled && <span className='ml-2 text-xs text-gray-400'>(disabled)</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </FormFieldWrapper>
  );
};

export default Select;
