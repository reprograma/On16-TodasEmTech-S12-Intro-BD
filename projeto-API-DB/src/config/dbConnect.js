// usar mongoose
const mongoose = require('mongoose')

// função de conexao com banco 
const connect = async() => {
    try {
        await mongoose.connect(process.env.DB_URI, {
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