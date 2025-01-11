const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Categoría (ej. 'A', 'B', etc.)
  teams: [
    {
      teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" }, // ID del equipo
      points: { type: Number, default: 0 }, // Puntos del equipo en la tabla
      wins: { type: Number, default: 0 }, // Victorias del equipo
      losses: { type: Number, default: 0 }, // Derrotas del equipo
      matchesPlayed: { type: Number, default: 0 }, // Partidos jugados
    },
  ],
});

module.exports = mongoose.model("Position", positionSchema);
