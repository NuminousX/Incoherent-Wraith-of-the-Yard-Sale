var fs = require('fs')


fs.readFile(__dirname + "/countries", 'utf8', function(err, data){
	if (err) throw err
	
	var countries = JSON.parse(data)
	console.log(countries)


})


// van fs.readfile een functie maken die als parameter process.argv neemt 


