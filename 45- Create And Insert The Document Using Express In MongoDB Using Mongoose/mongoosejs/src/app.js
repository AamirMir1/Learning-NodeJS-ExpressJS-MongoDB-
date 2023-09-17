const mongoose = require("mongoose")
// connection creation and creating new database

mongoose.connect("mongodb://localhost:27017/newUser").then(() => {
    console.log("Connected Successfully")
}).catch((err) => {
    console.log(err)
})

// Schema__ is the structure of the document

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    roll: String,
    hobby: String,
    age: Number,
    date: {
        required: true,
        default: Date.now,
        type: Date
    }
})

// Creating collection using model

const User = new mongoose.model("User", userSchema)

// Inserting Documents Into Collections

const creatingDocument = async () => {
    try {
        const userDocuments = new User({
            name: "Aamir",
            roll: "Programmer",
            hobby: "Coding",
            age: 18,
        })
        const result = await userDocuments.save()
    } catch (err) {
        console.log(err);
    }
}
creatingDocument()