import { Navigate } from "react-router-dom";
import React from "react";
import { getUsuariosById } from "../helpers/fetchUsuario";

const ProtectedAdmin = ({ children }) => {
    getUsuariosById

  const token = JSON.parse(localStorage.getItem("token")) || null;

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedAdmin;
