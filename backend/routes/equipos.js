const express = require('express');
const multer = require('multer');
const equipoController = require('../controllers/equipoController'); // Importar el controller

const router = express.Router();

// Configuración de multer para manejar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo único
    },
});

const upload = multer({ storage });

// Ruta GET: Obtener equipos
router.get('/', equipoController.obtenerEquipos);

// Ruta POST: Registrar equipo con archivo
router.post('/', upload.single('imagen'), equipoController.registrarEquipo);

module.exports = router;
