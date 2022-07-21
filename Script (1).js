db.getCollection("livros").insertOne({"id": "10", "titulo":  "testeee", "autor": "teste", "numeroPaginas": 45})
db.getCollection("livros").find({})
db.getCollection("livros").updateMany({editora:" "}, {$set:{editora:"Companhia das Letrinhas"}})
db.getCollection("livros").deleteOne({id:"1"})