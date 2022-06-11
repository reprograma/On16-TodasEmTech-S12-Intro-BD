const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://user_01:852585@cluster0.pzaygyu.mongodb.net/reprograma");

//exportar nossa conexão

let db = mongoose.connection;

module.exports = db;
