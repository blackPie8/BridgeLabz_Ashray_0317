// Sorting Arrays


// using in-built functions

const arr = [56,35,34,45,12,33]
let n = arr.length
arr.sort((a,b)=>a-b) // Ascending

console.log(`Ascending Order -> ${arr}`)

arr.sort((a,b)=>b-a) // Descending

console.log(`Descending Order -> ${arr}`)


// Bubble Sort

for(let i = 0;i < n-1;i++){
    for(let j = 0;j < n-i-1;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]=temp
        }
    }
}

console.log(arr);
