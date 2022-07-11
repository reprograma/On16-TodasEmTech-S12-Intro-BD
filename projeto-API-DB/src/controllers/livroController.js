const livros = require ("../models/livros.js");
// refatorar utilizando dois parametros err, livros
const getAllLivros = (req, res) => {
  livros.find((err, livros) => {
    res.status(200).send(livros);
  })  
};

const getLivros = (req, res) => {
  const id = req.params.id;

  livros.findById(id, (err, livros) => {
    if(err) {
      res.status(400).send({message: `${err.message} -  id do livro não encontrado`})
    } else {
      res.status(200).send(livros);
    }
  })
}


const createLivros =  (req, res) => {
  let livro = new livros(req.body);

  livro.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - Atenção!!! falha ao cadastrar livro`})
    } else {
      res.status(201).send(livro.toJSON())
    }
  })
};


const updateLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Livro foi atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteLivros =  (req, res) => {
  const id = req.params.id;
  
  livros.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Livro Deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

module.exports = {
    getAllLivros,
    getLivros, 
    createLivros,
    updateLivros,
    deleteLivros
};

// usa a palavra new para construção de um novo objeto
// usa a palavra save armazena a nova inserção do objeto


/*A função findByIdAndUpdate() é usada para encontrar um documento correspondente, atualiza-o de acordo com o argumento de atualização, passando quaisquer opções e retorna o documento encontrado (se houver) para o retorno de chamada.*/