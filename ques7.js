// sum of even numbers > 10 and < 30

function sumOfEven(){
    let sum = 0
    for(let i = 11;i < 30;i++){
        if(i%2 === 0){
        sum += i
    }
}
console.log(`Sum of even num b/w 10 and 30 -> ${sum}`);
}

sumOfEven()