const livros = require ("../models/livros");
const fs = require ("fs");

const getAllLivros = (req, res) => {
  res.status(200).send(livros);
};

const getLivros =  (req, res) => {
  let index = buscaLivro(req.params.id);
  res.status(200).send(livros[index]);
};

const createLivros =  (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro foi cadastrado com sucesso");
};

const updateLivros =  (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
};

const deleteLivros =  (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
};


function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}


module.exports = {
    getAllLivros,
    getLivros, 
    createLivros,
    updateLivros,
    deleteLivros
}