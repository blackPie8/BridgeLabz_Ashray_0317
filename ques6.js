// Calculate 10!

function fact(n){
    let cal = 1
    for(let i = n;i > 0;i--){
        cal *= i
    }
    console.log(`Factorial of 10 is -> ${cal}`); 
}

fact(10)