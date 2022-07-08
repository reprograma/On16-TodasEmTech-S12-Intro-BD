//importar o express
const express = require('express')

const db = require('./config/dbConnect')

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
});

//outras rotas
const seriesRotas = require('./routes/seriesRoutes')

//executar o express
const app = express()

//usar o body parser
app.use(express.json())

// rota raiz
app.use('/series', seriesRotas)

//exporta para usar no server.js
module.exports = app


