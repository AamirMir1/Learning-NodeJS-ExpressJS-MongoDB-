const mongoose = require("mongoose")

// Connection creation and creating a new database

mongoose.connect("mongodb://localhost:27017/mongooseData").then(()=>{
    console.log("Connected Successfully...")
}).catch((err)=>{
    console.log(err)
})