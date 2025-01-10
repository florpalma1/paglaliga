const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Categoría (A, B, etc.)
  teams: [
    {
      teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true }, // ID del equipo
      points: { type: Number, default: 0 }, // Puntos totales
      matchesPlayed: { type: Number, default: 0 }, // Partidos jugados
      wins: { type: Number, default: 0 }, // Partidos ganados
      losses: { type: Number, default: 0 } // Partidos perdidos
    }
  ]
});

module.exports = mongoose.model('Position', PositionSchema);
