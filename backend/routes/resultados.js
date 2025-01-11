const express = require('express');
const router = express.Router();
const ResultadoController = require('../controllers/ResultadoController');

// Ruta para registrar un nuevo partido (POST)
router.post('/resultado', ResultadoController.registrarPartido);

// Ruta para obtener todos los resultados de partidos (GET)
router.get('/resultados', ResultadoController.obtenerResultados);

// Ruta para obtener un resultado específico por ID (GET)
router.get('/resultado/:id', ResultadoController.obtenerResultadoPorId);

// Ruta para actualizar un resultado por ID (PUT)
router.put('/resultado/:id', ResultadoController.actualizarResultado);

module.exports = router;
