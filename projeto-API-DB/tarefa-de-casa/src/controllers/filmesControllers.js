const filmes = require ("../models/ghibliFilmes.js");
const fs = require ("fs");

const getAll = (req, res) => {
  filmes.find((err, filmes) => {
    res.status(200).send(filmes);
  })  
};

const getFilmes = (req, res) => {
  const id = req.params.id;

  filmes.findById(id, (err, filmes) => {
    if(err) {
      res.status(400).send({message: `${err.message} - id do filme não encontrado`})
    } else {
      res.status(200).send(filmes);
    }
  })
}


const createFilmes =  (req, res) => {
  let filme = new filmes(req.body);

  filme.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar filme`})
    } else {
      res.status(201).send(filme.toJSON())
    }
  })
};


const updateFilmes =  (req, res) => {
  const id = req.params.id;

  filmes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Filme atualizado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteFilmes =  (req, res) => {
  const id = req.params.id;

  filmes.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Filme deletado com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

module.exports = {
    getAll,
    getFilmes, 
    createFilmes,
    updateFilmes,
    deleteFilmes
};