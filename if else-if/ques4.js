const prompt = require("prompt-sync")({sigint: true})

const a = prompt("num 1 - ")
const b = prompt("num 2 - ")
const c = prompt("num 3 - ")

const opr1 = a+b*c
const opr2 = a%b+c
const opr3 = c+a/b
const opr4 = a*b+c

const maxNum = Math.max(opr1, opr2, opr3, opr4)
const minNum = Math.min(opr1, opr2, opr3, opr4)

console.log(`Max value is ${maxNum} and Min value is ${minNum}`);
