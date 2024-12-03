const prompt = require('prompt-sync')({ sigint: true });

let n = prompt("Enter a number ")
n = Number(n)

function printPowOfTwo(n){
    let power = 0
    let result = 1

    while(power <= n && result <= 256){
        console.log(`2^${power} -> ${result}`);
        power++
        result *= 2 
    }
}

printPowOfTwo(n)