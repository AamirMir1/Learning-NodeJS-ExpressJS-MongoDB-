// Creating Folder
const fs = require('fs')
fs.mkdir("MyFolder", ()=>{
    console.log("Your folder has been created successfully")
})

// Creating file in that folder

fs.writeFile("./MyFolder/read.txt", "This is a readable file", ()=>{
    console.log("Your file has been created successfully")
})

// Reading file from that folder
fs.readFile("./MyFolder/read.txt", "utf-8", (err, data)=>{
   console.log(data)
})

// Rename file
fs.rename("./MyFolder/read.txt", "./MyFolder/read2.txt", ()=>{
    console.log("Renamed successfully")
})

// Appending file
fs.appendFile("./MyFolder/read2.txt", " This is another text", (err)=>{
    console.log("adding more text")
})

