import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import defaults from "../../constants/defaults";

export const updateConfiguration = createAsyncThunk(
  "configuration/update",
  async (update, { dispatch, getState }) => {
    const { auth } = getState();
    if (auth.user) {
      dispatch(setLoading(true));
      // service.update(user.id, update);
      dispatch(setLoading(false));
      // return response?.payload;
    }

    return update;
  }
);

const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    loading: false,
    language: defaults.language,
    theme: defaults.theme,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [updateConfiguration.fulfilled]: (state, { payload }) => {
      if (payload.theme) state.theme = payload.theme;
      if (payload.language) state.language = payload.language;
    },
  },
});

export const { setLoading } = configurationSlice.actions;
export default configurationSlice.reducer;
