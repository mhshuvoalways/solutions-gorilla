import { BrowserRouter, Route, Routes } from "react-router-dom";
import Architecture from "../pages/Architecture";
import Home from "../pages/Home";
import OurProcess from "../pages/OurProcess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
