const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/torneoVoley";  // Asegúrate de que el nombre de la base de datos esté correctamente configurado

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error;
  }
}

module.exports =  connectToDatabase ;
