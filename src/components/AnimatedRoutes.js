import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
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
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="artists" element={<Artists />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AnimatedRoutes;
