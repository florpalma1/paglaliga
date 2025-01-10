import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBarpage";
import { Paginaequipos } from "./components/pages/Paginaequipos";
import { Torneo } from "./components/Torneo";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta principal (Home) */}
          <Route path="/PaginaEquipos" element={<Paginaequipos />} />
          <Route path="/Torneo" element={<Torneo />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

