import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AppNav from "./components/AppNav";
import TodosNav from "./components/TodosNav";
import ToastBar from "./components/ToastBar";
import { LinearProgress } from "@mui/material";

import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const authLoading = useSelector((store) => store.auth.loading);
  const isTodosPage = location.pathname.includes("/list/");

  console.log("@@ App render");

  return (
    <>
      {!isTodosPage ? <AppNav /> : <TodosNav />}
      {authLoading && <LinearProgress color="secondary" />}
      <Outlet />
      <ToastBar />
    </>
  );
};

export default App;
