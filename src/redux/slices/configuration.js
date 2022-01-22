import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "../../services/usersService";

export const updateConfiguration = createAsyncThunk(
  "configuration/update",
  async (update, { dispatch, getState }) => {
    const { auth } = getState();

    if (auth.user) {
      dispatch(setLoading(true));
      const { id } = auth.user;

      await usersService.update(id, { configuration: update });
      // TODO
      // handle response
    }

    return update;
  }
);

const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    loading: false,
    language: "",
    theme: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setConfig: (state, { payload }) => {
      state.language = payload.language;
      state.theme = payload.theme;
      state.loading = false;
    },
    clearConfig: (state) => {
      state.language = "";
      state.theme = "";
      state.loading = false;
    },
  },
  extraReducers: {
    [updateConfiguration.fulfilled]: (state, { payload }) => {
      if (payload.theme) state.theme = payload.theme;
      if (payload.language) state.language = payload.language;

      state.loading = false;
    },
  },
});

export const { setLoading, setConfig, clearConfig } =
  configurationSlice.actions;
export default configurationSlice.reducer;
