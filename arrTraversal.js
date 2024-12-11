// Traversal in array

// 1) for-loop

let arr = [0,1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
// }

// 2) for-of loop

// for (let element of arr) {
//      console.log(element);
// }

// 3) for-each method

// arr.forEach((val)=>console.log(val))


// 4) for-in loop

// for(const i in arr){
//     console.log(arr[i]);
// }

// 5) map

// arr.map((val)=>console.log(val))


// 6) while loop

// let i = 0
// while(i<arr.length){
//     console.log(arr[i++]);
// }


// 7) do-while loop

// let i = 0
// do{
//     console.log(arr[i])
//     i++
// }while(i<arr.length)


// 8) Higher Order Methods(filter)

// arr.filter((val)=>console.log(val)
// )


//  9) reduce

// arr.reduce((acc,val)=>{
//     // console.log(acc);
//     console.log(val);
    
// },1)


// 10) Map DS

// let map = new Map()

for(let i = 0;i < arr.length;i++){
    map.set(i,arr[i])
}

console.log(map);
