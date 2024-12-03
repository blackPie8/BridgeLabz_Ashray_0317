const prompt = require('prompt-sync')({ sigint: true });
let degree = prompt("Enter your number for conversion -> ")
let num = prompt("Choose 1 or 2 for conversions -> ")

degree = Number(degree)
num = Number(num)

let degCtoF = 0
let degFtoC = 0

function celToFarh(val){
    if(degree >= 0 && degree <= 100){
    degCtoF = (val*(9/5))+32
    return degCtoF
    }
    return "degree not b/w range"
}

function farToCel(val){
    if(degree >= 32 && degree <= 212){
    degFtoC = (val-32)*(5/9)
    return degFtoC
    }
    return "degree not b/w range"
}

switch(num){
    case 1:
    let res1 = celToFarh(degree)
    console.log(`${degree} Celcius to Farenheit is ${res1}`);
    break

    case 2:
    let res2 = farToCel(degree)
    console.log(`${degree} Farenheit to Celcius is ${res2}`);
    break

    default :
    console.log("Choose b/w 1 or 2");
    
}