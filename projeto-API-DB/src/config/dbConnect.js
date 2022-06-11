// importando mongoose
const mongoose = require("mongoose")
// outra opção é importar com import
// import mongoose from "mongoose";
//  conectando mangoose com o link do mongodb
mongoose.connect("mongodb+srv://majob:santa1020@majob.jaeuzld.mongodb.net/reprograma")

// pra poder exportar a conecção, gravo ela numa variavel e 
let db = mongoose.connection

// exporta
module.exports = db