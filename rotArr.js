const arr = [1,4,3,6,23,21]
let k = 2
function rotArray(array){
    let n = array.length

    k = k % n
    return arr.slice(-k).concat(arr.slice(0,n-k))

}

let rotated = rotArray(arr)
console.log(rotated);
