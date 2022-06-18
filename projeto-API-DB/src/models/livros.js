const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number, required: true },
});


const livros = mongoose.model('livros', livroSchema);

module.exports = livros;