// Node.js Core Modules____

// Consider modules to be same as javascript libraries. A set of functions you want to include in your application.

let fs = require('fs')  // This is a core module
// Creating a new file

fs.writeFileSync('Read.txt', "This is my first file")

// Overwriting the existed file

fs.writeFileSync('Read.txt', "Your text is overwrited")

// Adding more data in existed file

fs.appendFileSync("Read.txt", " Adding more text in your file")

// Reading files

const bufferData = fs.readFileSync("Read.txt") // This will read your file in buffer data type
console.log(bufferData)

/*
<Buffer 59 6f 75 72 20 74 65 78 74 20 69 73 20 6f 76 65 72 77 72 69 74 65 64 20 41 
64 64 69 6e 67 20 6d 6f 72 65 20 74 65 78 74 20 69 6e 20 79 6f 75 72 20 66 ... 3 more bytes>

1- node.js includes additional data type called buffer
2- not available in browser javascript
3- Buffer is mainly used to store binary data
4- while reading from a file or receiving packets over the network

*/
 
// Reading files in string form

const toStr = fs.readFileSync('Read.txt').toString()
console.log(toStr)

// Renaming file name

fs.renameSync("Read.txt", "newRead.txt")


