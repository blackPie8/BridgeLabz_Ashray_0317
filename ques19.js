// first “p” prime numbers greater than “n”

function isPrime(n){
    if(n < 2) return false
    if(n === 2) return true
    if(n % 2 === 0) return false
    
    for(let i = 3;i <= Math.sqrt(n);i+=2){
        if(n%i===0){
            return false
        }
    }
    return true
}

function primesAfterN(num,p){
    const primes = []
    let curr = num + 1
    while(primes.length < p){
        if(isPrime(curr)){
            primes.push(curr)
        }
        curr++
    }
    console.log(primes);
    
}

primesAfterN(10,5)