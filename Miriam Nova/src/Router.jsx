import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Asegúrate de tener el componente Home importado
import Shows from "./components/Shows.jsx";
import Navbar from "./components/Navbar.jsx"; // Importa el Navbar
import Footer from "./components/Footer.jsx"; // Importa el Footer


const RouterConfig = () => {
  return (
    <Router>
      {/* Navbar se muestra en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>

      {/* Footer se muestra en todas las rutas */}
      <Footer />
    </Router>
  );
};

export default RouterConfig;
