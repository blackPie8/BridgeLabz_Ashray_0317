// Avg of array elements

const arr = [11,20,13,45,23]

function avgOfArr(array){
    let n = array.length
    let sum = 0
    for(let i = 0;i < n;i++){
        sum += array[i]
    }
    let avg = sum/n
    console.log(`Avg of array elements -> ${avg.toFixed(2)}`);
    
}

avgOfArr(arr)