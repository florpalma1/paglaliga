import React, { useState } from "react";
import axios from "axios";

export const RegistroEquipos = () => {
  const [equipo, setEquipo] = useState({
    titulo: "",
    imagen: null,
    division: "",
    genero: "",
    jugadores: [""],
  });

  const [equipos, setEquipos] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEquipo({ ...equipo, [name]: value });
  };

  const handleFileChange = (e) => {
    setEquipo({ ...equipo, imagen: e.target.files[0] });
  };

  const handleJugadorChange = (index, value) => {
    const nuevosJugadores = [...equipo.jugadores];
    nuevosJugadores[index] = value;
    setEquipo({ ...equipo, jugadores: nuevosJugadores });
  };

  const agregarJugador = () => {
    setEquipo({ ...equipo, jugadores: [...equipo.jugadores, ""] });
  };

  const eliminarJugador = (index) => {
    const nuevosJugadores = equipo.jugadores.filter((_, i) => i !== index);
    setEquipo({ ...equipo, jugadores: nuevosJugadores });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", equipo.titulo);
    formData.append("imagen", equipo.imagen);
    formData.append("division", equipo.division);
    formData.append("genero", equipo.genero);
    formData.append("jugadores", JSON.stringify(equipo.jugadores));

    try {
      const response = await axios.post(
        "http://localhost:5000/torneoVoley/equipos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setEquipos([...equipos, response.data]);
      setEquipo({
        titulo: "",
        imagen: null,
        division: "",
        genero: "",
        jugadores: [""],
      });
    } catch (error) {
      console.error("Error al registrar el equipo:", error);
    }
  };

  return (
    <div className="formulario-equipo">
      <h1>Registro de Equipos</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={equipo.titulo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Logo del equipo:</label>
          <input
            type="file"
            name="imagen"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>División:</label>
          <select
            name="division"
            value={equipo.division}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Mayores primera">Mayores primera</option>
            <option value="Mayores segunda">Mayores segunda</option>
            <option value="Sub 18">Sub 18</option>
            <option value="Mixto competitivo">Mixto competitivo</option>
            <option value="Mixto recreativo">Mixto recreativo</option>
          </select>
        </div>
        <div>
          <label>Género:</label>
          <select
            name="genero"
            value={equipo.genero}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Mixto">Mixto</option>
          </select>
        </div>
        <div>
          <label>Jugadores:</label>
          {equipo.jugadores.map((jugador, index) => (
            <div className="registro-equipos-jugador" key={index}>
              <input
                className="jugadores-i"
                type="text"
                value={jugador}
                onChange={(e) => handleJugadorChange(index, e.target.value)}
                required
              />
              <button type="button" onClick={() => eliminarJugador(index)}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={agregarJugador}>
            Agregar Jugador
          </button>
        </div>
        <button type="submit" className="btn-submit">
          Registrar Equipo
        </button>
      </form>
      {/*ESTA RARO*/}
      <div className="equipos-registrados">
        <h2>Equipos Registrados</h2>
        <ul className="registro-equipos-list">
          {equipos.map((equipo, index) => (
            <li key={index}>
              <h3>{equipo.titulo}</h3>
              <img
                src={`http://localhost:5000/uploads/${equipo.imagen}`}
                alt={`${equipo.titulo} Logo`}
              />
              <p>División: {equipo.division}</p>
              <p>Género: {equipo.genero}</p>
              <p>Jugadores:</p>
              <ul>
                {equipo.jugadores.map((jugador, jIndex) => (
                  <li key={jIndex}>{jugador}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
