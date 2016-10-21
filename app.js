// Including the necessary modules.
const express 		= require('express')
const fs 			= require('fs')
const app 			= express()
const bodyParser 	= require('body-parser')
const generateUser 	= require(__dirname + '/calculation/customerinformation.js')
const readFile 		=require(__dirname + '/calculation/readfile.js')
//set view engine
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({  //downloaded via npm install body-parser --save
	extended: true
}))

app.get('/', (request,response) =>{
	response.render('index')
})

app.post('/', (request,response) =>{
	generateUser(request)
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