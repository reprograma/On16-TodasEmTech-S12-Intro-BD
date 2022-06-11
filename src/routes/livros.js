const express = require("express");
const controller = require("../controllers/livroController.js");

const router = express.Router();

router.get("/", controller.getAllLivros);
router.get("/livros/:id", controller.getLivros);
router.post("/", controller.createLivros);
router.put("/livros/:id", controller.updateLivros);
router.delete("/livros/:id", controller.deleteLivros);

module.exports = router;
