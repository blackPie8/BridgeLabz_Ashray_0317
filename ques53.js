// 70! with high precision (all digits)

function factorial(n){
    n = BigInt(n)
    let res = 1n
    for(let i = n;i > 0;i--){
        res *= i
    }
    return res
}

const result = factorial(70)
console.log(result.toString())