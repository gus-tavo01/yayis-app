import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import languagesService from "../../services/languagesService";

import defaults from "../../constants/defaults";

// async actions
export const fetchLanguages = createAsyncThunk(
  "languages/fetch",
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await languagesService.get(params);
    dispatch(setLoading(false));

    if (!navigator.onLine || response.errorMessage === "Network Error")
      return null;

    // TODO:
    // const translatedMessage;
    // if response.errorMessage -> dispatch(setMessage(translatedMessage));

    return response?.payload;
  }
);

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    loading: false,
    items: [defaults.language],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchLanguages.fulfilled]: (state, action) => {
      if (action.payload) {
        state.items = action.payload.docs;
      }
    },
  },
});

export const { setLoading } = languagesSlice.actions;
export default languagesSlice.reducer;
