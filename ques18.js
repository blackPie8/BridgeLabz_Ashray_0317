// first 100 prime numbers

function isPrime(num){
    if(num < 2) return false
    if(num === 2) return true
    if(num % 2 === 0) return false
    for(let i = 3;i <= Math.sqrt(num);i+=2){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function primeN(n){
    const primes = [2]
    let curr = 3
    while(primes.length < n){
        if(isPrime(curr)){
            primes.push(curr)
        }
        curr++
    }
    console.log(primes);
}

primeN(100)
