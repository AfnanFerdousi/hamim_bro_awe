import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add additional props specific to your button
}

const ButtonSecondary = ({
  children,
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={`py-[15px] px-[45px] bg-[#F0F2FF] rounded-[100px] transition-all
      hover:bg-[#5B6CFF] hover:text-white
      ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
