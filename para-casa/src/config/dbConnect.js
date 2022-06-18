const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://Maysafig:061121wedding@cluster0.piizrrl.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;