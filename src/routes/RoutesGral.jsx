//Aqui van las rutas de las paginas
 import React from "react";
 import { Routes, Route } from "react-router-dom";
 import Nav from "../components/Nav";
 
 import HomeScreen from "../pages/HomeScreen";
import MenuScreen from "../pages/MenuScreen";


const RoutesDos = () => {
   return (
     <>
     <Nav/>
       <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/menu' element={<MenuScreen/>}/>
       </Routes>
    
     </>
   );
 };

// export default RoutesDos;