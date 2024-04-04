import { BrowserRouter, Route, Routes } from "react-router-dom";
import Architecture from "../pages/Architecture";
import Home from "../pages/Home";
import OurProcess from "../pages/OurProcess";
import Pricing from "../pages/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
