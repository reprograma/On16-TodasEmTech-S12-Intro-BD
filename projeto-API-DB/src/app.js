const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");
//invoco o dv de /config
const db = require('./config/dbConnect')
// uso metodo on para notificar em caso de erro
db.on("error", console.log.bind(console, 'Erro de conexão'))
// quando a conexão funciona, me indica no terminal
db.once("open", () => {
    console.log('Conexão estabelecida com sucesso')
}) 

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/livros", livros);

module.exports = app;