import { createSlice } from "@reduxjs/toolkit";

interface IStepState {
  activeStep: number;
}

const initialState: IStepState = {
  activeStep: 1,
};

const stepSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    nextStep: (state) => {
      // if step is 3, do nothing
      if (state.activeStep === 3) return;
      state.activeStep += 1;
    },
    prevStep: (state) => {
      // if step is 1, do nothing
      if (state.activeStep === 1) return;
      state.activeStep -= 1;
    },
  },
});

export const { nextStep, prevStep } = stepSlice.actions;
export default stepSlice.reducer;
