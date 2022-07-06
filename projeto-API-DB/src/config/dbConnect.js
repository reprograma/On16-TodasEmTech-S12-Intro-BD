const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://bcostabaron:ortiga18@cluster0.pjltxsr.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;