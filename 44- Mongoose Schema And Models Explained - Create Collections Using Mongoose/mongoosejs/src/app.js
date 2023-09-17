const mongoose = require("mongoose")

// Connection creation and creating a new database

mongoose.connect("mongodb://localhost:27017/userData").then(()=>{
    console.log("Connected Successfully")
}).catch((err)=>{
    console.log(err)
})

// Schema___
         // A mongoose schema defines the structure of the document,
         // default values, validators, etc.

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: String,
    hobby: String,
    age: Number,
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// Models___
           // A mongoose model is a wrapper on the mongoose schema.
           // A mongoose schema defines the structure of the document,
           // default values, validators, etc., whereas a mongoose model
           // provides an interface to the database for creating,
           // querying, updating, deleting records, etc.

// collection creating using model

const Playlist = new mongoose.model("Playlist", playlistSchema)






