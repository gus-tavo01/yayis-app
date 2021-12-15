import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import todosService from "../../services/todosService";

// define actions here
export const getLists = createAsyncThunk("lists/get", todosService.getLists);
// export const createList
// export const updateList
// export const removeList

const initialState = { loading: true };

const listsSlice = createSlice({
  name: "lists",
  initialState,
  extraReducers: {
    [getLists.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export default listsSlice.reducer;
