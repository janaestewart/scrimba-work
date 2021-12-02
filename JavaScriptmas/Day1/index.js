const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    let dateObject = new Date();
    const currentDay = dateObject.getDate()
    // - Calculate remaining days.
    const remainingDays = christmas - currentDay 
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = remainingDays
}

renderCountdown()
