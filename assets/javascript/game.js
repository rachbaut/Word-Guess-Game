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
	console.log(wordChoice); //did not see anything really happen not sure what to expect here

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
	console.logI(blankAndSolution);

	
	


}
