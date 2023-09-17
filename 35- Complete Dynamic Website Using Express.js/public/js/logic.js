let burger = document.querySelector(".burger")
let navbar = document.getElementsByTagName("nav")[0]
let anchorTag = document.getElementsByTagName("ul")[0]
let bgImage = document.getElementById("right")

burger.addEventListener("click", () => {
    if (navbar.style.height != "230px") {
        navbar.style.height = "230px"
        anchorTag.style.opacity = "1"
    } else {
        navbar.style.height = "70px"
        anchorTag.style.opacity = "0"
    }
})
function changeBackground() {
    if (bgImage.classList.contains("chan")) {
        bgImage.classList.remove("chan")
    } else {
        bgImage.classList.add("chan")
    }
}
setInterval(changeBackground, 15000)

window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 901)")) {
        navbar.style.height = "70px"
        anchorTag.style.opacity = "1"
    }
})

let day = document.querySelector(".day")
let todayDay = new Date().getDay()

let currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let solvedDay = currentDay[todayDay]
day.innerHTML = solvedDay

let date = document.querySelector(".tDate")
let todayDate = new Date().getDate()

let currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let todayMonth = new Date().getMonth()
let solvedMonth = currentMonth[todayMonth]
console.log(solvedMonth)

date.innerHTML = `${todayDate} / ${solvedMonth}`

let userInput = document.querySelector("#userInput")
let userButton = document.querySelector("#userBtn")
let userOutput = document.querySelector(".userOutput")
let dOutput = document.querySelector("#dOutput")
let weatherImage = document.getElementById("weatherImage")

const checkWeather = async () => {
    if (userInput.value === "") {
        dOutput.innerHTML = "Please Type Something"
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=d4dfaa247a0e28043d9d4882621c850e`
            let arr = await fetch(url)
            let data = await arr.json()
            let originalData = [data]
            dOutput.innerHTML = "Temperature in " + userInput.value + " is: " + "<br>" + originalData[0].main.temp + " &deg;C"
            let checkImage = originalData[0].weather[0].main
            if (checkImage == "Clear") {
                weatherImage.innerHTML = '<i class="fa-solid fa-sun"></i>'
            } else if (checkImage == "Clouds") {
                weatherImage.innerHTML = `<i class="fa-solid fa-cloud"></i>`
            } else if (checkImage == "Rain") {
                weatherImage.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
            } else {
                weatherImage.innerHTML = '<i class="fa-solid fa-sun"></i>'
            }

        } catch {
            dOutput.innerHTML = "Please Type A Valid Name"
            weatherImage.innerHTML = ""
        }
    }

}
userButton.addEventListener("click", checkWeather)