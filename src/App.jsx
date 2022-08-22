import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PedidoScreen from "./pages/PedidoScreen";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path="/*" element={<ErrorScreen/>}/>
        <Route path="/PedidoScreen" element={<PedidoScreen/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;