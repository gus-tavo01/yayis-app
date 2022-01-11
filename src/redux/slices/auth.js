import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import usersService from "../../services/usersService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await authService.login(credentials);
    // TODO
    // if (response.errorMessage) {
    //   // dispatch(error);
    //   return null;
    // }
    const { token } = response?.payload;
    localStorage.setItem("authToken", token);
    usersService.setToken(token);

    const getUserParams = { email: credentials.email };
    const getProfileResponse = await usersService.get(getUserParams);
    // TODO
    // if (getProfileResponse.errorMessage) { dispatch(error); return null; }
    const [user] = getProfileResponse.payload?.docs;
    dispatch(setLoading(false));
    return user || null;
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (logout, { dispatch }) => {
    dispatch(setLoading(true));
    localStorage.removeItem("authToken");
  }
);

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
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export const { setLoading } = authSlice.actions;
export default authSlice.reducer;
