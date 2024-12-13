// Symmetric Difference of an Array

let arr1 = [1,5,3,8,10]
let arr2 = [3,4,1,10,9]

function intArr(arr1,arr2){

    const uniqueArr1 = arr1.filter((val)=>!arr2.includes(val))

    const uniqueArr2 = arr2.filter((val)=>!arr1.includes(val))

    return uniqueArr1.concat(uniqueArr2)
}

let newArray = intArr(arr1,arr2)
console.log(newArray);

