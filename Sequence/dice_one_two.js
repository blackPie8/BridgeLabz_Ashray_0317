let max = 6
let min = 0

const diceOne = Math.floor((Math.random()*(max-min)+1))
const diceTwo = Math.floor((Math.random()*(max-min)+1))

console.log(diceOne);
console.log(diceTwo);


const diceSum = diceOne+diceTwo
console.log(diceSum)
