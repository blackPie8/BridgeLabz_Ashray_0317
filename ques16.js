// return a Boolean specifying if a number is prime

const prompt = require("prompt-sync")({sigint:true})
let n = prompt("Enter number ")
n = Number(n)

function isPrime(num){
    if(num === 0) return false
    if(num === 1) return false
    if(num === 2) return true

    if(num % 2 === 0){
        return false
    }
    for(let i = 3;i <= Math.sqrt(num);i+=2){
        if(num % i === 0){
            return false
        }
    }
    return true
}

if(isPrime(n)){
    console.log("true");  
}
else{
    console.log("false");  
}