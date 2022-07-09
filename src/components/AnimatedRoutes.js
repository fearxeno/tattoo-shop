import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {} from 'framer-motion';

import Home from "../pages/Home";
import About from "../pages/About";
import Artists from "../pages/Artists";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/tattoo-shop/" element={<Home />} />
      <Route path="/tattoo-shop/about" element={<About />} />
      <Route path="/tattoo-shop/artists" element={<Artists />} />
      <Route path="/tattoo-shop/services" element={<Services />} />
      <Route path="/tattoo-shop/contact" element={<Contact />} />
    </Routes>
  );
}

export default AnimatedRoutes;
