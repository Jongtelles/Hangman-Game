Hangman();

function Hangman() {
    // setting initial variables
    var words = ["words", "that", "are", "part", "of", "the", "theme"];
    var availableLetters = "abcdefghijklmnopqrstuvwxyz";
    var remainingGuesses = 5;
    var lettersGuessed = undefined;
    var wins = 0;
    // randomly choosing one of the possible words and setting it as the value for currentWord
    var currentWord = words[Math.floor(Math.random() * words.length)];
    // and output it to console for testing
    console.log(currentWord);
    // determine number of blanks in currentWord
    var numberOfBlanks = currentWord.length;
    // and output it to console for testing
    console.log(numberOfBlanks);
    // for each letter in the currentWord, display a blank space "_"
    var blanks = "";
    for (var i = 0; i < numberOfBlanks; i++) {
        blanks += "_" + " ";
        document.getElementById("currentWord").innerHTML = (blanks);
    };
    // display number of wins and remaining guesses
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

    // set userGuess to whatever key is pressed, and convert it to lowercase
    // var userGuess = event.key.toLowerCase();


}