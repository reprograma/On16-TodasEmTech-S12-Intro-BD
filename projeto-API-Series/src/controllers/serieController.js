const series = require ("../models/series.js");
const fs = require ("fs");

const getAllSeries = (req, res) => {
  series.find((err, series) => {
    res.status(200).send(series);
  })
};

const getSeries =  (req, res) => {
  const id = req.params.id;
  series.findById(id, (err, series) => {
    if (err) {
      res.status(400), send({message: `${err.message} - id da série não encontrado`})
    } else {
    res.status(200).send(series);
    }
  })
}

const createSeries =  (req, res) => {
  let serie = new series(req.body);

  series.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar série`})
    } else {
      res.status(201).send(serie.toJSON())
    }
  })
};

const updateSeries =  (req, res) => {
  const id = req.params.id;

  series.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
    if(!err) {
      res.status(200).send({message: "Série atualizada com sucesso"})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

const deleteSeries =  (req, res) => {
  const id = req.params.id;

  livros.findByIdAndDelete(id, (err) =>{
    if(!err) {
      res.status(200).send({message: "Série removida com sucesso"})
    } else {
      res.status(500).send({message: err.message})
    }
  })
};

function buscaSerie(id) {
  return series.findIndex((serie) => serie.id == id);
}


module.exports = {
    getAllSeries,
    getSeries, 
    createSeries,
    updateSeries,
    deleteSeries
}