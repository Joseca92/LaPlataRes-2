//Aqui van las rutas de las paginas
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Pedido from "../pages/Pedido";
import UsuariosABM from "../pages/UsuariosABM";

const RoutesDos = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/pedido" element={<Pedido/>} />
      <Route path="/usuarios" element={<UsuariosABM/>} />
      </Routes>
    </>
  );
};

export default RoutesDos;