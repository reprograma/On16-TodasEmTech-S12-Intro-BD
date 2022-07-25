const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://idaliamedeiros:reprogramatech@cluster0.kyyhigq.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;