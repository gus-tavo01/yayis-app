import { createAsyncThunk } from "@reduxjs/toolkit";

// actions for App configuration
export const setConfiguration = createAsyncThunk(
  "configuration/set",
  async (configuration) => {
    // TODO:
    // add service method
    // patch user configuration
    return configuration;
  }
);

export const fetchConfigOptions = createAsyncThunk(
  "configuration/fetchOptions",
  async (params) => ({
    themes: {
      docs: [
        { id: "123", name: "Dark green", type: "dark" },
        { id: "456", name: "Light blue", type: "light" },
      ],
    },
    languages: {
      docs: [
        { id: "1", name: "English" },
        { id: "2", name: "Spanish" },
      ],
    },
  })
);

const configurationActions = {
  setConfiguration,
  fetchConfigOptions,
};
export default configurationActions;
