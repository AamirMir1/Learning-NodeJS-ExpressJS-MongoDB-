const mongoose = require("mongoose")
mongoose.connect(`mongodb://localhost:27017/${process.env.DATABASE}`).then(()=>{
  console.log("Connected Successfully")  
}).catch((err)=>{
    console.log("Connection Failed")
})