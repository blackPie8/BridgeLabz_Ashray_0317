// merge two arrays and return the result as a new array

const arr1 = [2,4,5,5,8]
const arr2 = [1,4,2,7,9]


function mergeTwoArrays(arr1,arr2){
    let mergedArray = arr1.concat(arr2)
    console.log(mergedArray);
}

mergeTwoArrays(arr1,arr2)

