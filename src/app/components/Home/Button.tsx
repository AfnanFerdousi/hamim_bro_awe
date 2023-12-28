import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add additional props specific to your button
}

const Button = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={`py-[15px] px-[45px] bg-[#5B6CFF] rounded-[100px] text-white hover:bg-[#F0F2FF] transition-all hover:text-[#111112] ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
