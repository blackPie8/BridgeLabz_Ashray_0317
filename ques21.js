// Rotate an array to the right

const prompt = require("prompt-sync")({sigint:true})
let k = prompt("Rotate to right by -> ")

const arr = [12,13,11,19,23,20]
let n = arr.length

k%=n

const newArr = arr.slice(-k).concat(arr.slice(0,n-k))
console.log(newArr)


