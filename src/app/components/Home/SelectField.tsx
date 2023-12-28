import React, { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  register: UseFormRegisterReturn;
}

const SelectField = ({ label, register, ...selectProps }: SelectProps) => {
  const { ref, ...rest } = register; // Extract the ref from register

  return (
    <div>
      <label className="text-lg text-[#111112] font-semibold mb-3 block">
        {label} {selectProps.required && <span>*</span>}
      </label>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
        >
          <path
            d="M1 1L8.5 9L16 1"
            stroke="#515156"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          ref={ref} // Use ref directly
          className="border border-[#DCDCDC] rounded-[30px] w-full focus:outline-none focus:border-[#5B6CFF] 
        py-4 px-[26px] appearance-none"
          {...rest} // Spread the remaining props
          {...selectProps}
        />
      </div>
    </div>
  );
};

export default SelectField;
