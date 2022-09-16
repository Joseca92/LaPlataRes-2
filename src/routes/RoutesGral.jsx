//Aqui van las rutas de las paginas/////
  import React from "react";
  import { Routes, Route } from "react-router-dom";
  import Nav from "../components/Nav";
  import HomeScreen from "../pages/HomeScreen";
  import ErrorScreen from "../pages/ErrorScreen"
  import MenuScreen from "../pages/MenuScreen";
  import Pedido from "../pages/Pedido";
 
  import UsuariosABM from "../pages/UsuariosABM";
  import SearchPedido from "../pages/SearchPedido";
  import SearchUsuarios from "../pages/SearchUsuarios";

const RoutesGral = () => {
   return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
        <Route path='/menu' element={<MenuScreen/>}/>
<<<<<<< HEAD
      </Routes>
=======
        <Route path="/pedido" element={<Pedido/>} />
         <Route path="/usuarios" element={<UsuariosABM/>} />
         <Route path="/search/:termino" element={<SearchPedido/>} />
         <Route path="/searchusuario/:termino" element={<SearchUsuarios/>} />   
        </Routes>
>>>>>>> dev
     </>
   );
 };
export default RoutesGral;