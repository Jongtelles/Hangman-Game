// setting initial variables
var currentWord, numberOfBlanks, blanks, userGuess;
var words = ["words", "that", "are", "part", "of", "the", "theme"];
var availableLetters = "abcdefghijklmnopqrstuvwxyz";
var remainingWords = words.length;
var remainingGuesses = 5;
var lettersGuessed = [];
var currentWordArray = [];
var wins = 0;
// display number of wins and remaining guesses
function gameStart() {
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
};
gameStart();
// randomly chooses one of the possible words and sets it as the value for currentWord
function wordPicker() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    //create an array containing the individual characters of currentWord
    currentWordArray = currentWord.split('');
    console.log(currentWordArray);
    // determines number of blanks in currentWord
    numberOfBlanks = currentWord.length;
    console.log(numberOfBlanks);
    // for each letter in the currentWord, add an underscore to the blanks array
    blanks = [];
    for (var i = 0; i < numberOfBlanks; i++) {
        var underscore = "__"
        blanks.push(underscore);
        document.getElementById("currentWord").innerHTML = blanks.join("  ");
    };
};
wordPicker();
// When the user presses a key, 
document.onkeyup = function (event) {
    // it will set userGuess to whatever key is pressed, convert it to lowercase, add it to the lettersGuessed array and display it
    userGuess = String.fromCharCode(event.which).toLowerCase();
    console.log(userGuess);
    lettersGuessed.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join("  ");
    // if the user does not enter an A-Z character, display an error alert
    if (availableLetters.indexOf(userGuess) < 0) {
        alert("Please enter a letter from A-Z.");
    }
    // if an A-Z character is pressed, determine if the userGuess is a part of the currentWord
    else if (currentWordArray.indexOf(userGuess) >= 0) {
        // compares userGuess letter with letters of the currentWord array and replaces them in the DOM if they match
        for (var i = 0; i < currentWord.length; i++) {
            if (userGuess === currentWordArray[i]) {
                blanks[i] = userGuess;
                console.log(blanks);
                document.getElementById("currentWord").innerHTML = blanks.join("  ");
            }
        }
    }
    //if userGuess doesn't match, remove a remaining guess
    else if (currentWordArray.indexOf(userGuess) < 0) {
        remainingGuesses--;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }
}
//check if word is complete
//check for loss conditions
// if (remainingGuesses <= 0) {
//     alert("Game over! YOU LOSE!")
//     gameStart();
// }
// };
// once a word is successfully guessed, set remainingWords to itself -1 (remainingWords--;)

// // if the letter was already guessed, display error alert
// else if (lettersGuessed.indexOf(userGuess) >= 0) {
//     alert("Letter already guessed, please try again!")