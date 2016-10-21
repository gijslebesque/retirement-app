const fs = require('fs')

let generateUser = (request) => {
	let object = 
	{ 
		name: 	request.body.name,
		age: 	request.body.age,
		finances: {
			startcapital: 	request.body.startcapital,
			monthlyadd: 	request.body.monthlyadd
		},
		pension: {
			age: request.body.retirementAge,
			interest: {
				pessimistic: 	1.02,
				average: 		1.04,
				optimistic: 	1.08
			}
		}	
	}
	data = JSON.stringify(object, null, 2)
	fs.writeFile(__dirname + '/../customers/customer.json', data, (err) => {
		if (err) throw err
			console.log('It\'s saved!')
	})
}


module.exports = generateUser