import React from "react";

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-[890px] max-w-[92vw] rounded-[30px] p-[30px] md:p-[60px]"
      style={{
        boxShadow: "0px 30px 120px 30px rgba(17, 17, 18, 0.10)",
      }}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
