const games = require('../models/games.js')

const getAll = (request, response) => {
    games.find((err, games) => {
        response.status(200).json(games)
    })
}

const getbyId = (request, response) => {
     const id = request.params.id
    games.findById(id, (err, games) => {
        if(err) {
          response.status(400).send({message: `${err.message} - Game ID not found`})
        } else {
          response.status(200).send(games);
        }
      })
}

const createGames = (request, response) => {
    let game = new games(request.body);

    game.save((err) => {
        if(err) {
          response.status(500).send({message: `${err.message} - Failed to post new game`})
        } else {
          response.status(201).send(game.toJSON())
        }
      })
}
const update = (request, response) => {
    const idRequest = request.params.id
    games.findByIdAndUpdate(idRequest, {$set: request.body}, (err) => {
        if(!err) {
            response.status(200).send({message:'Game updated'})
        } else {
            response.status(500).send({message: err.message})
        }
        })
}
const deleteGame = (request, response) => {
    const idRequest = request.params.id

  games.findByIdAndDelete(idRequest, (err) => {
    if(!err) {
      response.status(200).send({message:'Game removed successfully'})
    } else {
      response.status(500).send({message: err.message})
    }
  })
};

const updateLike = (request, response) => {
    const idRequest = request.params.id

    games.findByIdAndUpdate(idRequest, {$set: {liked}}, (err) => {
        if (!err) {
          response.status(200).send({ message: "Like updated!" });
        } else {
          response.status(500).send({ message: err.message });
        }
      });
    };

module.exports = {
    getAll,
    getbyId,
    createGames,
    update,
    deleteGame,
    updateLike
} 