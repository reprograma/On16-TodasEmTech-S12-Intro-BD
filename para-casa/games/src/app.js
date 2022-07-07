const express = require ("express");
const index = require ("./routes/index.js"); 
const games = require ("./routes/gamesRoutes.js");
const db = require ("./config/dbConnect.js");

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});


const app = express();

app.use(express.json());

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*") 
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/games", games);

module.exports = app;