// add two positive numbers of indefinite size

const prompt = require("prompt-sync")({sigint:true})

let num1 = prompt("Enter num 1")
let num2 = prompt("Enter num 2")

num1 = Number(num1)
num2 = Number(num2)

function addNum(num1, num2){
    return num1 + num2
}

let res = addNum(num1, num2)
let resStr = res.toString()

console.log(typeof(resStr))