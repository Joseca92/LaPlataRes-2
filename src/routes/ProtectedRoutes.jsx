import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
