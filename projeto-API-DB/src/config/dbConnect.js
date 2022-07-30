const mongoose = require("mongoose")

const mongoose = require('mongoose')

// função de conexao com banco 
const connect = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco Conectado!')
    }  catch (error) {
        console.log(error)
    }
}


module.exports = {
    connect,
}