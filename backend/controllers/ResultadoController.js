const Resultado = require("../models/Resultado");

// Registrar un partido
const registrarPartido = async (req, res) => {
  try {
    // Obtener los datos del partido desde el cuerpo de la solicitud
    const { category, team1Title, team2Title, setsPlayed, sets } = req.body;

    // Crear un nuevo resultado de partido
    const nuevoResultado = new Resultado({
      category,
      team1Title,
      team2Title,
      setsPlayed,
      sets,
    });

    // Guardar el resultado en la base de datos
    await nuevoResultado.save();

    res.status(201).json({ message: "Resultado del partido registrado correctamente" });
  } catch (error) {
    console.error("Error al registrar el partido:", error);
    res.status(500).json({ message: "Error al registrar el partido" });
  }
};

// Obtener todos los resultados de los partidos
const obtenerResultados = async (req, res) => {
  try {
    // Obtener todos los resultados de los partidos
    const resultados = await Resultado.find();

    // Si no se encuentran resultados, enviar un mensaje adecuado
    if (!resultados.length) {
      return res.status(404).json({ message: "No se encontraron resultados de partidos" });
    }

    // Devolver los resultados de los partidos
    res.status(200).json(resultados);
  } catch (error) {
    console.error("Error al obtener los resultados:", error);
    res.status(500).json({ message: "Error al obtener los resultados de los partidos" });
  }
};

// Obtener los resultados de un partido por ID
const obtenerResultadoPorId = async (req, res) => {
  try {
    const resultadoId = req.params.id;

    // Buscar el resultado por su ID
    const resultado = await Resultado.findById(resultadoId);

    // Si no se encuentra el resultado, enviar un mensaje adecuado
    if (!resultado) {
      return res.status(404).json({ message: "Resultado de partido no encontrado" });
    }

    // Devolver el resultado encontrado
    res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al obtener el resultado:", error);
    res.status(500).json({ message: "Error al obtener el resultado del partido" });
  }
};

// Actualizar un resultado de partido (opcional)
const actualizarResultado = async (req, res) => {
  try {
    const resultadoId = req.params.id;
    const { category, team1Title, team2Title, setsPlayed, sets } = req.body;

    // Buscar el resultado por su ID
    const resultado = await Resultado.findById(resultadoId);

    // Si no se encuentra el resultado, enviar un mensaje adecuado
    if (!resultado) {
      return res.status(404).json({ message: "Resultado de partido no encontrado" });
    }

    // Actualizar los campos del resultado
    resultado.category = category || resultado.category;
    resultado.team1Title = team1Title || resultado.team1Title;
    resultado.team2Title = team2Title || resultado.team2Title;
    resultado.setsPlayed = setsPlayed || resultado.setsPlayed;
    resultado.sets = sets || resultado.sets;

    // Guardar los cambios
    await resultado.save();

    res.status(200).json({ message: "Resultado del partido actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el resultado:", error);
    res.status(500).json({ message: "Error al actualizar el resultado del partido" });
  }
};

module.exports = {
  registrarPartido,
  obtenerResultados,
  obtenerResultadoPorId,
  actualizarResultado,
};
