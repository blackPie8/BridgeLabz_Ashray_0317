// Fibonacci(500) with high precision

function fibonacci(n){
    n = BigInt(n)

    if(n === 0n) return 0n
    if(n === 1n) return 1n

    let a = 0n, b = 1n

    for(let i = 2n;i <= n;i++){
        let temp = a+b
        a = b
        b = temp
    }
    return b
}

const res = fibonacci(500)
console.log(res.toString())
