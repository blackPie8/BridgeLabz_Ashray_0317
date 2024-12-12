// Fahrenheit to Celcius

const prompt = require("prompt-sync")({sigint:true})

const n = prompt("Enter degree in Fahrenheit ")

function fahToCel(deg){
    let res = (deg - 32)*(5/9)
    console.log(`${deg} Fahrenheit to Celcius is -> ${res.toFixed(2)}`)
}

fahToCel(n)