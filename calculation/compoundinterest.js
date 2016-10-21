const fs = require('fs')
const prettyNumber = require(__dirname + '/editNumber.js')
let array =[]

var calcCompound = (customer) => {
	// Set end amount  prop and calculate total duration
	
	customer.pension.endamount = {
		pessimistic: 	customer.finances.startcapital,
		average: 		customer.finances.startcapital,
		optimistic: 	customer.finances.startcapital}
		customer.pension.duration = (customer.pension.age - customer.age)
// do the interest math
for (var i = customer.pension.duration - 1; i >= 0; i--) {
	// add monthly spend to all scenarios
	customer.pension.endamount.pessimistic 	+= (customer.finances.monthlyadd * 12)
	customer.pension.endamount.average 		+= (customer.finances.monthlyadd * 12)
	customer.pension.endamount.optimistic 	+= (customer.finances.monthlyadd * 12)
 // calculate added interest
 customer.pension.endamount.pessimistic *= (customer.pension.interest.pessimistic)
 customer.pension.endamount.average 	*= (customer.pension.interest.average)
 customer.pension.endamount.optimistic 	*= (customer.pension.interest.optimistic)

}
array.push(customer)

data = JSON.stringify(array, null, 2)

fs.writeFile('customerprojections.json', data, (err) => {
  if (err) throw err
  console.log('It\'s saved!')
})

 //output our data
 // console.log ("Welcome " + customer.name 		+ " to our advanced pension planner!")
 // console.log ("You are starting with " 			+ customer.finances.startcapital + " and add a monthly amount of " + customer.finances.monthlyadd)
 // console.log ("When you retire at age " 		+ customer.pension.age + " you will have the following:")
 // console.log ("In a pessimistic scenario: € " 	+ prettyNumber(customer.pension.endamount.pessimistic))
 // console.log ("In a average scenario: € " 		+ prettyNumber(customer.pension.endamount.average))
 // console.log ("In a optimistic scenario: € " 	+ prettyNumber(customer.pension.endamount.optimistic))
}



module.exports = calcCompound