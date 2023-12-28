import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
}

const InputField = ({ label, register, ...inputProps }: InputProps) => {
  const { ref, ...rest } = register; // Extract the ref from register

  return (
    <div>
      <label className="text-lg text-[#111112] font-semibold mb-3 block">
        {label} {inputProps.required && <span>*</span>}
      </label>
      <input
        ref={ref} // Use ref directly
        className="border border-[#DCDCDC] rounded-[30px] w-full focus:outline-none focus:border-[#5B6CFF] 
        py-4 px-[26px]"
        {...rest} // Spread the remaining props
        {...inputProps}
      />
    </div>
  );
};

export default InputField;
