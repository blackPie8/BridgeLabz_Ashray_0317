// Deep copy a jagged array with numbers or other arrays in a new array

function deepCopy(arr){
    return arr.map((val)=>{
        if(Array.isArray(val)){
            return deepCopy(val)
        }
        else{
        return val
        }
    })
}

const originalArray = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [8, 9]
]

const copiedArr = deepCopy(originalArray)
console.log(copiedArr)