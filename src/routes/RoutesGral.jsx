//Aqui van las rutas de las paginas
  import React from "react";
  import { Routes, Route } from "react-router-dom";
  import Nav from "../components/Nav";
  import HomeScreen from "../pages/HomeScreen";
  import ErrorScreen from "../pages/ErrorScreen"

  import MenuScreen from "../pages/MenuScreen";
import Pedido from "../pages/Pedido";

const RoutesGral = () => {
   return (
     <>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/*" element={<ErrorScreen/>}/>
        <Route path="/pedido" element={<Pedido/>} />
        <Route path='/menu' element={<MenuScreen/>}/>
      </Routes>
     </>
   );
 };
export default RoutesGral;