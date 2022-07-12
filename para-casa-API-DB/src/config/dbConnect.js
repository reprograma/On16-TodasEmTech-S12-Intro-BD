const mongoose = require("mongoose"); 

mongoose.connect(
  "mongodb+srv://piresnilva:sofmeL2012@cluster0.7rbouil.mongodb.net/reprograma",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

let db = mongoose.connection;

module.exports = db; 