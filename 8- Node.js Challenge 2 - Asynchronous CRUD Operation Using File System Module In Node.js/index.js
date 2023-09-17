// Challenge Time - Using Asynchronous fs Modules
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data to it
// 3: Add more data into the file at the end of the existing data
// 4: Read the data without getting the buffer data at first
// 6: Rename the file name to mybio.txt
// 7: now delete both file and the folder

// Creating Folder
const fs = require('fs')
fs.mkdir("Thapa", ()=>{
    console.log("Thapa folder has been created")
})

// Creating File
fs.writeFile("./Thapa/bio.txt", "My name is Thapa", ()=>{
    console.log("Your file has been created in Thapa Folder")
})

// Adding more data
fs.appendFile("./Thapa/bio.txt", " And i am a youtuber", ()=>{
    console.log("Added more data in bio.txt")
})

// Reading Data
fs.readFile("./Thapa/bio.txt", "utf-8", (err, data)=>{
    console.log(data)
    console.log("Readed Successfully")
})

// Renaming File
fs.rename("./Thapa/bio.txt", "./Thapa/mybio.txt", ()=>{
    console.log("Renamed successfully")
})

// Deleting File

fs.unlink("./Thapa/mybio.txt", ()=>{
    console.log("Removed file successfully")
})

fs.unlink("./Thapa/bio.txt", ()=>{
    console.log("Removed file successfully")
})

// Deleting Folder
fs.rmdir("Thapa", ()=>{
    console.log("Thapa folder has been deleted: Mission Accomplished")
})
