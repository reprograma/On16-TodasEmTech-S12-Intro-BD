const express = require("express");

const router = express.Router();

const controller = require("../controllers/gamesController.js");

router.get("/", controller.getAllGames);
router.get("/:id", controller.getGames);
router.post("/", controller.createGames);
router.put("/:id", controller.putGameUpdate);
router.delete("/:id", controller.deleteGames);
router.patch("/:id", controller.likeGames)

module.exports = router;
