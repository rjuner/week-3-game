
var godsLibrary = ["apollo", "hermes", "aphrodite", "endymion", "artemis", "ares","zeus", "kronos", "ouranos", "poseidon", "hades"];

// Below selects the random word from the library

var emptyWord = "";

function selectWord() {
	return godsLibrary[Math.floor(Math.random() * godsLibrary.length)];
}

var randomPick = selectWord();

for(var i = 0; i < randomPick.length; i++){
		emptyWord = emptyWord + "*"; 
};

// CLARIFY THIS!!! 
function writeonString(str, i, userGuess){
	return str.substr(0, i) + userGuess + str.substr(i + 1);
}

// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// this logs key pressed to the console
	var guessBox = console.log("key clicked: " + userGuess);

// This is printing out which string was picked
	console.log(randomPick);

	var computerPick = randomPick; 

	var letterCompare = computerPick;
	for(var i = 0; i < letterCompare.length; i++){
		if(userGuess == letterCompare.charAt(i)){
			emptyWord = writeonString(emptyWord, i, userGuess);
			console.log("match: " + letterCompare.charAt(i));
		}else{
			console.log("NO");
			};
	};

	// SHOULD BE LAST!! Below adds pertinent info based on user input to game area
	var html = "Current Word:" + emptyWord +
				"<br> you pressed: " + userGuess +  
				"<br> Letters Guessed"; 


		/*	 "Current Word: " + emptyWord +
			"<br> Number of Guesses: " + turns +
			"<br> Letters Already Guessed: " + lettersGuessed +
			"<br> Wins: " + wins;
		*/

	document.querySelector('#game').innerHTML = html;
}; 


/*


// Win counter 
var wins = 0;

// Array for string of guessed words 
var lettersGuessed = [];

// Empty string that letters can be added to after guessing


// # of Guesses user has, should count down 
var userTurns = 10;

function resetAll(){
	emptyWord = randomPick; 
	lettersGuessed = [];
}

// This is comparing the letter to the character in the string picked from "computerPick"
	

	if(emptyWord == computerPick){
		win();
	}

	function win () { 
		alert('You win!');  
		resetAll();
	}


*/