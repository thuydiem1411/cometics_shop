import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Explore from "./pages/explore/Explore";
import Routine from "./pages/contact/Routine";
import Home from "./pages/home/Home";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import BuildRoutine from './pages/contact/BuildRoutine';
function App() {
  return (
    <BrowserRouter>  
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/exlore" element={<Explore />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/pages/skin-quiz" element={<BuildRoutine />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
