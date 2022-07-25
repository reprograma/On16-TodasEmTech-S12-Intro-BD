const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Daysedev:syhus2021@cluster0.dq2g1.mongodb.net/reprograma")

    let db = mongoose.connection

    module.exports = db