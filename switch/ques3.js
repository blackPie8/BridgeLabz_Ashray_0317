const prompt = require("prompt-sync")({sigint: true})

let num = prompt("Enter num in fromat of 1,10,100,1000 - ")
num = Number(num)

switch(num){
    case 1: console.log("unit")
    break
    case 10: console.log("ten");
    break
    case 100: console.log("hundred");
    break
    case 1000: console.log("thousand");
    break
    default: console.log("ten thousand or above");
}