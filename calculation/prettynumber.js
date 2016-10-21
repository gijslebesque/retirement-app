const fs = require('fs')


	var roundDecimal = number => {
		return Math.round(number * 100) / 100
	}

	var  numberWithCommas = (number) => {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	let prettyNumber = (number) => {
		return numberWithCommas(roundDecimal (number))
	}


module.exports = prettyNumber