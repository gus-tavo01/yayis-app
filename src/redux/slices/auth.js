import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService from '../../services/authService';
// import usersService from '../../services/usersService';

const initialState = {
  loading: false,
  user: null,
};

// const login = createAsyncThunk

const fetchProfile = createAsyncThunk(
  "fetch/profile",
  async ({ token, email }, { dispatch }) => {
    // dispatch(setLoading(true));
    // const response = await usersService.getProfile(token, email);
    // dispatch(setLoading(false));
    // return response?.payload;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchProfile.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
