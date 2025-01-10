import React, { useState } from 'react';
import '../../src/css/Registroequipos.css';

const RegistroEquipos = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);   // Asegúrate de que 'titulo' esté definido correctamente
    formData.append('categoria', categoria); // Asegúrate de que 'categoria' esté definido correctamente
    if (imagen) formData.append('imagen', imagen);

    try {
      const response = await fetch('http://localhost:5000/torneoVoley/equipos', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Equipo creado:', data);
      } else {
        console.error('Error al crear el equipo:', data);
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Crear Equipo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título del equipo:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Imagen del equipo:</label>
          <input
            type="file"
            name="imagen"
            onChange={(e) => setImagen(e.target.files[0])}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Crear equipo</button>
      </form>
    </div>
  );
};

export default RegistroEquipos;
