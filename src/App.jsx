import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesGral from "./routes/RoutesGral";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
//import axios from 'axios'

//axios.defaults.baseURL= "http://localhost:8080/api";

function App() {
  return (
    <BrowserRouter>    
    <Routes>
        <Route
          path="/*"
          element={
          
              <RoutesGral />
        
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>   
    

    
    </BrowserRouter>
          
  );
}

export default App;