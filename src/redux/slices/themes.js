import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themesService from "../../services/themesService";

import { theme } from "../../constants/defaults";

// async actions
export const fetchThemes = createAsyncThunk(
  "themes/fetch",
  async (params, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const response = await themesService.get(params);
    dispatch(setLoading(false));

    if (!navigator.onLine || response.errorMessage === "Network Error") {
      const { configuration } = getState();
      return { docs: [theme, configuration.theme] };
    }

    // TODO:
    // const translatedMessage;
    // if (response.errorMessage) {}
    // dispatch(setMessage(translatedMessage));

    return response?.payload;
  }
);

const themesSlice = createSlice({
  name: "themes",
  initialState: {
    loading: false,
    items: [theme],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchThemes.fulfilled]: (state, action) => {
      state.items = action.payload.docs;
    },
  },
});

export const { setLoading } = themesSlice.actions;
export default themesSlice.reducer;
