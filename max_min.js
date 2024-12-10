// max min w/a in-built fn

const arr = [1,24,5,23,7,23,5,12]

let min = arr[0]
let max = arr[0]

for(const i of arr){
    if(i>max)
        max = i
    if(i<min) 
        min = i
}
console.log(max);
console.log(min);

// with fn

// let min = Math.min(...arr)
// let max = Math.max(...arr)
// console.log(max);
// console.log(min);

