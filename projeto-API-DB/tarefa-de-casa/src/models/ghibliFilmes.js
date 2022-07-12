const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  "id": {type: String},
  "titulo":{ type: String, required: true },
  "diretor": { type: String, required: true },
  "produtor": { type: String, required: true },
  "data de lancamento": { type: Number, required: true },
  "duracao": { type: Number, required: true },
  
})

const filme = mongoose.model('filmes', filmeSchema);

  module.exports = filme;



