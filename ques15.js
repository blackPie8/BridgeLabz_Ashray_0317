// nth fibonacci using recursion

function nthFib(n){
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return nthFib(n-1) + nthFib(n-2)
}

console.log(nthFib(10))