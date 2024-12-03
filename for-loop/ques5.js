const prompt = require("prompt-sync")({sigint: true})

let num = prompt("Enter num ")
num = Number(num)
function factOf(num){
    if(num == 0 || num == 1){
        return 1
    }
    let fact = 1;
    for(let i = num;i >= 1;i--){
        fact *= i
    }
    return fact
}

let ans = factOf(num)
console.log(ans);
