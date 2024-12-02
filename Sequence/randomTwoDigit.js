function randomTwoDigit(){
    const digit = Math.floor(Math.random()*90)+10
    return digit;
}

let randomNumbers = [];
for(let i = 0;i < 5;i++){
    const num = randomNumbers.push(randomTwoDigit())
}

let sum = 0
for(let i = 0;i < randomNumbers.length;i++){
    sum+=randomNumbers[i]
}
let avg = sum/randomNumbers.length
console.log(sum);
console.log(avg);




