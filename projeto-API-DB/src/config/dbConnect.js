const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://beatrizrAndrade:Supermercado1817@cluster0.tgb2lsm.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;