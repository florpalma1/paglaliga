import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { CardPaginaEquipos } from "../../components/CardPaginaEquipos";
import "bootstrap/dist/css/bootstrap.min.css";

// Tabla de posiciones
export const TablaPosiciones = ({ categoria }) => {
  const [tabla, setTabla] = useState([]);

  useEffect(() => {
    const fetchTabla = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/torneoVoley/posiciones?division=${encodeURIComponent(categoria)}`
        );
        if (!res.ok) {
          throw new Error(`Error en la respuesta de la red: ${res.statusText}`);
        }
        const data = await res.json();
        setTabla(data);
      } catch (err) {
        console.error("Error al cargar tabla de posiciones:", err);
      }
    };

    if (categoria !== "ALL") {
      fetchTabla();
    }
  }, [categoria]);

  if (!tabla.length) return <p>No hay datos de posiciones para esta categoría.</p>;

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Pts</th>
            <th>Jugados</th>
            <th>Ganados</th>
            <th>Perdidos</th>
            <th>Sets a favor</th>
            <th>Sets en contra</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((equipo, i) => (
            <tr key={equipo.id || i}>
              <td>{i + 1}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.puntos}</td>
              <td>{equipo.jugados}</td>
              <td>{equipo.ganados}</td>
              <td>{equipo.perdidos}</td>
              <td>{equipo.setsFavor}</td>
              <td>{equipo.setsContra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// COMPONENTE PRINCIPAL
export const Paginaequipos = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [teams, setTeams] = useState([]);
  const [viewMode, setViewMode] = useState("FIXTURE"); // FIXTURE o POSICIONES
  const [loading, setLoading] = useState(true); // Indicador de carga

  const filters = [
    "1RA FEMENINO",
    "1RA MASCULINO",
    "2DA FEMENINO",
    "2DA MASCULINO",
    "SUB 18 MASCULINO",
    "SUB 18 FEMENINO",
  ];

  useEffect(() => {
    const obtenerEquipos = async () => {
      setLoading(true); // Iniciar carga
      try {
        const response = await fetch("http://localhost:5000/torneoVoley/equipos");
        if (!response.ok) {
          throw new Error(`Error en la respuesta de la red: ${response.statusText}`);
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error al obtener los equipos:", error);
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    obtenerEquipos();
  }, []);

  const filteredTeams =
    activeFilter === "ALL"
      ? teams
      : teams.filter((team) => team.division === activeFilter);

  if (loading) {
    return <p>Cargando equipos...</p>; // Mensaje de carga
  }

  return (
    <div>
      {/* Banner */}
      <div className="gallery-banner">
        <div className="gallery-banner__content">
          <h1 className="gallery-banner__title">EQUIPOS</h1>
        </div>
      </div>

      {/* Sección Equipos */}
      <div className="rts-team-section">
        <div className="container">

          {/* Filtros */}
          <div className="filters-container">
            <div className="filters-wrapper">
              <ul className="filter-tabs">
                {filters.map((filter, index) => (
                  <li key={index}>
                    <button
                      className={`filter-button ${activeFilter === filter ? "filter-active" : ""}`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="filter-slider" aria-hidden="true">
                <div
                  className="filter-slider-rect"
                  style={{
                    transform: `translateX(${filters.indexOf(activeFilter) * 100}%)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Botones de vista */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button
              className={`btn ${viewMode === "FIXTURE" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setViewMode("FIXTURE")}
            >
              Fixture / Resultados
            </button>
            <button
              className={`btn ${viewMode === "POSICIONES" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setViewMode("POSICIONES")}
            >
              Posiciones
            </button>
          </div>

          {/* Contenido según vista */}
          {viewMode === "FIXTURE" ? (
            <Row className="team-grid">
              {filteredTeams.length > 0 ? (
                filteredTeams.map((team, index) => (
                  <CardPaginaEquipos
                    key={index}
                    title={team.title}
                    imgUrl={team.imgUrl ? `http://localhost:5000/uploads/${team.imgUrl}` : '/default-image.jpg'}
                    category={team.category || 'Categoría desconocida'}
                  />
                ))
              ) : (
                <p>No hay equipos disponibles</p>
              )}
            </Row>
          ) : (
            <TablaPosiciones categoria={activeFilter} />
          )}
        </div>
      </div>
    </div>
  );
};
