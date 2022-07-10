const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://Alexsandrapcampos:Filhos081724@cluster0.syagp.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

module.exports = db;