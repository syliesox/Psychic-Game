// VARIABLES
//Array for possible letters the computer can choose from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Initial variables for wins, losses and # of guesses. Wins and Losses start at 0. Guesses start at 9.
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
//Array to store the user's guesses in
var guessesChosen = [];

// Variables that hold references to the places in the HTML where we want to replace things
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var chosenGuesses = document.getElementById("guesses-chosen");

// Tells computer to randomly choose an index from the computerChoices array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// Function that is run whenever the user presses a key
document.onkeyup = function(event) {

    // Determines which key is pressed
    var userGuess = event.key;

    // Must check to see if the user's guess is in the possibleChoices array
    if (computerChoices.indexOf(userGuess) > -1) {

        // If the user's guess is equal to the computer's guess, then this code will run
        if (userGuess === computerGuess) {
            wins++;
            guessesRemaining = 9;
            guessesChosen = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess)
        } else if (guessesChosen.indexOf(userGuess) !== -1) { 
            // if the user's choice matches a previous choice, do nothing
        } else {
            guessesChosen.push(userGuess);
            guessesRemaining --;
        }

        // If user runs out of guesses, then this code will run
        if (guessesRemaining === 0) { 
            guessesRemaining = 9;
            losses ++;
            guessesChosen = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess)
        }

        // Displays the wins, losses, guesses left and guesses chosen so far to the screen
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeft.textContent = "Guesses Left: " + guessesRemaining;
        chosenGuesses.textContent = "Your Guesses so far: " + guessesChosen.join(", ");
    }
}


