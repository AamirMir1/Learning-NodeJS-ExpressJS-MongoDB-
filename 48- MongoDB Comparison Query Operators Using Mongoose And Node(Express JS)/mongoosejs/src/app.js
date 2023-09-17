const mongoose = require("mongoose")

// Connection creation and creating new database

mongoose.connect("mongodb://localhost:27017/aboutUser").then(() => {
    console.log("Connected Successfully")
}).catch(() => {
    console.log("Connection Failed")
})

// Schema___ defines the structure of the document

const userSchema = new mongoose.Schema({
    name: String,
    marks: Number,
    age: Number,
    gender: String,
})

// Creating Collection Using models

const User = new mongoose.model("User", userSchema)

// Inserting Documents

const insertingDocuments = async ()=>{
    const userDocument = new User({
        name: "Aamir",
        marks: 834,
        age: 18,
        gender: "Male"
    })
    const user2Document = new User({
        name: "Rohan",
        marks: 353,
        age: 32,
        gender: "Male"
    })
    const user3Document = new User({
        name: "Ayesha",
        marks: 698,
        age: 33,
        gender: "Female"
    })
    const user4Document = new User({
        name: "Alisha",
        marks: 203,
        age: 17,
        gender: "Transgender"
    })
    const user5Document = new User({
        name: "Rohan",
        marks: 300,
        age: 29,
        gender: "Male"
    })
    const user6Document = new User({
        name: "Rohana",
        marks: 300,
        age: 15,
        gender: "Transgender"
    })
    const user7Document = new User({
        name: "sexa",
        marks: 400,
        age: 14,
        gender: "Transgender"
    })
    const insert = await User.insertMany([userDocument, user2Document, user3Document, user4Document, user5Document, user6Document, user7Document])
    console.log(insert)
}

// insertingDocuments()

// Reading Documents

const readingDocuments = async()=>{
    try {
        const read = await User.find({gender: {$nin: ["Female", "Transgender"]}})
        console.log(read)
    } catch (error) {
        console.log(error)
    }
}
// readingDocuments()

// Updating Documents

const updatingDocuments = async ()=>{
       const update = await User.updateOne({marks: {$gt: 400}}, {$set: {marks: 460}})
       console.log(update)
}

// updatingDocuments()

// Deleting Documents

const deletingDocuments = async ()=>{
    const dlt = await User.deleteMany({marks: {$lt: 300}})
    console.log(dlt)
}
// deletingDocuments()