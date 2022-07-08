 const series = require('../models/seriesModel')



//  GET retorna lista de séries
const listaSeries = (req, res) => {
  series.find((err, series) => {
    res.status(200).json(series)
  })
}


  
//GET retorna por gênero
const getByGenero = (req, res) => {
  
  const generoRequest = req.query.genre.toLowerCase()
  const generoFilter = series.filter((serie) => serie.genre.toLowerCase().includes(generoRequest));
  
  if (generoFilter.length > 0) {
    res.status(200).json({
        message: "Gênero encontrado com sucesso!",
        generoFilter
    })
  } else {
    res.status(404).send({
      message: "Gênero não encontrado.",
    });
  }
}; 

//GET retorna uma série específica buscando pelo id
const getById = (req, res) => {
  const id = req.params.id;

  series.findById(id, (err, series) => {
    if(err) {
      res.status(400).send({message: `${err.message} - Id da série não localizada.`})
    } else {
      res.status(200).send(series);
    }
  })  
}

 // POST adciona nova série
const postSerie = (req, res) => {
  let serie = new series(req.body);

  serie.save((err) => {
    if(err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar série.`})
    } else {
      res.status(201).send(serie.toJSON())
    }
  })  
}

// PACTH like ou  dislike
const likedSerie = (req, res) => {
  const id = req.params.id;

  series.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    if(!err) {
      res.status(200).send({message: 'Série atualizada com sucesso'})
    } else {
      res.status(500).send({message: err.message})
    }
  })
 
};

//DELETE series
const deleteSerie = (req, res) => {
  const id = req.params.id;

  series.findByIdAndDelete(id, (err) => {
    if(!err){
      res.status(200).send({message: 'Série removida com sucesso!'})
    } else {
      res.status(500).send({message: err.message})
    }
  })  
}

module.exports = {
    listaSeries,  
    getByGenero,
    getById,
    postSerie,
    likedSerie,
    deleteSerie
 } 