import React, { InputHTMLAttributes, useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: RadioOption[];
  name: string;
  onValueChange?: (value: string) => void;
}

const RadioField: React.FC<RadioProps> = ({
  label,
  options,
  name,
  onValueChange,
  ...radioProps
}: RadioProps) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);

    // Invoke the callback if provided
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div>
      <label className="text-lg text-[#111112] font-semibold mb-3 block">
        {label} {radioProps.required && <span>*</span>}
      </label>
      <div className="flex">
        {options.map((option) => (
          <div key={option.value} className="flex items-center mr-4">
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleRadioChange(option.value)}
              {...radioProps}
            />
            <label htmlFor={option.value} className="ml-2">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
