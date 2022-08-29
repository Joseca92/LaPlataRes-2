import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'
import MenuScreen from "./pages/MenuScreen";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen/>} />
        <Route path='/menu' element={<MenuScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;