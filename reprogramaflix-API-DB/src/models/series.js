const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  sinopse: { type: String, required: true },
  favoritada: { type: Boolean }  
});

const series = mongoose.model('series', seriesSchema);

module.exports = series;