const express = require ("express");
const index = require ("./router/index.js"); 
const games = require ("./router/games.js");
const mongoose = require ("./config/dbConnect");
require("dotenv").config()

const app = express();

app.use(express.json());
mongoose.connect()


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
app.use("/gameStore", games);

module.exports = app;