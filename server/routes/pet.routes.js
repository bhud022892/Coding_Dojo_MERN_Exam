const PetController = require("../controllers/pet.controllers")

module.exports = app => {
    // Get all the pets
    app.get("/api/pet", PetController.findAllPets)

    // Get one specific pet
    app.get("/api/pet/:_id", PetController.findOnePet)

    // Create a new pet
    app.post("/api/pet/new", PetController.createOnePet)

    // Update one specific pet
    app.put("/api/pet/update/:_id", PetController.updateOnePet)

    // Delete one specific pet
    app.delete("/api/pet/delete/:_id", PetController.deleteOnePet)
}