const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://PriscillaFCorreia05:<password>@cluster0.yy3mi.mongodb.net/reprogramapri" )

let db = mongoose.connection; // usaremos para exportar o db

module.exports = db;
