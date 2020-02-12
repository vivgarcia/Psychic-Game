var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var gameOver = false;

//generate random letter
    
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log("The computer choose " + computerChoice);
    
//reset function
function reset(){
    guessesLeft = 10;
    guessedLetters = [];
}

//event listener for keyup event
document.onkeyup = function(event){
    //user makes choice
    var userChoice = event.key;
    //double check userChoice is viable
    var viableChoice = /[a-z]/gi;
    if (!viableChoice.test(userChoice)) {
    alert("please enter a letter");
    }
    else {
    console.log(userChoice);
        }

    //if user guesses the right letter
    if(userChoice !== computerChoice){
        guessesLeft--;
        document.getElementById("guessesLeft").innerText = guessesLeft;
        document.getElementById("main-text").innerText = "Try again!";
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerText = guessedLetters;
    } else if(userChoice === computerChoice){
        wins++;
        alert("You won!");
        document.getElementById("wins").innerText = wins;
        reset();
    }

}

        

       