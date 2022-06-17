const controller = require("../controller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/all", controller.allGames)
router.get("/:id", controller.idGames)
router.post("/add", controller.addGames)
router.put("/update/:id", controller.updateGames)
router.patch("/liked/:id", controller.likedGames)
router.delete("/delete/:id", controller.deleteGames)

module.exports = router