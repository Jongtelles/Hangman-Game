// setting initial variables
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

function wordPicker() {
    // randomly chooses one of the possible words and sets it as the value for currentWord
    var currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    // determines number of blanks in currentWord
    var numberOfBlanks = currentWord.length;
    console.log(numberOfBlanks);
    // for each letter in the currentWord, displays a blank space "_" in DOM
    var blanks = "";
    for (var i = 0; i < numberOfBlanks; i++) {
        blanks += "_" + " ";
        document.getElementById("currentWord").innerHTML = (blanks);
    };
    //create an array containing the individual characters of currentWord
    var currentWordArray = currentWord.split('');
    console.log(currentWordArray);
};
wordPicker();
// When the user presses a key, 
document.onkeyup = function (event) {
    // it will set userGuess to whatever key is pressed, and convert it to lowercase
    var userGuess = String.fromCharCode(event.which).toLowerCase();
    console.log(userGuess);
    // if the user does not enter an A-Z character, will display an error alert
    if (availableLetters.indexOf(userGuess) < 0) {
        document.getElementById("error").innerHTML = "Please enter a letter from A-Z.";
        alert("Please enter a letter from A-Z.");
    }
    // if an A-Z character is pressed, determine if the userGuess is a part of the currentWord
    else {
        // scope issue
        if (currentWordArray.indexOf(userGuess) >= 0) {
            // either way, add guessed letter to the lettersGuessed Array
            lettersGuessed.push(userGuess);
            // document.getElementById("lettersGuessed").innerHTML = (currentWordArray);
            // this will eventually write to the DOM adding to "Letters guessed"
            // lettersGuessed.forEach(function (item, index) {
            //    document.getElementByID("lettersGuessed").innerHTML = (foo)
            // });
            // 
            console.log(lettersGuessed);
            //if userGuess doesn't match, remove a remaining guess
        } else {
            remainingGuesses--;
        }
        // if letter was already guessed, alert("Already guessed! Please try another letter")
        // if (lettersGuessed.indexOf(userGuess) < 0) {
        //     alert("Letter already guessed! Please try another letter")
        // }
        // letter is not part of current word, subtract a remainingGuess
    };
};
// once a word is successfully guessed, set remainingWords to itself -1 (remainingWords--;)
// have to check for remaininGuesses =< 0 to trigger game end alert