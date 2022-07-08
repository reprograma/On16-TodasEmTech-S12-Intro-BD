const mongoose = require("mongoose")

require("dotenv").config()

mongoose.connect(`mongodb+srv://${process.env.ATLAS_LOGIN}:${process.env.ATLAS_PASSWORD}@cluster0.mmjbu.mongodb.net/atividade-semanal12`)

let db = mongoose.connection

module.exports = db