const fs = require('fs')
// readds files  in directory and sends back parsed JSON file.
var readJson = (customers, callback) => {
	// fs.readdir(__dirname + '/' + customers, 'utf8', (err, filename) => {
	// 	for (var z = filename.length - 1; z >= 0; z--) {
			fs.readFile(__dirname + '/customers/' + filename, 'utf8', (err, data) => {
				let parsedData = JSON.parse(data)
				callback(parsedData)
			})
		}
	// })
}


module.exports = readJson