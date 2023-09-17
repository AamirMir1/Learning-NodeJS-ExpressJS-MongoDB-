const mongoose = require("mongoose")

// Connection creation a creating new database

mongoose.connect("mongodb://localhost:27017/newStudents").then(() => {
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

const insertingDocuments = async () => {
    try {
        const st1 = new St({
            name: "Aamir",
            age: 18,
            gender: "Male"
        })
        const st2 = new St({
            name: "Ayesha",
            age: 15,
            gender: "Female"
        })
        const st3 = new St({
            name: "Rohan",
            age: 17,
            gender: "Male"
        })
        const insert = await St.insertMany([st1, st2, st3])
        console.log(insert)
    } catch (error) {
        console.log(error)
    }
}
// insertingDocuments()

// Reading Documents
const getDocuments = async () => {
    try {
        const read = await St.find({gender: "Male"}/*, {name: 1}*/).select({name: 1}).limit(1)
        console.log(read)
    } catch (error) {
        console.log(error)
    }
}

getDocuments()