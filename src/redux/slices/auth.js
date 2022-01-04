import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService from '../../services/authService';
// import usersService from '../../services/usersService';

const login = createAsyncThunk(
  "post/login",
  async (credentials, { dispatch }) => {
    // dispatch(setLoading(true));
    // const response await authService.login(credentials);
    // if (response.errorMessage) {
    //   // dispatch(error);
    //   return null;
    // }
    // localStorage.setItem("authToken", response?.payload?.token);
    // usersService.setToken(token);
    // const getUserResponse = await usersService.get(credentials.email);
    // if (getUserResponse.errorMessage) { dispatch(error); return null; }
    // dispatch(setLoading(false));
    // return getUserResponse?.payload;
  }
);

const logout = createAsyncThunk("", async ({ dispatch }) => {
  // dispatch(setLoading(true));
  // localStorage.removeItem("authToken");
  // dispatch(setLoading(false));
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = null;
    },
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
