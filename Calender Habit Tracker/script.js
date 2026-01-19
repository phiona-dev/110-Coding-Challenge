//this is a calendar-based habit and streak system
const startbtn = document.getElementById("start-btn")
const habitPage = document.getElementById("habit-form-screen")
const welcomePage = document.getElementById("welcome-screen")
const calendarPage = document.getElementById("calendar-screen")
const habitForm = document.getElementById("habit-form")

startbtn.addEventListener("click", () => {
    console.log("startbtn clicked")
    habitPage.classList.remove("hidden") //force show
    welcomePage.classList.add("hidden") //force hide
})

const habits = []
habitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const habitValue = document.getElementById("habit").value
    const startDateValue = document.getElementById("start-date").value
    const endDateValue = document.getElementById("end-date").value
    habits.push({
        name: habitValue,
        startDate: startDateValue,
        endDate: endDateValue,
        completedDays: []
    })
    console.log(habits)
    habitPage.classList.add("hidden")
    calendarPage.classList.remove("hidden")

})