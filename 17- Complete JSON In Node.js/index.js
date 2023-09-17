// JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to webpage

// 1: Create a object
// 2: Convert it to JSON
// 3: Create a json file using file system module and add the json data
// 4: read the json file from your system
// 5: and reconvert it to object


const fs = require("fs")
const bioData = {
    name: "Aamir",
    subject: "Node.js",
    hobby: "Coding And Gaming"
}
const toJSON = JSON.stringify(bioData)

// fs.writeFile("Bio.json", toJSON, ()=>{
//     console.log("Done");
// })

fs.readFile("Bio.json", "utf-8", (err, data)=>{
    const toOriginal = JSON.parse(data)
    console.log(data)
    console.log(toOriginal)
})


