const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://camisarp:Lu291215@games.6dll0on.mongodb.net/reprograma");

const db = mongoose.connection;

module.exports = db;