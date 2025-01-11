import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { CardPaginaEquipos } from "../../components/CardPaginaEquipos";

export const Paginaequipos = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [teams, setTeams] = useState([]); // Estado para almacenar los equipos

  const filters = [
    "1RA FEMENINO",
    "1RA MASCULINO",
    "2DA FEMENINO",
    "2DA MASCULINO",
    "SUB 18 MASCULINO",
    "SUB 18 FEMENINO",
  ];

  // Obtener los equipos de la base de datos
  useEffect(() => {
    const obtenerEquipos = async () => {
      try {
        const response = await fetch('http://localhost:5000/torneoVoley/equipos');
        const data = await response.json();
        if (response.ok) {
          setTeams(data); // Actualizamos el estado con los datos obtenidos
        } else {
          console.error('Error al obtener los equipos:', data);
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    obtenerEquipos(); // Llamar a la función al montar el componente
  }, []); // El array vacío asegura que se ejecute solo una vez

  // Filtrar los equipos según la categoría seleccionada
  const filteredTeams =
    activeFilter === "ALL"
      ? teams
      : teams.filter((team) => team.division === activeFilter);

  return (
    <div className="rts-team-section section-gap">
      <div className="container">
        {/* Filtros */}
        <div className="filters-container">
          <div className="filters-wrapper">
            <ul className="filter-tabs">
              {filters.map((filter, index) => (
                <li key={index}>
                  <button
                    className={`filter-button ${
                      activeFilter === filter ? "filter-active" : ""
                    }`}
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
              >
                &nbsp;
              </div>
            </div>
          </div>
        </div>

        {/* Equipos */}
        <Row className="team-grid">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team, index) => (
              <CardPaginaEquipos
                key={index}
                title={team.title}
                imgUrl={`http://localhost:5000/uploads/${team.imgUrl}`} // Concatenamos la URL base para la imagen
                category={team.category}
                className="team-card"
              />
            ))
          ) : (
            <p>No hay equipos disponibles</p>
          )}
        </Row>
      </div>
    </div>
  );
};
