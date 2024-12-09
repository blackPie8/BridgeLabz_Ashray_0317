const arr = [5, -1, 8, -3, 7];

// const max = Math.max(...arr);
// const min = Math.min(...arr);
// console.log(min);
// console.log(max);

// const sum = arr.reduce((acc,val)=>acc+val,0)
// console.log(sum);



// let max = arr[0]
// let min = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }
// console.log(max);
// console.log(min);


// negative elements inside new array

let negArr = []
let num = 0
for(let i = 0;i<arr.length;i++){
    if(arr[i] < num){
        negArr.push(arr[i])
    }
}
console.log(negArr);

