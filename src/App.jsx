import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import PedidoScreen from "./pages/PedidoScreen";

import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import './css/btn.css'

function App() {
  return (
    <BrowserRouter>
      {/* <Nav/> */}
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path="/*" element={<ErrorScreen/>}/>
        <Route path="/PedidoScreen" element={<PedidoScreen/>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen/>} />

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;