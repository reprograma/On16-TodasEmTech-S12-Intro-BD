const express = require("express")

const router = express.Router()

router.get("/", function (req, res) {
    res.status(200).send({
        Title: "Reprograma - On16 - Semana 12 - Atividade Semanal",
        Version: "1.0.0"
    })
})

module.exports = router;