import { createSlice } from "@reduxjs/toolkit";
import configurationActions from "../actions/configuration";

import defaultTheme from "../../themes/default";
import secondaryTheme from "../../themes/secondary";
const defaultLanguage = { id: "defaultId", name: "English" };

const initialState = {
  theme: defaultTheme,
  language: defaultLanguage,
  themes: { items: [defaultTheme, secondaryTheme], loading: false },
  languages: { items: [defaultLanguage], loading: false },
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: {
    [configurationActions.setConfiguration.fulfilled]: (state, action) => {
      if (action.payload.theme) state.theme = action.payload.theme;
      if (action.payload.language) state.language = action.payload.language;
      state.loading = false;

      console.log("## reducer updating app state");
      console.log(action.payload);
    },
    [configurationActions.fetchConfigOptions.fulfilled]: (state, action) => {
      state.themes = action.payload.themes;
      state.languages = action.payload.languages;
      state.loading = false;
    },
  },
});

export const { setTheme } = configurationSlice.actions;
export default configurationSlice.reducer;
