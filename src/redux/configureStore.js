import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import themesReducer from "./slices/themes";
import languagesReducer from "./slices/languages";
import listsReducer from "./slices/lists";
import configurationReducer from "./slices/configuration";
import authReducer from "./slices/auth";

const setStore = () => {
  const rootReducer = combineReducers({
    languages: languagesReducer,
    themes: themesReducer,
    configuration: configurationReducer,
    lists: listsReducer,
    auth: authReducer,
  });

  const persistConfig = {
    key: "root",
    storage,
    version: 1,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  const persistor = persistStore(store);

  return { store, persistor };
};

export default setStore;
