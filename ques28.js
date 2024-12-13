// sum of first 100 prime numbers and return them in an array

function isPrime(n){
    if(n < 2) return false
    if (n === 2) return true
    if(n%2===0) return false

    for(let i = 3;i <= Math.sqrt(n);i+=2){
        if(n%i==0){
            return false
        }
    }
    return true
}

function firstNPrime(num){
    let prime = []
    let curr = 2

    while(prime.length < num){
        if(isPrime(curr)){
            prime.push(curr)
        }
        curr++
    }
    return prime
}

const res = firstNPrime(100)
console.log(res)
const sum = res.reduce((acc,val)=>acc+val,0)
console.log(sum)