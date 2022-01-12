import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// redux store
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import Themed from "./components/Themed";
import { CssBaseline } from "@mui/material";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ListsPage from "./pages/ListsPage";
import TodosPage from "./pages/TodosPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ConfigurationPage from "./pages/ConfigurationPage";
import LoginPage from "./pages/LoginPage";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<p>Loading data...</p>}>
      <React.StrictMode>
        <Themed>
          <CssBaseline />
          <BrowserRouter basename={process.env.REACT_APP_NAME}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<ListsPage />} />
                <Route path="list/:listId" element={<TodosPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="configuration" element={<ConfigurationPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Themed>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
