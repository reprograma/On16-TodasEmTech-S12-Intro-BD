const express = require("express")
const index = require("./routes/index.js")
const games = require("./routes/games.js")
const db = require("./config/dbConnect.js")
const app = express()

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", () => {
    console.log("Conexão feita com sucesso")
})

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/games", games)

module.exports = app