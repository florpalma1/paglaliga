const mongoose = require('mongoose');

// Definir el esquema para los equipos
const equipoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    division: { type: String, required: true },
    genero: { type: String, required: true },
    jugadores: { type: [String], required: true }, // Array de strings para los nombres de los jugadores
    imagen: { type: String, required: false }, // Nombre del archivo de la imagen subida
}, { timestamps: true }); // Agregar marcas de tiempo (createdAt, updatedAt)

// Crear el modelo
const Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;
