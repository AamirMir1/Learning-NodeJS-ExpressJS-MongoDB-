const mongoose = require("mongoose")
const menSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    DOB: {
        type: Date,
        required: true,
        minlength: 2,
        trim: true,
    },
    Nationality: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    Score: {
        type: Number,
        required: true,
        minlength: 2,
        trim: true,
    },
    Ranking: {
        type: Number,
        required: true,
        minlength: 2,
        trim: true,
    },
})

const Men = new mongoose.model("Men", menSchema)

module.exports = Men
