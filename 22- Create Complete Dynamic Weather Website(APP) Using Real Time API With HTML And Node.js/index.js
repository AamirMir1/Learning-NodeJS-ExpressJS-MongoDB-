const fs = require("fs")
const http = require("http")
const requests = require("requests")
const htmlFile = fs.readFileSync("index.html", "utf-8")

const replaceVal = (changeIt, arrData) => {
    let temperature = changeIt.replace("{%Village%}", arrData.name)
    temperature = temperature.replace("{%Country%}", arrData.sys.country)
    temperature = temperature.replace("{%Temp%}", arrData.main.temp)
    temperature = temperature.replace("{%minTemp%}", arrData.main.temp_min)
    temperature = temperature.replace("{%maxTemp%}", arrData.main.temp_max)
    return temperature;
}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=d4dfaa247a0e28043d9d4882621c850e')
            .on('data', (chunk) => {
                const oriData = JSON.parse(chunk)
                const toArr = [oriData]
                const myData = toArr.map((element) => replaceVal(htmlFile, element)).join("")
                res.write(myData)
            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
                res.end()
            });
    }
})
server.listen(4000, "127.0.0.1")

