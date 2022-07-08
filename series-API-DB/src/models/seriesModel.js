const mongoose = require ('mongoose');

const serieSchema = new mongoose.Schema(
    {
      id: {type: String},
      titulo: {type: String, required: true},
      autor: {type: String, },
      genero: {type: String, required: true},
      liked: {type: Boolean}
    }
  );

const series = mongoose.model('series', serieSchema);

module.exports = series;
 