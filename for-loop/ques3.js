const prompt = require("prompt-sync")({sigint: true})
const num = prompt("Enter n ")

function isPrime(n){
    if(n<=1) return false
    if(n==2) return true
    if(n%2==0) return false

    const sqrt = Math.sqrt(n)
    for(let i = 3;i<sqrt;i+=2){
        if(n % i == 0){
            return false
        }
    }
    return true
}

if(isPrime(num)){
    console.log("prime");  
}
else{
    console.log("not-prime");
}