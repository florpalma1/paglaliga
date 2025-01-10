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
    console.log('Datos recibidos:', req.body);  // Verificar los datos del formulario
    console.log('Archivo recibido:', req.file); // Verificar si se recibe el archivo

    try {
        const nuevoEquipo = new Equipo({
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            imagen: req.file ? `/uploads/${req.file.filename}` : null,  // URL de la imagen
        });

        await nuevoEquipo.save();
        res.status(201).json(nuevoEquipo); // Responder con el equipo creado
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
