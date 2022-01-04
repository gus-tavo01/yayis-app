import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import languagesService from "../../services/languagesService";

// async actions
export const fetchLanguages = createAsyncThunk(
  "languages/fetch",
  async (params, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await languagesService.find(params);
    dispatch(setLoading(false));

    // TODO:
    // const translatedMessage;
    // if response.errorMessage -> dispatch(setMessage(translatedMessage));

    return response?.payload;
  }
);

const initialState = {
  items: [],
  loading: false,
};

const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchLanguages.fulfilled]: (state, action) => {
      state.items = action.payload?.docs || [];
    },
  },
});

export const { setLoading } = languagesSlice.actions;
export default languagesSlice.reducer;
