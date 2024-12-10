// remove duplicates from an array

const arr = [2,34,23,12,21,23,21,123,23]

const newArr = [...new Set(arr)]
console.log(newArr);

// w/a sets or inbuilt-fn's

function remDup(arr){
    let n = arr.length
    const uiqArr = []
    for(let i  = 0;i < n;i++){
        let isDuplicates = false
        for(let j = 0;j < uiqArr.length;j++){
            if(arr[i]===uiqArr[j]){
                isDuplicates = true
                break
            }
        }
        if(!isDuplicates){
            uiqArr.push(arr[i])
        }
    }
    return uiqArr
}

let newArr2 = remDup(arr)
console.log(newArr2);
