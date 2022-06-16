const livros = require ("../models/livros.js");


const getAllLivros = (req, res) => {
livros.find((err, livros) => {
  res.status(200).send(livros);
})
  
};



const getLivros =  (req, res) => {
  const id = req.params.id;

  livros.findById(id, (err, livros) => {
    if (err) {
    res.status(400).send({message: `${err. message} - id do livro não encontrado`})
    } else{
      res.status(200).send(livros);
    }
  })
  
};

const createLivros =  (req, res) => {
  let livro = new livros(req.body);

  livro.save((err) =>{
    if(err){
      res.status(500).send({message: `${err. message} - erro ao cadastrar livro`})
    } else{
      res.status(201).send(livro.toJSON()) // no metodo post ele sabe q vamos usar um json
    }
  })
  
};

const updateLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdAndUpdate(id,{$set: req.body},(err) =>{
    if(!err){
      res.status(200).send({message: 'Livro atualizado com sucesso'})
    }else{
      res.status(500).send({message: err.message})
    }
  })
  
};

const deleteLivros =  (req, res) => {
  const id = req.params.id;

  livros.findByIdAndDelete(id, (err) => {
    if(!err) {
      res.status(200).send({message:'Livro deletado com sucesso'})
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
}