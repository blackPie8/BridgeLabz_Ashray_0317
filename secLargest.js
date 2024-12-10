const arr = [23,34,12,43,12,6,21]

// second Largest

const newArr = [...arr].sort((a,b)=>b-a)
console.log(`Second largest num is -> ${arr[1]}`);
let n = arr.length
// let temp = 0

// Bubble Sort
for(let i = 0;i < n-1;i++){
    for(let j = 0;j < n-i-1;j++){
        if(arr[j]>arr[j+1]){
            // temp = arr[j]
            // arr[j] = arr[j+1]
            // arr[j+1]=temp
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
console.log(arr);


// check if an array is sorted

for(let i = 0;i < n;i++){
    if(arr[i]>arr[i+1]){
        console.log("Not Sorted in Ascending order");
        break
    }
}
