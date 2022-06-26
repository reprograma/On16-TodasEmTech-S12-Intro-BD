const express = require ("express");
const index = require ("./routes/index.js"); 
const series = require ("./routes/series.js");
const livros = require ("./routes/livros.js");
const db = require ("./config/dbConnect.js");




db.on("err", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log('conectado com o banco')
});

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
app.use("/series", series);

module.exports = app;