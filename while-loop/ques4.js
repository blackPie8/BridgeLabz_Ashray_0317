function randomGen(){
    return Math.floor(Math.random()*2)
}

let totAmt = 100
let countLoss = 0
let countWin = 0

while(totAmt > 0 && totAmt < 200){
    let random = randomGen()
    if(random===1){
        totAmt++
        countWin++
    }
    else if(random===0){
        totAmt--
        countLoss++
    }
}
let totBets = countWin + countLoss
if(totAmt === 0){
    console.log(`You lost and have 0Re in ${totBets} bets and won ${countWin} times`);
}
else if(totAmt === 200){
    console.log(`You won and have 200Re in ${totBets} bets and won ${countWin} times`);
    
}