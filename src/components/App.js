import React from "react";

import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default App;
