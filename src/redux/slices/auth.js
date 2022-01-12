import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import usersService from "../../services/usersService";

import { setLoading as setAlertsLoading } from "./alerts";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await authService.login(credentials);

    if (response.statusMessage === "Unauthorized") {
      dispatch(setError("El correo o la contraseña no son validos."));
      return null;
    }

    if (response.errorMessage) {
      dispatch(setError("Algo salio mal, vuelve a intentarlo mas tarde"));
      return null;
    }

    const { token } = response?.payload;
    localStorage.setItem("authToken", token);
    usersService.setToken(token);

    const getUserParams = { email: credentials.email };
    const getProfileResponse = await usersService.get(getUserParams);

    if (getProfileResponse.errorMessage) {
      dispatch(setError("Algo salio mal, vuelve a intentarlo mas tarde"));
      return null;
    }

    const [user = null] = getProfileResponse.payload?.docs;
    return user;
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (logout, { dispatch }) => {
    dispatch(setAlertsLoading(true));
    localStorage.removeItem("authToken");

    // TODO
    // clean up user data
    // lists
    // configuration
    dispatch(setAlertsLoading(false));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
    },
  },
});

export const { setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
