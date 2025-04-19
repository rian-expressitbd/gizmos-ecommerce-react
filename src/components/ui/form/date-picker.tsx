import { twMerge } from "tailwind-merge";
import { FormFieldWrapper } from "./FormFieldWrapper";

interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const DatePicker = ({ id, label, value, onChange, error, className, ...props }: DatePickerProps) => (
  <FormFieldWrapper id={id} label={label} error={error} className={className}>
    <div className='relative'>
      <input
        type='date'
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(
          "w-full h-10 px-3 py-2 rounded-md border text-sm",
          "focus:outline-none focus:ring-2 focus:border-transparent",
          error
            ? "border-red-500 focus:ring-red-200 dark:focus:ring-red-500/30"
            : "border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-500/30",
          props.disabled && "bg-gray-50 dark:bg-gray-800/50 opacity-75"
        )}
        {...props}
      />
    </div>
  </FormFieldWrapper>
);
