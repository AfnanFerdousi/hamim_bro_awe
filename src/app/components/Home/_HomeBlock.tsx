"use client";

import { useSelector } from "react-redux";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { RootState } from "@/redux/store";

const HomeBlock = () => {
  const state = useSelector((state: RootState) => state);

  // switch component based on activeState
  if (state.steps.activeStep === 1) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Step1 />
      </main>
    );
  } else if (state.steps.activeStep === 2) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Step2 />
      </main>
    );
  } else if (state.steps.activeStep === 3) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Step3 />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1>COMPLETED</h1>
    </main>
  );
};

export default HomeBlock;
