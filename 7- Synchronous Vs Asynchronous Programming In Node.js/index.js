// Synchronous 

const fs = require("fs")

fs.writeFileSync("Readme.txt", "This is a readme file")
setTimeout(() => {
    const data = fs.readFileSync("Readme.txt", 'utf-8')
    console.log(data)
}, 3000);

console.log("This is a code")  // First the setTimout Function will be execute then the below code will be execute because you used synchronous

setTimeout(() => {
    const data2 = fs.readFile("Readme.txt", "utf8", (err, data) => {
        console.log(data)
    })
}, 3000);

console.log("The is a second code")