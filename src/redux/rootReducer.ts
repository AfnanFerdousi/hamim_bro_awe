import { combineReducers } from "@reduxjs/toolkit";
import stepSlice from "./slices/stepSlice";

const rootReducer = combineReducers({
  steps: stepSlice,
});

export default rootReducer;
