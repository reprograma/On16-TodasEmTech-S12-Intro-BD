const mongoose = require ("mongoose");

mongoose.connect(process.env.ADMIN_ID);

let db = mongoose.connection;

module.exports = db;