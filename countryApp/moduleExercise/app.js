
var reader = require(__dirname + "/json-file-reader");

var fs = require('fs')

var countryName = process.argv[2]

reader(__dirname + "/countries", function (thecountries) {
	for (var i = 0; i < thecountries.length; i++) {
		if (thecountries[i].name === countryName) {
			console.log("country: "  + thecountries[i].name + "\n" + "topLevelDomain " + thecountries[i].topLevelDomain)

		}
	}

})