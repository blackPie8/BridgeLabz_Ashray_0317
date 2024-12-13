// sum of numbers received in a comma delimited string

let str = "1,2,3,4,5"

function sumOfStr(string){
    let strArr = string.split(",")
    let sum = 0
    for(let i = 0;i < strArr.length;i++){
        sum += Number(strArr[i])
    }
    return sum
}

console.log(sumOfStr(str))
