// Union of two arrays

const arr1 = [12,3,12,13]
const arr2 = [1,4,2,5,3]
let newArr = []
newArr = newArr.concat(arr1,arr2)

// console.log(newArr)

const newSet = new Set([...newArr])
console.log(newSet);
