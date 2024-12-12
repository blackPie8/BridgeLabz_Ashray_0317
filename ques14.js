// first 10 fibonacci num

function fibonacci(){
    let a = 0
    let b = 1
    let sum = 0
    let count = 0

    while(count < 10){
        if(a===0 && b===1){
            console.log(a)
            console.log(b)
            count+=2
        }

        sum = a+b
        console.log(sum)
        a = b
        b = sum
        count++
    }
}

fibonacci()