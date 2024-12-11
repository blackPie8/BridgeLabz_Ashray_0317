// Insertion in Array

// 1) pop() - at the end of the array

// let arr = [1, 2, 3]
// arr.push(4)
// console.log(arr) // Output: [1, 2, 3, 4]


// 2) unshift() - insert at beginning

// let arr = [1, 2, 3]
// arr.unshift(0)
// console.log(arr) // Output: [0, 1, 2, 3]


// 3) splice() - insert at specific pos

// let arr = [1, 2, 5]
// arr.splice(2,0,3,4)
// console.log(arr);


// 4) ... Spread Operator

// let arr = [1, 2, 4]

// let newArr = [...arr.slice(0,2),3,...arr.slice(2)]
// console.log(newArr);


// 5) Manual Assignment

// let arr = [1, 2, 4]
// for(let i = arr.length;i > 2;i--){
//     arr[i]=arr[i-1]
// }
// arr[2] = 3
// console.log(arr);

// 6) concat() method

let arr = [1,2,4]
let newArr = arr.slice(0,2).concat(3,arr.slice(2))
console.log(newArr);
