const mongoose = require("mongoose");
require("dotenv").config();  // Necesitarás esta dependencia para manejar las variables de entorno

// Usar una variable de entorno para la URI de la base de datos
const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/torneoVoley";  // Reemplaza con tu URI en producción

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,  // Si usas `findAndModify` en alguna parte de tu código
      useCreateIndex: true,  // Para asegurarte de que los índices se crean de manera correcta
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Salir de la aplicación si no se puede conectar a la base de datos
  }
}

// Manejar la desconexión y reconexión si la conexión se pierde
mongoose.connection.on("disconnected", () => {
  console.log("Desconectado de MongoDB...");
});

mongoose.connection.on("reconnected", () => {
  console.log("Reconectado a MongoDB...");
});

module.exports = connectToDatabase;
