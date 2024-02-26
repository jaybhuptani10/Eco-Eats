import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";

import Ewaste from "./Page/ewaste/Ewaste";
import Food from "./Page/Food/Food";
import About from "./Page/About/About";
import User from "./Page/Forms/User";
import Submit from "./Page/Forms/Submit";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const onTabChange = (tab) => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/E-waste" element={<Ewaste />} />
        <Route path="/Food-Waste" element={<Food />} />
        <Route path="/About" element={<About />} />
        <Route path="/Form" element={<User />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;