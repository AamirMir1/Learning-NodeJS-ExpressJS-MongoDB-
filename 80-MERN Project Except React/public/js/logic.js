const arr = Array.from(yourData)

arr.forEach((note)=>{
    note.addEventListener("click", (e)=>{
        const buttonId = e.target.id
        console.log(buttonId)
        module.exports = buttonId
    })
})