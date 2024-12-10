// Intersection of two arrays

const arr1 = [1,2,5,3,7]
const arr2 = [5,9,4,2,7]

let newArr = arr1.filter((val)=>arr2.includes(val))
console.log(newArr);
