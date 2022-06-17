const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://heloaaires:Mongo1380@cluster0.taceygj.mongodb.net/?retryWrites=true&w=majority/reprograma");

let db = mongoose.connection;

module.exports = db;