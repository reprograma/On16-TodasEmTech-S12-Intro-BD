const express = require ("express");
 
const router = express.Router();
 
router.get("/", function (req, res) {
    res.status(200).send({
        title: "Reprograma - On16 Semana 12 - Intro - BD",
        version: "1.0.0"
    })
});
 // o index já mostra o que a gente quer q apareça!
module.exports = router;