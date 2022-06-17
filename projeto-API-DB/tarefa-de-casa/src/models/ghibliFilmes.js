const mongoose = require ('mongoose')

const filmesSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number, required: true },
  });
  
  
  const filmes = mongoose.model('filmes', filmesSchema);
  
  module.exports = filmes;


