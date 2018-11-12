var officeWords = ["michael", "jim", "pam", "dwight", "toby", "kelly", "ryan", "stanely", "meredith", "phyllis", "angela", "kevin", "oscar", "creed", "darryl", "jan"];

//grabbing random words
var getRandomWord = function(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var randomWord = getRandomWord(officeWords);
console.log('officeWords', officeWords);