const express = require ("express");
const index = require ("./routes/index.js"); 
const livros = require ("./routes/livros.js");
const db = require ("./config/dbConnect.js");

db.on('error', console.log.bind (console, 'Erro de conexão'))

db.once('open', () => {
    console.log ('conexão com o banco feita com sucesso')
});


const app = express();

app.use(express.json());

// transmissão de comunicação http x client
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