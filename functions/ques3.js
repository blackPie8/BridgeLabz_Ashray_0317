const prompt = require("prompt-sync")({sigint:true})

let num = prompt("Enter any number -> ")
num = Number(num)


function isPrime(num){
    if(num <=1){
        return false
    }
    if(num === 2){
        return true
    }
    if(num % 2 == 0){
        return false
    }

    for(let i = 3;i*i <= num;i+=2){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function isPalindrome(n){
    let temp = n
    let rev = 0
    let rem
    while(n > 0){
        rem = n%10
        rev = (rev*10)+rem
        n = Math.floor(n/10)
    }
    return rev
}

if(isPrime(num)){
    let Pal = isPalindrome(num)
    if(isPrime(Pal)){
        console.log(`${num} and its reverse is also Prime`);
    }
    else{
        console.log(`Only ${num} is Prime`);
    }
}
else{
    console.log(`${num} is not Prime`);
    
}