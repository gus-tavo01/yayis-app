import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themesService from "../../services/themesService";

import defaults from "../../constants/defaults";

// async actions
export const fetchThemes = createAsyncThunk(
  "themes/fetch",
  async (params, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const response = await themesService.get(params);
    dispatch(setLoading(false));

    if (!navigator.onLine || response.errorMessage === "Network Error")
      return null;

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
    items: [defaults.theme],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchThemes.fulfilled]: (state, action) => {
      if (action.payload) {
        state.items = action.payload.docs;
      }
    },
  },
});

export const { setLoading } = themesSlice.actions;
export default themesSlice.reducer;
