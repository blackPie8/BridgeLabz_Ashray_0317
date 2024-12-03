const prompt = require("prompt-sync")({sigint: true})

let num = prompt("Enter n - ")
num = Number(num)

for(let i = num;i>=0;i--){
    let val = Math.pow(2,i)
    console.log(`2 to the power of ${i} is ${val}`);
}