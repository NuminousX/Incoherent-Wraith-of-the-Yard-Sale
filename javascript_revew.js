function calculation (terrorists, counterterrorists, win) {
	return terrorists + counterterrorists + win
}

console.log(calculation(5, 10, 15))

function returnString (word) { 
	return word.slice(-1)
}

console.log(returnString("mass effect"))

function cube (cubeCal) {
	return cubeCal * cubeCal * cubeCal
}

console.log(cube(5))


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
