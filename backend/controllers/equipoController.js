const Equipo = require('../models/Equipo');

// Función para obtener todos los equipos
const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find(); // Obtener todos los equipos de la base de datos
        res.status(200).json(equipos); // Devolver los equipos en formato JSON
    } catch (error) {
        console.error('Error al obtener equipos:', error);
        res.status(500).json({ message: 'Error al obtener equipos', error: error.message });
    }
};

// Función para registrar un nuevo equipo
const registrarEquipo = async (req, res) => {
    const { titulo, division, genero, jugadores, imagen } = req.body;

    try {
        // Verificar si los jugadores son un array y procesarlos
        let jugadoresArray = Array.isArray(jugadores) ? jugadores : [jugadores];

        // Crear un nuevo documento de equipo
        const nuevoEquipo = new Equipo({
            titulo,
            imagen,
            division,
            genero,
            jugadores: jugadoresArray,
        });

        // Guardar el nuevo equipo en la base de datos
        await nuevoEquipo.save();
        res.status(201).json(nuevoEquipo); // Devolver el equipo recién creado
    } catch (error) {
        console.error('Error al registrar el equipo:', error);
        res.status(500).json({ message: 'Error al registrar el equipo', error: error.message });
    }
};

// Exportar las funciones del controller
module.exports = {
    obtenerEquipos,
    registrarEquipo,
};
