// maximum number in a jagged array of numbers or array of numbers

function maxJagged(arr){
    return Math.max(...arr.flat(Infinity))
}

const jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8,[5]]
]

console.log(maxJagged(jaggedArray))