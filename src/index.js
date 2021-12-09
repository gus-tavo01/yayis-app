import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';

// redux store
import { Provider } from "react-redux";
import store from "./redux/store";

import Themed from "./components/Themed";
import { CssBaseline } from "@mui/material";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ListsPage from "./pages/ListsPage";
import TodosPage from "./pages/TodosPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Themed>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<ListsPage />} />
              <Route path="list/:listId" element={<TodosPage />} />
              {/* Login, Register, About */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Themed>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
