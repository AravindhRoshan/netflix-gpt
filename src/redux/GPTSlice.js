import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTState",
  initialState: {
    isGPTSearchPage: false,
  },
  reducers: {
    updateGPTState: (state, action) => {
      state.isGPTSearchPage = true;
    },
  },
});

export const { updateGPTState } = GPTSlice.actions;

export default GPTSlice.reducer;
