const countdownDisplay = document.getElementById("countdown-display")

// function renderCountdown(){
//     const christmas = 25
//     // Task:
//     // - Get today's date (you only need the day).
//     let dateObject = new Date();
//     const currentDay = dateObject.getDate()
//     // - Calculate remaining days.
//     const remainingDays = christmas - currentDay 
//     // - Display remaining days in countdownDisplay.
//     countdownDisplay.textContent = remainingDays
// }

// renderCountdown()

function renderCountdown(){
    const countdown = new Date("Dec 25, 2021 00:00:00")
    var x = setInterval(function() {

        const currentDay = new Date().getTime()
        let distance = countdown - currentDay
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownDisplay.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000)  
}

renderCountdown()