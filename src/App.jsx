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
<<<<<<< HEAD
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen/>} />
=======
        <Route path='/' element={<HomeScreen/>}/>
>>>>>>> 34bf57d10eac22f5ce0fc4f261bb471b970c854a
        <Route path='/menu' element={<MenuScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;