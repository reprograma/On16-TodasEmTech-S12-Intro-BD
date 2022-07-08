const express = require ("express");
const index = require ("./router/index.js");
const games = require ("./router/gamesRoutes.js");
 
const db = require("./config/dbConnect.js");
 
//criando uma sitaxe de conexão
 
db.on("error", console.log.bind(console,'Erro de conexão'))//liga ai, se der erro devolve para mim o erro.
db.once("open", () => {// on e once são atributos do mongoose para fazer as coisas
    console.log('Conexão com o banco feita com sucesso')
});
 // isso é se houver conexão com o banco ok? (linhas 9 e 10 e 11)
const app = express();
 
app.use(express.json());
 
//sintaxe padrao usada qdo faz inserção de novos dados na api para ela n parar
app.use(function (req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*")
    res.header(// vai ta passando os dados adicionais.
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept" 
    )
    next()
}) 
 
app.use("/", index);
app.use("/games", games);
 
module.exports = app;

// no app eu centralizo toda a lógica.