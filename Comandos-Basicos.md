### Executando comandos no MongoDB Shell e Robo 3T(robomongo)

Agora que você já ativou o Mongo Shell ou o [Robo 3T](https://robomongo.org/), é possível criar coleções e manipular os objetos direto do banco de dados através do terminal. Para ter acesso a outros comandos do MongoDB Shell, clique no link para acessar a documentação dos [comandos básicos MongoDB](https://www.mongodb.com/docs/manual/crud/)


Vamos aprender alguns comandos?

- Para criar o banco de dados:
```
use <nome-do-database>
```

- Para mostrar todos os bancos de dados ativos:
``` 
show dbs
```

- Para criar uma coleção(collection):
```
db.createNome-da-collection
```


- Para mostrar todas as collections (só mostra se tiver inserido algum registro na collection):
```
show collections 
```

- Para inserir um novo registro dentro da collection no banco de dados:
```
db.Nome-da-collection.insertOne({ objeto a ser inserido })
```

- Para inserir vários novos registros dentro do banco de dados (formato array):
```
db.Nome-da-collection.insertMany([{ objetos a serem inseridos }])
```

- Para buscar todos os registros sem filtro algum utilizamos o comando find():
```
db.Nome-da-collection.find()
```

- Para buscar um registro com filtro utilizamos o find({ })
```
db.Nome-da-collection.find({filtro-que-selecionar})
```

- Para atualizar registros dentro do banco de dados, utilizamos o comando updateOne (para apenas um objeto) 
```
db.Nome-da-collection.updateOne({filtro},{ $set: {campos a serem atualizados}})
```

- Para atualizar vários registros, utilizamos o updateMany com o filtro selecionado:
```
db.Nome-da-collection.updateMany({filtro},{ $set: {campos a serem atualizados}})
```

- Para deletar um registro (tem que estar trabalhando na collection):
```
db.Nome-da-collection.deleteOne({filtro-que-selecionar})
```

- Para deletar mais de um registro (tem que estar trabalhando na collection):
```
db.Nome-da-collection.deleteMany({filtro-que-selecionar})
```

- Para deletar todos os registro da collection (tem que estar trabalhando na collection):
```
db.Nome-da-collection.deleteMany({})
```

- Para deletar uma collection (tem que estar trabalhando na collection):
```
db.Nome-da-collection.drop({})
```
