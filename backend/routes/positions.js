const express = require('express');
const { syncTables, registerMatch, getTables } = require('../controllers/positionsController');
const router = express.Router();

// Ruta para sincronizar tablas
router.post('/update', syncTables);

// Ruta para registrar un partido
router.post('/update-match', registerMatch);

// Ruta para obtener todas las tablas
router.get('/', getTables);

module.exports = router;
