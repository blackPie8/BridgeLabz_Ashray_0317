// Shuffle an array of strings

function shuffleStr(arr){
    for(let i = arr.length - 1;i > 0;i--){

        const j = Math.floor(Math.random() * (i+1));      // semi-colon is necessary here
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
}

let arr = ['1', '2', '3', '4', '5']

console.log(shuffleStr(arr))