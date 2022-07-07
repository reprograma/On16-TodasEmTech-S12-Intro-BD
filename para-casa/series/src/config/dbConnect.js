const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Nathercia:tetinha18@cluster0.3t6tc6u.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db