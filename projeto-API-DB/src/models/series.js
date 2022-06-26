const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  genre: { type: String, required: true },
  synopsis: { type: String, required: true },
  liked: { type: String, required: true },
});


const series = mongoose.model('series', serieSchema);

module.exports = series;