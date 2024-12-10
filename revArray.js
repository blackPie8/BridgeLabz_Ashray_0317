// Reverse an array

const arr = [1,4,6,7,3]
let revArr = []
for(const i of arr){
    revArr.unshift(i)
}
console.log(revArr);

// for loop

let revArr2 = []
for(let i = arr.length-1;i >= 0;i--){
    revArr2.push(arr[i])
}
console.log(revArr2);
