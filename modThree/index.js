// document.getElementById('count-el').innerText = 5

//we need some way to store a count. to store that we need a variable

// let count = 0 
// console.log(count)


// // 1. Create a variable, myAge, and set its value to your age

// let myAge = 27

// // 2. Log the myAge variable to the console

// console.log(myAge)


// 1. Create two variables, myAge and humanDogRatio

//     let myAge = 27
//     let humanDogRatio = 7
// 2. Multiply the two together and store the result in myDogAge 
//     let myDogAge = myAge * humanDogRatio
// 3. Log myDogAge to the console
// console.log(myDogAge)


// let count = 5

// // count = count + 1
// //instead do

// count += 1

// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// // Decrease it down to 25, and then finally increase it to 70
// bonusPoints -= 25
// console.log(bonusPoints)
// bonusPoints += 70
// console.log(bonusPoints)
// Console.log the value after each step


// Create a function (you decide the name) that logs out the number 42 to the console
// function print() {
//     console.log(42)
// }
// Call/invoke the function
// print()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times

// function logSums() {
//     console.log(lap1 + lap2 + lap3)
// }

// logSums()


// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()

// console.log(lapsCompleted)


// // intialize the count as 0
// let count = 0 
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.textContent = count

}

//create a function, save(), which logs out the count when it's called 
// let saved = document.getElementById('save-btn')

function save() {
    let counter = count + ' - '
    saveEl.textContent += counter
    countEl.textContent = 0
    count = 0
}


