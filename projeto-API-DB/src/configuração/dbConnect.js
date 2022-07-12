const mongoose = require("mongoose"); // importe o mongoose
//connect para receber o string de conexao do mongoDB Atlas
mongoose.connect(
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// variável para guardar  o mongoose connection e exporta-la
let db = mongoose.connection;

module.exports = db; // exportando a variavel do  mongoose
