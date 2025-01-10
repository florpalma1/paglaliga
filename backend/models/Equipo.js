const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;
