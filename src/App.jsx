import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";
import ProtectedRoutes from "./routes/PotectedRoutes";
import RoutesGral from "./routes/RoutesGral";
import './css/btn.css'
import './css/fondo.css'
import './css/bg-login-reg.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesGral />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;