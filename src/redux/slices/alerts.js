import { createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    isOpen: false,
    message: null,
    severity: "info",
    slide: "left",
  },
  reducers: {
    openAlert: (state, { payload }) => {
      state.isOpen = true;
      state.severity = payload.severity;
      state.message = payload.message;
    },
    closeAlert: (state, action) => {
      state.isOpen = false;
      state.severity = "info";
      state.message = null;
    },
  },
});

export const { openAlert, closeAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
