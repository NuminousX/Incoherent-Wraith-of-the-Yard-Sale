var fs = require('fs')

var countryName = process.argv[2]

fs.readFile(__dirname + "/countries.json", 'utf8', function(err, data){
	if (err) throw err

		var countries = JSON.parse(data)

	for (var i = 0; i < countries.length; i++) {
		if (countries[i].name === countryName) {
			console.log("country: "  + countries[i].name + "\n" + "topLevelDomain " + countries[i].topLevelDomain)
			
		}
	}

})






// van fs.readfile een functie maken die als parameter process.argv neemt 




// // Part 1 Create a Node.js application that does the following:

// //     Takes in one parameter from the command line, the name of a country.

//  Note: command line arguments can be read from the global array process.argv

// //     Reads and parses the countries.json file. Note: you must use readFile and not readFileSync.

// //     Outputs information about that specific country. Must be in the following format: Country: Top Level Domain:

// - For the purposes of this exercise, you must create a separate module for reading and parsing the JSON file, named "json-file-reader".
// - This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should call the callback function and pass the parsed JSON to it.
