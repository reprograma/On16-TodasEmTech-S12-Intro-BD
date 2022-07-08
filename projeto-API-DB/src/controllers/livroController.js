const livros = require ("../models/livros.js");
// refatorar utilizando dois parametros err e status 200
const getAllLivros = (req, res) => {
  livros.find((err, livros) => {
    res.status(200).send(livros);
  })  
};

const getLivros = (req, res) => {
  const id = req.params.id;

  livros.findById(id, (err, livros) => {
    if(err) {
      res.status(400).send({message: `${err.message} - Infelizmente o id do livro não encontrado`})
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
      res.status(200).send({message:' Até que enfim o Livro foi atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteLivros =  (req, res) => {
  const id = req.params.id;
  
  livros.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Querida o Livro foi deletado com sucesso'})
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