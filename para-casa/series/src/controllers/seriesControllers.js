const series = require('../models/series.js')

const getAllSeries = (req, res) => {
  series.find((err, series) => {        
  res.status(200).json(series)
  });
};

const getByIdSeries = (req, res) => {
  try {
    const id = req.params.id
    series.findById(id, (err, series) => {    

     if(err) {
       res.status(404).send({ message: `${err.message} - id não encontrado`})
     } else {
       res.status(200).send(series)
     }})

  } catch (err) {
    res.status(500).send({message: `${err.message} - Erro encontrado`})
  }
}

const createSerie = (req, res) => {        
  let serie = new series(req.body)

  serie.save(err => {
    if(err) {
      res.status(500).send({message: `${err.message} - Erro ao cadastrar nova serie`})
    } else {
      res.status(201).send(serie)
    }
  })       
}

const updateSerie = (req, res) => {
  const id = req.params.id

  series.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Serie atualizada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })  
}

const deleteSerie = (req, res) => {
  const id = req.params.id

  series.findByIdAndDelete(id, err => {
    if(!err) {
      res.status(200).send({message: 'Serie deletada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  }) 
}




module.exports = {  
  getAllSeries,
  getByIdSeries,
  createSerie,
  updateSerie,
  deleteSerie 
}