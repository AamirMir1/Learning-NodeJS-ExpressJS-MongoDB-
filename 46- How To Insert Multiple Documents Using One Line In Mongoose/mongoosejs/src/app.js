const mongoose = require("mongoose")

// Connection creation a creating new database

mongoose.connect("mongodb://localhost:27017/students").then(() => {
    console.log("Connected Successfully")
})

// Schema__ defines the structure of your document

const stSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// Creating collections using model

const St = new mongoose.model("St", stSchema)

// Creating documents

const creatingDocuments = async () => {
    try {
        const st1 = {
            name: "Aamir",
            age: 18,
            gender: "Male",
        }
        const st2 = {
            name: "Sharu",
            age: 19,
            gender: "Male",
        }
        const st3 = {
            name: "Ayesha",
            age: 21,
            gender: "Female",
        }
        const st4 = {
            name: "Rohan",
            age: 15,
            gender: "Male",
        }
        const result = await St.insertMany([st1, st2, st3, st4])
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
creatingDocuments()