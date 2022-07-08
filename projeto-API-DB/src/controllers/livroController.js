const livros = require ("../models/livros.js");


const getAllLivros = (req, res) => {
  livros.find((err, livros) => {
    if(err) {
    res.status(500).send({ message: `${err.message} - deu erro do teu lado`});
    }
    else { res.status(200).json(livros); }
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

//patch!
const updatePagesFromBooks = (req, res) => {
  const id = req.params.id;
  const {numeroPaginas} = req.body; // vou ta instanciando.

  livros.findByIdAndUpdate(id,{$set:{numeroPaginas}},(err) =>{ // instancio coisa específica q é o num d paginas
    if(!err){
      res.status(200).send({message:"mudou o babado!"})
    }else{
      res.status(500).send({message:"não mudou nada querida"})
    }
  })
}

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