// Deletion in Array

// 1) pop()

// let arr = [1, 2, 3, 4]
// arr.pop()
// console.log(arr) // Output: [1, 2, 3]


// 2) shift()

// let arr = [1, 2, 3, 4]
// arr.shift()
// console.log(arr)


// 3) splice() -> Removes elements at any specific index and can also replace them with new elements

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 2)
// console.log(arr) // Output: [1, 4, 5]


// 4) filter() -> Returns a new array that contains only the elements that pass a test

// let arr = [1, 2, 3, 4, 3]
// let newArr = arr.filter(element => element !== 3)
// console.log(newArr) // Output: [1, 2, 4]


// 5) delete Operator -> Deletes an element at a specific index but does not change the length of the array

// let arr = [1, 2, 3, 4]
// delete arr[2]
// console.log(arr) // Output: [1, 2, <1 empty item>, 4]
// console.log(arr[2]) // undefined


// 6) slice() Non-mutating -> slice() does not directly delete elements, but it can be used to create a new array excluding elements at specific positions

// let arr = [1, 2, 3, 4]
// let newArr = arr.slice(1, 3)
// console.log(newArr) // Output: [2, 3]


// 7) Removing all elements -> To clear an array completely, you can set its length to 0

let arr = [1,2,3,4,5]
arr.length = 0
console.log(arr);
