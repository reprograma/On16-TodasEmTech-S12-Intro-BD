const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://Rose:maria2019@cluster0.uhxjtz8.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

module.exports = db;