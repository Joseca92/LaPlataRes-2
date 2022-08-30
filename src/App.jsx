import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "./routes/Routes";

import Navbar  from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <RoutesDos/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;