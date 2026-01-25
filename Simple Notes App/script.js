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
        const card = document.createElement("div")
        card.classList.add("note-card")

        const title = document.createElement("h3")
        title.textContent = item.title

        const content = document.createElement("p")
        content.textContent = item.content

        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"

        deletebtn.addEventListener("click", () => {
            deleteItem(item.id)
        })

        card.appendChild(title)
        card.appendChild(content)
        card.appendChild(deletebtn)

        notesBody.appendChild(card)
    })
}
renderNotes()

function deleteItem(id) {
    notesArray = notesArray.filter(item => item.id !== id)
    saveNotes()
    renderNotes()
}