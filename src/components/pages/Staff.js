import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Staff = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-3 text-dark">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Lo sentimos, la página que estás buscando esta siendo modificada, no existe o ha sido movida.
      </p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};
