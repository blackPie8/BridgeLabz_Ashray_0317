let countH = 0
let countT = 0
while(countH <11 && countT<11){
let outcome = Math.floor(Math.random()*2)+1
if(outcome===1){
    countH++
}
else{
    countT++
}
}

if(countH === 11){
    console.log("Heads Won")
}
else if(countT === 11){
    console.log("Tails Won")
}
