const express = require('express')
const db = require ("./config/dbConnect.js")
const gamesRoutes = require('./router/gamesRoutes.js')

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

const app = express()

app.use(express.json())

app.use('/games', gamesRoutes)

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})


module.exports = app