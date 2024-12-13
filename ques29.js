// distance between the first 100 prime numbers

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

function diffPrime(num){
    let prime = []
    let diff = []
    let curr = 2

    while(prime.length < num){
        if(isPrime(curr)){
            prime.push(curr)
        }
        curr++
    }

    for(let i = 0;i < prime.length-1;i++){
        diff.push(prime[i+1]-prime[i])
    }
    return diff
}

let res = diffPrime(100)
console.log(res);


