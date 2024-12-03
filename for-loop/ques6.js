const prompt = require('prompt-sync')({sigint: true});

let number = prompt("Enter a number ")
number = Number(number)
function primeNumber(N){
    const factors = []

    while(N%2===0){
        factors.push(2)
        N/=2
    }

    for(let i = 3;i*i <= N;i+=2){
        while(N%i===0){
            factors.push(i)
            N/=i
        }
    }

    if(N>2){
        factors.push(N)
    }
    return factors; 
}

console.log(primeNumber(number));
