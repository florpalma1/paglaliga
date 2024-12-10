import React, { useState } from "react";

export const FormularioEquipos = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [logo, setLogo] = useState(null);
  const [jugadores, setJugadores] = useState([]);
  const [nuevoJugador, setNuevoJugador] = useState("");

  const handleAgregarJugador = () => {
    if (nuevoJugador.trim() !== "") {
      setJugadores([...jugadores, nuevoJugador.trim()]);
      setNuevoJugador("");
    }
  };

  const handleEliminarJugador = (index) => {
    setJugadores(jugadores.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !logo || jugadores.length === 0) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("logo", logo);
    formData.append("jugadores", JSON.stringify(jugadores));

    try {
      const response = await fetch("/api/equipos", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Equipo creado exitosamente.");
        onSubmit(); // Llamada para actualizar la lista de equipos o notificar al padre.
        setNombre("");
        setLogo(null);
        setJugadores([]);
      } else {
        alert("Hubo un problema al crear el equipo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <main className="main-container">
 <form onSubmit={handleSubmit} className="formulario-equipo">
      <div className="form-group">
        <label htmlFor="nombre">Nombre del Equipo</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa el nombre del equipo"
        />
      </div>

      <div className="form-group">
        <label htmlFor="logo">Logo del Equipo</label>
        <input
          type="file"
          id="logo"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
        />
        {logo && <p>Archivo seleccionado: {logo.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="jugadores">Jugadores</label>
        <div className="jugadores-input">
          <input
            type="text"
            id="jugadores"
            value={nuevoJugador}
            onChange={(e) => setNuevoJugador(e.target.value)}
            placeholder="Nombre del jugador"
          />
          <button
          className="button-form"
            type="button"
            onClick={handleAgregarJugador}
            disabled={!nuevoJugador.trim()}
          >
            Agregar
          </button>
        </div>
        <ul>
          {jugadores.map((jugador, index) => (
            <li key={index}>
              {jugador}{" "}
              <button
                type="button"
                onClick={() => handleEliminarJugador(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="btn-submit">
        Crear Equipo
      </button>
    </form>
    </main>
   
  );
};

