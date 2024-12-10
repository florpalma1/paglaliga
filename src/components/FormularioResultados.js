import React, { useState } from "react";

export const FormularioResultados = ({ equipos = [], onSubmit }) => {
  const [equipo1, setEquipo1] = useState("");
  const [equipo2, setEquipo2] = useState("");
  const [fecha, setFecha] = useState("");
  const [sets, setSets] = useState([{ puntajeEquipo1: "", puntajeEquipo2: "" }]);

  const handleAgregarSet = () => {
    setSets([...sets, { puntajeEquipo1: "", puntajeEquipo2: "" }]);
  };

  const handleEliminarSet = (index) => {
    setSets(sets.filter((_, i) => i !== index));
  };

  const handleCambiarPuntaje = (index, equipo, valor) => {
    const nuevosSets = [...sets];
    nuevosSets[index][equipo] = valor;
    setSets(nuevosSets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!equipo1 || !equipo2 || !fecha || sets.some((set) => !set.puntajeEquipo1 || !set.puntajeEquipo2)) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (equipo1 === equipo2) {
      alert("Los equipos no pueden ser el mismo.");
      return;
    }

    const resultado = {
      equipo1,
      equipo2,
      fecha,
      sets,
    };

    onSubmit(resultado);
    setEquipo1("");
    setEquipo2("");
    setFecha("");
    setSets([{ puntajeEquipo1: "", puntajeEquipo2: "" }]);
  };

  return (
    <main className="formulario-resultados">
      <form onSubmit={handleSubmit} className="formulario">
        <h1 className="formulario__titulo">Registrar Resultado</h1>
        <div className="formulario__grupo">
          <label htmlFor="equipo1">Equipo 1</label>
          <select
            id="equipo1"
            value={equipo1}
            onChange={(e) => setEquipo1(e.target.value)}
          >
            <option value="">Selecciona un equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo} value={equipo}>
                {equipo}
              </option>
            ))}
          </select>
        </div>
        <div className="formulario__grupo">
          <label htmlFor="equipo2">Equipo 2</label>
          <select
            id="equipo2"
            value={equipo2}
            onChange={(e) => setEquipo2(e.target.value)}
          >
            <option value="">Selecciona un equipo</option>
            {equipos.map((equipo) => (
              <option key={equipo} value={equipo}>
                {equipo}
              </option>
            ))}
          </select>
        </div>
        <div className="formulario__grupo">
          <label htmlFor="fecha">Fecha del Partido</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="formulario__grupo">
          <label>Resultados por Set</label>
          {sets.map((set, index) => (
            <div key={index} className="formulario__set-grupo">
              <input
                type="number"
                placeholder="Puntos Equipo 1"
                value={set.puntajeEquipo1}
                onChange={(e) =>
                  handleCambiarPuntaje(index, "puntajeEquipo1", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Puntos Equipo 2"
                value={set.puntajeEquipo2}
                onChange={(e) =>
                  handleCambiarPuntaje(index, "puntajeEquipo2", e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => handleEliminarSet(index)}
                className="formulario__btn-eliminar-set"
              >
                ❌
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAgregarSet}
            className="formulario__btn-agregar-set"
          >
            Agregar Set
          </button>
        </div>
        <button type="submit" className="formulario__btn-submit">
          Guardar Resultado
        </button>
      </form>
    </main>
  );
};


