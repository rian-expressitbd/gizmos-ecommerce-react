import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { FormFieldWrapper } from "./FormFieldWrapper";

type CalendarProps = {
  id: string;
  label?: string;
  mode?: "single" | "multi" | "range";
  selectedDates?: Date[];
  onDateChange: (dates: Date[]) => void;
  className?: string;
  inputClassName?: string;
  calendarClassName?: string;
  placeholder?: string;
  position?: "auto" | "top" | "bottom";
  error?: string;
  preserveErrorSpace?: boolean;
  required?: boolean;
  showMonthYearSelection?: boolean; // New prop to enable month/year selection
};

const Calendar: React.FC<CalendarProps> = ({
  id,
  label,
  mode = "single",
  selectedDates = [],
  onDateChange,
  className,
  inputClassName,
  calendarClassName,
  placeholder = "Select date",
  position = "auto",
  error,
  preserveErrorSpace = true,
  required = false,
  showMonthYearSelection = true, // Default to true
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempStartDate, setTempStartDate] = useState<Date | null>(null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<"date" | "month" | "year">("date");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calculatedPosition, setCalculatedPosition] = useState<"top" | "bottom">("bottom");
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  // Calculate available space and determine position
  useEffect(() => {
    if (isCalendarOpen && position === "auto" && inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;
      const calendarHeight = viewMode === "date" ? 350 : viewMode === "month" ? 300 : 350;

      setCalculatedPosition(spaceBelow > calendarHeight || spaceBelow > spaceAbove ? "bottom" : "top");
    }
  }, [isCalendarOpen, position, viewMode]);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
        setViewMode("date"); // Reset to date view when closing
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDateClick = (date: Date) => {
    let newSelectedDates: Date[] = [];

    if (mode === "single") {
      newSelectedDates = [date];
      setIsCalendarOpen(false);
      setViewMode("date");
    } else if (mode === "multi") {
      const isSelected = selectedDates.some((d) => d.toDateString() === date.toDateString());
      newSelectedDates = isSelected
        ? selectedDates.filter((d) => d.toDateString() !== date.toDateString())
        : [...selectedDates, date];
    } else if (mode === "range") {
      if (!tempStartDate) {
        setTempStartDate(date);
        newSelectedDates = [date];
      } else {
        const start = tempStartDate < date ? tempStartDate : date;
        const end = tempStartDate < date ? date : tempStartDate;
        newSelectedDates = getDatesInRange(start, end);
        setTempStartDate(null);
        setHoveredDate(null);
        setIsCalendarOpen(false);
        setViewMode("date");
      }
    }

    onDateChange(newSelectedDates);
  };

  const getDatesInRange = (start: Date, end: Date): Date[] => {
    const dates: Date[] = [];
    const current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const formatSelectedDates = () => {
    if (mode === "single") {
      return selectedDates[0]?.toLocaleDateString() || "";
    } else if (mode === "multi") {
      return selectedDates.map((d) => d.toLocaleDateString()).join(", ");
    } else if (mode === "range") {
      return selectedDates.length > 1
        ? `${selectedDates[0].toLocaleDateString()} - ${selectedDates[selectedDates.length - 1].toLocaleDateString()}`
        : "";
    }
    return "";
  };

  const renderDaysForMonth = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const endDay = lastDayOfMonth.getDate();
    const todayString = new Date().toDateString();

    // Fill empty days
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className='h-10' />);
    }

    // Render days with proper range highlighting
    for (let i = 1; i <= endDay; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isSelected = selectedDates.some((d) => d.toDateString() === date.toDateString());
      const isToday = date.toDateString() === todayString;

      // Range selection logic
      let isInRange = false;
      if (mode === "range") {
        if (selectedDates.length > 1) {
          isInRange = date > selectedDates[0] && date < selectedDates[selectedDates.length - 1];
        } else if (tempStartDate && hoveredDate) {
          const rangeStart = tempStartDate < hoveredDate ? tempStartDate : hoveredDate;
          const rangeEnd = tempStartDate < hoveredDate ? hoveredDate : tempStartDate;
          isInRange = date > rangeStart && date < rangeEnd;
        }
      }

      const dayClass = twMerge(
        "h-10 w-10 flex items-center justify-center rounded text-sm transition-colors",
        isToday && "font-bold bg-blue-100 dark:bg-blue-900/50",
        isSelected
          ? error
            ? "bg-red-600 text-white"
            : "bg-blue-600 text-white"
          : isInRange
          ? error
            ? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200"
            : "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
          : "hover:bg-gray-100 dark:hover:bg-gray-700"
      );

      days.push(
        <button
          key={i}
          type='button'
          className={dayClass}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => mode === "range" && tempStartDate && setHoveredDate(date)}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  const renderMonths = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <div className='grid grid-cols-3 gap-3 p-2'>
        {months.map((month, index) => (
          <button
            key={month}
            type='button'
            className={twMerge(
              "p-2 rounded text-center transition-colors",
              currentDate.getMonth() === index ? "bg-blue-600 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
            onClick={() => {
              setCurrentDate(new Date(currentDate.getFullYear(), index, 1));
              setViewMode("date");
            }}
          >
            {month.substring(0, 3)}
          </button>
        ))}
      </div>
    );
  };

  const renderYears = () => {
    const startYear = Math.floor(currentDate.getFullYear() / 10) * 10 - 1;
    const years = Array.from({ length: 16 }, (_, i) => startYear + i);

    return (
      <div className='grid grid-cols-4 gap-3 p-2'>
        {years.map((year) => (
          <button
            key={year}
            type='button'
            className={twMerge(
              "p-2 rounded text-center transition-colors",
              currentDate.getFullYear() === year ? "bg-blue-600 text-white" : "hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
            onClick={() => {
              setCurrentDate(new Date(year, currentDate.getMonth(), 1));
              setViewMode("month");
            }}
          >
            {year}
          </button>
        ))}
      </div>
    );
  };

  const navigatePrevious = () => {
    if (viewMode === "date") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    } else if (viewMode === "month") {
      setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
    } else if (viewMode === "year") {
      setCurrentDate(new Date(currentDate.getFullYear() - 10, currentDate.getMonth(), 1));
    }
  };

  const navigateNext = () => {
    if (viewMode === "date") {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    } else if (viewMode === "month") {
      setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
    } else if (viewMode === "year") {
      setCurrentDate(new Date(currentDate.getFullYear() + 10, currentDate.getMonth(), 1));
    }
  };

  const toggleCalendar = () => {
    if (!isCalendarOpen && position === "auto" && inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - inputRect.bottom;
      const spaceAbove = inputRect.top;
      const calendarHeight = viewMode === "date" ? 350 : viewMode === "month" ? 300 : 350;

      setCalculatedPosition(spaceBelow > calendarHeight || spaceBelow > spaceAbove ? "bottom" : "top");
    }
    setIsCalendarOpen(!isCalendarOpen);
    if (!isCalendarOpen) setViewMode("date"); // Reset to date view when opening
  };

  const finalPosition = position === "auto" ? calculatedPosition : position;

  return (
    <FormFieldWrapper
      id={id}
      label={label}
      error={error}
      preserveErrorSpace={preserveErrorSpace}
      required={required}
      className={className}
    >
      <div className='relative' ref={calendarRef}>
        <div
          ref={inputRef}
          className={twMerge(
            "flex items-center h-10 px-3 py-2 rounded border text-sm",
            "focus-within:outline-none focus-within:ring-2 focus-within:border-transparent",
            error
              ? "border-red-500 focus-within:ring-red-200 dark:focus-within:ring-red-500/30"
              : "border-gray-300 dark:border-gray-600 focus-within:ring-blue-200 dark:focus-within:ring-blue-500/30",
            inputClassName
          )}
          onClick={toggleCalendar}
        >
          <input
            type='text'
            readOnly
            value={formatSelectedDates()}
            placeholder={placeholder}
            className='flex-1 outline-none bg-transparent dark:text-white cursor-pointer'
          />
          <FaCalendarAlt className='text-gray-400 dark:text-gray-500 ml-2' />
        </div>

        {isCalendarOpen && (
          <div
            className={twMerge(
              "absolute z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
              "rounded shadow-lg mt-1 w-full min-w-[300px] max-w-md",
              finalPosition === "top" ? "bottom-full mb-2" : "top-full",
              calendarClassName
            )}
          >
            {/* Calendar Header */}
            <div
              className={twMerge(
                "flex justify-between items-center px-4 py-2 rounded-t",
                error ? "bg-red-600 text-white" : "bg-blue-600 text-white"
              )}
            >
              <button
                onClick={navigatePrevious}
                className='p-1 rounded-full hover:bg-white/20 transition'
                aria-label='Previous'
              >
                <FaChevronLeft />
              </button>

              {showMonthYearSelection ? (
                <div className='flex gap-2'>
                  <button onClick={() => setViewMode("year")} className='font-medium hover:underline'>
                    {currentDate.getFullYear()}
                  </button>
                  {viewMode !== "year" && (
                    <button onClick={() => setViewMode("month")} className='font-medium hover:underline'>
                      {currentDate.toLocaleString("default", { month: "long" })}
                    </button>
                  )}
                </div>
              ) : (
                <div className='font-medium'>
                  {currentDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              )}

              <button
                onClick={navigateNext}
                className='p-1 rounded-full hover:bg-white/20 transition'
                aria-label='Next'
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Calendar Content */}
            <div className='p-2'>
              {viewMode === "date" && (
                <>
                  <div className='grid grid-cols-7 gap-1 mb-2'>
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div
                        key={day}
                        className='text-center text-sm font-medium text-gray-500 dark:text-gray-400 h-10 flex items-center justify-center'
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className='grid grid-cols-7 gap-1'>{renderDaysForMonth()}</div>
                </>
              )}
              {viewMode === "month" && renderMonths()}
              {viewMode === "year" && renderYears()}
            </div>
          </div>
        )}
      </div>
    </FormFieldWrapper>
  );
};

export default Calendar;
