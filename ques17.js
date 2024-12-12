// sum of digits of a positive integer number

const prompt = require("prompt-sync")({sigint:true})
const n = prompt("Enter number ")

function posSum(num){
    let sum = 0
    while(num > 0){
    sum += num%10
    num = Math.floor(num/10)
    }
    console.log(sum);
}

posSum(n)