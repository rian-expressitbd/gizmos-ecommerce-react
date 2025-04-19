import React from "react";

export interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="form-radio text-blue-500 "
      />
      <label
        htmlFor={id}
        className={`ml-2  text-sm  text-gray-700 ${
          disabled ? "text-gray-400" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
