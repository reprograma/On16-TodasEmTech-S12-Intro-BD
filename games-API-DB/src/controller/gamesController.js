const games = require('../models/games.js')

const fs = require('fs')


    
const getAllGames = (req, res) => {
    games.find((err, games) => {
      if(err) {
      res.status(500).send({ message: `${err.message} - deu erro do teu lado`});
      }
      else { res.status(200).json(games); }
    })  
  };
  
    

const getById = (req, res) => {
    const id = req.params.id
    games.findById(id, (err, games) =>{
        if (err){
            res.status(404).send({message: `${err. message} -id do game não foi encontrado`})

        }else{
            res.status(200).send(games)
        }
    })
}


const createGames= (req, res) => {
    let game = new games(req.body)
    game.save((err) => { //save- posta algo ali, (salva no BD) - vc vai esperar erro.
        if (err) {
            res.status(500).send({message: `${err. message} - falha ao cadastrar game`})
        }else {
            res.status(201).send(game.toJSON()) //negocio do mongo esse toJSON
        }
    })
}


const gameUpdate = (req, res) => {
    const id = req.params.id //guardo meu id que foi passado no request.

    games.findByIdAndUpdate(id,{$set: req.body}, (err) =>{ //set- altera as coisas que eu disser!
        if (!err) {
            res.status(200).send({message: 'Game atualizado com sucesso'})
        }else{
            res.status(500).send({message:err. message})
        }

    })

}

//const update

const deleteGame = (req, res) => {
    const id = req.params.id

    games.findByIdAndDelete(id, (err) =>{
        if (!err) {
            res.status(200).send({message: 'Game deletado com sucesso'})
        }else{
            res.status(500).send({message:err. message})
        }

    })
}


    
 



module.exports = {
    getAllGames,
    getById,
    createGames,
    gameUpdate,
    deleteGame
}
