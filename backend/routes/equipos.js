const express = require('express');
const equipoController = require('../controllers/equipoController');  // Importar el controller

const router = express.Router();

router.get('/', equipoController.obtenerEquipos);

// Ruta para registrar un equipo (POST)
router.post('/', equipoController.registrarEquipo);

module.exports = router;
