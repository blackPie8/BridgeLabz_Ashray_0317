const prompt = require('prompt-sync')({ sigint: true });

let num1 = prompt("Enter num1 -> ")
let num2 = prompt("Enter num2 -> ")

num1 = Number(num1)
num2 = Number(num2)


function isPalindrome(num1, num2){
    let temp = num1
    let rev = 0
    let rem
    while(temp > 0){
        rem = temp%10
        rev = (rev*10) + rem
        temp = Math.floor(temp/10)
    }
    if(rev === num2){
        console.log("Is Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }
}

isPalindrome(num1, num2)