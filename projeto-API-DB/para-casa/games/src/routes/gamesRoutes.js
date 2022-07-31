const express = require("express")
const  router = express.Router()
const controller = require("../controller/gamesController")

router.get("/", controller.gamesLista)
router.get("/:id", controller.buscaJogo)
router.post("/", controller.cadastraJogo)
router.put("/:id", controller.atualizaJogo)
router.delete("/:id", controller.deletaJogo)
router.patch("/:id", controller.likedGame)

module.exports = router