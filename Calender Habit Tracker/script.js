//this is a calendar-based habit and streak system
const startbtn = document.getElementById("start-btn")
const habitPage = document.getElementById("habit-form-screen")
const welcomePage = document.getElementById("welcome-screen")
const calendarPage = document.getElementById("calendar-container")
const habitForm = document.getElementById("habit-form")

const calendarDates = document.querySelector(".calendar-dates")
const monthYear = document.getElementById("month-year")
const prevMonthBtn = document.getElementById("prev-month")
const nextMonthBtn = document.getElementById("next-month")


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

    const activeHabit = habits[habits.length - 1]
    const habitStartDate = new Date(startDateValue)
    const habitEndDate = new Date(endDateValue)
    console.log(habitStartDate)
    console.log(habitEndDate)
    console.log(activeHabit)
    //console.log(startDateValue)

    habitPage.classList.add("hidden")
    calendarPage.classList.remove("hidden")

})

//active-habit = habits[habits.length - 1]
let currentDate = new Date();
let currentMonth = currentDate.getMonth() //outputs months from 0-11, 0-January
let currentYear = currentDate.getFullYear()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function renderCalendar(month, year){
    calendarDates.innerHTML = ""; //prevents duplicate days, messy ui and stale state
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay(); //get the weekday where 1st falls on
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    //create blanks for days in the week before the first day
    for (let i=0; i<firstDay; i++){
        const blank = document.createElement("div");
        calendarDates.appendChild(blank)
    }

    const today = new Date();

    const activeHabit = habits[habits.length - 1]
    if(!activeHabit) return;
    const habitStartDate = new Date(activeHabit.startDate)
    const habitEndDate = new Date(activeHabit.endDate)

    for(let i=1; i<=daysInMonth; i++){
        const day = document.createElement("div")
        day.textContent = i;

        if (
            i === today.getDate() && year === today.getFullYear() && month === today.getMonth()
        ) {
            day.classList.add("current-date")
        }

        const calendarDayDate = new Date(year, month, i)

        if (calendarDayDate >= habitStartDate && calendarDayDate <=habitEndDate){
            day.classList.add("habit-range")
            console.log(day)
        }
        calendarDates.appendChild(day)
    }
}

renderCalendar(currentMonth, currentYear)

prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if(currentMonth < 0){
        currentMonth = 11;
        currentYear--
    }
    renderCalendar(currentMonth, currentYear)
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if(currentMonth > 11){
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear)
})
