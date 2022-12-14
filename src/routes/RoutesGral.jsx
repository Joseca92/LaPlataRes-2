
  import React from "react";
  import { Routes, Route } from "react-router-dom";

  import HomeScreen from "../pages/HomeScreen";
  import ErrorScreen from "../pages/ErrorScreen"
  import MenuScreen from "../pages/MenuScreen";
  import Pedido from "../pages/Pedido";
 
  import UsuariosABM from "../pages/UsuariosABM";
  import SearchPedido from "../pages/SearchPedido";
  import SearchUsuarios from "../pages/SearchUsuarios";
  import NavBar from "../components/NavBar";
  import Footer from "../components/Footer"
import SearchMenu from "../pages/SearchMenu";
import CarritoScreen from "../pages/CarritoScreen"
import SearchMenuHome from "../pages/SearchMenuHome";
import { AdminScreen } from "../pages/AdminScreen";

const RoutesGral = () => {
   return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/home' element={
            <HomeScreen/>
        }/>
        <Route path="*" element={<ErrorScreen/>}/>
        <Route path='/menu' element={<MenuScreen/>}/>
        <Route path="/pedido" element={<Pedido/>} /> 
         <Route path="/usuarios" element={<UsuariosABM/>} />
         <Route path="/search/:termino" element={<SearchPedido/>} />
         <Route path="/searchusuario/:termino" element={<SearchUsuarios/>} />  
         <Route path="/searchmenu/:termino" element={<SearchMenu/>} />   
         <Route path="/searchhome/:termino" element={<SearchMenuHome/>} />   
         <Route path="/carrito" element={<CarritoScreen/>}/>
         <Route path="/admin" element={<AdminScreen/>}/>
      
        </Routes>
        <Footer/>
     </>
   );
 };

export default RoutesGral;