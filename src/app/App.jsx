import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Architecture from "../pages/Architecture";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import OurProcess from "../pages/OurProcess";
import Pricing from "../pages/Pricing";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const defaultLanguage = navigator.language;
    if (defaultLanguage === "fr-CA") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
