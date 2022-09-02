//Aqui van las rutas de las paginas/////
  import React from "react";
  import { Routes, Route } from "react-router-dom";
  import Nav from "../components/Nav";
  import HomeScreen from "../pages/HomeScreen";
  import ErrorScreen from "../pages/ErrorScreen"

  import MenuScreen from "../pages/MenuScreen";
import LoginScreen from "../pages/LoginScreen";
import RegistroScreen from "../pages/RegistroScreen";


const RoutesGral = () => {
   return (
     <>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/registro" element={<RegistroScreen/>}/>
        <Route path='/menu' element={<MenuScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
      </Routes>
     </>
   );
 };
export default RoutesGral;