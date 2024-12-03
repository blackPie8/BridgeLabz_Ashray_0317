const prompt = require("prompt-sync")({sigint: true})

const start = prompt("Start ")
const end = prompt("End ")

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

function primesInRange(start, end){
    const primes = []
    for(let i = start;i <= end;i++){
        if(isPrime(i)){
            primes.push(i)
        }
    }
    return primes
}

const primes = primesInRange(start, end)
console.log(primes)
