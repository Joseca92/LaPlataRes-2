//Aqui van las rutas de las paginas
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Pedido from "../pages/Pedido";


const RoutesDos = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/pedido" element={<Pedido/>} />
      </Routes>
    </>
  );
};

export default RoutesDos;