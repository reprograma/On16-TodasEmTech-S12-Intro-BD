// Criando as funções com a lógica das nossas rotas

const series = require("../models/series.js");
const fs = require("fs");

const getAllSeries = (req, res) => {
    series.find((err, series) => {
        res.status(200).json(series);
    })
};

const getSerieById = (req, res) => {
    const id = req.params.id;

    series.findById(id, (err, series) => {
        if (err) {
            res.status(400).send({
                message: `${err.message} - id da série não encontrada`
            })
        } else {
            res.status(200).send(series);
        }
    })
}


const createSeries = (req, res) => {
    let serie = new series(req.body);

    serie.save((err) => {
        if (err) {
            res.status(500).send({
                message: `${err.message} - falha ao cadastrar nova série`
            })
        } else {
            res.status(201).send(series.toJSON())
        }
    })
};


const updateSeries = (req, res) => {
    const id = req.params.id;

    series.findByIdAndUpdate(id, {
        $set: req.body
    }, (err) => {
        if (!err) {
            res.status(200).send({
                message: 'Série atualizada com sucesso!'
            })
        } else {
            res.status(500).send({
                message: err.message
            })
        }
    })
};

const deleteSerieById = (req, res) => {
    const id = req.params.id;

    series.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).send({
                message: 'Livro deletado com sucesso'
            })
        } else {
            res.status(500).send({
                message: err.message
            })
        }
    })
};

module.exports = {
    getAllSeries,
    getSerieById,
    createSeries,
    updateSeries,
    deleteSerieById
};