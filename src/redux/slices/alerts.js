import { createSlice } from "@reduxjs/toolkit";

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    loading: false,
    toast: {
      isOpen: false,
      message: null,
      severity: "info",
      slide: "left",
    },
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    openAlert: (state, { payload }) => {
      state.toast = {
        isOpen: true,
        severity: payload.severity,
        message: payload.message,
      };
    },
    closeAlert: (state) => {
      state.toast = { isOpen: false, severity: "info", message: null };
    },
  },
});

export const { openAlert, closeAlert, setLoading } = alertsSlice.actions;
export default alertsSlice.reducer;
