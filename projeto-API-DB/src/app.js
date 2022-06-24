const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");
const db = require ("./config/dbConnect.js");

// aqui criou uma sintaxe - obs: foi utilizada dois parametros uma palavra reservada error  e o bind
db.on("error", console.log.bind(console, 'Erro de conexão')) // db.on informa o erro 
 // db.once informa a conexao com BD com Sucesso
db.once("open", () => {
    console.log('Garota a sua Conexão com o banco feita realizada com SUCESSO')
})


const app = express();

app.use(express.json());
// Content-Type é um padrão que fará uma conexao 
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