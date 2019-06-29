let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Variables
let wins = 0;
let losses = 0;
let numGuesses = 9;
let guessChoices = [];
//DOM events allow JavaScript to register different event handlers on elements in an HTML document.
document.onkeyup = function(event) {
  //keyboard activity 
  let userGuess = event.key;
//returns random element from string
  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// user guess options
  let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  
//user guess
 if (options.indexOf(userGuess) > -1) {
//guesses correct win =+1
   if (userGuess === computerGuess) {
     wins++;
     numGuesses = 9;
     guessChoices = [];
   }
//push() method adds new items to the end of an array, and returns the new length. decrement operator (--).
   if (userGuess != computerGuess) {
     numGuesses --;
     guessChoices.push(userGuess);
   }
//  guesses number no change
   if (numGuesses === 0) {
   numGuesses = 9;
   losses ++;
   guessChoices = [];
 }

 let html = 
 "<h1> The Psychic Game </h1>" +
 "<p>Guess what letter I'm thinking of!</p>" +
 "<p>Wins: " + wins + "</p>" +
 "<p>Losses: " + losses + "</p>" +
 "<p>Guesses Left: " + numGuesses + "</p>" +
 "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";
//print results 
 document.querySelector("#game").innerHTML = html;

 
 }
};
