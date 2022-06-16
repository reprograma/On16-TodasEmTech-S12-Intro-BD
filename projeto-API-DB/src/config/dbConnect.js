const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://beatrizrAndrade:<senha>@cluster0.tgb2lsm.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;