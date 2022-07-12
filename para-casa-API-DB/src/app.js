const express = require("express");
const index = require("./routes/index.js");
const games = require("./routes/gamesRoute.js");
const db = require("./config/dbConnect.js");

db.on("error", console.log.bind(console, "Erro de conexão"));

db.once("open", () => {
  console.log("Conexão com o banco iniciada com SUCESSO");
});

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // padrão de cabeçalho Content-Type entre o servidor e o cliente
  next();
});

app.use("/", index);
app.use("/game", games);

module.exports = app;
