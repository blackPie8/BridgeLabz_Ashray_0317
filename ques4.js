// mul tables from 1-10

const prompt = require("prompt-sync")({sigint:true})

const num = prompt("Enter number from 1 - 10 -> ")

function printTable(n){
    for(let i = 1;i <= 10;i++){
        let ans = n*i
        console.log(`${n} * ${i} -> ${ans}`);
    }
}

if(num > 0 && num <= 10){
printTable(num)
}
else{
    console.log("Enter a Valid num!");
    
}