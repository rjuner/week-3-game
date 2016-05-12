// GLOBAL VARIABLES
// =============================================================================

var godsLibrary = ["mercury", "hermes", "venus", "aphrodite", "mars", "ares", "jupiter", "zeus", "saturn", "kronos", "uranus", "ouranos", "neptune", "poseidon"];

var music = {mercury:'assets/music/merc.mp3', venus:'assets/music/ven.mp3', mars:'assets/music/mar.mp3', jupiter:'assets/music/jup.mp3', saturn:'assets/music/sat.mp3', uranus:'assets/music/ura.mp3', neptune:'assets/music/nep.mp3' }

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



	if(randomPick == godsLibrary[0] || randomPick == godsLibrary[1]){
		var audio = new Audio(music.mercury);
		audio.play();
	}

	if(randomPick == godsLibrary[2] || randomPick == godsLibrary[3]){
		var audio = new Audio(music.venus);
		audio.play();
	}

	if(randomPick == godsLibrary[4] || randomPick == godsLibrary[5]){
		var audio = new Audio(music.mars);
		audio.play();
	}

	if(randomPick == godsLibrary[6] || randomPick == godsLibrary[7]){
		var audio = new Audio(music.jupiter);
		audio.play();
	}

	if(randomPick == godsLibrary[8] || randomPick == godsLibrary[9]){
		var audio = new Audio(music.saturn);
		audio.play();
	}

	if(randomPick == godsLibrary[10] || randomPick == godsLibrary[11]){
		var audio = new Audio(music.uranus);
		audio.play();
	}

	if(randomPick == godsLibrary[12] || randomPick == godsLibrary[13]){
		var audio = new Audio(music.neptune);
		audio.play();
	}


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
	var html = emptyWord
				
	document.querySelector('#game').innerHTML = html;

	var test = "Letters Guessed: " + lettersBox;
	document.querySelector('#letterGuessed').innerHTML = test;

	var youGuessed = "You pressed: " + userGuess;
	document.querySelector('#youGuessed').innerHTML = youGuessed;

	var winView = "Wins: " + wins; 
	document.querySelector('#winView').innerHTML = winView;

};

// TESTING/DEBUGGING
// =============================================================================
console.log(randomPick);
