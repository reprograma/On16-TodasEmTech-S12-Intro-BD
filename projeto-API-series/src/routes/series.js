const express = require("express")
const controller = require("../controllers/seriesControllers.js")

const router = express.Router();

router.get("/series", controller.getAllSeries)
router.get("/:id", controller.getSeries)
router.post("/criarserie", controller.createSeries)
router.put("/atualizar", controller.updateSeries)
router.delete("/deletar", controller.deleteSerie)


module.exports = router