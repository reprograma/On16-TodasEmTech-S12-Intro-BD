const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    id: {type: String}, // id n é requerido
    titulo:{type: String, required: true},
    autora:{type: String, required: true},
    editora:{type: String, required: true},
    numeroPaginas:{type: Number, required: true},
});

 
  
const livros= mongoose.model('livros',livroSchema);

module.exports = livros;