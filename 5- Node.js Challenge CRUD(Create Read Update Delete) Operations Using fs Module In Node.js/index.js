// Challenge Time 
// 1: Create a folder named it Thapa
// 2: Create a file in it named bio.txt and data to it
// 3: Add more data into the file at the end of the existing data
// 4: Read the data without getting the buffer data at first
// 6: Rename the file name to mybio.txt
// 7: now delete both file and the folder

// My Try:
const fs = require("fs")

// Creating Folder

// const folder = fs.mkdirSync("Thapa")

// Creating file In Thapa Folder
const file = fs.writeFileSync("./Thapa/bio.txt", "This is my data")

// Appending more data in that file

const moreData = fs.appendFileSync("./Thapa/bio.txt", " Adding more data")

// Reading the data without getting buffer data

const readingData = fs.readFileSync("./Thapa/bio.txt", "utf8")
console.log(readingData)

// Renaming the file

const renamingFile = fs.renameSync("./Thapa/bio.txt", "./Thapa/mybio.txt")

// Deleting file

const deletingFile = fs.unlinkSync("./Thapa/mybio.txt")

// Deleting folder

const deletingFolder = fs.rmdirSync("Thapa")
