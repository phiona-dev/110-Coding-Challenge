const notesForm = document.getElementById("notes-form")
const btn = document.getElementById("btn")

let notesArray = JSON.parse(localStorage.getItem("notesArray")) || []

notesForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.getElementById("notes-title").value
    const notes = document.getElementById("notes").value

    const newNotes = {
        id: Date.now(),
        title: title,
        content: notes,
        createdAt: Date.now()
    }

    notesArray.push(newNotes)
    saveNotes()
    renderNotes()
    notesForm.reset()
    console.log(notesArray)
})
 function saveNotes() {
    localStorage.setItem("notesArray", JSON.stringify(notesArray))
 }

function renderNotes(){
    const notesBody = document.getElementById("notes-body")
    notesBody.innerHTML = ""
    notesArray.forEach(item => {
        const li = document.createElement("li")
        const contentDiv = document.createElement("div")
        li.textContent = item.title
        contentDiv.textContent = item.content

        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"

        deletebtn.addEventListener("click", () => {
            deleteItem(item.id)
        })

        notesBody.appendChild(li)
        notesBody.appendChild(contentDiv)
        notesBody.appendChild(deletebtn)
    })
}
renderNotes()

function deleteItem(id) {
    notesArray = notesArray.filter(item => item.id !== id)
    saveNotes()
    renderNotes()
}