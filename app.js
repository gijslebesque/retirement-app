// Including the necessary modules.
const express = require('express')
const fs = require('fs')
const app = express()

//set view engine
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.get('/', (request,response) =>{
	response.render('index')
})


// app.get('/', (request, response) =>{
// 	console.log('Render index')
// 	fs.readFile(__dirname + '/data.json', (error, data) => {
// 		if (error )throw error
// 		let parsedData = JSON.parse(data)
// 		console.log(parsedData)
// 		response.render('index', {data:parsedData})
// 	})
// })


//set listener
app.listen(8000,() =>{
	console.log("Server running")
})