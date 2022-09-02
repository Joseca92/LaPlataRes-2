import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoutesGral from "./routes/RoutesGral";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'
function App() {
  return (
    <BrowserRouter>
     
      
           
              <RoutesGral />
          </BrowserRouter>
          
  );
}

export default App;