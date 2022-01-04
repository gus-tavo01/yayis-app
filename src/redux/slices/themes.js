import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import themesService from "../../services/themesService";

// async actions
export const fetchThemes = createAsyncThunk(
  "themes/fetch",
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await themesService.find(params);
    dispatch(setLoading(false));

    // TODO: TBD
    // const translatedMessage;
    // if response.errorMessage -> dispatch(setMessage(translatedMessage));

    return response?.payload;
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
      state.items = action.payload?.docs || [];
    },
  },
});

export const { setLoading } = themesSlice.actions;
export default themesSlice.reducer;
