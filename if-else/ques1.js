let fiveDigits = []

for(let i = 0;i < 5;i++){
    const randomNum = Math.floor((Math.random()*900)+100)
    fiveDigits.push(randomNum)
}

let minValue = Math.min(...fiveDigits)
let maxValue = Math.max(...fiveDigits)

console.log(`Max Value is ${maxValue} and Min Value is ${minValue}`);
