// my array of words
var officeWords = ["michael", "jim", "pam", "dwight", "toby", "kelly", "ryan", "stanely", "meredith", "phyllis", "angela", "kevin", "oscar", "creed", "darryl", "jan"];
// solution will be kept here
var wordChoice = "";
// word of choice will be broken in indiv letters in this array
var lettersInWordChoice = [];
// will show the number of blanks based on solution
var numBlank = 0;
// hold blanks and guesses of solution 
var blankAndSolution = [];
// hold the wrong guesses of solution 
var wrongGuesses = [];


// here we hold the game counters
var win = 0;
var lose = 0;
var guesses = 10;

//=====================================================================================//

/* this is how the game will start and restart, note that the code
will not begin here but we have this code here when needed in the future */

function gameStart() {
	//reset the guesses back to 0 
	guesses = 10;

	//how the solution is chosen randomly from our array, officeWords
	wordChoice = officeWords[Math.floor(Math.random() * officeWords.length)];
	//the randomly chosen word is now broken into indiv letters
	lettersInWordChoice = wordChoice.split("");
	//count the number of letters the word has
	numBlank = lettersInWordChoice.length;

	//we print the solution in console (to test)
	// console //did not see anything really happen not sure what to expect here

	//IMPORTANT here we reset the guess and success array after the each game
	blankAndSolution = [];
	//IMPORTANT here we reset the wrong guesses from previous game
	wrongGuesses = [];

	/* fill up the variable blankAndSolution list with correct # of blanks
		the # of blanks is based on the # of letters in the word/solution */
	for (var i = 0; i < numBlank; i++) {
		blankAndSolution.push("_");
	}

	//test in console 
	// console.logI(blankAndSolution); //yea need to figure this out how to test it on console

	//reprints the guesses left in HTML
	document.getElementById("myguesses").innerHTML = guesses;
	//reprints the blanks at the beginning of each game in HTML
	document.getElementById("hold").innerHTML = blankAndSolution.join(" ");

	//clears the wrong guesses from previous game
	document.getElementById("clear").innerHTML = wrongGuesses.join(" ");

} 
 
function checkLetters(letter) {
	
	//this boolean will check if there is a letter in that word or not
	var letterCheck = false;

	//check if letter exists in array 
	for (var i = 0; i < numBlank; i++) {
		if(wordChoice[i] === letter) {
			letterCheck = true;
		}
	}
	// if the letter is somewhere within word then it will figure out where
	if (letterCheck) {

		//loop through the word
		for (var j = 0; j < numBlank; j++) {
			//this puts together the blankAndSolution 
			if (wordChoice[j] === letter) {
				//set the exact soace in blanks and letter that equals letter when match
				blankAndSolution[j] = letter;
			}
		}
		//testing
		// console.log(blankAndSolution);
	}
	//if letter does not exist 
	else {
		//then we add the letter to list of wrong letters and - a guess
		wrongGuesses.push(letter);
		guesses--;
	}
}
//this is the roundComplete() function
//this code will run after user makes each guess

function roundComplete() {

	//first we need to log in beginning status in console telling us wins, losses, & guesses left
	// console.log("WinCount: " + win + " | LossCount: " + loss + " | NumGuesses: " + guesses);

//update
document.getElementById("myguesses").innerHTML = guesses;
document.getElementById("hold").innerHTML = blankAndSolution.join(" ");
document.getElementById("clear").innerHTML = wrongGuesses.join(" ");

//if we all letters match solution 
if(lettersInWordChoice.toString() === blankAndSolution.toString()) {
	//add the win counter and let user know

	win++;
	alert("YOU WIN!!");

	//update win counter in HTML and will restart game
	document.getElementById("win-counter").innerHTML = win;
	gameStart();
}
//if no more guesses left
else if (guesses === 0) {
	//add the lose counter
	lose++;
	alert("Dun dun dun, you lose");

	//update loss counter in HTML
	document.getElementById("lose-counter").innerHTML = lose;
	//restart game
	gameStart();
	}

}

//MAIN STUFFF this code is what runs the game

//start game by running the startGame() function
gameStart();

//initiate function for grabbing key clicks
document.onkeyup = function(event) {
	//makes all key clicks to lowercase in case they have caps lock
	var letterGuessed = String.fromCharCode(event.which).toLowerCase();
	//runs code to check for correct stuff
	checkLetters(letterGuessed);
	//runs code after each game
	roundComplete();
};
