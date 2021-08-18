//create variables for the game state
//3 variables whats changing: player1 score 

let player1Score = 0
let player2Score = 0
let player1Turn = true

//create variables to store reference 

const message = document.getElementById('message')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */ 

 rollBtn.addEventListener('click', function(){
     const randomNumber = Math.floor(Math.random()*6)+1
    //  console.log(randomNumber)

     // 1. Find out which players turn it is
    //  if (player1Turn){
    //      console.log(`player 1 rolled ${randomNumber}`)
    //  } else {
    //     console.log(`player 2 rolled ${randomNumber}`)
    //  }
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player
    //  player1Turn = !player1Turn

    // 1. Display the dice number instead of logging it out
    // 2. Use the 'active' class to show which player's turn it is 
    // Hint: use the .classList.remove() and classList.add() methods
    // 3. Update the "message" DOM node so that it states who's turn it is

    if(player1Turn){
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.add('active')
        player2Dice.classList.remove('active')
        message.textContent = "Player 2 Turn"


    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.add('active')
        player1Dice.classList.remove('active')
        message.textContent = "Player 1 Turn"
        // player2Scoreboard = randomNumber ++
    }
    player1Turn = !player1Turn

    if(player1Score >= 20){
        message.textContent = `Player 1 has won!`
        showDisplayButton()
    } else if (player2Score >= 20){
        message.textContent = `Player 2 has won!`
        rollBtn.style.display = 'none'
        showDisplayButton()
    }
 })


     // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block


function showDisplayButton() {
    rollBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked
 
resetBtn.addEventListener('click', function(){
    reset()
})

function reset(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    message.textContent = 'Player 1 turn'
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    rollBtn.style.display = 'block'
    resetBtn.style.display = 'none'
}