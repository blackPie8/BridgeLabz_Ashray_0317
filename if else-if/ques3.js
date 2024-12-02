const prompt = require("prompt-sync")({sigint: true})

const num = prompt("Enter number ins series 1, 10, 100, 1000..... - ")
// num = Number(num)   == compares in string type
if(num==1){
    console.log("unit");
}
else if(num==10){
    console.log("ten");  
}
else if(num==100){
    console.log("hundred")
}
else if(num==1000){
    console.log("thousand")
}
else{
    console.log("ten thousand or above")
}