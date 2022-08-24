import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "./routes/Routes";

import Navbar  from "./components/NavBar";

function App() {
  return (
    <>
    <h1>Intro app</h1>
    <BrowserRouter>
    <Navbar/>
    <RoutesDos/>
    </BrowserRouter>
    </>
  );
}

export default App;