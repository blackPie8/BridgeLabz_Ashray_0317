const prompt = require("prompt-sync")({sigint: true})
let value = prompt("Enter value for conversion - ")
let opr = prompt("Enter 1-4 operations ")
value = Number(value)
opr = Number(opr)

switch(opr){
    case 1: var val = value*12
    console.log(`${value} feet to inches is ${val}`);
    break
    
    case 2: var val = value/3.281
    console.log(`${value} feet to meter is ${val.toFixed(2)}`);
    break

    case 3: var val = value/12
    console.log(`${value} inches tp feet is ${val}`);
    break

    case 4: var val = value*3.281
    console.log(`${value} feet to inches is ${val}`);
    break
}
