// GLOBAL VARIABLES
// =============================================================================

var godsLibrary = ["apollo", "hermes", "aphrodite", "endymion", "artemis", "ares","zeus", "kronos", "ouranos", "poseidon", "hades"];


// Win counter 
var wins = 0;

// Array for string of guessed words 
var lettersBox = [];

// Empty string that letters can be added to after guessing
var emptyWord = "";

// # of Guesses user has, should count down 
var userTurns = 10;


var randomPick = godsLibrary[Math.floor(Math.random() * godsLibrary.length)];

for(var i = 0; i < randomPick.length; i++){
	emptyWord = emptyWord + "*"; 
	}

// FUNCTIONS
// =============================================================================

function resetAll()
{
	lettersBox = [];
	userTurns = 10;
	randomPick = godsLibrary[Math.floor(Math.random() * godsLibrary.length)];
	emptyWord = "";
	for(var i = 0; i < randomPick.length; i++){
	emptyWord = emptyWord + "*"; 
	};
	console.log(randomPick);
}

// goes through string, cuts front of string, adds userGuess and adds rest of string
function writeonString(str, i, userGuess)
{
	return str.substr(0, i) + userGuess + str.substr(i + 1);
} 

function checkLetters (lettersBox, userGuess)
{
	if(lettersBox.indexOf(userGuess) === -1) {
		lettersBox.push(userGuess); 
		console.log("testing arrays: " + lettersBox);
	}else if(lettersBox.indexOf(userGuess) > -1) {
		console.log("this already exists in array.");
		alert("you already picked this.")
	};
}

// MAIN PROGRAM
// =============================================================================

document.onkeyup = function(event)
{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("user clicked: " + userGuess);
	checkLetters(lettersBox, userGuess);

	if(lettersBox.length == 12){
		alert("You lose! Sorry!");
		resetAll();
	}

	if(emptyWord === randomPick){
		alert("You win! Yay!");
		wins++;
		resetAll();
	}	
	
	// This is printing out which string was picked
	var computerPick = randomPick; 

	// This is comparing the letter to the character in the string picked from "computerPick"
	var letterCompare = computerPick;
	for(var i = 0; i < letterCompare.length; i++){
		if(userGuess == letterCompare.charAt(i)){
			emptyWord = writeonString(emptyWord, i, userGuess);
			console.log("match: " + letterCompare.charAt(i));
		}else if(userGuess != letterCompare.charAt(i)){
			console.log("NO");
			};
	};

	// SHOULD BE LAST!! Below adds pertinent info based on user input to game area
	var html = /* letterCompare */ "<br>Current Word:" + emptyWord +
				"<br> you pressed: " + userGuess +  
				"<br> Letters Guessed: " + lettersBox + 
				"<br>Wins: " + wins; 
	document.querySelector('#game').innerHTML = html;
};

// TESTING/DEBUGGING
// =============================================================================
console.log(randomPick);
