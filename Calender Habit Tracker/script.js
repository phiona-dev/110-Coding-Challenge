//this is a calendar-based habit and streak system
const startbtn = document.getElementById("start-btn")
const habitPage = document.getElementById("habit-form-screen")
const welcomePage = document.getElementById("welcome-screen")
const calendarPage = document.getElementById("calendar-screen")
const nextbtn = document.getElementById("habit-form-btn")

startbtn.addEventListener("click", () => {
    console.log("startbtn clicked")
    habitPage.classList.remove("hidden") //force show
    welcomePage.classList.add("hidden") //force hide
})

nextbtn.addEventListener("click", () => {
    habitPage.classList.add("hidden")
    calendarPage.classList.remove("hidden")
})