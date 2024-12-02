const prompt = require("prompt-sync")({sigint: true})

let Day = prompt("Day")
let Month = prompt("Month")

if(((Month>3)||(Month==3 && Day>=20)) && ((Month<6)||(Month==6 && Day<=20))){
    console.log("true");
}
else{
    console.log("false");
}