const express = require("express");
const controller = require("../controllers/serieController.js");

const router = express.Router();

router.get("/", controller.getAllSeries);
router.get("/:id", controller.getSeries);
router.post("/", controller.createSeries);
router.put("/:id", controller.updateSeries);
router.delete("/:id", controller.deleteSeries);

module.exports = router;
