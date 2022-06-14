const express = require('express')
const db = require ("./config/dbConnect.js")
const gamesRoutes = require('./router/gamesRoutes')

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});


const app = express()

app.use(express.json())

app.use('/games', gamesRoutes)

module.exports = app