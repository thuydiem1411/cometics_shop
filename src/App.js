import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Explore from "./pages/explore/Explore";
import Routine from "./pages/contact/Routine";
import Home from "./pages/home/Home";
import Marquee from "./components/Marquee";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/exlore" element={<Explore />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
