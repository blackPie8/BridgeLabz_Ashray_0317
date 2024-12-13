// return an array with elements that are in the first array but not in the second


let arr1 = [1,5,3,8,10]
let arr2 = [3,4,1,10,9]

function disArr1(arr1,arr2){
    return arr1.filter((val)=>!arr2.includes(val))
}

const newArr = disArr1(arr1, arr2)
console.log(newArr);
