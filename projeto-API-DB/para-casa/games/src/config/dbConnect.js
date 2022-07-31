const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://carolalves90:naogostodetomate@cluster0.pplg699.mongodb.net/reprograma")

let db = mongoose.connection;

module.exports = db;


const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require ('mongoose')

const connect = async () => {
    try { await mongoose.connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    })
    console.log('Banco de dados conectado com sucesso')    
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    connect
}