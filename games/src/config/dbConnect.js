const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://NathCaldas:password@cluster0.5ldtt.mongodb.net/reprograma")

let db = mongoose.connection; // usaremos para exportar o db

module.exports = db;