const pets = require('../models/petshops');

const getAllPets = (req, res) => {
    pets.find((err, pets) => {
        res.status(200).json(pets);
    })
};

const getPetById = (req, res) => {
    const idRequest = req.params.id;

    pets.findById(idRequest, (err, pets) => {
        if(err) {
            res.status(400).send({message: `${err.message} - id do petshop não encontrado`})
        } else {
            res.status(200).send(pets);
        }
    })
}

const createPet = (req, res) => {
    let petshop = new pets(req.body);

    petshop.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar petshop`})
        } else {
            res.status(201).send(petshop.toJSON())
        }
    })
};

const updatePet = (req, res) => {
    const idRequest = req.params.id;

    pets.findByIdAndUpdate(idRequest, {$set: req.body}, (err) => {
        if(!err) {
            res.status(200).send({message: 'Petshop atualizado com sucesso'})
         } else {
            res.status(500).send({message: err.message})
         }
    })
};

const deletePet = (req, res) => {
    const idRequest = req.params.id;

    pets.findByIdAndDelete(idRequest, (err) => {
        if(!err) {
            res.status(200).send({message: 'Livro deletado com sucesso'})        
        } else {
            res.status(500).send({message: err.message})
        }
    })
};


module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
}