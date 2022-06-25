const express = require("express")
const controller = require("../controllers/gamesController.js")
const router = express.Router()

router.get("/", controller.getAllGames)
router.get("/:id", controller.getGames)
router.post("/", controller.createGames)
router.put("/:id", controller.updateGames)
router.delete("/:id", controller.deleteGames)

module.exports = router