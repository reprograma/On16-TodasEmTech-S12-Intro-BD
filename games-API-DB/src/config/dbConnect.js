const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://PriscillaFCorreia05:pridb0501@cluster0.yy3mi.mongodb.net/reprograma-teste")

let db = mongoose.connection; // usaremos para exportar o db

module.exports = db;