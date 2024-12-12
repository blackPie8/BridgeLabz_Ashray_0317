// Celcius to Fahrenheit

const prompt = require("prompt-sync")({sigint:true})

const n = prompt("Enter degree in Celcius ")

function celToFah(deg){
    let res = (deg*(9/5))+32
    console.log(`${deg} Celcius to Fahrenheit is -> ${res}`)
}

celToFah(n)