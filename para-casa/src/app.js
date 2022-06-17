const express = require("express")

const app = express()

app.use(express.json())

const gamesRoutes = require("./routes/gamesRoutes")

app.use("/games", gamesRoutes)

module.exports = app
