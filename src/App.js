import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AppNav from "./components/AppNav";
import TodosNav from "./components/TodosNav";

const App = () => {
  const location = useLocation();
  const isTodosPage = location.pathname.includes("/list/");

  console.log("@@ App render");

  return (
    <>
      {!isTodosPage ? <AppNav /> : <TodosNav />}
      <Outlet />
    </>
  );
};

export default App;
