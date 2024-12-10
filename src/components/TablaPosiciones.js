import React from 'react';

// Componente TablaPosiciones
export const TablaPosiciones = ({ equipos }) => {
  return (
    <div className="tabla-posiciones">
      <h1 className="tabla-posiciones__titulo">Tabla de Posiciones</h1>
      <table className="tabla-posiciones__tabla">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PP</th>
            <th>SG</th>
            <th>SP</th>
            <th>Ratio Sets</th>
            <th>PG</th>
            <th>PP</th>
            <th>Ratio Puntos</th>
          </tr>
        </thead>
        <tbody>
          {equipos && equipos.length > 0 ? (
            equipos.map((equipo, index) => (
              <tr key={index}>
                <td>{equipo.nombre}</td>
                <td>{equipo.partidosJugados}</td>
                <td>{equipo.partidosGanados}</td>
                <td>{equipo.partidosPerdidos}</td>
                <td>{equipo.setsGanados}</td>
                <td>{equipo.setsPerdidos}</td>
                <td>
                  {equipo.setsGanados && equipo.setsPerdidos
                    ? (equipo.setsGanados / equipo.setsPerdidos).toFixed(2)
                    : equipo.setsGanados > 0
                    ? '∞'
                    : 0}
                </td>
                <td>{equipo.puntosGanados}</td>
                <td>{equipo.puntosPerdidos}</td>
                <td>
                  {equipo.puntosGanados && equipo.puntosPerdidos
                    ? (equipo.puntosGanados / equipo.puntosPerdidos).toFixed(2)
                    : equipo.puntosGanados > 0
                    ? '∞'
                    : 0}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No hay equipos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
