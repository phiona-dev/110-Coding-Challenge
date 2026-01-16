let todos = JSON.parse(localStorage.getItem("todos")) || [
    {
        id: 1,
        text: "Buy milk"
    },
    {
        id: 2,
        text: "Go to school"
    },
    {
        id: 3,
        text: "Do homework"
    }

]

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

function renderItems(){
    const todoList = document.getElementById("to-do-list")
    todoList.innerHTML = ""
    todos.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.text;

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "delete"
        deletebtn.style.marginLeft = "60px"
        deletebtn.style.backgroundColor = "red"
        deletebtn.style.color = "white"
        deletebtn.style.border = "none"

        const editbtn = document.createElement("button");
        editbtn.textContent = "edit"

        editbtn.addEventListener("click", () => {
            editItem(item.id)
        })

        deletebtn.addEventListener("click", () => {
            deleteItem(item.id)
        })

        li.appendChild(editbtn)
        li.appendChild(deletebtn)
        todoList.appendChild(li)

    })
}

renderItems()

const formData = document.getElementById("to-do-form");
formData.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("input").value
    todos.push({
        id: Date.now(),
        text: inputValue
    })
    saveTodos()
    renderItems()
    formData.reset()
})

function editItem(id) {
    const itemToEdit = todos.find(item => item.id === id)
    const newValue = prompt("Edit task: ", itemToEdit.text)
    itemToEdit.text = newValue
    saveTodos();
    renderItems()
}

function deleteItem(id){
    todos = todos.filter(item => item.id !== id)
    saveTodos();
    renderItems()

}