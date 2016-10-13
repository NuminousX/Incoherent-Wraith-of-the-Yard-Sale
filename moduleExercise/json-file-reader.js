var fs = require('fs')

var Read = function (){

	fs.readFile(__dirname + "/countries", 'utf8', function(err, data){
		if (err) {
			console.log(err)
			throw err
		}
		var thecountries = JSON.parse(data)
		console.log(thecountries)

	})
}

module.export = Read