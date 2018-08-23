var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var lettersguessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



    if (lettersguessed.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
        wins++;
        numGuesses = 9;
        lettersguessed = [];
        alert ("You win!!")
        };
    
        if (userGuess != computerGuess) {
        numGuesses--;
        lettersguessed.push(userGuess);
        };

        if (numGuesses === 0) {
        numGuesses = 9;
        losses++;
        lettersguessed = [];
        alert ("You lost!!")
        };
    };

    var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + lettersguessed.join(", ") + "</p>";

			document.getElementById("game").innerHTML = html;

			
			
		};