const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://PriscillaFCorreia05:pridb0501@cluster0.yy3mi.mongodb.net/reprograma-teste")

//exportar essa conexão que fiz

let db = mongoose.connection



module.exports = db