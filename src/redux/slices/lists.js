import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { v4 as uuid } from "uuid";
import listsService from "../../services/listsService";

// #region auto set token
const token = localStorage.getItem("authToken");

if (token) {
  listsService.setToken(token);
}
// #endregion auto set token

export const fetchUserLists = createAsyncThunk(
  "lists/fetch",
  async (params, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();

    dispatch(setLoading(true));
    const response = await listsService.get(user.id, params);
    return response?.payload;
  }
);

export const createList = createAsyncThunk(
  "lists/create",
  async (list, { dispatch, getState }) => {
    const {
      auth: { user },
    } = getState();
    dispatch(setLoading(true));

    if (user) {
      const response = await listsService.create(user.id, list);
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

// #region Todos
export const createTodo = createAsyncThunk(
  "todos/create",
  async (todoData, { dispatch, getState }) => {
    const { auth } = getState();

    if (auth.user) {
      dispatch(setLoading(true));
      const { listId, ...todo } = todoData;

      const createRes = await listsService.addTodo(listId, todo);

      // TODO
      // handle errors

      return { ...createRes.payload, listId };
    }

    return { ...todoData, id: uuid() };
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async (todoData, { dispatch, getState }) => {
    const { auth } = getState();

    if (auth.user) {
      dispatch(setLoading(true));
      const { listId, id: todoId, ...update } = todoData;
      await listsService.updateTodo(listId, todoId, update);

      // TODO
      // handle errors
    }

    return todoData;
  }
);
export const removeTodo = createAsyncThunk(
  "todos/remove",
  async (todoData, { dispatch, getState }) => {
    const { auth } = getState();

    if (auth.user) {
      const { listId, todoId } = todoData;
      dispatch(setLoading(true));

      await listsService.removeTodo(listId, todoId);

      // TODO
      // handle errors
    }

    return todoData;
  }
);
// #endregion Todos

const listsSlice = createSlice({
  name: "lists",
  initialState: { loading: false, items: [] },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearLists: (state) => {
      state.items = [];
      state.loading = false;
    },
  },
  extraReducers: {
    [createList.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    [fetchUserLists.fulfilled]: (state, action) => {
      state.loading = false;
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
    [createTodo.fulfilled]: (state, action) => {
      const { listId, ...newTodo } = action.payload;
      const list = state.items.find((list) => list.id === listId);

      if (list.todos) list.todos.push(newTodo);
      else list.todos = [newTodo];

      state.loading = false;
    },
    [updateTodo.fulfilled]: (state, action) => {
      const { listId, ...newTodo } = action.payload;
      const list = state.items.find((li) => li.id === listId);

      list.todos = list.todos.map((t) => {
        if (t.id === newTodo.id) return { ...t, ...newTodo };
        return t;
      });

      state.loading = false;
    },
    [removeTodo.fulfilled]: (state, action) => {
      const { listId, todoId } = action.payload;
      const list = state.items.find((li) => li.id === listId);

      list.todos = list.todos.filter((t) => t.id !== todoId);

      state.loading = false;
    },
  },
});

export const { setLoading, clearLists } = listsSlice.actions;
export default listsSlice.reducer;
