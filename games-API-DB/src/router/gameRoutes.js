const express = require('express')
const controller = require('../controller/gamesController')
const router = express.Router()

router.get('/all', controller.getAllGames)
router.get('/:id', controller.getGamesById)
router.post('/register', controller.postNewGame)
router.put('/update/:id', controller.updateGameById)
router.patch('/:id/liked', controller.updateLike)
router.delete('/delete/:id', controller.deleteGameById)

module.exports = router 