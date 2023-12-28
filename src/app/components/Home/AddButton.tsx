import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add additional props specific to your button
}

const AddButton = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={`h-[60px] aspect-square transition-all border border-[#DCDCDC] rounded-full flex items-center justify-center ${className}`}
      {...buttonProps}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="7" width="2" height="16" rx="1" fill="#515156" />
        <rect
          y="9"
          width="2"
          height="16"
          rx="1"
          transform="rotate(-90 0 9)"
          fill="#515156"
        />
      </svg>
    </button>
  );
};

export default AddButton;
