import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, path }) => {
  const { user } = useAuth();
  const location = useLocation();

  const handleElement = () => {
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
  };

  return <Route path={path} element={handleElement()} />;
};

export default PrivateRoute;
