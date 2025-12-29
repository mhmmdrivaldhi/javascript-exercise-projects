const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const inputHours = document.getElementById("inputHours")
const inputMinutes = document.getElementById("inputMinutes")
const inputSeconds = document.getElementById("inputSeconds")
const btnStart = document.getElementById("btnStart")

let countdownInterval;

function startTimer() {
    let hoursValue = parseInt(inputHours.value) || 0
    let minutesValue = parseInt(inputMinutes.value) || 0
    let secondsValue = parseInt(inputSeconds.value) || 0

    let totalTimeInSeconds = hoursValue * 3600 + minutesValue * 60 + secondsValue

    if (totalTimeInSeconds <= 0) {
        alert("Please enter a valid time.")
        return
    }

    inputHours.value = ""
    inputMinutes.value = ""
    inputSeconds.value = ""

    countdownInterval = setInterval(() => {
        const day = Math.floor(totalTimeInSeconds / 86400)
        const hour = Math.floor(totalTimeInSeconds % 86400 / 3600)
        const minute = Math.floor(totalTimeInSeconds % 3600 / 60)
        const second = Math.floor(totalTimeInSeconds % 60)

        days.textContent = day.toString().padStart(2, "0")
        hours.textContent = hour.toString().padStart(2, "0")
        minutes.textContent = minute.toString().padStart(2, "0")
        seconds.textContent = second.toString().padStart(2, "0")

        totalTimeInSeconds--

        if (totalTimeInSeconds < 0) {
            clearInterval(countdownInterval)
            alert("Time's Up")
        }
    }, 1000)
}

btnStart.addEventListener("click", () => {
    clearInterval(countdownInterval)
    startTimer()
})