import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import PedidoScreen from "./pages/PedidoScreen";

import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import './css/btn.css'



import './css/fondo.css'
import './css/bg-login-reg.css'
<<<<<<< HEAD

=======
import MenuScreen from "./pages/MenuScreen";
>>>>>>> f186ae32ca2e50c420561929ba9a93d6b946cb68
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path="/*" element={<ErrorScreen/>}/>
        <Route path="/PedidoScreen" element={<PedidoScreen/>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen/>} />
<<<<<<< HEAD

=======
        <Route path='/menu' element={<MenuScreen/>}/>
>>>>>>> f186ae32ca2e50c420561929ba9a93d6b946cb68
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;