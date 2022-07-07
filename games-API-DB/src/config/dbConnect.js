const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.ATLAS_LOGIN}:${process.env.ATLAS_PASSWORD}@cluster0.c1wu8.mongodb.net/week-12`)

let db = mongoose.connection;

module.exports = db 