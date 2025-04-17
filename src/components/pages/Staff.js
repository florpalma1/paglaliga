import React from "react";
import "../../css/FixturePage.css"; // Puedes personalizar más aquí
import "bootstrap/dist/css/bootstrap.min.css";

export const Staff = () => {
  const matchdays = Array.from({ length: 15 }, (_, i) => i + 1);
  const matches = [
    {
      id: 51018,
      date: "Lun 14 Abr",
      time: "21:30",
      category: "Superiores",
      local: "AC",
      localLogo: "https://via.placeholder.com/30",
      away: "LANUS",
      awayLogo: "https://via.placeholder.com/30",
      localSets: [2, 25, 19, 26, 11],
      awaySets: [3, 27, 25, 24, 15],
    },
    {
        id: 51018,
        date: "Lun 14 Abr",
        time: "21:30",
        category: "Superiores",
        local: "AC",
        localLogo: "https://via.placeholder.com/30",
        away: "LANUS",
        awayLogo: "https://via.placeholder.com/30",
        localSets: [2, 25, 19, 26, 11],
        awaySets: [3, 27, 25, 24, 15],
      },
      {
        id: 51018,
        date: "Lun 14 Abr",
        time: "21:30",
        category: "Superiores",
        local: "AC",
        localLogo: "https://via.placeholder.com/30",
        away: "LANUS",
        awayLogo: "https://via.placeholder.com/30",
        localSets: [2, 25, 19, 26, 11],
        awaySets: [3, 27, 25, 24, 15],
      },
    // Puedes agregar más partidos aquí...
  ];

  return (
    <div className="container py-4">
      {/* Filtros */}
      <div className="d-flex gap-3 mb-3">
        <select className="form-select w-25">
          <option>Clasificación</option>
        </select>
        <select className="form-select w-25">
          <option>Seleccionar grupo</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="d-flex mb-3">
        <button className="btn btn-primary me-2">Fixture / Resultados</button>
        <button className="btn btn-outline-secondary">Posiciones</button>
      </div>

      {/* Buscar y paginación */}
      <div className="mb-3 d-flex align-items-center justify-content-between">
        <input className="form-control w-50" placeholder="Buscar por equipo..." />
        <div className="d-flex gap-1">
          {matchdays.map((day) => (
            <button key={day} className="btn btn-outline-secondary btn-sm">
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Fecha y partidos */}
      <h5 className="fw-bold mb-3">Fecha 3 <span className="badge bg-primary">Clasificación</span></h5>

      <div className="list-group">
        {matches.map((match) => (
          <div key={match.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center mb-2 shadow-sm rounded">
            {/* Info */}
            <div className="d-flex flex-column text-center text-md-start">
              <small className="text-muted">#{match.id}</small>
              <strong>{match.date}</strong>
              <span>{match.time}</span>
              <small className="text-primary">{match.category}</small>
            </div>

            {/* Equipos */}
            <div className="d-flex align-items-center gap-3">
              <img src={match.localLogo} alt={match.local} width="30" />
              <strong>{match.local}</strong>
              <span className="mx-2">vs</span>
              <strong>{match.away}</strong>
              <img src={match.awayLogo} alt={match.away} width="30" />
            </div>

            {/* Estado */}
            <div className="text-muted">Programación</div>

            {/* Sets */}
            <div className="d-flex flex-column text-end">
              <div>
                {match.localSets.map((set, i) => (
                  <span key={i} className="me-2">{set}</span>
                ))}
              </div>
              <div>
                {match.awaySets.map((set, i) => (
                  <span key={i} className="me-2">{set}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

