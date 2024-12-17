const express = require('express');
const mongoose = require('mongoose');
const equipoRoutes = require('./routes/equipos'); // Ruta del archivo equipos.js
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());

// Middleware para servir imágenes desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// Middleware para registrar cada solicitud (DEBUG)
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next(); // Permite que la solicitud continúe hacia la siguiente ruta o middleware
});

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
app.use('/torneoVoley/equipos', equipoRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/torneoVoley')
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
