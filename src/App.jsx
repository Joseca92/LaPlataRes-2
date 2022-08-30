import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MenuScreen from "./pages/MenuScreen";
import PedidoScreen from "./pages/PedidoScreen";
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/*" element={<ErrorScreen/>}/>
        <Route path="/PedidoScreen" element={<PedidoScreen/>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen/>} />
        <Route path='/menu' element={<MenuScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;