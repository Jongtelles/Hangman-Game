// setting global variables
var currentWord, numberOfBlanks, blanks, userGuess, underscore;
var words = ["city", "beltway", "east", "coast", "metro", "swamp", "river"];
var availableLetters = "abcdefghijklmnopqrstuvwxyz";
var remainingGuesses = 5;
var lettersGuessed = [];
var currentWordArray = [];
var wins = 0;

// reset variables
function gameStart() {
    correctlyGuessedChars = 0;
    currentWordArray = [];
    lettersGuessed = [];
    remainingGuesses = 5;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("message").innerHTML =  ("Press any key from A-Z to guess!");
    wordPicker();
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
        underscore = "__"
        blanks.push(underscore);
        document.getElementById("currentWord").innerHTML = blanks.join("  ");
    };
};

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
                document.getElementById("currentWord").innerHTML = blanks.join("  ");
            }
        }
        correctlyGuessedChars++;
    }
    // if userGuess doesn't match, remove a remaining guess
    else if (currentWordArray.indexOf(userGuess) < 0) {
        remainingGuesses--;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }
    // checking for win or loss
    if (correctlyGuessedChars === currentWord.length) {
        document.getElementById("error").innerHTML = ("You WIN!");
        wins++;
        gameStart();
    } else if (remainingGuesses === 0) {
        document.getElementById("error").innerHTML = ("You LOSE! Try again!");
        gameStart();
    }
}
