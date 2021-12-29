import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";
import listsService from "../../services/listsService";

const initialState = { loading: false, items: [] };

export const fetchUserLists = createAsyncThunk(
  "lists/fetch",
  async (params, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();

    dispatch(setLoading(true));
    const response = await listsService.get(user.id, params);
    dispatch(setLoading(false));

    return response?.payload;
  }
);

export const createList = createAsyncThunk(
  "lists/create",
  async (list, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();

    if (user) {
      dispatch(setLoading(true));
      const response = await listsService.create(user.id, list);
      dispatch(setLoading(false));

      return response?.payload;
    }

    return { ...list, id: uuid() };
  }
);

export const updateList = createAsyncThunk(
  "lists/update",
  async (updatedList, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();

    if (user) {
      dispatch(setLoading(true));
      const response = await listsService.update(
        user.id,
        updatedList.id,
        updatedList
      );
      dispatch(setLoading(false));
      return response?.payload;
    }

    return updatedList;
  }
);

export const removeList = createAsyncThunk(
  "lists/remove",
  async (listId, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();

    if (user) {
      dispatch(setLoading(true));
      const response = await listsService.remove(user.id, listId);
      dispatch(setLoading(false));

      return response?.payload;
    }

    return listId;
  }
);

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [createList.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [fetchUserLists.fulfilled]: (state, action) => {
      state.items = action.payload?.docs || [];
    },
    [updateList.fulfilled]: (state, action) => {
      state.items = state.items.map((l) => {
        if (l.id === action.payload.id) {
          return { ...l, ...action.payload };
        }
        return l;
      });
    },
    [removeList.fulfilled]: (state, action) => {
      state.items = state.items.filter((l) => l.id !== action.payload);
    },
  },
});

export const { setLoading } = listsSlice.actions;
export default listsSlice.reducer;
