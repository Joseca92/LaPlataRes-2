import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/menu' element={<MenuScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;