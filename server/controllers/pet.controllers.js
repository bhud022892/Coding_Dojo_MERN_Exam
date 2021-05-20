const Pet = require("../models/pet.models")

// Find all of the pets
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({Pets: allPets}))
        .catch(err => res.json({message: "Something went wrong when finding all of the pets!", error: err}))
}

// Get one pet from the database
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(onePet => res.json({Pet: onePet}))
        .catch(err => res.json({message: "Something went wrong when finding this pet!", error: err}))
}

// Add a pet to the database
module.exports.createOnePet = (req, res) => {
    Pet.create(req.body)
        .then(addPet => res.json({Pet: addPet}))
        .catch(err => res.json({message: "Something went wrong when adding a pet!", error: err}))
}

// Update one pet from database
module.exports.updateOnePet = (req, res) => {
    Pet.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePet => res.json({Pet: onePet}))
        .catch(err => res.json({message: "Something went wrong when updating this specific pet!", error: err}))
}

// Delete one pet from the databsae
module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(res.json({message: "Pet has been deleted!"}))
        .catch(err => res.json({message: "Something went wrong when deleting this specific pet!", error: err}))
}