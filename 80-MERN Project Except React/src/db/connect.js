const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/notes").then(()=>{
    console.log("Connected Successfully")
}).catch((error)=>{
    console.log("Connection Failed")
})