// Rotate an array to the left

const prompt = require("prompt-sync")({sigint:true})

const arr = [1,3,5,7,11,9]
let n = arr.length

let k = prompt("Rotate to left by -> ")

k = k%n

let newArr = arr.slice(k).concat(arr.slice(0,k))
console.log(newArr)
