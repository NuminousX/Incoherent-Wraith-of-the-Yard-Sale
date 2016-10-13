// a function to preform concatenation

function calculation (terrorists, counterterrorists, win) {
	return terrorists + counterterrorists + win
}

console.log(calculation(5, 10, 15))

// simple function to give the last character of a word

function returnString (word) { 
	return word.slice(-1)
}

console.log(returnString("mass effect"))

//This is a simple function to calculate a cube

function cube (cubeCal) {
	return cubeCal * cubeCal * cubeCal
}

cube(5)

/* this function reverses a string pay attention to the -1 on the word.length, because if you would leave the -1 out
you'll also get an undifined. This is because in the loop you go from 5 to 0, however the first character of the word has an index of 0
it will try to access the 5th value however the word hello only stretches to the 4th index number so the 5th doesn't exist and thus gives undefined */

function reverseStr (word) {
	var weird = "";

	for (var i = word.length - 1; i >= 0; i--) {
		weird += word[i]

	}
	return weird;
}

reverseStr("hello")

hallo  //5   //4


//This function takes in 2 arrays and returns an object the first keys are the first array and the values are the second array

var equipment = ["weapon", "armor"];
var inventory = ["greatsword", "leather armor"]

function readChar (x,y) {
	var potato = {}
	for (var i = 0; i < x.length; i++) {
		potato[x[i]] = y[i]
	}
	return potato
	
}

readChar(equipment,inventory)

/* This function takes in an object and returns a different object with 2 keys, namely keys and values
these two keys have as value 2 arrays which were the values of the original object */

var object = {
	sword: "widowmaker",
	armor: "Quilted Armor of Flame",
	shield: "Dwarven Tower Shield",
	helmet: "Hat of Voidness",
	offhand:"Dirk of Mana Barrier"
}



function cantWrapThis (x) {
	var empty = { 
		keys: [], 
		values: []	
	}
	
	for (var char in x) {
		empty.keys.push(char)
	}


	for (var rat in x) {
		empty.values.push(x[rat])
		
	}


	

	return empty

}

cantWrapThis(object)
