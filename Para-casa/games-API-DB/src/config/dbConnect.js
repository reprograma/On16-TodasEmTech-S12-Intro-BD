const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://GaiaMaria8:thilbo2020@cluster0.btpmh.mongodb.net/reprograma");

let db = mongoose.connection;

module.exports = db;