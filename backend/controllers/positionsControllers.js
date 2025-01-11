const PositionTable = require('../models/Resultado');
const Equipo = require('../models/Equipo'); // Reemplaza con el nombre correcto del modelo de equipos

// Sincronizar tablas de posiciones con los equipos existentes
const syncTables = async (req, res) => {
  try {
    const equipos = await Equipo.find();
    const categorias = [...new Set(equipos.map((equipo) => equipo.categoria))];

    for (const categoria of categorias) {
      const equiposPorCategoria = equipos.filter((equipo) => equipo.categoria === categoria);

      const equiposEnTabla = equiposPorCategoria.map((equipo) => ({
        teamId: equipo._id,
        points: 0,
        matchesPlayed: 0,
        wins: 0,
        losses: 0,
      }));

      await PositionTable.findOneAndUpdate(
        { category: categoria },
        { category: categoria, teams: equiposEnTabla },
        { upsert: true, new: true }
      );
    }

    res.status(200).json({ message: 'Tablas sincronizadas correctamente' });
  } catch (error) {
    console.error('Error al sincronizar tablas:', error);
    res.status(500).json({ message: 'Error al sincronizar tablas' });
  }
};

// Registrar un partido y actualizar las posiciones
const registerMatch = async (req, res) => {
  try {
    const { category, team1Id, team2Id, team1Score, team2Score } = req.body;

    const tabla = await PositionTable.findOne({ category });
    if (!tabla) return res.status(404).json({ message: 'Tabla no encontrada para la categoría' });

    const actualizarStats = (team, esGanador) => {
      team.matchesPlayed += 1;
      if (esGanador) {
        team.points += 3;
        team.wins += 1;
      } else {
        team.losses += 1;
      }
    };

    const equipo1 = tabla.teams.find((t) => t.teamId.toString() === team1Id);
    const equipo2 = tabla.teams.find((t) => t.teamId.toString() === team2Id);

    if (team1Score > team2Score) {
      actualizarStats(equipo1, true);
      actualizarStats(equipo2, false);
    } else {
      actualizarStats(equipo2, true);
      actualizarStats(equipo1, false);
    }

    await tabla.save();
    res.status(200).json({ message: 'Partido registrado y tabla actualizada' });
  } catch (error) {
    console.error('Error al registrar el partido:', error);
    res.status(500).json({ message: 'Error al registrar el partido' });
  }
};

// Obtener todas las tablas de posiciones
const getTables = async (req, res) => {
  try {
    const tablas = await PositionTable.find().populate('teams.teamId', 'nombre categoria');
    res.status(200).json(tablas);
  } catch (error) {
    console.error('Error al obtener tablas:', error);
    res.status(500).json({ message: 'Error al obtener tablas' });
  }
};

module.exports = { syncTables, registerMatch, getTables };
