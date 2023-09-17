const mongoose = require("mongoose")
const validator = require("validator")

// Schema __ defines the structure of the document

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        unique: [true, "Your email is already exist"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("Your email is invalid")
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 15
    },
    address: {
        type: String,
        required: [true, "Please type address"],
    }
})

// Creating Collection Using Model

const Students = new mongoose.model("Students", studentsSchema)

module.exports = Students