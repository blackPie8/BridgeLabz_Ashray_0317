// sum of num in array

function calSum(array){
    let n = arr.length
    let sum = 0
    for(let i = 0;i < n;i++){
        sum += array[i]
    }
    console.log(`Sum of array elements -> ${sum}`);
    
}

const arr = [12,13,18,4,6]
calSum(arr)