const series = require ("../models/series.js")
const fs = require("fs")

//Rota de Get para ler todas as series

const getAllSeries = (req, res) => {
    series.find((err, series) => {
        res.status(200).json(series)
    })
}

// Rota de Get para ler serie por id

const getSeries = (req, res) => {
    const id = req.params.id;
  
    series.findById(id, (err, series) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id da serie não localizada.`})
      } else {
        res.status(200).send(series);
      }
    })
  }

// Rota de POST para criar serie 

const createSeries = (req, res) => {
    let serie = new series(req.body);
  
    serie.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar serie.`})
      } else {
        res.status(201).send(serie.toJSON())
      }
    })
  }

  //Rota de PUT pra atualizar serie

  const updateSeries = (req, res) => {
    const id = req.params.id;
  
    series.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Serie atualizada com sucesso!'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

//Rota de Delete

const deleteSerie = (req, res) => {
  const id = req.params.id;

  series.findByIdAndDelete(id, (err) => {
    if(!err){
      res.status(200).send({message: 'Serie removida com sucesso!'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
}



  module.exports ={
    getAllSeries,
    getSeries,
    createSeries,
    updateSeries,
    deleteSerie
  }
