// second largest w/a sorting

const arr = [12,3,4,6,2,6,9,2]

// const newArr = [...new Set(arr)]   

let largest = arr[0]
let secLargest = -Infinity

for(let i = 1;i < arr.length;i++){
    if(arr[i] > largest){
        secLargest = largest
        largest = arr[i]
    }
    else if(arr[i] > secLargest && arr[i] !== largest){
        secLargest = arr[i]
    }
}

console.log(`Largest - ${largest} and Second Largest - ${secLargest}`);
