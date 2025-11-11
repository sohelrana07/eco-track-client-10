import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import LoadingSpinner from "../Pages/LoadingSpinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
