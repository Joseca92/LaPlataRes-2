import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesGral from "./routes/RoutesGral";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CartProvider } from "./components/cardContext";

function App() {
  return (
    <BrowserRouter>    
    <CartProvider>
    <Routes>
        <Route
          path="/*"
          element={
            
              <ProtectedRoutes>
                <Nav/>
                <RoutesGral />
                <Footer/>
              </ProtectedRoutes>
        
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>   
      </CartProvider>
    </BrowserRouter>
          
  );
}

export default App;