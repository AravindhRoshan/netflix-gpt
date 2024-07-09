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
    removeGPTState: (state, action) => {
      state.isGPTSearchPage = false;
    },
  },
});

export const { updateGPTState, removeGPTState } = GPTSlice.actions;

export default GPTSlice.reducer;
