let domQuote = document.getElementById("quotes")
let domAuthor = document.getElementById("author")
let changeBtn = document.getElementById("changeQuote")

let oriData = ""

const fetchIt = () => {
    let randomQuote = Math.floor(Math.random() * 1644)
    let quote = oriData[randomQuote].text
    let author = oriData[randomQuote].author
    quote == null ? domQuote.innerHTML = "Sorry, Quote Is Not Found" : domQuote.innerHTML = quote
    author == null ? domAuthor.innerHTML = "Author: Unknown" : domAuthor.innerHTML = "Author:" + " " + author
}
const data = async () => {
    const api = "https://type.fit/api/quotes"
    let Json = await fetch(api)
    oriData = await Json.json()
    fetchIt()
}
data()

changeBtn.addEventListener("click", fetchIt)
