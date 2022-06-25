const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    id: {type: String},
    nomeFantasia: {type: String, required: true},
    endereco: {type: String, required: true},
    telefone: {type: Number, required: true},
    atende: {type: Array, required: true }
});

const petshop = mongoose.model('petshop', petsSchema);

module.exports = petshop;