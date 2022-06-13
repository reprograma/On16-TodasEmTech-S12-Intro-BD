const express = require('express')

const gamesRoutes = require('./router/gamesRoutes')

const app = express()

app.use(express.json())

app.use('/games', gamesRoutes)

module.exports = app