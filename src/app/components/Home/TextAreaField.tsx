import React, { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn, FieldValues } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegisterReturn;
}

const TextareaField: React.FC<TextareaProps> = ({
  label,
  register,
  ...textareaProps
}: TextareaProps) => {
  const { ref, ...rest } = register; // Extract the ref from register

  return (
    <div>
      <label className="text-lg text-[#111112] font-semibold mb-3 block">
        {label} {textareaProps.required && <span>*</span>}
      </label>
      <textarea
        ref={ref} // Use ref directly
        className="border border-[#DCDCDC] rounded-[15px] w-full focus:outline-none focus:border-[#5B6CFF] 
        py-4 px-[26px] resize-none"
        {...rest} // Spread the remaining props
        {...textareaProps}
      />
    </div>
  );
};

export default TextareaField;
