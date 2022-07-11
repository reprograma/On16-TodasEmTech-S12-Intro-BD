const mongoose = require("mongoose");
//criou a função schema | o new esta sendo usado como referencia para construção do Schema.
const livroSchema = new mongoose.Schema(
  {
  id: { type: String },// string construtor
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number, required: true },
});

//variavel para conexao do mongoose com os parametros livros que e a variavel e o schema
const livros = mongoose.model('livros', livroSchema);

module.exports = livros;