// ***** THIS IS A JS TEST ******************

<!-- hide script from old browsers
test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
document.write(" ",month,"/",day,"/",year," ")
// end hiding script from old browsers -->

// ***** END OF TEST JS ******************

// Sets the computer choices 
var computerChoices = ['r', 'p', 's'];

// Declares the tallies to 0 
var wins = 0;
var losses = 0;
var ties = 0;



// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// this logs key pressed to the console
	// var guessBox = console.log(userGuess);


// This picks a random word from the library. 
	var godsLibrary = ["hermes", "aphrodite", "endymion", "artemis", "ares", 
						"zeus", "kronos", "ouranos", "poseidon", "hades"];

	var libraryPick = godsLibrary[Math.floor(Math.random() * godsLibrary.length)];

	console.log(libraryPick);

	var computerPick = libraryPick; 

	// This is printing blanks out for the amount of letters
	var computerBlank = libraryPick;
	for(var i = 0; i < computerBlank.length; i++){
		console.log("_" + " ");
	};

// This is comparing the letter to the character in the string picked from "computerPick"
	var letterCompare = computerPick;
	for(var i = 0; i < letterCompare.length; i++){
		if(userGuess == letterCompare.charAt(i)){
			console.log(letterCompare.charAt(i));
		}else{
			console.log("NO");
			};
	};


	/*************************************************

	// Making sure the user chooses r, p, or s
	if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

		// It tests to determine if the computer or the user won the round and then increments 
		if ((userGuess == 'r') && (computerGuess == 's')){
			wins++;
		}else if ((userGuess == 'r') && (computerGuess == 'p')){
			losses++;
		}else if ((userGuess == 's') && (computerGuess == 'r')){
			losses++;
		}else if ((userGuess == 's') && (computerGuess == 'p')){
			wins++;
		}else if ((userGuess == 'p') && (computerGuess == 'r')){
			wins++;
		}else if ((userGuess == 'p') && (computerGuess == 's')){
			losses++;
		}else if (userGuess == computerGuess){
			ties++;
		}  

		// Taking the tallies and displaying them in HTML
		var html = "<p>Press r, p or s to start playing</p>" +
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>ties: " + 
		ties + 
		"</p>";

		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;

	}

	*************************************************/
}