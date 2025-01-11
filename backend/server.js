const express = require('express');
const mongoose = require('mongoose');
const equipoRoutes = require('./routes/equipos'); // Ruta de equipos
const resultadoRoutes = require('./routes/resultadoRoutes'); // Ruta de resultados
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para servir imágenes desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// Middleware para registrar cada solicitud (DEBUG)
app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
app.use('/torneoVoley/equipos', equipoRoutes); // Rutas de equipos
app.use('/torneoVoley/resultados', resultadoRoutes); // Rutas de resultados

// Conexión a la base de datos MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/torneoVoley', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        process.exit(1); // Finaliza el proceso si no se puede conectar a la base de datos
    }
};

connectToDatabase();

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
