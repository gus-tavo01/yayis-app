import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themesService from "../../services/themesService";

export const fetchThemes = createAsyncThunk(
  "themes/fetch",
  async (params, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const response = await themesService.get(params);
    dispatch(setLoading(false));

    // TODO
    // handle network error
    // dispatch(alert("error", "Network error"));
    if (!navigator.onLine || response.errorMessage === "Network Error")
      return null;

    // TODO:
    // const translatedMessage;
    // if (response.errorMessage) {}
    // dispatch(setMessage(translatedMessage));

    return response.payload?.docs;
  }
);

const themesSlice = createSlice({
  name: "themes",
  initialState: {
    loading: false,
    items: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchThemes.fulfilled]: (state, action) => {
      if (action.payload) {
        state.items = action.payload;
      }
    },
  },
});

export const { setLoading } = themesSlice.actions;
export default themesSlice.reducer;
