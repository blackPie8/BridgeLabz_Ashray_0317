const prompt = require("prompt-sync")({sigint: true})

let num = prompt("Enter n")

function Harmonic(num){
    if(num <= 0) return 0
    let harmonic = 0
    for(let i = 1;i<=num;i++){
        harmonic += 1/i
    }
    return harmonic
}
let ans = Harmonic(num)
console.log(ans.toFixed(3));
