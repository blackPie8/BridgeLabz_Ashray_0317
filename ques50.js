// return an array of n random numbers from 1 to n

function randomArr(n){
    let arr = []
    while(arr.length < n){
    let val = Math.floor(Math.random()*n)+1
        if(!arr.includes(val)){
            arr.push(val)
        }
    }
    return arr
}

console.log(randomArr(10))