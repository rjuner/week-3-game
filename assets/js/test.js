	var wordBank = ["wookie", "skywalker", "droid", "galaxy", "jedi", "podracing", "ewoks", "tauntaun", "lando", "master", "destroyer", "sandpeople", "padme", "tatooine", "palpatine", "yoda", "chewbacca", "kenobi", "lightsaber", "jawa", "han", "anakin", "vader", "dagobah", "hutt", "sith", "knight", "force", "republic", "ship", "rebel", "hoth", "luke", "leia", "rey", "finn", "poe", "fett", "jango", "boba"];		//Words It Can Be
	var wins = 0;					//How many wins
	var guessWord = "";				//Empty String, will hold their guesses
	var turns = 10;					//How many turns left
	var lettersTried = [];			//Letters they have guessed
	var currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];

for(var i = 0; i < currentWord.length; i++) {
		guessWord = guessWord + "_";
	}

	/* document.querySelector('#game').innerHTML = "Current Word: " + guessWord +
			"<br> Number of Guesses: " + turns +
			"<br> Letters Already Guessed: " + lettersTried +
			"<br> Wins: " + wins;

	*/

// if "guessword"
	function replaceLetter(str, i, letter) {
		if(i > str.length-1) {
			return str;
		}
		return str.substr(0, i) + letter + str.substr(i + 1);
	}


	function inArray(letter, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == letter) {
				return true;
			}
		}
		return false;
	}
	function reset() {
		currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		guessWord = "";
		for(var i = 0; i < currentWord.length; i++) {
			guessWord = guessWord + "_";
		}
		turns = 10;
		lettersTried = [];
	}
		
	document.onkeyup = function(event) {
		var letter = String.fromCharCode(event.keyCode).toLowerCase();
		var inWord = false;
		
		for(var i = 0; i < currentWord.length; i++) {
			if(letter == currentWord[i]) {
				guessWord = replaceLetter(guessWord, i, letter);
				inWord = true;
			}
		}
		if(!inWord && !inArray(letter, lettersTried)) {
			lettersTried.push(letter);
			turns--;
		}
		if(turns == 0) {
			alert("You lost! Try again!");
			reset();
		}
		if(guessWord.indexOf("_") === -1) {
			wins++;
			reset();
		}
		var html = "Current Word: " + guessWord +
			"<br> Number of Guesses: " + turns +
			"<br> Letters Already Guessed: " + lettersTried +
			"<br> Wins: " + wins;
		document.querySelector('#game').innerHTML = html;
	}