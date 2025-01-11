const mongoose = require("mongoose");

const resultadoSchema = new mongoose.Schema({
  category: { type: String, required: true },  // Categoría del torneo (Ej: A, B, etc.)
  team1Title: { type: String, required: true }, // Título del Equipo 1
  team2Title: { type: String, required: true }, // Título del Equipo 2
  setsPlayed: { type: Number, required: true }, // Cantidad de sets jugados en el partido
  sets: [
    {
      setNumber: { type: Number, required: true }, // Número del set (1, 2, 3...)
      team1Points: { type: Number, required: true }, // Puntos del Equipo 1 en ese set
      team2Points: { type: Number, required: true }, // Puntos del Equipo 2 en ese set
    },
  ],
});

module.exports = mongoose.model("Resultado", resultadoSchema);
