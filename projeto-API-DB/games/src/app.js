const express = require ("express");
const index = require ("./routes/index.js");
const games = require ("./routes/games.js");
 
const db = require("./config/dbConnect.js");
 
//criando uma sitaxe de conexão
 
db.on("error", console.log.bind(console,'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});
 
const app = express();
 
app.use(express.json());
 
//sintaxe padrao usada qdo faz inserção de novos dados na api para ela n parar
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})
 
app.use("/", index);
app.use("/games", games);
 
module.exports = app;

