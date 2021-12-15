import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./slices/lists";
import configurationReducer from "./slices/configuration";
// import authReducer from './slices/auth'

const reducers = {
  // auth: authReducer,
  configuration: configurationReducer,
  lists: listsReducer,
};

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
