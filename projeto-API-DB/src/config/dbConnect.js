const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://CDias:123reprograma@cluster0.6yb8f.mongodb.net/reprograma",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            } 
        );
        console.log('Banco conectado.')
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
 connect
}