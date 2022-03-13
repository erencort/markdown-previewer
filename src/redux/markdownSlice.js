import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    inputText: "",
    outputText: "",
    isDisabled: false,
  },
  reducers: {
    onInputChange: (state, action) => {
      state.inputText = action.payload;
      state.outputText = action.payload;
    },
    toggleExapmle: (state, action) => {
      state.isDisabled = !state.isDisabled;
      state.inputText = action.payload;
      state.outputText = action.payload;
      console.log(action.payload);
    },
  },
});

export default markdownSlice.reducer;
export const { onInputChange, toggleExapmle } = markdownSlice.actions;
