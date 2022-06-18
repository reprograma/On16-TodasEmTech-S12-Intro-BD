const express = require('express');
const index = require('./routes/index');
const petshop = require('./routes/petshop');
const db = require('./config/dbConnect');

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco feita com sucesso!')
});


const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use('/', index);
app.use('/petshops', petshop);

module.exports = app;

