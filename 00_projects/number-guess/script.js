const randomNumber = parseInt(Math.random() * 20 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const userGuesses = document.querySelector('#pre-guess')
const remaining = document.querySelector('#rem-guess')
const lowAndHi = document.querySelector('#hiOrlow')

const p = document.createElement('p')

let prevGuess = []
let remain = 1

let playgame = true

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validate(checkGuess)
    })
}

function validate(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number!')
    }
    else if(guess > 100){
        alert('Please enter a number less than 20!')
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1!')
    }
    else{
        parseInt(prevGuess.push(guess))
        if(remain === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}!`)
            endGame()
        }
    }
}

function checkGuess(){
    
}
function displayMessage(){

}
function displayGuess(){

}
function endGame(){

}