import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AppNav from "./components/AppNav";
import ToastBar from "./components/ToastBar";
import { LinearProgress } from "@mui/material";

import { useSelector } from "react-redux";

const App = () => {
  const location = useLocation();
  const appLoading = useSelector((store) => store.alerts.loading);
  const isTodosPage = location.pathname.includes("/list/");

  console.log("@@ App render");

  return (
    <>
      {!isTodosPage && <AppNav />}
      {appLoading && <LinearProgress color="secondary" />}
      <Outlet />
      <ToastBar />
    </>
  );
};

export default App;
