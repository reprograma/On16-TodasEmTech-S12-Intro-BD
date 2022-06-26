const series = require('../models/series.js')

// retornar todas as séries
const getAllSeries = (req, res) => {
  series.find((err, series) => {
    res.status(200).json(livros);
  })
};

// retornar séries de um gênero específico

const getSeriesByGenre = (req, res) => {
  const genre = req.query.genre; //buscar o gênero

  series.findByGenre(genre, (err, series) => {
    if (err) {
      res.status(400).send({ message: `${err.message} - gênero da série não foi encontrado` })
    } else {
      res.status(200).send(series);
    }
  })
}

// retornar série por id

const getSeriesById = (req, res) => {
  const id = req.params.id
  series.findById(id, (err, series) => {
    if (err) {
      res.status(400).send({ message: `${err.message} - id da série não foi encontrada` })
    } else {
      res.status(200).send(livros);
    }
  })
}

const createSeries = (req, res) => {
  let serie = new series(req.body);
  series.save((err) => {
    if (err) {
      res.status(500).send({ message: `${err.message} - falha ao cadastrar a série` })
    } else {
      res.status(201).send(serie.toJSON())
    }
  })
};

const deleteSerie = (req, res) => {
  const id = req.params.id;

  series.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).send({ message: 'série deletada com sucesso' })
    } else {
      res.status(500).send({ message: err.message })
    }
  })
};


const updateLiked = (req, res) => {
  const id = req.params.id
  const liked = req.body.liked
  series.findByIdAndUpdateLiked(id, liked, { $set: req.body.liked }, (err) => {
    if (!err) {
      res.status(200).send({ message: 'favoritos atualizado com sucesso' })
    } else {
      res.status(500).send({ message: err.message })
    }
  })

};


module.exports = {
  getAllSeries,
  getSeriesByGenre,
  getSeriesById,
  createSeries,
  deleteSerie,
  updateLiked
}