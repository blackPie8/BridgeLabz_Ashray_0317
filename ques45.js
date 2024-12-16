// calculate the sum of all the numbers in a jagged array

function jaggedSum(arr){
    return arr.flat(Infinity).reduce((acc,val)=>acc+val,0)
}

const jaggedArray = [
    [1, [2], 3],
    [4, 5],
    [6, 7, 8, 9]
]

console.log(jaggedSum(jaggedArray))