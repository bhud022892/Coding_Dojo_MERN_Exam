const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name!"],
        required: [2, "Pet name must be at least two characters!"]
    },
    type: {
        type: String,
        required: [true, "Pet must have a type!"],
        required: [2, "Pet tpye must be at least two characters!"]
    },
    description: {
        type: String,
        required: [true, "Pet must have a description!"],
        required: [5, "Pet description must be at least five characters!"]
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    },
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet