const catalog = require("../models/games.js")
const fs = require("fs")

const allGames = (req, res) => {
    try{
        catalog.find((err,games)=>{
            res.status(200).json(games)
        })
    }catch{
        res.status(500).send({ Message: "Internal server error"})
    }
}

const idGames = (req, res) => {
    const idRequest = req.params.id

    catalog.findById(idRequest, (err,game)=>{
        if(err){
            res.status(400).send({message: `${err.message} - id do game não encontrado`})
        }else{
            res.status(200).send(game)
        }
    })
}

const addGames = (req, res) => {
    let game = new catalog(req.body);

    game.save((err)=>{
        if(err){
            res.status(500).send({message : `${err.message} - falha ao cadastrar game`})
        }else{
            res.status(201).send(game.toJSON())
        }
    })
}

const updateGames = (req, res) => {
    const idRequest = req.params.id
    catalog.findByIdAndUpdate(idRequest,{$set: req.body}, (err)=>{
        if(!err) {
            res.status(200).send({message:'Game atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
    })
}

const deleteGames = (req, res) => {
    const idRequest = req.params.id
    catalog.findByIdAndDelete(idRequest, (err) =>{
        if(!err) {
            res.status(200).send({message:'Game deletado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
    })
}

module.exports = {
    allGames,
    idGames,
    addGames,
    updateGames,
    deleteGames
}