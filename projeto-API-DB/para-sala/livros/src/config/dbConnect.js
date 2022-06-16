const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://user_01:852585@cluster0.pzaygyu.mongodb.net/reprograma");

//exportar nossa conexão

let db = mongoose.connection;

module.exports = db;


// //{
//     "id": 1,
//     "titulo": "Pequeno Manual Antiracista",
//     "autor": "Djamila Ribeiro",
//     "editora": "Letramento",
//     "numeroPaginas": 120
// }

// db.getCollection("livros").find({})

// db.getCollection("livros").insertOne({"id":"3", "titulo": "cartas para minha avó", "autor": "Djamila Ribeiro", "numeroPaginas": 150})

//db.getCollection("livros").updateMany({editora: "letramento"}, {$set: {autor: "Antoine de Saint - Exupéry"}})

// db.getCollection("livros").deleteOne({autor: "Djamila Ribeiro"})