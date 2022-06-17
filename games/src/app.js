const express = require('express');
const index = require('./routes/index.js');
const games = require('./routes/gamesRoutes.js');
const db = require('./config/dbConnect.js');

db.on('error', console.log.bind(console, 'Conection error'));
db.once('open', () => {
    console.log('Conected successfully')
});


const app = express()

app.use(express.json())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
});

app.use('/', index);
app.use('/games', games);


module.exports = app